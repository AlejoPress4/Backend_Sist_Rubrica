import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { AcademicService } from '../../application/services/academic.service';
import { CreateCarreraDto } from '../../application/dtos/create-carrera.dto';
import { UpdateCarreraDto } from '../../application/dtos/update-carrera.dto';
import { CreateAsignaturaDto } from '../../application/dtos/create-asignatura.dto';
import { UpdateAsignaturaDto } from '../../application/dtos/update-asignatura.dto';
import { CreatePlanEstudioDto } from '../../application/dtos/create-plan-estudio.dto';
import { UpdatePlanEstudioDto } from '../../application/dtos/update-plan-estudio.dto';
import { CreateMatriculaDto } from '../../application/dtos/create-matricula.dto';
import { UpdateMatriculaDto } from '../../application/dtos/update-matricula.dto';
import { ApiResponseDto } from '../../../common/dtos/api-response.dto';

@Controller('academic')
export class AcademicController {
    constructor(private readonly academicService: AcademicService) { }

    // ==================== Carreras ====================

    @Post('carreras')
    async createCarrera(@Body() dto: CreateCarreraDto) {
        const data = await this.academicService.createCarrera(dto);
        return ApiResponseDto.created(data, 'Carrera creada exitosamente');
    }

    @Get('carreras')
    async findAllCarreras() {
        const data = await this.academicService.findAllCarreras();
        return ApiResponseDto.success(data);
    }

    @Get('carreras/:id')
    async findCarreraById(@Param('id') id: string) {
        const data = await this.academicService.findCarreraById(id);
        return ApiResponseDto.success(data);
    }

    @Put('carreras/:id')
    async updateCarrera(@Param('id') id: string, @Body() dto: UpdateCarreraDto) {
        const data = await this.academicService.updateCarrera(id, dto);
        return ApiResponseDto.success(data, 'Carrera actualizada exitosamente');
    }

    @Delete('carreras/:id')
    async removeCarrera(@Param('id') id: string) {
        await this.academicService.removeCarrera(id);
        return ApiResponseDto.success(null, 'Carrera eliminada exitosamente');
    }

    // ==================== Asignaturas ====================

    @Post('asignaturas')
    async createAsignatura(@Body() dto: CreateAsignaturaDto) {
        const data = await this.academicService.createAsignatura(dto);
        return ApiResponseDto.created(data, 'Asignatura creada exitosamente');
    }

    @Get('asignaturas')
    async findAllAsignaturas() {
        const data = await this.academicService.findAllAsignaturas();
        return ApiResponseDto.success(data);
    }

    @Get('asignaturas/:id')
    async findAsignaturaById(@Param('id') id: string) {
        const data = await this.academicService.findAsignaturaById(id);
        return ApiResponseDto.success(data);
    }

    @Put('asignaturas/:id')
    async updateAsignatura(@Param('id') id: string, @Body() dto: UpdateAsignaturaDto) {
        const data = await this.academicService.updateAsignatura(id, dto);
        return ApiResponseDto.success(data, 'Asignatura actualizada exitosamente');
    }

    @Delete('asignaturas/:id')
    async removeAsignatura(@Param('id') id: string) {
        await this.academicService.removeAsignatura(id);
        return ApiResponseDto.success(null, 'Asignatura eliminada exitosamente');
    }

    // ==================== Planes de Estudio ====================

    @Post('planes-estudio')
    async createPlanEstudio(@Body() dto: CreatePlanEstudioDto) {
        const data = await this.academicService.createPlanEstudio(dto);
        return ApiResponseDto.created(data, 'Plan de estudio creado exitosamente');
    }

    @Get('planes-estudio')
    async findAllPlanesEstudio() {
        const data = await this.academicService.findAllPlanesEstudio();
        return ApiResponseDto.success(data);
    }

    @Get('planes-estudio/:id')
    async findPlanEstudioById(@Param('id') id: string) {
        const data = await this.academicService.findPlanEstudioById(id);
        return ApiResponseDto.success(data);
    }

    @Get('carreras/:carrera_id/planes-estudio')
    async findPlanesByCarrera(@Param('carrera_id') carrera_id: string) {
        const data = await this.academicService.findPlanesByCarrera(carrera_id);
        return ApiResponseDto.success(data);
    }

    @Put('planes-estudio/:id')
    async updatePlanEstudio(@Param('id') id: string, @Body() dto: UpdatePlanEstudioDto) {
        const data = await this.academicService.updatePlanEstudio(id, dto);
        return ApiResponseDto.success(data, 'Plan de estudio actualizado exitosamente');
    }

    @Delete('planes-estudio/:id')
    async removePlanEstudio(@Param('id') id: string) {
        await this.academicService.removePlanEstudio(id);
        return ApiResponseDto.success(null, 'Plan de estudio eliminado exitosamente');
    }

    // ==================== Matrículas ====================

    @Post('matriculas')
    async createMatricula(@Body() dto: CreateMatriculaDto) {
        const data = await this.academicService.createMatricula(dto);
        return ApiResponseDto.created(data, 'Matrícula creada exitosamente');
    }

    @Get('matriculas')
    async findAllMatriculas() {
        const data = await this.academicService.findAllMatriculas();
        return ApiResponseDto.success(data);
    }

    @Get('matriculas/:id')
    async findMatriculaById(@Param('id') id: string) {
        const data = await this.academicService.findMatriculaById(id);
        return ApiResponseDto.success(data);
    }

    @Get('estudiantes/:estudiante_id/matriculas')
    async findMatriculasByEstudiante(@Param('estudiante_id', ParseIntPipe) estudiante_id: number) {
        const data = await this.academicService.findMatriculasByEstudiante(estudiante_id);
        return ApiResponseDto.success(data);
    }

    @Get('carreras/:carrera_id/matriculas')
    async findMatriculasByCarrera(@Param('carrera_id') carrera_id: string) {
        const data = await this.academicService.findMatriculasByCarrera(carrera_id);
        return ApiResponseDto.success(data);
    }

    @Put('matriculas/:id')
    async updateMatricula(@Param('id') id: string, @Body() dto: UpdateMatriculaDto) {
        const data = await this.academicService.updateMatricula(id, dto);
        return ApiResponseDto.success(data, 'Matrícula actualizada exitosamente');
    }

    @Delete('matriculas/:id')
    async removeMatricula(@Param('id') id: string) {
        await this.academicService.removeMatricula(id);
        return ApiResponseDto.success(null, 'Matrícula eliminada exitosamente');
    }
}
