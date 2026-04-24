import {
    BadRequestException,
    ConflictException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Grupo } from '../../domain/entities/grupo.entity';
import { Docente } from '../../../users/domain/entities/docente.entity';
import { Asignatura } from '../../../academic/domain/entities/asignatura.entity';
import { Semestre } from '../../../academic/domain/entities/semestre.entity';
import { CreateGrupoDto } from '../dtos/create-grupo.dto';
import { UpdateGrupoDto } from '../dtos/update-grupo.dto';
import { AsignarDocenteDto } from '../dtos/asignar-docente.dto';
import { EstadoSemestre } from '../../../common/enums';
import { CalificacionDetalle } from '../../../scores/domain/entities/calificacion-detalle.entity';

@Injectable()
export class GruposService {
    constructor(
        @InjectRepository(Grupo)
        private readonly grupoRepository: Repository<Grupo>,
        @InjectRepository(Docente)
        private readonly docenteRepository: Repository<Docente>,
        @InjectRepository(Asignatura)
        private readonly asignaturaRepository: Repository<Asignatura>,
        @InjectRepository(Semestre)
        private readonly semestreRepository: Repository<Semestre>,
        @InjectRepository(CalificacionDetalle)
        private readonly calificacionDetalleRepository: Repository<CalificacionDetalle>,
        private readonly eventEmitter: EventEmitter2,
    ) { }

    async create(dto: CreateGrupoDto): Promise<Grupo> {
        const semestre = await this.semestreRepository.findOne({ where: { id: dto.semestre_id } });
        if (!semestre) {
            throw new NotFoundException(`Semestre con ID ${dto.semestre_id} no encontrado`);
        }
        if (semestre.estado !== EstadoSemestre.ACTIVO) {
            throw new BadRequestException('Solo se pueden crear grupos en semestres ACTIVOS');
        }

        const asignatura = await this.asignaturaRepository.findOne({ where: { id: dto.asignatura_id } });
        if (!asignatura) {
            throw new NotFoundException(`Asignatura con ID ${dto.asignatura_id} no encontrada`);
        }

        const docentes = await this.docenteRepository.find({
            where: dto.docentesIds.map((id) => ({ id })),
        });
        if (docentes.length !== dto.docentesIds.length) {
            throw new NotFoundException('Alguno de los docentes indicados no existe');
        }

        const grupo = this.grupoRepository.create({
            codigo: dto.codigo,
            nombre: dto.nombre,
            asignatura_id: dto.asignatura_id,
            semestre_id: dto.semestre_id,
            docentes,
        });
        const saved = await this.grupoRepository.save(grupo);

        docentes.forEach((docente) => {
            this.eventEmitter.emit('grupo.docente.asignado', {
                grupoId: saved.id,
                docenteId: docente.id,
            });
        });

        return saved;
    }

    async findAll(): Promise<Grupo[]> {
        return this.grupoRepository.find({ relations: ['docentes', 'asignatura', 'semestre'] });
    }

    async findById(id: string): Promise<Grupo> {
        const grupo = await this.grupoRepository.findOne({
            where: { id },
            relations: ['docentes', 'asignatura', 'semestre', 'inscripciones'],
        });
        if (!grupo) {
            throw new NotFoundException(`Grupo con ID ${id} no encontrado`);
        }
        return grupo;
    }

    async findByDocente(docenteId: number): Promise<Grupo[]> {
        return this.grupoRepository
            .createQueryBuilder('grupo')
            .innerJoinAndSelect('grupo.docentes', 'docente', 'docente.id = :docenteId', { docenteId })
            .leftJoinAndSelect('grupo.asignatura', 'asignatura')
            .leftJoinAndSelect('grupo.semestre', 'semestre')
            .getMany();
    }

    async findBySemestre(semestreId: string): Promise<Grupo[]> {
        return this.grupoRepository.find({
            where: { semestre_id: semestreId },
            relations: ['docentes', 'asignatura'],
        });
    }

    async update(id: string, dto: UpdateGrupoDto): Promise<Grupo> {
        const grupo = await this.findById(id);
        Object.assign(grupo, dto);
        return this.grupoRepository.save(grupo);
    }

    async asignarDocente(grupoId: string, dto: AsignarDocenteDto): Promise<Grupo> {
        const grupo = await this.findById(grupoId);
        if (grupo.semestre.estado !== EstadoSemestre.ACTIVO) {
            throw new BadRequestException('Solo se puede asignar docentes a grupos en semestre ACTIVO');
        }

        const yaAsignado = grupo.docentes.some((d) => d.id === dto.docenteId);
        if (yaAsignado) {
            throw new ConflictException('El docente ya está asignado a este grupo');
        }

        const docente = await this.docenteRepository.findOne({ where: { id: dto.docenteId } });
        if (!docente) {
            throw new NotFoundException(`Docente con ID ${dto.docenteId} no encontrado`);
        }

        grupo.docentes.push(docente);
        const saved = await this.grupoRepository.save(grupo);

        this.eventEmitter.emit('grupo.docente.asignado', {
            grupoId: saved.id,
            docenteId: docente.id,
        });

        return saved;
    }

    async quitarDocente(grupoId: string, docenteId: number): Promise<Grupo> {
        const grupo = await this.findById(grupoId);

        const calificaciones = await this.calificacionDetalleRepository
            .createQueryBuilder('detalle')
            .innerJoin('detalle.evaluacion', 'evaluacion')
            .where('evaluacion.grupo_id = :grupoId', { grupoId })
            .getCount()
            .catch(() => 0);

        if (calificaciones > 0) {
            throw new ConflictException(
                'No se puede quitar el docente: ya existen calificaciones en el grupo',
            );
        }

        grupo.docentes = grupo.docentes.filter((d) => d.id !== docenteId);
        return this.grupoRepository.save(grupo);
    }

    async remove(id: string): Promise<void> {
        const grupo = await this.findById(id);
        await this.grupoRepository.remove(grupo);
    }
}
