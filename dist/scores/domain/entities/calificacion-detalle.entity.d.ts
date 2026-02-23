import { Escala } from '../../../rubrics/domain/entities/escala.entity';
export declare class CalificacionDetalle {
    id: string;
    puntaje: number;
    comentario: string;
    escala: Escala;
    escala_id: string;
    created_at: Date;
    updated_at: Date;
}
