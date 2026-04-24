import { AsignaturasService } from '../../application/services/asignaturas.service';
import { CreateAsignaturaDto } from '../../application/dtos/create-asignatura.dto';
import { UpdateAsignaturaDto } from '../../application/dtos/update-asignatura.dto';
import { ApiResponseDto } from '../../../common/dtos/api-response.dto';
export declare class AsignaturasController {
    private readonly asignaturasService;
    constructor(asignaturasService: AsignaturasService);
    create(dto: CreateAsignaturaDto): Promise<ApiResponseDto<import("../../domain/entities/asignatura.entity").Asignatura>>;
    findAll(): Promise<ApiResponseDto<import("../../domain/entities/asignatura.entity").Asignatura[]>>;
    findById(id: string): Promise<ApiResponseDto<import("../../domain/entities/asignatura.entity").Asignatura>>;
    update(id: string, dto: UpdateAsignaturaDto): Promise<ApiResponseDto<import("../../domain/entities/asignatura.entity").Asignatura>>;
    remove(id: string): Promise<ApiResponseDto<null>>;
}
