import type { Request } from 'express';
import { GruposService } from '../../application/services/grupos.service';
import { CreateGrupoDto } from '../../application/dtos/create-grupo.dto';
import { UpdateGrupoDto } from '../../application/dtos/update-grupo.dto';
import { AsignarDocenteDto } from '../../application/dtos/asignar-docente.dto';
import { ApiResponseDto } from '../../../common/dtos/api-response.dto';
export declare class GruposController {
    private readonly gruposService;
    constructor(gruposService: GruposService);
    create(dto: CreateGrupoDto): Promise<ApiResponseDto<import("../../domain/entities/grupo.entity").Grupo>>;
    findAll(semestreId?: string, docenteId?: string): Promise<ApiResponseDto<import("../../domain/entities/grupo.entity").Grupo[]>>;
    misGrupos(req: Request): Promise<ApiResponseDto<import("../../domain/entities/grupo.entity").Grupo[]>>;
    findById(id: string): Promise<ApiResponseDto<import("../../domain/entities/grupo.entity").Grupo>>;
    update(id: string, dto: UpdateGrupoDto): Promise<ApiResponseDto<import("../../domain/entities/grupo.entity").Grupo>>;
    asignarDocente(id: string, dto: AsignarDocenteDto): Promise<ApiResponseDto<import("../../domain/entities/grupo.entity").Grupo>>;
    quitarDocente(id: string, docenteId: number): Promise<ApiResponseDto<import("../../domain/entities/grupo.entity").Grupo>>;
    remove(id: string): Promise<ApiResponseDto<null>>;
}
