import { PlanEstudio } from './plan-estudio.entity';
import { Matricula } from './matricula.entity';
export declare class Carrera {
    id: string;
    nombre: string;
    codigo: string;
    descripcion: string;
    planes: PlanEstudio[];
    matriculas: Matricula[];
    created_at: Date;
    updated_at: Date;
}
