import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Grupo } from '../../domain/entities/grupo.entity';
import { Inscripcion } from '../../domain/entities/inscripcion.entity';
import { Semestre } from '../../domain/entities/semestre.entity';
import { ICoursesService } from '../../domain/interfaces/courses-service.interface';
import { CreateSemestreDto } from '../dtos/create-semestre.dto';
import { UpdateSemestreDto } from '../dtos/update-semestre.dto';
import { CreateGrupoDto } from '../dtos/create-grupo.dto';
import { UpdateGrupoDto } from '../dtos/update-grupo.dto';
import { CreateInscripcionDto } from '../dtos/create-inscripcion.dto';
import { UpdateInscripcionDto } from '../dtos/update-inscripcion.dto';

@Injectable()
export class CoursesService implements ICoursesService {
    constructor(
        @InjectRepository(Semestre)
        private readonly semestreRepository: Repository<Semestre>,
        @InjectRepository(Grupo)
        private readonly grupoRepository: Repository<Grupo>,
        @InjectRepository(Inscripcion)
        private readonly inscripcionRepository: Repository<Inscripcion>,
    ) { }

    // ==================== Semestres ====================

    async createSemestre(dto: CreateSemestreDto): Promise<Semestre> {
        const semestre = this.semestreRepository.create(dto);
        return this.semestreRepository.save(semestre);
    }

    async findAllSemestres(): Promise<Semestre[]> {
        return this.semestreRepository.find();
    }

    async findSemestreById(id: string): Promise<Semestre> {
        const semestre = await this.semestreRepository.findOne({ where: { id } });
        if (!semestre) {
            throw new NotFoundException(`Semestre con ID ${id} no encontrado`);
        }
        return semestre;
    }

    async updateSemestre(id: string, dto: UpdateSemestreDto): Promise<Semestre> {
        const semestre = await this.findSemestreById(id);
        Object.assign(semestre, dto);
        return this.semestreRepository.save(semestre);
    }

    async removeSemestre(id: string): Promise<void> {
        const semestre = await this.findSemestreById(id);
        await this.semestreRepository.remove(semestre);
    }

    // ==================== Grupos ====================

    async createGrupo(dto: CreateGrupoDto): Promise<Grupo> {
        const grupo = this.grupoRepository.create(dto);
        return this.grupoRepository.save(grupo);
    }

    async findAllGrupos(): Promise<Grupo[]> {
        return this.grupoRepository.find();
    }

    async findGrupoById(id: string): Promise<Grupo> {
        const grupo = await this.grupoRepository.findOne({ where: { id } });
        if (!grupo) {
            throw new NotFoundException(`Grupo con ID ${id} no encontrado`);
        }
        return grupo;
    }

    async findGruposBySemestre(semestre_id: string): Promise<Grupo[]> {
        return this.grupoRepository.find({ where: { semestre_id } });
    }

    async findGruposByDocente(docente_id: number): Promise<Grupo[]> {
        return this.grupoRepository.find({ where: { docente_id } });
    }

    async updateGrupo(id: string, dto: UpdateGrupoDto): Promise<Grupo> {
        const grupo = await this.findGrupoById(id);
        Object.assign(grupo, dto);
        return this.grupoRepository.save(grupo);
    }

    async removeGrupo(id: string): Promise<void> {
        const grupo = await this.findGrupoById(id);
        await this.grupoRepository.remove(grupo);
    }

    // ==================== Inscripciones ====================

    async createInscripcion(dto: CreateInscripcionDto): Promise<Inscripcion> {
        const inscripcion = this.inscripcionRepository.create(dto);
        return this.inscripcionRepository.save(inscripcion);
    }

    async findAllInscripciones(): Promise<Inscripcion[]> {
        return this.inscripcionRepository.find();
    }

    async findInscripcionById(id: string): Promise<Inscripcion> {
        const inscripcion = await this.inscripcionRepository.findOne({ where: { id } });
        if (!inscripcion) {
            throw new NotFoundException(`Inscripción con ID ${id} no encontrada`);
        }
        return inscripcion;
    }

    async findInscripcionesByGrupo(grupo_id: string): Promise<Inscripcion[]> {
        return this.inscripcionRepository.find({ where: { grupo_id } });
    }

    async findInscripcionesByEstudiante(estudiante_id: number): Promise<Inscripcion[]> {
        return this.inscripcionRepository.find({ where: { estudiante_id } });
    }

    async updateInscripcion(id: string, dto: UpdateInscripcionDto): Promise<Inscripcion> {
        const inscripcion = await this.findInscripcionById(id);
        Object.assign(inscripcion, dto);
        return this.inscripcionRepository.save(inscripcion);
    }

    async removeInscripcion(id: string): Promise<void> {
        const inscripcion = await this.findInscripcionById(id);
        await this.inscripcionRepository.remove(inscripcion);
    }
}
