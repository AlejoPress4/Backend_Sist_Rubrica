import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseUUIDPipe,
    Patch,
    Post,
    Query,
    UseGuards,
} from '@nestjs/common';
import { PlanEstudioService } from '../../application/services/plan-estudio.service';
import { CreatePlanEstudioDto } from '../../application/dtos/create-plan-estudio.dto';
import { AgregarAsignaturaAlPlanDto } from '../../application/dtos/agregar-asignatura.dto';
import { ApiResponseDto } from '../../../common/dtos/api-response.dto';
import { JwtAuthGuard } from '../../../auth/infrastructure/guards/jwt-auth.guard';
import { RolesGuard } from '../../../auth/infrastructure/guards/roles.guard';
import { Roles } from '../../../common/decorators/roles.decorator';
import { Rol } from '../../../common/enums';

@Controller('academic/planes')
@UseGuards(JwtAuthGuard, RolesGuard)
export class PlanEstudioController {
    constructor(private readonly planService: PlanEstudioService) { }

    @Post()
    @Roles(Rol.ADMIN)
    async create(@Body() dto: CreatePlanEstudioDto) {
        const data = await this.planService.create(dto);
        return ApiResponseDto.created(data, 'Plan de estudio creado (borrador)');
    }

    @Get()
    @Roles(Rol.ADMIN, Rol.DOCENTE, Rol.ESTUDIANTE)
    async findAll(@Query('carreraId') carreraId?: string) {
        const data = carreraId
            ? await this.planService.findByCarrera(carreraId)
            : await this.planService.findAll();
        return ApiResponseDto.success(data);
    }

    @Get('vigente')
    @Roles(Rol.ADMIN, Rol.DOCENTE, Rol.ESTUDIANTE)
    async findVigente(@Query('carreraId', ParseUUIDPipe) carreraId: string) {
        const data = await this.planService.findVigenteByCarrera(carreraId);
        return ApiResponseDto.success(data);
    }

    @Get(':id')
    @Roles(Rol.ADMIN, Rol.DOCENTE, Rol.ESTUDIANTE)
    async findById(@Param('id', ParseUUIDPipe) id: string) {
        const data = await this.planService.findById(id);
        return ApiResponseDto.success(data);
    }

    @Post(':id/asignaturas')
    @Roles(Rol.ADMIN)
    async agregarAsignatura(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() dto: AgregarAsignaturaAlPlanDto,
    ) {
        const data = await this.planService.agregarAsignatura(id, dto);
        return ApiResponseDto.created(data, 'Asignatura agregada al plan');
    }

    @Delete(':id/asignaturas/:asignaturaId')
    @Roles(Rol.ADMIN)
    async removerAsignatura(
        @Param('id', ParseUUIDPipe) id: string,
        @Param('asignaturaId', ParseUUIDPipe) asignaturaId: string,
    ) {
        await this.planService.removerAsignatura(id, asignaturaId);
        return ApiResponseDto.success(null, 'Asignatura removida del plan');
    }

    @Patch(':id/publicar')
    @Roles(Rol.ADMIN)
    async publicar(@Param('id', ParseUUIDPipe) id: string) {
        const data = await this.planService.publicar(id);
        return ApiResponseDto.success(data, 'Plan de estudio publicado y vigente');
    }

    @Delete(':id')
    @Roles(Rol.ADMIN)
    async remove(@Param('id', ParseUUIDPipe) id: string) {
        await this.planService.remove(id);
        return ApiResponseDto.success(null, 'Plan de estudio eliminado');
    }
}
