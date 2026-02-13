import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evaluacion } from '../../domain/entities/evaluacion.entity';
import { Nota } from '../../domain/entities/nota.entity';
import { CalificacionDetalle } from '../../domain/entities/calificacion-detalle.entity';
import { IScoresService } from '../../domain/interfaces/scores-service.interface';

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

    // --- Evaluaciones ---

    async createEvaluacion(data: Partial<Evaluacion>): Promise<Evaluacion> {
        // TODO: Implement
        throw new Error('Method not implemented.');
    }

    async findAllEvaluaciones(): Promise<Evaluacion[]> {
        // TODO: Implement
        throw new Error('Method not implemented.');
    }

    async findEvaluacionById(id: string): Promise<Evaluacion> {
        // TODO: Implement
        throw new Error('Method not implemented.');
    }

    // --- Notas ---

    async createNota(data: Partial<Nota>): Promise<Nota> {
        // TODO: Implement
        throw new Error('Method not implemented.');
    }

    async findNotasByEvaluacion(evaluacionId: string): Promise<Nota[]> {
        // TODO: Implement
        throw new Error('Method not implemented.');
    }

    // --- Calificación Detalle ---

    async createCalificacionDetalle(data: Partial<CalificacionDetalle>): Promise<CalificacionDetalle> {
        // TODO: Implement
        throw new Error('Method not implemented.');
    }

    async findDetallesByNota(notaId: string): Promise<CalificacionDetalle[]> {
        // TODO: Implement
        throw new Error('Method not implemented.');
    }
}
