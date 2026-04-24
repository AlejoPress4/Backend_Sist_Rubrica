import { Escala } from '../../../rubrics/domain/entities/escala.entity';
import { Estudiante } from '../../../users/domain/entities/estudiante.entity';
import { Evaluacion } from './evaluacion.entity';
export declare class CalificacionDetalle {
    id: string;
    puntaje: number;
    comentario: string;
    escala: Escala;
    estudiante: Estudiante;
    evaluacion: Evaluacion;
    evaluacion_id: string;
    created_at: Date;
    updated_at: Date;
}
