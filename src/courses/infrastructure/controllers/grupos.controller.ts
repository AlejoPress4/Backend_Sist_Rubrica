import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    ParseUUIDPipe,
    Patch,
    Post,
    Query,
    Req,
    UseGuards,
} from '@nestjs/common';
import type { Request } from 'express';
import { GruposService } from '../../application/services/grupos.service';
import { CreateGrupoDto } from '../../application/dtos/create-grupo.dto';
import { UpdateGrupoDto } from '../../application/dtos/update-grupo.dto';
import { AsignarDocenteDto } from '../../application/dtos/asignar-docente.dto';
import { ApiResponseDto } from '../../../common/dtos/api-response.dto';
import { JwtAuthGuard } from '../../../auth/infrastructure/guards/jwt-auth.guard';
import { RolesGuard } from '../../../auth/infrastructure/guards/roles.guard';
import { Roles } from '../../../common/decorators/roles.decorator';
import { Rol } from '../../../common/enums';

@Controller('courses/grupos')
@UseGuards(JwtAuthGuard, RolesGuard)
export class GruposController {
    constructor(private readonly gruposService: GruposService) { }

    @Post()
    @Roles(Rol.ADMIN)
    async create(@Body() dto: CreateGrupoDto) {
        const data = await this.gruposService.create(dto);
        return ApiResponseDto.created(data, 'Grupo creado exitosamente');
    }

    @Get()
    @Roles(Rol.ADMIN, Rol.DOCENTE)
    async findAll(
        @Query('semestreId') semestreId?: string,
        @Query('docenteId') docenteId?: string,
    ) {
        if (docenteId) {
            return ApiResponseDto.success(await this.gruposService.findByDocente(+docenteId));
        }
        if (semestreId) {
            return ApiResponseDto.success(await this.gruposService.findBySemestre(semestreId));
        }
        return ApiResponseDto.success(await this.gruposService.findAll());
    }

    @Get('mis-grupos')
    @Roles(Rol.DOCENTE)
    async misGrupos(@Req() req: Request) {
        const user = req.user as { docenteId?: number };
        if (!user.docenteId) {
            return ApiResponseDto.success([]);
        }
        const data = await this.gruposService.findByDocente(user.docenteId);
        return ApiResponseDto.success(data);
    }

    @Get(':id')
    @Roles(Rol.ADMIN, Rol.DOCENTE, Rol.ESTUDIANTE)
    async findById(@Param('id', ParseUUIDPipe) id: string) {
        const data = await this.gruposService.findById(id);
        return ApiResponseDto.success(data);
    }

    @Patch(':id')
    @Roles(Rol.ADMIN)
    async update(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() dto: UpdateGrupoDto,
    ) {
        const data = await this.gruposService.update(id, dto);
        return ApiResponseDto.success(data, 'Grupo actualizado exitosamente');
    }

    @Post(':id/docentes')
    @Roles(Rol.ADMIN)
    async asignarDocente(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() dto: AsignarDocenteDto,
    ) {
        const data = await this.gruposService.asignarDocente(id, dto);
        return ApiResponseDto.success(data, 'Docente asignado al grupo');
    }

    @Delete(':id/docentes/:docenteId')
    @Roles(Rol.ADMIN)
    async quitarDocente(
        @Param('id', ParseUUIDPipe) id: string,
        @Param('docenteId', ParseIntPipe) docenteId: number,
    ) {
        const data = await this.gruposService.quitarDocente(id, docenteId);
        return ApiResponseDto.success(data, 'Docente removido del grupo');
    }

    @Delete(':id')
    @Roles(Rol.ADMIN)
    async remove(@Param('id', ParseUUIDPipe) id: string) {
        await this.gruposService.remove(id);
        return ApiResponseDto.success(null, 'Grupo eliminado exitosamente');
    }
}
