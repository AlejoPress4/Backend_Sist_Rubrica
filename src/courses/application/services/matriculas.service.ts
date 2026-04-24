import {
    BadRequestException,
    ConflictException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Matricula } from '../../domain/entities/matricula.entity';
import { Inscripcion } from '../../domain/entities/inscripcion.entity';
import { Grupo } from '../../domain/entities/grupo.entity';
import { Estudiante } from '../../../users/domain/entities/estudiante.entity';
import { Semestre } from '../../../academic/domain/entities/semestre.entity';
import { Asignatura } from '../../../academic/domain/entities/asignatura.entity';
import { CreateMatriculaDto } from '../dtos/create-matricula.dto';
import { EstadoMatricula, EstadoSemestre } from '../../../common/enums';

@Injectable()
export class MatriculasService {
    constructor(
        @InjectRepository(Matricula)
        private readonly matriculaRepository: Repository<Matricula>,
        @InjectRepository(Inscripcion)
        private readonly inscripcionRepository: Repository<Inscripcion>,
        @InjectRepository(Grupo)
        private readonly grupoRepository: Repository<Grupo>,
        @InjectRepository(Estudiante)
        private readonly estudianteRepository: Repository<Estudiante>,
        @InjectRepository(Semestre)
        private readonly semestreRepository: Repository<Semestre>,
        @InjectRepository(Asignatura)
        private readonly asignaturaRepository: Repository<Asignatura>,
        private readonly dataSource: DataSource,
        private readonly eventEmitter: EventEmitter2,
    ) { }

    async matricular(dto: CreateMatriculaDto): Promise<Matricula[]> {
        const estudiante = await this.estudianteRepository.findOne({ where: { id: dto.estudiante_id } });
        if (!estudiante) {
            throw new NotFoundException(`Estudiante con ID ${dto.estudiante_id} no encontrado`);
        }

        const semestre = await this.semestreRepository.findOne({ where: { id: dto.semestre_id } });
        if (!semestre) {
            throw new NotFoundException(`Semestre con ID ${dto.semestre_id} no encontrado`);
        }
        if (semestre.estado !== EstadoSemestre.ACTIVO) {
            throw new BadRequestException('Solo se puede matricular en semestres ACTIVOS');
        }

        const asignaturas = await this.asignaturaRepository.find({
            where: dto.asignaturasIds.map((id) => ({ id })),
        });
        if (asignaturas.length !== dto.asignaturasIds.length) {
            throw new NotFoundException('Alguna asignatura indicada no existe');
        }

        const matriculasActivas = await this.matriculaRepository.find({
            where: {
                estudiante_id: dto.estudiante_id,
                semestre_id: dto.semestre_id,
                estado: EstadoMatricula.ACTIVA,
            },
            relations: ['asignatura'],
        });
        const creditosYaMatriculados = matriculasActivas.reduce(
            (acc, m) => acc + (m.asignatura?.creditos ?? 0),
            0,
        );
        const creditosNuevos = asignaturas.reduce((acc, a) => acc + a.creditos, 0);
        if (creditosYaMatriculados + creditosNuevos > estudiante.creditosMaximos) {
            throw new BadRequestException(
                `El estudiante excedería su máximo de créditos (${estudiante.creditosMaximos}). ` +
                `Ya matriculado: ${creditosYaMatriculados}, nuevo: ${creditosNuevos}.`,
            );
        }

        return this.dataSource.transaction(async (manager) => {
            const creadas: Matricula[] = [];
            for (const asignatura of asignaturas) {
                const existente = await manager.findOne(Matricula, {
                    where: {
                        estudiante_id: dto.estudiante_id,
                        asignatura_id: asignatura.id,
                        semestre_id: dto.semestre_id,
                        estado: EstadoMatricula.ACTIVA,
                    },
                });
                if (existente) {
                    throw new ConflictException(
                        `El estudiante ya está matriculado en la asignatura ${asignatura.codigo}`,
                    );
                }

                const matricula = manager.create(Matricula, {
                    estudiante_id: dto.estudiante_id,
                    asignatura_id: asignatura.id,
                    semestre_id: dto.semestre_id,
                    estado: EstadoMatricula.ACTIVA,
                });
                const saved = await manager.save(Matricula, matricula);
                creadas.push(saved);

                // Inscripción automática: si hay un único grupo de la asignatura en el semestre.
                const gruposCandidatos = await manager.find(Grupo, {
                    where: { asignatura_id: asignatura.id, semestre_id: dto.semestre_id },
                });
                if (gruposCandidatos.length === 1) {
                    const yaInscrito = await manager.findOne(Inscripcion, {
                        where: { estudiante_id: dto.estudiante_id, grupo_id: gruposCandidatos[0].id },
                    });
                    if (!yaInscrito) {
                        const inscripcion = manager.create(Inscripcion, {
                            estudiante_id: dto.estudiante_id,
                            grupo_id: gruposCandidatos[0].id,
                        });
                        await manager.save(Inscripcion, inscripcion);
                    }
                }
            }

            this.eventEmitter.emit('matricula.created', {
                estudianteId: dto.estudiante_id,
                semestreId: dto.semestre_id,
                asignaturas: asignaturas.map((a) => a.codigo),
            });

            return creadas;
        });
    }

    async findAll(): Promise<Matricula[]> {
        return this.matriculaRepository.find({ relations: ['estudiante', 'asignatura', 'semestre'] });
    }

    async findById(id: string): Promise<Matricula> {
        const matricula = await this.matriculaRepository.findOne({
            where: { id },
            relations: ['estudiante', 'asignatura', 'semestre'],
        });
        if (!matricula) {
            throw new NotFoundException(`Matrícula con ID ${id} no encontrada`);
        }
        return matricula;
    }

    async findByEstudiante(estudianteId: number): Promise<Matricula[]> {
        return this.matriculaRepository.find({
            where: { estudiante_id: estudianteId },
            relations: ['asignatura', 'semestre'],
        });
    }

    async cancelar(id: string): Promise<Matricula> {
        const matricula = await this.findById(id);
        if (matricula.estado === EstadoMatricula.CANCELADA) {
            throw new BadRequestException('La matrícula ya está CANCELADA');
        }
        if (matricula.semestre.estado !== EstadoSemestre.ACTIVO) {
            throw new BadRequestException(
                'Solo se pueden cancelar matrículas de semestres ACTIVOS',
            );
        }
        matricula.estado = EstadoMatricula.CANCELADA;
        return this.matriculaRepository.save(matricula);
    }
}
