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
exports.AcademicController = void 0;
const common_1 = require("@nestjs/common");
const academic_service_1 = require("../../application/services/academic.service");
const create_carrera_dto_1 = require("../../application/dtos/create-carrera.dto");
const create_asignatura_dto_1 = require("../../application/dtos/create-asignatura.dto");
const create_plan_estudio_dto_1 = require("../../application/dtos/create-plan-estudio.dto");
let AcademicController = class AcademicController {
    academicService;
    constructor(academicService) {
        this.academicService = academicService;
    }
    async createCarrera(dto) {
    }
    async findAllCarreras() {
    }
    async findCarreraById(id) {
    }
    async createAsignatura(dto) {
    }
    async findAllAsignaturas() {
    }
    async findAsignaturaById(id) {
    }
    async createPlanEstudio(dto) {
    }
    async findAllPlanesEstudio() {
    }
};
exports.AcademicController = AcademicController;
__decorate([
    (0, common_1.Post)('carreras'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_carrera_dto_1.CreateCarreraDto]),
    __metadata("design:returntype", Promise)
], AcademicController.prototype, "createCarrera", null);
__decorate([
    (0, common_1.Get)('carreras'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AcademicController.prototype, "findAllCarreras", null);
__decorate([
    (0, common_1.Get)('carreras/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AcademicController.prototype, "findCarreraById", null);
__decorate([
    (0, common_1.Post)('asignaturas'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_asignatura_dto_1.CreateAsignaturaDto]),
    __metadata("design:returntype", Promise)
], AcademicController.prototype, "createAsignatura", null);
__decorate([
    (0, common_1.Get)('asignaturas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AcademicController.prototype, "findAllAsignaturas", null);
__decorate([
    (0, common_1.Get)('asignaturas/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AcademicController.prototype, "findAsignaturaById", null);
__decorate([
    (0, common_1.Post)('planes-estudio'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_plan_estudio_dto_1.CreatePlanEstudioDto]),
    __metadata("design:returntype", Promise)
], AcademicController.prototype, "createPlanEstudio", null);
__decorate([
    (0, common_1.Get)('planes-estudio'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AcademicController.prototype, "findAllPlanesEstudio", null);
exports.AcademicController = AcademicController = __decorate([
    (0, common_1.Controller)('academic'),
    __metadata("design:paramtypes", [academic_service_1.AcademicService])
], AcademicController);
//# sourceMappingURL=academic.controller.js.map