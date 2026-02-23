import { Grupo } from '../../../courses/domain/entities/grupo.entity';
import { Evaluacion } from 'src/scores/domain/entities/evaluacion.entity';
import { PlanEstudio } from './plan-estudio.entity';
export declare class Asignatura {
    id: string;
    nombre: string;
    codigo: string;
    descripcion: string;
    creditos: number;
    grupos: Grupo[];
    evaluaciones: Evaluacion[];
    planes: PlanEstudio[];
    created_at: Date;
    updated_at: Date;
}
