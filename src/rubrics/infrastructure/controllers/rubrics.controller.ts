import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { RubricsService } from '../../application/services/rubrics.service';
import { CreateRubricaDto } from '../../application/dtos/create-rubrica.dto';
import { UpdateRubricaDto } from '../../application/dtos/update-rubrica.dto';
import { CreateCriterioDto } from '../../application/dtos/create-criterio.dto';
import { CreateEscalaDto } from '../../application/dtos/create-escala.dto';

@Controller('rubrics')
export class RubricsController {
    constructor(private readonly rubricsService: RubricsService) { }

    // --- Rúbricas ---

    @Post()
    async createRubrica(@Body() dto: CreateRubricaDto) {
        return this.rubricsService.createRubrica(dto);
    }

    @Get()
    async findAllRubricas() {
        return this.rubricsService.findAllRubricas();
    }

    @Get(':id')
    async findRubricaById(@Param('id') id: string) {
        return this.rubricsService.findRubricaById(id);
    }

    @Put(':id')
    async updateRubrica(
        @Param('id') id: string,
        @Body() dto: UpdateRubricaDto,
    ) {
        return this.rubricsService.updateRubrica(id, dto);
    }

    @Delete(':id')
    async removeRubrica(@Param('id') id: string) {
        return this.rubricsService.removeRubrica(id);
    }

    // --- Criterios ---

    @Post(':rubrica_id/criterios')
    async createCriterio(
        @Param('rubrica_id') rubrica_id: string,
        @Body() dto: CreateCriterioDto,
    ) {
        return this.rubricsService.createCriterio(rubrica_id, dto);
    }

    @Get(':rubrica_id/criterios')
    async findCriteriosByRubrica(@Param('rubrica_id') rubrica_id: string) {
        return this.rubricsService.findCriteriosByRubrica(rubrica_id);
    }

    // --- Escalas ---

    @Post('criterios/:criterio_id/escalas')
    async createEscala(
        @Param('criterio_id') criterio_id: string,
        @Body() dto: CreateEscalaDto,
    ) {
        return this.rubricsService.createEscala(criterio_id, dto);
    }

    @Get('criterios/:criterio_id/escalas')
    async findEscalasByCriterio(@Param('criterio_id') criterio_id: string) {
        return this.rubricsService.findEscalasByCriterio(criterio_id);
    }
}
