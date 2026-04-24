import { Grupo } from '../../../courses/domain/entities/grupo.entity';
import { Evaluacion } from '../../../scores/domain/entities/evaluacion.entity';
import { PlanAsignatura } from './plan-asignatura.entity';
export declare class Asignatura {
    id: string;
    nombre: string;
    codigo: string;
    descripcion: string;
    creditos: number;
    grupos: Grupo[];
    evaluaciones: Evaluacion[];
    planAsignaturas: PlanAsignatura[];
    creadoEn: Date;
    actualizadoEn: Date;
}
