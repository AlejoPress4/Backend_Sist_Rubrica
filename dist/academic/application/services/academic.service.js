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
exports.AcademicService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const carrera_entity_1 = require("../../domain/entities/carrera.entity");
const asignatura_entity_1 = require("../../domain/entities/asignatura.entity");
const plan_estudio_entity_1 = require("../../domain/entities/plan-estudio.entity");
const matricula_entity_1 = require("../../domain/entities/matricula.entity");
let AcademicService = class AcademicService {
    carreraRepository;
    asignaturaRepository;
    planEstudioRepository;
    matriculaRepository;
    constructor(carreraRepository, asignaturaRepository, planEstudioRepository, matriculaRepository) {
        this.carreraRepository = carreraRepository;
        this.asignaturaRepository = asignaturaRepository;
        this.planEstudioRepository = planEstudioRepository;
        this.matriculaRepository = matriculaRepository;
    }
    async createCarrera(dto) {
        const carrera = this.carreraRepository.create(dto);
        return this.carreraRepository.save(carrera);
    }
    async findAllCarreras() {
        return this.carreraRepository.find();
    }
    async findCarreraById(id) {
        const carrera = await this.carreraRepository.findOne({ where: { id } });
        if (!carrera) {
            throw new common_1.NotFoundException(`Carrera con ID ${id} no encontrada`);
        }
        return carrera;
    }
    async updateCarrera(id, dto) {
        const carrera = await this.findCarreraById(id);
        Object.assign(carrera, dto);
        return this.carreraRepository.save(carrera);
    }
    async removeCarrera(id) {
        const carrera = await this.findCarreraById(id);
        await this.carreraRepository.remove(carrera);
    }
    async createAsignatura(dto) {
        const asignatura = this.asignaturaRepository.create(dto);
        return this.asignaturaRepository.save(asignatura);
    }
    async findAllAsignaturas() {
        return this.asignaturaRepository.find();
    }
    async findAsignaturaById(id) {
        const asignatura = await this.asignaturaRepository.findOne({ where: { id } });
        if (!asignatura) {
            throw new common_1.NotFoundException(`Asignatura con ID ${id} no encontrada`);
        }
        return asignatura;
    }
    async updateAsignatura(id, dto) {
        const asignatura = await this.findAsignaturaById(id);
        Object.assign(asignatura, dto);
        return this.asignaturaRepository.save(asignatura);
    }
    async removeAsignatura(id) {
        const asignatura = await this.findAsignaturaById(id);
        await this.asignaturaRepository.remove(asignatura);
    }
    async createPlanEstudio(dto) {
        const plan = this.planEstudioRepository.create(dto);
        return this.planEstudioRepository.save(plan);
    }
    async findAllPlanesEstudio() {
        return this.planEstudioRepository.find();
    }
    async findPlanEstudioById(id) {
        const plan = await this.planEstudioRepository.findOne({ where: { id } });
        if (!plan) {
            throw new common_1.NotFoundException(`Plan de Estudio con ID ${id} no encontrado`);
        }
        return plan;
    }
    async findPlanesByCarrera(carrera_id) {
        return this.planEstudioRepository.find({ where: { carrera_id } });
    }
    async updatePlanEstudio(id, dto) {
        const plan = await this.findPlanEstudioById(id);
        Object.assign(plan, dto);
        return this.planEstudioRepository.save(plan);
    }
    async removePlanEstudio(id) {
        const plan = await this.findPlanEstudioById(id);
        await this.planEstudioRepository.remove(plan);
    }
    async createMatricula(dto) {
        const matricula = this.matriculaRepository.create(dto);
        return this.matriculaRepository.save(matricula);
    }
    async findAllMatriculas() {
        return this.matriculaRepository.find();
    }
    async findMatriculaById(id) {
        const matricula = await this.matriculaRepository.findOne({ where: { id } });
        if (!matricula) {
            throw new common_1.NotFoundException(`Matrícula con ID ${id} no encontrada`);
        }
        return matricula;
    }
    async findMatriculasByEstudiante(estudiante_id) {
        return this.matriculaRepository.find({ where: { estudiante_id } });
    }
    async findMatriculasByCarrera(carrera_id) {
        return this.matriculaRepository.find({ where: { carrera_id } });
    }
    async updateMatricula(id, dto) {
        const matricula = await this.findMatriculaById(id);
        Object.assign(matricula, dto);
        return this.matriculaRepository.save(matricula);
    }
    async removeMatricula(id) {
        const matricula = await this.findMatriculaById(id);
        await this.matriculaRepository.remove(matricula);
    }
};
exports.AcademicService = AcademicService;
exports.AcademicService = AcademicService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(carrera_entity_1.Carrera)),
    __param(1, (0, typeorm_1.InjectRepository)(asignatura_entity_1.Asignatura)),
    __param(2, (0, typeorm_1.InjectRepository)(plan_estudio_entity_1.PlanEstudio)),
    __param(3, (0, typeorm_1.InjectRepository)(matricula_entity_1.Matricula)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], AcademicService);
//# sourceMappingURL=academic.service.js.map