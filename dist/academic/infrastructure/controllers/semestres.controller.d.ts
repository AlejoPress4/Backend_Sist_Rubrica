import { SemestresService } from '../../application/services/semestres.service';
import { CreateSemestreDto } from '../../application/dtos/create-semestre.dto';
import { UpdateSemestreDto } from '../../application/dtos/update-semestre.dto';
import { ApiResponseDto } from '../../../common/dtos/api-response.dto';
export declare class SemestresController {
    private readonly semestresService;
    constructor(semestresService: SemestresService);
    create(dto: CreateSemestreDto): Promise<ApiResponseDto<import("../../domain/entities/semestre.entity").Semestre>>;
    findAll(carreraId?: string): Promise<ApiResponseDto<import("../../domain/entities/semestre.entity").Semestre[]>>;
    findById(id: string): Promise<ApiResponseDto<import("../../domain/entities/semestre.entity").Semestre>>;
    update(id: string, dto: UpdateSemestreDto): Promise<ApiResponseDto<import("../../domain/entities/semestre.entity").Semestre>>;
    cerrar(id: string): Promise<ApiResponseDto<import("../../domain/entities/semestre.entity").Semestre>>;
    remove(id: string): Promise<ApiResponseDto<null>>;
}
