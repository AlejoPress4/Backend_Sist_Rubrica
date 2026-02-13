import { AcademicService } from '../../application/services/academic.service';
import { CreateCarreraDto } from '../../application/dtos/create-carrera.dto';
import { CreateAsignaturaDto } from '../../application/dtos/create-asignatura.dto';
import { CreatePlanEstudioDto } from '../../application/dtos/create-plan-estudio.dto';
export declare class AcademicController {
    private readonly academicService;
    constructor(academicService: AcademicService);
    createCarrera(dto: CreateCarreraDto): Promise<void>;
    findAllCarreras(): Promise<void>;
    findCarreraById(id: string): Promise<void>;
    createAsignatura(dto: CreateAsignaturaDto): Promise<void>;
    findAllAsignaturas(): Promise<void>;
    findAsignaturaById(id: string): Promise<void>;
    createPlanEstudio(dto: CreatePlanEstudioDto): Promise<void>;
    findAllPlanesEstudio(): Promise<void>;
}
