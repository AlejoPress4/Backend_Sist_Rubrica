import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ScoresService } from '../../application/services/scores.service';
import { CreateEvaluacionDto } from '../../application/dtos/create-evaluacion.dto';
import { UpdateEvaluacionDto } from '../../application/dtos/update-evaluacion.dto';
import { CreateNotaDto } from '../../application/dtos/create-nota.dto';
import { UpdateNotaDto } from '../../application/dtos/update-nota.dto';
import { CreateCalificacionDetalleDto } from '../../application/dtos/create-calificacion-detalle.dto';
import { UpdateCalificacionDetalleDto } from '../../application/dtos/update-calificacion-detalle.dto';
import { ApiResponseDto } from '../../../common/dtos/api-response.dto';

@Controller('scores')
export class ScoresController {
    constructor(private readonly scoresService: ScoresService) { }

    // ==================== Evaluaciones ====================

    @Post('evaluaciones')
    async createEvaluacion(@Body() dto: CreateEvaluacionDto) {
        const data = await this.scoresService.createEvaluacion(dto);
        return ApiResponseDto.created(data, 'Evaluación creada exitosamente');
    }

    @Get('evaluaciones')
    async findAllEvaluaciones() {
        const data = await this.scoresService.findAllEvaluaciones();
        return ApiResponseDto.success(data);
    }

    @Get('evaluaciones/:id')
    async findEvaluacionById(@Param('id') id: string) {
        const data = await this.scoresService.findEvaluacionById(id);
        return ApiResponseDto.success(data);
    }

    @Get('asignaturas/:asignatura_id/evaluaciones')
    async findEvaluacionesByAsignatura(@Param('asignatura_id') asignatura_id: string) {
        const data = await this.scoresService.findEvaluacionesByAsignatura(asignatura_id);
        return ApiResponseDto.success(data);
    }

    @Get('rubricas/:rubrica_id/evaluaciones')
    async findEvaluacionesByRubrica(@Param('rubrica_id') rubrica_id: string) {
        const data = await this.scoresService.findEvaluacionesByRubrica(rubrica_id);
        return ApiResponseDto.success(data);
    }

    @Put('evaluaciones/:id')
    async updateEvaluacion(@Param('id') id: string, @Body() dto: UpdateEvaluacionDto) {
        const data = await this.scoresService.updateEvaluacion(id, dto);
        return ApiResponseDto.success(data, 'Evaluación actualizada exitosamente');
    }

    @Delete('evaluaciones/:id')
    async removeEvaluacion(@Param('id') id: string) {
        await this.scoresService.removeEvaluacion(id);
        return ApiResponseDto.success(null, 'Evaluación eliminada exitosamente');
    }

    // ==================== Notas ====================

    @Post('notas')
    async createNota(@Body() dto: CreateNotaDto) {
        const data = await this.scoresService.createNota(dto);
        return ApiResponseDto.created(data, 'Nota creada exitosamente');
    }

    @Get('notas')
    async findAllNotas() {
        const data = await this.scoresService.findAllNotas();
        return ApiResponseDto.success(data);
    }

    @Get('notas/:id')
    async findNotaById(@Param('id') id: string) {
        const data = await this.scoresService.findNotaById(id);
        return ApiResponseDto.success(data);
    }

    @Get('inscripciones/:inscripcion_id/notas')
    async findNotasByInscripcion(@Param('inscripcion_id') inscripcion_id: string) {
        const data = await this.scoresService.findNotasByInscripcion(inscripcion_id);
        return ApiResponseDto.success(data);
    }

    @Get('estudiantes/:estudiante_id/notas')
    async findNotasByEstudiante(@Param('estudiante_id', ParseIntPipe) estudiante_id: number) {
        const data = await this.scoresService.findNotasByEstudiante(estudiante_id);
        return ApiResponseDto.success(data);
    }

    @Put('notas/:id')
    async updateNota(@Param('id') id: string, @Body() dto: UpdateNotaDto) {
        const data = await this.scoresService.updateNota(id, dto);
        return ApiResponseDto.success(data, 'Nota actualizada exitosamente');
    }

    @Delete('notas/:id')
    async removeNota(@Param('id') id: string) {
        await this.scoresService.removeNota(id);
        return ApiResponseDto.success(null, 'Nota eliminada exitosamente');
    }

    // ==================== Calificación Detalle ====================

    @Post('calificacion-detalles')
    async createCalificacionDetalle(@Body() dto: CreateCalificacionDetalleDto) {
        const data = await this.scoresService.createCalificacionDetalle(dto);
        return ApiResponseDto.created(data, 'Calificación detalle creada exitosamente');
    }

    @Get('calificacion-detalles')
    async findAllDetalles() {
        const data = await this.scoresService.findAllDetalles();
        return ApiResponseDto.success(data);
    }

    @Get('calificacion-detalles/:id')
    async findDetalleById(@Param('id') id: string) {
        const data = await this.scoresService.findDetalleById(id);
        return ApiResponseDto.success(data);
    }

    @Put('calificacion-detalles/:id')
    async updateCalificacionDetalle(@Param('id') id: string, @Body() dto: UpdateCalificacionDetalleDto) {
        const data = await this.scoresService.updateCalificacionDetalle(id, dto);
        return ApiResponseDto.success(data, 'Calificación detalle actualizada exitosamente');
    }

    @Delete('calificacion-detalles/:id')
    async removeCalificacionDetalle(@Param('id') id: string) {
        await this.scoresService.removeCalificacionDetalle(id);
        return ApiResponseDto.success(null, 'Calificación detalle eliminada exitosamente');
    }
}
