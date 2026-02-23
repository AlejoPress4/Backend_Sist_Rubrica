import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carrera } from '../../domain/entities/carrera.entity';
import { Asignatura } from '../../domain/entities/asignatura.entity';
import { PlanEstudio } from '../../domain/entities/plan-estudio.entity';
import { Matricula } from '../../domain/entities/matricula.entity';
import { IAcademicService } from '../../domain/interfaces/academic-service.interface';
import { CreateCarreraDto } from '../dtos/create-carrera.dto';
import { UpdateCarreraDto } from '../dtos/update-carrera.dto';
import { CreateAsignaturaDto } from '../dtos/create-asignatura.dto';
import { UpdateAsignaturaDto } from '../dtos/update-asignatura.dto';
import { CreatePlanEstudioDto } from '../dtos/create-plan-estudio.dto';
import { UpdatePlanEstudioDto } from '../dtos/update-plan-estudio.dto';
import { CreateMatriculaDto } from '../dtos/create-matricula.dto';
import { UpdateMatriculaDto } from '../dtos/update-matricula.dto';

@Injectable()
export class AcademicService implements IAcademicService {
    constructor(
        @InjectRepository(Carrera)
        private readonly carreraRepository: Repository<Carrera>,
        @InjectRepository(Asignatura)
        private readonly asignaturaRepository: Repository<Asignatura>,
        @InjectRepository(PlanEstudio)
        private readonly planEstudioRepository: Repository<PlanEstudio>,
        @InjectRepository(Matricula)
        private readonly matriculaRepository: Repository<Matricula>,
    ) { }

    // ==================== Carreras ====================

    async createCarrera(dto: CreateCarreraDto): Promise<Carrera> {
        const carrera = this.carreraRepository.create(dto);
        return this.carreraRepository.save(carrera);
    }

    async findAllCarreras(): Promise<Carrera[]> {
        return this.carreraRepository.find();
    }

    async findCarreraById(id: string): Promise<Carrera> {
        const carrera = await this.carreraRepository.findOne({ where: { id } });
        if (!carrera) {
            throw new NotFoundException(`Carrera con ID ${id} no encontrada`);
        }
        return carrera;
    }

    async updateCarrera(id: string, dto: UpdateCarreraDto): Promise<Carrera> {
        const carrera = await this.findCarreraById(id);
        Object.assign(carrera, dto);
        return this.carreraRepository.save(carrera);
    }

    async removeCarrera(id: string): Promise<void> {
        const carrera = await this.findCarreraById(id);
        await this.carreraRepository.remove(carrera);
    }

    // ==================== Asignaturas ====================

    async createAsignatura(dto: CreateAsignaturaDto): Promise<Asignatura> {
        const asignatura = this.asignaturaRepository.create(dto);
        return this.asignaturaRepository.save(asignatura);
    }

    async findAllAsignaturas(): Promise<Asignatura[]> {
        return this.asignaturaRepository.find();
    }

    async findAsignaturaById(id: string): Promise<Asignatura> {
        const asignatura = await this.asignaturaRepository.findOne({ where: { id } });
        if (!asignatura) {
            throw new NotFoundException(`Asignatura con ID ${id} no encontrada`);
        }
        return asignatura;
    }

    async updateAsignatura(id: string, dto: UpdateAsignaturaDto): Promise<Asignatura> {
        const asignatura = await this.findAsignaturaById(id);
        Object.assign(asignatura, dto);
        return this.asignaturaRepository.save(asignatura);
    }

    async removeAsignatura(id: string): Promise<void> {
        const asignatura = await this.findAsignaturaById(id);
        await this.asignaturaRepository.remove(asignatura);
    }

    // ==================== Planes de Estudio ====================

    async createPlanEstudio(dto: CreatePlanEstudioDto): Promise<PlanEstudio> {
        const plan = this.planEstudioRepository.create(dto);
        return this.planEstudioRepository.save(plan);
    }

    async findAllPlanesEstudio(): Promise<PlanEstudio[]> {
        return this.planEstudioRepository.find();
    }

    async findPlanEstudioById(id: string): Promise<PlanEstudio> {
        const plan = await this.planEstudioRepository.findOne({ where: { id } });
        if (!plan) {
            throw new NotFoundException(`Plan de Estudio con ID ${id} no encontrado`);
        }
        return plan;
    }

    async findPlanesByCarrera(carrera_id: string): Promise<PlanEstudio[]> {
        return this.planEstudioRepository.find({ where: { carrera_id } });
    }

    async updatePlanEstudio(id: string, dto: UpdatePlanEstudioDto): Promise<PlanEstudio> {
        const plan = await this.findPlanEstudioById(id);
        Object.assign(plan, dto);
        return this.planEstudioRepository.save(plan);
    }

    async removePlanEstudio(id: string): Promise<void> {
        const plan = await this.findPlanEstudioById(id);
        await this.planEstudioRepository.remove(plan);
    }

    // ==================== Matrículas ====================

    async createMatricula(dto: CreateMatriculaDto): Promise<Matricula> {
        const matricula = this.matriculaRepository.create(dto);
        return this.matriculaRepository.save(matricula);
    }

    async findAllMatriculas(): Promise<Matricula[]> {
        return this.matriculaRepository.find();
    }

    async findMatriculaById(id: string): Promise<Matricula> {
        const matricula = await this.matriculaRepository.findOne({ where: { id } });
        if (!matricula) {
            throw new NotFoundException(`Matrícula con ID ${id} no encontrada`);
        }
        return matricula;
    }

    async findMatriculasByEstudiante(estudiante_id: number): Promise<Matricula[]> {
        return this.matriculaRepository.find({ where: { estudiante_id } });
    }

    async findMatriculasByCarrera(carrera_id: string): Promise<Matricula[]> {
        return this.matriculaRepository.find({ where: { carrera_id } });
    }

    async updateMatricula(id: string, dto: UpdateMatriculaDto): Promise<Matricula> {
        const matricula = await this.findMatriculaById(id);
        Object.assign(matricula, dto);
        return this.matriculaRepository.save(matricula);
    }

    async removeMatricula(id: string): Promise<void> {
        const matricula = await this.findMatriculaById(id);
        await this.matriculaRepository.remove(matricula);
    }
}
