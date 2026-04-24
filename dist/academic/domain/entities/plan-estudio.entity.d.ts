import { Carrera } from './carrera.entity';
import { PlanAsignatura } from './plan-asignatura.entity';
export declare class PlanEstudio {
    id: string;
    version: number;
    publicado: boolean;
    vigente: boolean;
    fechaPublicacion: Date | null;
    carrera: Carrera;
    carrera_id: string;
    asignaturas: PlanAsignatura[];
    creadoEn: Date;
    actualizadoEn: Date;
}
