import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CoursesService } from '../../application/services/courses.service';
import { CreateSemestreDto } from '../../application/dtos/create-semestre.dto';
import { CreateGrupoDto } from '../../application/dtos/create-grupo.dto';
import { CreateInscripcionDto } from '../../application/dtos/create-inscripcion.dto';

@Controller('courses')
export class CoursesController {
    constructor(private readonly coursesService: CoursesService) { }

    // --- Semestres ---

    @Post('semestres')
    async createSemestre(@Body() dto: CreateSemestreDto) {
        // TODO: Delegate to coursesService
    }

    @Get('semestres')
    async findAllSemestres() {
        // TODO: Delegate to coursesService
    }

    // --- Grupos ---

    @Post('grupos')
    async createGrupo(@Body() dto: CreateGrupoDto) {
        // TODO: Delegate to coursesService
    }

    @Get('grupos')
    async findAllGrupos() {
        // TODO: Delegate to coursesService
    }

    @Get('grupos/:id')
    async findGrupoById(@Param('id') id: string) {
        // TODO: Delegate to coursesService
    }

    // --- Inscripciones ---

    @Post('inscripciones')
    async createInscripcion(@Body() dto: CreateInscripcionDto) {
        // TODO: Delegate to coursesService
    }

    @Get('grupos/:grupoId/inscripciones')
    async findInscripcionesByGrupo(@Param('grupoId') grupoId: string) {
        // TODO: Delegate to coursesService
    }
}
