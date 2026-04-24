import { DataSource, Repository } from 'typeorm';
import { PlanEstudio } from '../../domain/entities/plan-estudio.entity';
import { PlanAsignatura } from '../../domain/entities/plan-asignatura.entity';
import { Asignatura } from '../../domain/entities/asignatura.entity';
import { Carrera } from '../../domain/entities/carrera.entity';
import { CreatePlanEstudioDto } from '../dtos/create-plan-estudio.dto';
import { AgregarAsignaturaAlPlanDto } from '../dtos/agregar-asignatura.dto';
export declare class PlanEstudioService {
    private readonly planRepository;
    private readonly planAsignaturaRepository;
    private readonly asignaturaRepository;
    private readonly carreraRepository;
    private readonly dataSource;
    constructor(planRepository: Repository<PlanEstudio>, planAsignaturaRepository: Repository<PlanAsignatura>, asignaturaRepository: Repository<Asignatura>, carreraRepository: Repository<Carrera>, dataSource: DataSource);
    create(dto: CreatePlanEstudioDto): Promise<PlanEstudio>;
    findAll(): Promise<PlanEstudio[]>;
    findById(id: string): Promise<PlanEstudio>;
    findByCarrera(carrera_id: string): Promise<PlanEstudio[]>;
    findVigenteByCarrera(carrera_id: string): Promise<PlanEstudio | null>;
    agregarAsignatura(planId: string, dto: AgregarAsignaturaAlPlanDto): Promise<PlanAsignatura>;
    removerAsignatura(planId: string, asignaturaId: string): Promise<void>;
    publicar(id: string): Promise<PlanEstudio>;
    remove(id: string): Promise<void>;
}
