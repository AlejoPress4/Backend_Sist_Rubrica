import { Inscripcion } from '../../../courses/domain/entities/inscripcion.entity';
import { Rubrica } from 'src/rubrics/domain/entities/rubrica.entity';
export declare class Nota {
    id: string;
    nota_final: number;
    observaciones: string;
    estudiante_id: number;
    inscripcion: Inscripcion;
    inscripcion_id: string;
    rubrica: Rubrica;
    rubrica_id: string;
    created_at: Date;
    updated_at: Date;
}
