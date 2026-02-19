import { Carrera } from '../entities/carrera.entity';
import { Asignatura } from '../entities/asignatura.entity';
import { PlanEstudio } from '../entities/plan-estudio.entity';
import { Matricula } from '../entities/matricula.entity';
import { CreateMatriculaDto } from '../../application/dtos/create-matricula.dto';
import { UpdateMatriculaDto } from '../../application/dtos/update-matricula.dto';

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

    // Matrículas
    createMatricula(dto: CreateMatriculaDto): Promise<Matricula>;
    findAllMatriculas(): Promise<Matricula[]>;
    findMatriculaById(id: string): Promise<Matricula>;
    findMatriculasByEstudiante(estudiante_id: string): Promise<Matricula[]>;
    findMatriculasByCarrera(carrera_id: string): Promise<Matricula[]>;
    updateMatricula(id: string, dto: UpdateMatriculaDto): Promise<Matricula>;
    removeMatricula(id: string): Promise<void>;
}
