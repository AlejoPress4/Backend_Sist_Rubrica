import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { RubricsService } from '../../application/services/rubrics.service';
import { CreateRubricaDto } from '../../application/dtos/create-rubrica.dto';
import { UpdateRubricaDto } from '../../application/dtos/update-rubrica.dto';
import { CreateCriterioDto } from '../../application/dtos/create-criterio.dto';
import { UpdateCriterioDto } from '../../application/dtos/update-criterio.dto';
import { CreateEscalaDto } from '../../application/dtos/create-escala.dto';
import { UpdateEscalaDto } from '../../application/dtos/update-escala.dto';
import { ApiResponseDto } from '../../../common/dtos/api-response.dto';

@Controller('rubrics')
export class RubricsController {
    constructor(private readonly rubricsService: RubricsService) { }

    // ==================== Rúbricas ====================

    @Post()
    async createRubrica(@Body() dto: CreateRubricaDto) {
        const data = await this.rubricsService.createRubrica(dto);
        return ApiResponseDto.created(data, 'Rúbrica creada exitosamente');
    }

    @Get()
    async findAllRubricas() {
        const data = await this.rubricsService.findAllRubricas();
        return ApiResponseDto.success(data);
    }

    @Get(':id')
    async findRubricaById(@Param('id') id: string) {
        const data = await this.rubricsService.findRubricaById(id);
        return ApiResponseDto.success(data);
    }

    @Put(':id')
    async updateRubrica(@Param('id') id: string, @Body() dto: UpdateRubricaDto) {
        const data = await this.rubricsService.updateRubrica(id, dto);
        return ApiResponseDto.success(data, 'Rúbrica actualizada exitosamente');
    }

    @Delete(':id')
    async removeRubrica(@Param('id') id: string) {
        await this.rubricsService.removeRubrica(id);
        return ApiResponseDto.success(null, 'Rúbrica eliminada exitosamente');
    }

    // ==================== Criterios ====================

    @Post(':rubrica_id/criterios')
    async createCriterio(
        @Param('rubrica_id') rubrica_id: string,
        @Body() dto: CreateCriterioDto,
    ) {
        // El rubrica_id del param tiene prioridad sobre el body
        const data = await this.rubricsService.createCriterio({ ...dto, rubrica_id });
        return ApiResponseDto.created(data, 'Criterio creado exitosamente');
    }

    @Get(':rubrica_id/criterios')
    async findCriteriosByRubrica(@Param('rubrica_id') rubrica_id: string) {
        const data = await this.rubricsService.findCriteriosByRubrica(rubrica_id);
        return ApiResponseDto.success(data);
    }

    @Get('criterios/:id')
    async findCriterioById(@Param('id') id: string) {
        const data = await this.rubricsService.findCriterioById(id);
        return ApiResponseDto.success(data);
    }

    @Put('criterios/:id')
    async updateCriterio(@Param('id') id: string, @Body() dto: UpdateCriterioDto) {
        const data = await this.rubricsService.updateCriterio(id, dto);
        return ApiResponseDto.success(data, 'Criterio actualizado exitosamente');
    }

    @Delete('criterios/:id')
    async removeCriterio(@Param('id') id: string) {
        await this.rubricsService.removeCriterio(id);
        return ApiResponseDto.success(null, 'Criterio eliminado exitosamente');
    }

    // ==================== Escalas ====================

    @Post('criterios/:criterio_id/escalas')
    async createEscala(
        @Param('criterio_id') criterio_id: string,
        @Body() dto: CreateEscalaDto,
    ) {
        // El criterio_id del param tiene prioridad sobre el body
        const data = await this.rubricsService.createEscala({ ...dto, criterio_id });
        return ApiResponseDto.created(data, 'Escala creada exitosamente');
    }

    @Get('criterios/:criterio_id/escalas')
    async findEscalasByCriterio(@Param('criterio_id') criterio_id: string) {
        const data = await this.rubricsService.findEscalasByCriterio(criterio_id);
        return ApiResponseDto.success(data);
    }

    @Get('escalas/:id')
    async findEscalaById(@Param('id') id: string) {
        const data = await this.rubricsService.findEscalaById(id);
        return ApiResponseDto.success(data);
    }

    @Put('escalas/:id')
    async updateEscala(@Param('id') id: string, @Body() dto: UpdateEscalaDto) {
        const data = await this.rubricsService.updateEscala(id, dto);
        return ApiResponseDto.success(data, 'Escala actualizada exitosamente');
    }

    @Delete('escalas/:id')
    async removeEscala(@Param('id') id: string) {
        await this.rubricsService.removeEscala(id);
        return ApiResponseDto.success(null, 'Escala eliminada exitosamente');
    }
}
