import { Asignatura } from '../../../academic/domain/entities/asignatura.entity';
import { Rubrica } from '../../../rubrics/domain/entities/rubrica.entity';
export declare class Evaluacion {
    id: string;
    nombre: string;
    descripcion: string;
    asignatura: Asignatura;
    asignatura_id: string;
    rubrica: Rubrica;
    rubrica_id: string;
    created_at: Date;
    updated_at: Date;
}
