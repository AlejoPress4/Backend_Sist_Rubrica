import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Grupo } from '../../domain/entities/grupo.entity';
import { Inscripcion } from '../../domain/entities/inscripcion.entity';
import { Semestre } from '../../domain/entities/semestre.entity';
import { ICoursesService } from '../../domain/interfaces/courses-service.interface';

@Injectable()
export class CoursesService implements ICoursesService {
    constructor(
        @InjectRepository(Semestre)
        private readonly semestreRepository: Repository<Semestre>,
        @InjectRepository(Grupo)
        private readonly grupoRepository: Repository<Grupo>,
        @InjectRepository(Inscripcion)
        private readonly inscripcionRepository: Repository<Inscripcion>,
    ) { }

    // --- Semestres ---

    async createSemestre(data: Partial<Semestre>): Promise<Semestre> {
        // TODO: Implement
        throw new Error('Method not implemented.');
    }

    async findAllSemestres(): Promise<Semestre[]> {
        // TODO: Implement
        throw new Error('Method not implemented.');
    }

    // --- Grupos ---

    async createGrupo(data: Partial<Grupo>): Promise<Grupo> {
        // TODO: Implement
        throw new Error('Method not implemented.');
    }

    async findAllGrupos(): Promise<Grupo[]> {
        // TODO: Implement
        throw new Error('Method not implemented.');
    }

    async findGrupoById(id: string): Promise<Grupo> {
        // TODO: Implement
        throw new Error('Method not implemented.');
    }

    // --- Inscripciones ---

    async createInscripcion(data: Partial<Inscripcion>): Promise<Inscripcion> {
        // TODO: Implement
        throw new Error('Method not implemented.');
    }

    async findInscripcionesByGrupo(grupo_id: string): Promise<Inscripcion[]> {
        // TODO: Implement
        throw new Error('Method not implemented.');
    }
}
