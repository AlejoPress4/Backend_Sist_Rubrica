import { Evaluacion } from '../entities/evaluacion.entity';
import { Nota } from '../entities/nota.entity';
import { CalificacionDetalle } from '../entities/calificacion-detalle.entity';
export interface IScoresService {
    createEvaluacion(data: Partial<Evaluacion>): Promise<Evaluacion>;
    findAllEvaluaciones(): Promise<Evaluacion[]>;
    findEvaluacionById(id: string): Promise<Evaluacion>;
    createNota(data: Partial<Nota>): Promise<Nota>;
    findNotasByEvaluacion(evaluacionId: string): Promise<Nota[]>;
    createCalificacionDetalle(data: Partial<CalificacionDetalle>): Promise<CalificacionDetalle>;
    findDetallesByNota(notaId: string): Promise<CalificacionDetalle[]>;
}
