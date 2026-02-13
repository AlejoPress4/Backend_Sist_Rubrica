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
let AcademicService = class AcademicService {
    carreraRepository;
    asignaturaRepository;
    planEstudioRepository;
    constructor(carreraRepository, asignaturaRepository, planEstudioRepository) {
        this.carreraRepository = carreraRepository;
        this.asignaturaRepository = asignaturaRepository;
        this.planEstudioRepository = planEstudioRepository;
    }
    async createCarrera(data) {
        throw new Error('Method not implemented.');
    }
    async findAllCarreras() {
        throw new Error('Method not implemented.');
    }
    async findCarreraById(id) {
        throw new Error('Method not implemented.');
    }
    async createAsignatura(data) {
        throw new Error('Method not implemented.');
    }
    async findAllAsignaturas() {
        throw new Error('Method not implemented.');
    }
    async findAsignaturaById(id) {
        throw new Error('Method not implemented.');
    }
    async createPlanEstudio(data) {
        throw new Error('Method not implemented.');
    }
    async findAllPlanesEstudio() {
        throw new Error('Method not implemented.');
    }
};
exports.AcademicService = AcademicService;
exports.AcademicService = AcademicService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(carrera_entity_1.Carrera)),
    __param(1, (0, typeorm_1.InjectRepository)(asignatura_entity_1.Asignatura)),
    __param(2, (0, typeorm_1.InjectRepository)(plan_estudio_entity_1.PlanEstudio)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], AcademicService);
//# sourceMappingURL=academic.service.js.map