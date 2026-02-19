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
        return this.coursesService.createSemestre(dto);
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
        return this.coursesService.findGrupoById(id);
    }

    // --- Inscripciones ---

    @Post('inscripciones')
    async createInscripcion(@Body() dto: CreateInscripcionDto) {
        // TODO: Delegate to coursesService
    }

    @Get('grupos/:grupo_id/inscripciones')
    async findInscripcionesByGrupo(@Param('grupo_id') grupo_id: string) {
        return this.coursesService.findInscripcionesByGrupo(grupo_id);
    }
}
