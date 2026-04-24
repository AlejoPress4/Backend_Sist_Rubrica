import { Asignatura } from '../../../academic/domain/entities/asignatura.entity';
import { Rubrica } from '../../../rubrics/domain/entities/rubrica.entity';
import { CalificacionDetalle } from './calificacion-detalle.entity';
export declare class Evaluacion {
    id: string;
    nombre: string;
    descripcion: string;
    nota: number;
    peso: number;
    asignatura: Asignatura;
    asignatura_id: string;
    rubrica: Rubrica;
    rubrica_id: string;
    calificacionDetalles: CalificacionDetalle[];
    created_at: Date;
    updated_at: Date;
}
