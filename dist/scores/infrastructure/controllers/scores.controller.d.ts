import { ScoresService } from '../../application/services/scores.service';
import { CreateEvaluacionDto } from '../../application/dtos/create-evaluacion.dto';
import { CreateNotaDto } from '../../application/dtos/create-nota.dto';
import { CreateCalificacionDetalleDto } from '../../application/dtos/create-calificacion-detalle.dto';
export declare class ScoresController {
    private readonly scoresService;
    constructor(scoresService: ScoresService);
    createEvaluacion(dto: CreateEvaluacionDto): Promise<void>;
    findAllEvaluaciones(): Promise<void>;
    findEvaluacionById(id: string): Promise<void>;
    createNota(dto: CreateNotaDto): Promise<void>;
    findNotasByEvaluacion(evaluacionId: string): Promise<void>;
    createCalificacionDetalle(dto: CreateCalificacionDetalleDto): Promise<void>;
    findDetallesByNota(notaId: string): Promise<void>;
}
