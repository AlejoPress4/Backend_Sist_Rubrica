import { PlanEstudioService } from '../../application/services/plan-estudio.service';
import { CreatePlanEstudioDto } from '../../application/dtos/create-plan-estudio.dto';
import { AgregarAsignaturaAlPlanDto } from '../../application/dtos/agregar-asignatura.dto';
import { ApiResponseDto } from '../../../common/dtos/api-response.dto';
export declare class PlanEstudioController {
    private readonly planService;
    constructor(planService: PlanEstudioService);
    create(dto: CreatePlanEstudioDto): Promise<ApiResponseDto<import("../../domain/entities/plan-estudio.entity").PlanEstudio>>;
    findAll(carreraId?: string): Promise<ApiResponseDto<import("../../domain/entities/plan-estudio.entity").PlanEstudio[]>>;
    findVigente(carreraId: string): Promise<ApiResponseDto<import("../../domain/entities/plan-estudio.entity").PlanEstudio | null>>;
    findById(id: string): Promise<ApiResponseDto<import("../../domain/entities/plan-estudio.entity").PlanEstudio>>;
    agregarAsignatura(id: string, dto: AgregarAsignaturaAlPlanDto): Promise<ApiResponseDto<import("../../domain/entities/plan-asignatura.entity").PlanAsignatura>>;
    removerAsignatura(id: string, asignaturaId: string): Promise<ApiResponseDto<null>>;
    publicar(id: string): Promise<ApiResponseDto<import("../../domain/entities/plan-estudio.entity").PlanEstudio>>;
    remove(id: string): Promise<ApiResponseDto<null>>;
}
