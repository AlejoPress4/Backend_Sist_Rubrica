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

    @Post(':rubricaId/criterios')
    async createCriterio(
        @Param('rubricaId') rubricaId: string,
        @Body() dto: CreateCriterioDto,
    ) {
        // TODO: Delegate to rubricsService
    }

    @Get(':rubricaId/criterios')
    async findCriteriosByRubrica(@Param('rubricaId') rubricaId: string) {
        // TODO: Delegate to rubricsService
    }

    // --- Escalas ---

    @Post('criterios/:criterioId/escalas')
    async createEscala(
        @Param('criterioId') criterioId: string,
        @Body() dto: CreateEscalaDto,
    ) {
        // TODO: Delegate to rubricsService
    }

    @Get('criterios/:criterioId/escalas')
    async findEscalasByCriterio(@Param('criterioId') criterioId: string) {
        // TODO: Delegate to rubricsService
    }
}
