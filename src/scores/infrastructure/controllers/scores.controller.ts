import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ScoresService } from '../../application/services/scores.service';
import { CreateEvaluacionDto } from '../../application/dtos/create-evaluacion.dto';
import { CreateNotaDto } from '../../application/dtos/create-nota.dto';
import { CreateCalificacionDetalleDto } from '../../application/dtos/create-calificacion-detalle.dto';

@Controller('scores')
export class ScoresController {
    constructor(private readonly scoresService: ScoresService) { }

    // --- Evaluaciones ---

    @Post('evaluaciones')
    async createEvaluacion(@Body() dto: CreateEvaluacionDto) {
        // TODO: Delegate to scoresService
    }

    @Get('evaluaciones')
    async findAllEvaluaciones() {
        // TODO: Delegate to scoresService
    }

    @Get('evaluaciones/:id')
    async findEvaluacionById(@Param('id') id: string) {
        // TODO: Delegate to scoresService
    }

    // --- Notas ---

    @Post('notas')
    async createNota(@Body() dto: CreateNotaDto) {
        // TODO: Delegate to scoresService
    }

    @Get('evaluaciones/:evaluacionId/notas')
    async findNotasByEvaluacion(@Param('evaluacionId') evaluacionId: string) {
        // TODO: Delegate to scoresService
    }

    // --- Calificación Detalle ---

    @Post('calificacion-detalles')
    async createCalificacionDetalle(@Body() dto: CreateCalificacionDetalleDto) {
        // TODO: Delegate to scoresService
    }

    @Get('notas/:notaId/detalles')
    async findDetallesByNota(@Param('notaId') notaId: string) {
        // TODO: Delegate to scoresService
    }
}
