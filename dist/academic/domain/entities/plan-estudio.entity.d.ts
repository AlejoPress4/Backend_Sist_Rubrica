import { Carrera } from './carrera.entity';
import { Asignatura } from './asignatura.entity';
export declare class PlanEstudio {
    id: string;
    nombre: string;
    anio: number;
    carrera: Carrera;
    carrera_id: string;
    asignatura: Asignatura;
    asignatura_id: string;
    created_at: Date;
    updated_at: Date;
}
