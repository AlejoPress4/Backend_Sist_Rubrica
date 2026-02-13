import { Carrera } from '../entities/carrera.entity';
import { Asignatura } from '../entities/asignatura.entity';
import { PlanEstudio } from '../entities/plan-estudio.entity';

export interface IAcademicService {
    // Carreras
    createCarrera(data: Partial<Carrera>): Promise<Carrera>;
    findAllCarreras(): Promise<Carrera[]>;
    findCarreraById(id: string): Promise<Carrera>;

    // Asignaturas
    createAsignatura(data: Partial<Asignatura>): Promise<Asignatura>;
    findAllAsignaturas(): Promise<Asignatura[]>;
    findAsignaturaById(id: string): Promise<Asignatura>;

    // Planes de Estudio
    createPlanEstudio(data: Partial<PlanEstudio>): Promise<PlanEstudio>;
    findAllPlanesEstudio(): Promise<PlanEstudio[]>;
}
