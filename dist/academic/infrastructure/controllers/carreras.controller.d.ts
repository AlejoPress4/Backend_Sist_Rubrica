import { CarrerasService } from '../../application/services/carreras.service';
import { CreateCarreraDto } from '../../application/dtos/create-carrera.dto';
import { UpdateCarreraDto } from '../../application/dtos/update-carrera.dto';
import { ApiResponseDto } from '../../../common/dtos/api-response.dto';
export declare class CarrerasController {
    private readonly carrerasService;
    constructor(carrerasService: CarrerasService);
    create(dto: CreateCarreraDto): Promise<ApiResponseDto<import("../../domain/entities/carrera.entity").Carrera>>;
    findAll(): Promise<ApiResponseDto<import("../../domain/entities/carrera.entity").Carrera[]>>;
    findById(id: string): Promise<ApiResponseDto<import("../../domain/entities/carrera.entity").Carrera>>;
    update(id: string, dto: UpdateCarreraDto): Promise<ApiResponseDto<import("../../domain/entities/carrera.entity").Carrera>>;
    archivar(id: string): Promise<ApiResponseDto<import("../../domain/entities/carrera.entity").Carrera>>;
    remove(id: string): Promise<ApiResponseDto<null>>;
}
