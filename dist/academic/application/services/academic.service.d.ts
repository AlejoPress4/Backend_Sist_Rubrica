import { Repository } from 'typeorm';
import { Carrera } from '../../domain/entities/carrera.entity';
import { Asignatura } from '../../domain/entities/asignatura.entity';
import { PlanEstudio } from '../../domain/entities/plan-estudio.entity';
import { IAcademicService } from '../../domain/interfaces/academic-service.interface';
export declare class AcademicService implements IAcademicService {
    private readonly carreraRepository;
    private readonly asignaturaRepository;
    private readonly planEstudioRepository;
    constructor(carreraRepository: Repository<Carrera>, asignaturaRepository: Repository<Asignatura>, planEstudioRepository: Repository<PlanEstudio>);
    createCarrera(data: Partial<Carrera>): Promise<Carrera>;
    findAllCarreras(): Promise<Carrera[]>;
    findCarreraById(id: string): Promise<Carrera>;
    createAsignatura(data: Partial<Asignatura>): Promise<Asignatura>;
    findAllAsignaturas(): Promise<Asignatura[]>;
    findAsignaturaById(id: string): Promise<Asignatura>;
    createPlanEstudio(data: Partial<PlanEstudio>): Promise<PlanEstudio>;
    findAllPlanesEstudio(): Promise<PlanEstudio[]>;
}
