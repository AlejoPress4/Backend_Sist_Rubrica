import { RubricsService } from '../../application/services/rubrics.service';
import { CreateRubricaDto } from '../../application/dtos/create-rubrica.dto';
import { UpdateRubricaDto } from '../../application/dtos/update-rubrica.dto';
import { CreateCriterioDto } from '../../application/dtos/create-criterio.dto';
import { UpdateCriterioDto } from '../../application/dtos/update-criterio.dto';
import { CreateEscalaDto } from '../../application/dtos/create-escala.dto';
import { UpdateEscalaDto } from '../../application/dtos/update-escala.dto';
import { ApiResponseDto } from '../../../common/dtos/api-response.dto';
export declare class RubricsController {
    private readonly rubricsService;
    constructor(rubricsService: RubricsService);
    createRubrica(dto: CreateRubricaDto): Promise<ApiResponseDto<import("../../domain/entities/rubrica.entity").Rubrica>>;
    findAllRubricas(): Promise<ApiResponseDto<import("../../domain/entities/rubrica.entity").Rubrica[]>>;
    findRubricaById(id: string): Promise<ApiResponseDto<import("../../domain/entities/rubrica.entity").Rubrica | null>>;
    updateRubrica(id: string, dto: UpdateRubricaDto): Promise<ApiResponseDto<import("../../domain/entities/rubrica.entity").Rubrica>>;
    removeRubrica(id: string): Promise<ApiResponseDto<null>>;
    createCriterio(rubrica_id: string, dto: CreateCriterioDto): Promise<ApiResponseDto<import("../../domain/entities/criterio.entity").Criterio>>;
    findCriteriosByRubrica(rubrica_id: string): Promise<ApiResponseDto<import("../../domain/entities/criterio.entity").Criterio[]>>;
    findCriterioById(id: string): Promise<ApiResponseDto<import("../../domain/entities/criterio.entity").Criterio>>;
    updateCriterio(id: string, dto: UpdateCriterioDto): Promise<ApiResponseDto<import("../../domain/entities/criterio.entity").Criterio>>;
    removeCriterio(id: string): Promise<ApiResponseDto<null>>;
    createEscala(criterio_id: string, dto: CreateEscalaDto): Promise<ApiResponseDto<import("../../domain/entities/escala.entity").Escala>>;
    findEscalasByCriterio(criterio_id: string): Promise<ApiResponseDto<import("../../domain/entities/escala.entity").Escala[]>>;
    findEscalaById(id: string): Promise<ApiResponseDto<import("../../domain/entities/escala.entity").Escala>>;
    updateEscala(id: string, dto: UpdateEscalaDto): Promise<ApiResponseDto<import("../../domain/entities/escala.entity").Escala>>;
    removeEscala(id: string): Promise<ApiResponseDto<null>>;
}
