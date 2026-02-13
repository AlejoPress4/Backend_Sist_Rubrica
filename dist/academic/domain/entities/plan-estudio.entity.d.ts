import { Carrera } from './carrera.entity';
import { Asignatura } from './asignatura.entity';
export declare class PlanEstudio {
    id: string;
    nombre: string;
    anio: number;
    carrera: Carrera;
    carreraId: string;
    asignatura: Asignatura;
    asignaturaId: string;
    createdAt: Date;
    updatedAt: Date;
}
