import { PlanEstudio } from './plan-estudio.entity';
import { Semestre } from './semestre.entity';
export declare class Carrera {
    id: string;
    codigo: string;
    nombre: string;
    descripcion: string;
    archivada: boolean;
    planes_estudio: PlanEstudio[];
    semestres: Semestre[];
    creadoEn: Date;
    actualizadoEn: Date;
}
