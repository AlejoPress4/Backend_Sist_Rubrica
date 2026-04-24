import {
    ConflictException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inscripcion } from '../../domain/entities/inscripcion.entity';
import { Grupo } from '../../domain/entities/grupo.entity';
import { Estudiante } from '../../../users/domain/entities/estudiante.entity';
import { CreateInscripcionDto } from '../dtos/create-inscripcion.dto';

@Injectable()
export class InscripcionesService {
    constructor(
        @InjectRepository(Inscripcion)
        private readonly inscripcionRepository: Repository<Inscripcion>,
        @InjectRepository(Grupo)
        private readonly grupoRepository: Repository<Grupo>,
        @InjectRepository(Estudiante)
        private readonly estudianteRepository: Repository<Estudiante>,
    ) { }

    async create(dto: CreateInscripcionDto): Promise<Inscripcion> {
        const estudiante = await this.estudianteRepository.findOne({ where: { id: dto.estudiante_id } });
        if (!estudiante) {
            throw new NotFoundException(`Estudiante con ID ${dto.estudiante_id} no encontrado`);
        }
        const grupo = await this.grupoRepository.findOne({ where: { id: dto.grupo_id } });
        if (!grupo) {
            throw new NotFoundException(`Grupo con ID ${dto.grupo_id} no encontrado`);
        }

        const existente = await this.inscripcionRepository.findOne({
            where: { estudiante_id: dto.estudiante_id, grupo_id: dto.grupo_id },
        });
        if (existente) {
            throw new ConflictException('El estudiante ya está inscrito en este grupo');
        }

        const inscripcion = this.inscripcionRepository.create({
            estudiante_id: dto.estudiante_id,
            grupo_id: dto.grupo_id,
        });
        return this.inscripcionRepository.save(inscripcion);
    }

    async findAll(): Promise<Inscripcion[]> {
        return this.inscripcionRepository.find({ relations: ['estudiante', 'grupo'] });
    }

    async findById(id: string): Promise<Inscripcion> {
        const inscripcion = await this.inscripcionRepository.findOne({
            where: { id },
            relations: ['estudiante', 'grupo'],
        });
        if (!inscripcion) {
            throw new NotFoundException(`Inscripción con ID ${id} no encontrada`);
        }
        return inscripcion;
    }

    async findByGrupo(grupoId: string): Promise<Inscripcion[]> {
        return this.inscripcionRepository.find({
            where: { grupo_id: grupoId },
            relations: ['estudiante'],
        });
    }

    async findByEstudiante(estudianteId: number): Promise<Inscripcion[]> {
        return this.inscripcionRepository.find({
            where: { estudiante_id: estudianteId },
            relations: ['grupo', 'grupo.asignatura', 'grupo.semestre'],
        });
    }

    async remove(id: string): Promise<void> {
        const inscripcion = await this.findById(id);
        await this.inscripcionRepository.remove(inscripcion);
    }
}
