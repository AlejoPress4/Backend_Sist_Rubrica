import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carrera } from '../../domain/entities/carrera.entity';
import { Asignatura } from '../../domain/entities/asignatura.entity';
import { PlanEstudio } from '../../domain/entities/plan-estudio.entity';
import { IAcademicService } from '../../domain/interfaces/academic-service.interface';

@Injectable()
export class AcademicService implements IAcademicService {
    constructor(
        @InjectRepository(Carrera)
        private readonly carreraRepository: Repository<Carrera>,
        @InjectRepository(Asignatura)
        private readonly asignaturaRepository: Repository<Asignatura>,
        @InjectRepository(PlanEstudio)
        private readonly planEstudioRepository: Repository<PlanEstudio>,
    ) { }

    // --- Carreras ---

    async createCarrera(data: Partial<Carrera>): Promise<Carrera> {
        // TODO: Implement
        throw new Error('Method not implemented.');
    }

    async findAllCarreras(): Promise<Carrera[]> {
        // TODO: Implement
        throw new Error('Method not implemented.');
    }

    async findCarreraById(id: string): Promise<Carrera> {
        // TODO: Implement
        throw new Error('Method not implemented.');
    }

    // --- Asignaturas ---

    async createAsignatura(data: Partial<Asignatura>): Promise<Asignatura> {
        // TODO: Implement
        throw new Error('Method not implemented.');
    }

    async findAllAsignaturas(): Promise<Asignatura[]> {
        // TODO: Implement
        throw new Error('Method not implemented.');
    }

    async findAsignaturaById(id: string): Promise<Asignatura> {
        // TODO: Implement
        throw new Error('Method not implemented.');
    }

    // --- Planes de Estudio ---

    async createPlanEstudio(data: Partial<PlanEstudio>): Promise<PlanEstudio> {
        // TODO: Implement
        throw new Error('Method not implemented.');
    }

    async findAllPlanesEstudio(): Promise<PlanEstudio[]> {
        // TODO: Implement
        throw new Error('Method not implemented.');
    }
}
