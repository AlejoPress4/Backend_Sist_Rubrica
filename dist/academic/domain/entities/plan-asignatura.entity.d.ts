import { PlanEstudio } from './plan-estudio.entity';
import { Asignatura } from './asignatura.entity';
export declare class PlanAsignatura {
    id: string;
    semestreSugerido: number;
    creditos: number;
    planEstudio: PlanEstudio;
    planEstudio_id: string;
    asignatura: Asignatura;
    asignatura_id: string;
}
