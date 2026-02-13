import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AcademicService } from '../../application/services/academic.service';
import { CreateCarreraDto } from '../../application/dtos/create-carrera.dto';
import { CreateAsignaturaDto } from '../../application/dtos/create-asignatura.dto';
import { CreatePlanEstudioDto } from '../../application/dtos/create-plan-estudio.dto';

@Controller('academic')
export class AcademicController {
    constructor(private readonly academicService: AcademicService) { }

    // --- Carreras ---

    @Post('carreras')
    async createCarrera(@Body() dto: CreateCarreraDto) {
        // TODO: Delegate to academicService
    }

    @Get('carreras')
    async findAllCarreras() {
        // TODO: Delegate to academicService
    }

    @Get('carreras/:id')
    async findCarreraById(@Param('id') id: string) {
        // TODO: Delegate to academicService
    }

    // --- Asignaturas ---

    @Post('asignaturas')
    async createAsignatura(@Body() dto: CreateAsignaturaDto) {
        // TODO: Delegate to academicService
    }

    @Get('asignaturas')
    async findAllAsignaturas() {
        // TODO: Delegate to academicService
    }

    @Get('asignaturas/:id')
    async findAsignaturaById(@Param('id') id: string) {
        // TODO: Delegate to academicService
    }

    // --- Planes de Estudio ---

    @Post('planes-estudio')
    async createPlanEstudio(@Body() dto: CreatePlanEstudioDto) {
        // TODO: Delegate to academicService
    }

    @Get('planes-estudio')
    async findAllPlanesEstudio() {
        // TODO: Delegate to academicService
    }
}
