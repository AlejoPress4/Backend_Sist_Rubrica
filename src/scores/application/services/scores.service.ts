import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evaluacion } from '../../domain/entities/evaluacion.entity';
import { Nota } from '../../domain/entities/nota.entity';
import { CalificacionDetalle } from '../../domain/entities/calificacion-detalle.entity';
import { IScoresService } from '../../domain/interfaces/scores-service.interface';
import { CreateEvaluacionDto } from '../dtos/create-evaluacion.dto';
import { UpdateEvaluacionDto } from '../dtos/update-evaluacion.dto';
import { CreateNotaDto } from '../dtos/create-nota.dto';
import { UpdateNotaDto } from '../dtos/update-nota.dto';
import { CreateCalificacionDetalleDto } from '../dtos/create-calificacion-detalle.dto';
import { UpdateCalificacionDetalleDto } from '../dtos/update-calificacion-detalle.dto';

@Injectable()
export class ScoresService implements IScoresService {
    constructor(
        @InjectRepository(Evaluacion)
        private readonly evaluacionRepository: Repository<Evaluacion>,
        @InjectRepository(Nota)
        private readonly notaRepository: Repository<Nota>,
        @InjectRepository(CalificacionDetalle)
        private readonly calificacionDetalleRepository: Repository<CalificacionDetalle>,
    ) { }

    // ==================== Evaluaciones ====================

    async createEvaluacion(dto: CreateEvaluacionDto): Promise<Evaluacion> {
        const evaluacion = this.evaluacionRepository.create(dto);
        return this.evaluacionRepository.save(evaluacion);
    }

    async findAllEvaluaciones(): Promise<Evaluacion[]> {
        return this.evaluacionRepository.find();
    }

    async findEvaluacionById(id: string): Promise<Evaluacion> {
        const evaluacion = await this.evaluacionRepository.findOne({ where: { id } });
        if (!evaluacion) {
            throw new NotFoundException(`Evaluación con ID ${id} no encontrada`);
        }
        return evaluacion;
    }

    async findEvaluacionesByAsignatura(asignatura_id: string): Promise<Evaluacion[]> {
        return this.evaluacionRepository.find({ where: { asignatura_id } });
    }

    async findEvaluacionesByRubrica(rubrica_id: string): Promise<Evaluacion[]> {
        return this.evaluacionRepository.find({ where: { rubrica_id } });
    }

    async updateEvaluacion(id: string, dto: UpdateEvaluacionDto): Promise<Evaluacion> {
        const evaluacion = await this.findEvaluacionById(id);
        Object.assign(evaluacion, dto);
        return this.evaluacionRepository.save(evaluacion);
    }

    async removeEvaluacion(id: string): Promise<void> {
        const evaluacion = await this.findEvaluacionById(id);
        await this.evaluacionRepository.remove(evaluacion);
    }

    // ==================== Notas ====================

    async createNota(dto: CreateNotaDto): Promise<Nota> {
        const nota = this.notaRepository.create(dto);
        return this.notaRepository.save(nota);
    }

    async findAllNotas(): Promise<Nota[]> {
        return this.notaRepository.find();
    }

    async findNotaById(id: string): Promise<Nota> {
        const nota = await this.notaRepository.findOne({ where: { id } });
        if (!nota) {
            throw new NotFoundException(`Nota con ID ${id} no encontrada`);
        }
        return nota;
    }

    async findNotasByInscripcion(inscripcion_id: string): Promise<Nota[]> {
        return this.notaRepository.find({ where: { inscripcion_id } });
    }

    async findNotasByEstudiante(estudiante_id: number): Promise<Nota[]> {
        return this.notaRepository.find({ where: { estudiante_id } });
    }

    async updateNota(id: string, dto: UpdateNotaDto): Promise<Nota> {
        const nota = await this.findNotaById(id);
        Object.assign(nota, dto);
        return this.notaRepository.save(nota);
    }

    async removeNota(id: string): Promise<void> {
        const nota = await this.findNotaById(id);
        await this.notaRepository.remove(nota);
    }

    // ==================== Calificación Detalle ====================

    async createCalificacionDetalle(dto: CreateCalificacionDetalleDto): Promise<CalificacionDetalle> {
        const detalle = this.calificacionDetalleRepository.create(dto);
        return this.calificacionDetalleRepository.save(detalle);
    }

    async findAllDetalles(): Promise<CalificacionDetalle[]> {
        return this.calificacionDetalleRepository.find();
    }

    async findDetalleById(id: string): Promise<CalificacionDetalle> {
        const detalle = await this.calificacionDetalleRepository.findOne({ where: { id } });
        if (!detalle) {
            throw new NotFoundException(`Calificación Detalle con ID ${id} no encontrado`);
        }
        return detalle;
    }

    async updateCalificacionDetalle(id: string, dto: UpdateCalificacionDetalleDto): Promise<CalificacionDetalle> {
        const detalle = await this.findDetalleById(id);
        Object.assign(detalle, dto);
        return this.calificacionDetalleRepository.save(detalle);
    }

    async removeCalificacionDetalle(id: string): Promise<void> {
        const detalle = await this.findDetalleById(id);
        await this.calificacionDetalleRepository.remove(detalle);
    }
}
