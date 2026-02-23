import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { CoursesService } from '../../application/services/courses.service';
import { CreateSemestreDto } from '../../application/dtos/create-semestre.dto';
import { UpdateSemestreDto } from '../../application/dtos/update-semestre.dto';
import { CreateGrupoDto } from '../../application/dtos/create-grupo.dto';
import { UpdateGrupoDto } from '../../application/dtos/update-grupo.dto';
import { CreateInscripcionDto } from '../../application/dtos/create-inscripcion.dto';
import { UpdateInscripcionDto } from '../../application/dtos/update-inscripcion.dto';
import { ApiResponseDto } from '../../../common/dtos/api-response.dto';

@Controller('courses')
export class CoursesController {
    constructor(private readonly coursesService: CoursesService) { }

    // ==================== Semestres ====================

    @Post('semestres')
    async createSemestre(@Body() dto: CreateSemestreDto) {
        const data = await this.coursesService.createSemestre(dto);
        return ApiResponseDto.created(data, 'Semestre creado exitosamente');
    }

    @Get('semestres')
    async findAllSemestres() {
        const data = await this.coursesService.findAllSemestres();
        return ApiResponseDto.success(data);
    }

    @Get('semestres/:id')
    async findSemestreById(@Param('id') id: string) {
        const data = await this.coursesService.findSemestreById(id);
        return ApiResponseDto.success(data);
    }

    @Put('semestres/:id')
    async updateSemestre(@Param('id') id: string, @Body() dto: UpdateSemestreDto) {
        const data = await this.coursesService.updateSemestre(id, dto);
        return ApiResponseDto.success(data, 'Semestre actualizado exitosamente');
    }

    @Delete('semestres/:id')
    async removeSemestre(@Param('id') id: string) {
        await this.coursesService.removeSemestre(id);
        return ApiResponseDto.success(null, 'Semestre eliminado exitosamente');
    }

    // ==================== Grupos ====================

    @Post('grupos')
    async createGrupo(@Body() dto: CreateGrupoDto) {
        const data = await this.coursesService.createGrupo(dto);
        return ApiResponseDto.created(data, 'Grupo creado exitosamente');
    }

    @Get('grupos')
    async findAllGrupos() {
        const data = await this.coursesService.findAllGrupos();
        return ApiResponseDto.success(data);
    }

    @Get('grupos/:id')
    async findGrupoById(@Param('id') id: string) {
        const data = await this.coursesService.findGrupoById(id);
        return ApiResponseDto.success(data);
    }

    @Get('semestres/:semestre_id/grupos')
    async findGruposBySemestre(@Param('semestre_id') semestre_id: string) {
        const data = await this.coursesService.findGruposBySemestre(semestre_id);
        return ApiResponseDto.success(data);
    }

    @Get('docentes/:docente_id/grupos')
    async findGruposByDocente(@Param('docente_id', ParseIntPipe) docente_id: number) {
        const data = await this.coursesService.findGruposByDocente(docente_id);
        return ApiResponseDto.success(data);
    }

    @Put('grupos/:id')
    async updateGrupo(@Param('id') id: string, @Body() dto: UpdateGrupoDto) {
        const data = await this.coursesService.updateGrupo(id, dto);
        return ApiResponseDto.success(data, 'Grupo actualizado exitosamente');
    }

    @Delete('grupos/:id')
    async removeGrupo(@Param('id') id: string) {
        await this.coursesService.removeGrupo(id);
        return ApiResponseDto.success(null, 'Grupo eliminado exitosamente');
    }

    // ==================== Inscripciones ====================

    @Post('inscripciones')
    async createInscripcion(@Body() dto: CreateInscripcionDto) {
        const data = await this.coursesService.createInscripcion(dto);
        return ApiResponseDto.created(data, 'Inscripción creada exitosamente');
    }

    @Get('inscripciones')
    async findAllInscripciones() {
        const data = await this.coursesService.findAllInscripciones();
        return ApiResponseDto.success(data);
    }

    @Get('inscripciones/:id')
    async findInscripcionById(@Param('id') id: string) {
        const data = await this.coursesService.findInscripcionById(id);
        return ApiResponseDto.success(data);
    }

    @Get('grupos/:grupo_id/inscripciones')
    async findInscripcionesByGrupo(@Param('grupo_id') grupo_id: string) {
        const data = await this.coursesService.findInscripcionesByGrupo(grupo_id);
        return ApiResponseDto.success(data);
    }

    @Get('estudiantes/:estudiante_id/inscripciones')
    async findInscripcionesByEstudiante(@Param('estudiante_id', ParseIntPipe) estudiante_id: number) {
        const data = await this.coursesService.findInscripcionesByEstudiante(estudiante_id);
        return ApiResponseDto.success(data);
    }

    @Put('inscripciones/:id')
    async updateInscripcion(@Param('id') id: string, @Body() dto: UpdateInscripcionDto) {
        const data = await this.coursesService.updateInscripcion(id, dto);
        return ApiResponseDto.success(data, 'Inscripción actualizada exitosamente');
    }

    @Delete('inscripciones/:id')
    async removeInscripcion(@Param('id') id: string) {
        await this.coursesService.removeInscripcion(id);
        return ApiResponseDto.success(null, 'Inscripción eliminada exitosamente');
    }
}
