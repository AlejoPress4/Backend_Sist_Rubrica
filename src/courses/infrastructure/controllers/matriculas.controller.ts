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
    UseGuards,
} from '@nestjs/common';
import { MatriculasService } from '../../application/services/matriculas.service';
import { InscripcionesService } from '../../application/services/inscripciones.service';
import { CreateMatriculaDto } from '../../application/dtos/create-matricula.dto';
import { CreateInscripcionDto } from '../../application/dtos/create-inscripcion.dto';
import { ApiResponseDto } from '../../../common/dtos/api-response.dto';
import { JwtAuthGuard } from '../../../auth/infrastructure/guards/jwt-auth.guard';
import { RolesGuard } from '../../../auth/infrastructure/guards/roles.guard';
import { Roles } from '../../../common/decorators/roles.decorator';
import { Rol } from '../../../common/enums';

@Controller('courses')
@UseGuards(JwtAuthGuard, RolesGuard)
export class MatriculasController {
    constructor(
        private readonly matriculasService: MatriculasService,
        private readonly inscripcionesService: InscripcionesService,
    ) { }

    // ==================== Matrículas ====================

    @Post('matriculas')
    @Roles(Rol.ADMIN)
    async matricular(@Body() dto: CreateMatriculaDto) {
        const data = await this.matriculasService.matricular(dto);
        return ApiResponseDto.created(data, 'Matrícula(s) creada(s) exitosamente');
    }

    @Get('matriculas')
    @Roles(Rol.ADMIN)
    async findAllMatriculas(@Query('estudianteId') estudianteId?: string) {
        if (estudianteId) {
            return ApiResponseDto.success(
                await this.matriculasService.findByEstudiante(+estudianteId),
            );
        }
        return ApiResponseDto.success(await this.matriculasService.findAll());
    }

    @Get('matriculas/:id')
    @Roles(Rol.ADMIN, Rol.ESTUDIANTE)
    async findMatriculaById(@Param('id', ParseUUIDPipe) id: string) {
        const data = await this.matriculasService.findById(id);
        return ApiResponseDto.success(data);
    }

    @Get('estudiantes/:estudianteId/matriculas')
    @Roles(Rol.ADMIN, Rol.ESTUDIANTE)
    async findByEstudiante(@Param('estudianteId', ParseIntPipe) estudianteId: number) {
        const data = await this.matriculasService.findByEstudiante(estudianteId);
        return ApiResponseDto.success(data);
    }

    @Patch('matriculas/:id/cancelar')
    @Roles(Rol.ADMIN)
    async cancelar(@Param('id', ParseUUIDPipe) id: string) {
        const data = await this.matriculasService.cancelar(id);
        return ApiResponseDto.success(data, 'Matrícula cancelada');
    }

    // ==================== Inscripciones ====================

    @Post('inscripciones')
    @Roles(Rol.ADMIN, Rol.DOCENTE)
    async createInscripcion(@Body() dto: CreateInscripcionDto) {
        const data = await this.inscripcionesService.create(dto);
        return ApiResponseDto.created(data, 'Inscripción creada exitosamente');
    }

    @Get('inscripciones')
    @Roles(Rol.ADMIN, Rol.DOCENTE)
    async findAllInscripciones() {
        return ApiResponseDto.success(await this.inscripcionesService.findAll());
    }

    @Get('inscripciones/:id')
    @Roles(Rol.ADMIN, Rol.DOCENTE, Rol.ESTUDIANTE)
    async findInscripcionById(@Param('id', ParseUUIDPipe) id: string) {
        return ApiResponseDto.success(await this.inscripcionesService.findById(id));
    }

    @Get('grupos/:grupoId/inscripciones')
    @Roles(Rol.ADMIN, Rol.DOCENTE)
    async findByGrupo(@Param('grupoId', ParseUUIDPipe) grupoId: string) {
        return ApiResponseDto.success(await this.inscripcionesService.findByGrupo(grupoId));
    }

    @Get('estudiantes/:estudianteId/inscripciones')
    @Roles(Rol.ADMIN, Rol.ESTUDIANTE)
    async findInscripcionesByEstudiante(@Param('estudianteId', ParseIntPipe) estudianteId: number) {
        return ApiResponseDto.success(await this.inscripcionesService.findByEstudiante(estudianteId));
    }

    @Delete('inscripciones/:id')
    @Roles(Rol.ADMIN)
    async removeInscripcion(@Param('id', ParseUUIDPipe) id: string) {
        await this.inscripcionesService.remove(id);
        return ApiResponseDto.success(null, 'Inscripción eliminada exitosamente');
    }
}
