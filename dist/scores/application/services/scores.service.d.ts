import { Repository } from 'typeorm';
import { Evaluacion } from '../../domain/entities/evaluacion.entity';
import { Nota } from '../../domain/entities/nota.entity';
import { CalificacionDetalle } from '../../domain/entities/calificacion-detalle.entity';
import { IScoresService } from '../../domain/interfaces/scores-service.interface';
export declare class ScoresService implements IScoresService {
    private readonly evaluacionRepository;
    private readonly notaRepository;
    private readonly calificacionDetalleRepository;
    constructor(evaluacionRepository: Repository<Evaluacion>, notaRepository: Repository<Nota>, calificacionDetalleRepository: Repository<CalificacionDetalle>);
    createEvaluacion(data: Partial<Evaluacion>): Promise<Evaluacion>;
    findAllEvaluaciones(): Promise<Evaluacion[]>;
    findEvaluacionById(id: string): Promise<Evaluacion>;
    createNota(data: Partial<Nota>): Promise<Nota>;
    findNotasByEvaluacion(evaluacionId: string): Promise<Nota[]>;
    createCalificacionDetalle(data: Partial<CalificacionDetalle>): Promise<CalificacionDetalle>;
    findDetallesByNota(notaId: string): Promise<CalificacionDetalle[]>;
}
