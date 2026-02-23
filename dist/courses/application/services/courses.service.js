"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const grupo_entity_1 = require("../../domain/entities/grupo.entity");
const inscripcion_entity_1 = require("../../domain/entities/inscripcion.entity");
const semestre_entity_1 = require("../../domain/entities/semestre.entity");
let CoursesService = class CoursesService {
    semestreRepository;
    grupoRepository;
    inscripcionRepository;
    constructor(semestreRepository, grupoRepository, inscripcionRepository) {
        this.semestreRepository = semestreRepository;
        this.grupoRepository = grupoRepository;
        this.inscripcionRepository = inscripcionRepository;
    }
    async createSemestre(dto) {
        const semestre = this.semestreRepository.create(dto);
        return this.semestreRepository.save(semestre);
    }
    async findAllSemestres() {
        return this.semestreRepository.find();
    }
    async findSemestreById(id) {
        const semestre = await this.semestreRepository.findOne({ where: { id } });
        if (!semestre) {
            throw new common_1.NotFoundException(`Semestre con ID ${id} no encontrado`);
        }
        return semestre;
    }
    async updateSemestre(id, dto) {
        const semestre = await this.findSemestreById(id);
        Object.assign(semestre, dto);
        return this.semestreRepository.save(semestre);
    }
    async removeSemestre(id) {
        const semestre = await this.findSemestreById(id);
        await this.semestreRepository.remove(semestre);
    }
    async createGrupo(dto) {
        const grupo = this.grupoRepository.create(dto);
        return this.grupoRepository.save(grupo);
    }
    async findAllGrupos() {
        return this.grupoRepository.find();
    }
    async findGrupoById(id) {
        const grupo = await this.grupoRepository.findOne({ where: { id } });
        if (!grupo) {
            throw new common_1.NotFoundException(`Grupo con ID ${id} no encontrado`);
        }
        return grupo;
    }
    async findGruposBySemestre(semestre_id) {
        return this.grupoRepository.find({ where: { semestre_id } });
    }
    async findGruposByDocente(docente_id) {
        return this.grupoRepository.find({ where: { docente_id } });
    }
    async updateGrupo(id, dto) {
        const grupo = await this.findGrupoById(id);
        Object.assign(grupo, dto);
        return this.grupoRepository.save(grupo);
    }
    async removeGrupo(id) {
        const grupo = await this.findGrupoById(id);
        await this.grupoRepository.remove(grupo);
    }
    async createInscripcion(dto) {
        const inscripcion = this.inscripcionRepository.create(dto);
        return this.inscripcionRepository.save(inscripcion);
    }
    async findAllInscripciones() {
        return this.inscripcionRepository.find();
    }
    async findInscripcionById(id) {
        const inscripcion = await this.inscripcionRepository.findOne({ where: { id } });
        if (!inscripcion) {
            throw new common_1.NotFoundException(`Inscripción con ID ${id} no encontrada`);
        }
        return inscripcion;
    }
    async findInscripcionesByGrupo(grupo_id) {
        return this.inscripcionRepository.find({ where: { grupo_id } });
    }
    async findInscripcionesByEstudiante(estudiante_id) {
        return this.inscripcionRepository.find({ where: { estudiante_id } });
    }
    async updateInscripcion(id, dto) {
        const inscripcion = await this.findInscripcionById(id);
        Object.assign(inscripcion, dto);
        return this.inscripcionRepository.save(inscripcion);
    }
    async removeInscripcion(id) {
        const inscripcion = await this.findInscripcionById(id);
        await this.inscripcionRepository.remove(inscripcion);
    }
};
exports.CoursesService = CoursesService;
exports.CoursesService = CoursesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(semestre_entity_1.Semestre)),
    __param(1, (0, typeorm_1.InjectRepository)(grupo_entity_1.Grupo)),
    __param(2, (0, typeorm_1.InjectRepository)(inscripcion_entity_1.Inscripcion)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], CoursesService);
//# sourceMappingURL=courses.service.js.map