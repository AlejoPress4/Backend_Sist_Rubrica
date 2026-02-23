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
const update_carrera_dto_1 = require("../../application/dtos/update-carrera.dto");
const create_asignatura_dto_1 = require("../../application/dtos/create-asignatura.dto");
const update_asignatura_dto_1 = require("../../application/dtos/update-asignatura.dto");
const create_plan_estudio_dto_1 = require("../../application/dtos/create-plan-estudio.dto");
const update_plan_estudio_dto_1 = require("../../application/dtos/update-plan-estudio.dto");
const create_matricula_dto_1 = require("../../application/dtos/create-matricula.dto");
const update_matricula_dto_1 = require("../../application/dtos/update-matricula.dto");
const api_response_dto_1 = require("../../../common/dtos/api-response.dto");
let AcademicController = class AcademicController {
    academicService;
    constructor(academicService) {
        this.academicService = academicService;
    }
    async createCarrera(dto) {
        const data = await this.academicService.createCarrera(dto);
        return api_response_dto_1.ApiResponseDto.created(data, 'Carrera creada exitosamente');
    }
    async findAllCarreras() {
        const data = await this.academicService.findAllCarreras();
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async findCarreraById(id) {
        const data = await this.academicService.findCarreraById(id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async updateCarrera(id, dto) {
        const data = await this.academicService.updateCarrera(id, dto);
        return api_response_dto_1.ApiResponseDto.success(data, 'Carrera actualizada exitosamente');
    }
    async removeCarrera(id) {
        await this.academicService.removeCarrera(id);
        return api_response_dto_1.ApiResponseDto.success(null, 'Carrera eliminada exitosamente');
    }
    async createAsignatura(dto) {
        const data = await this.academicService.createAsignatura(dto);
        return api_response_dto_1.ApiResponseDto.created(data, 'Asignatura creada exitosamente');
    }
    async findAllAsignaturas() {
        const data = await this.academicService.findAllAsignaturas();
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async findAsignaturaById(id) {
        const data = await this.academicService.findAsignaturaById(id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async updateAsignatura(id, dto) {
        const data = await this.academicService.updateAsignatura(id, dto);
        return api_response_dto_1.ApiResponseDto.success(data, 'Asignatura actualizada exitosamente');
    }
    async removeAsignatura(id) {
        await this.academicService.removeAsignatura(id);
        return api_response_dto_1.ApiResponseDto.success(null, 'Asignatura eliminada exitosamente');
    }
    async createPlanEstudio(dto) {
        const data = await this.academicService.createPlanEstudio(dto);
        return api_response_dto_1.ApiResponseDto.created(data, 'Plan de estudio creado exitosamente');
    }
    async findAllPlanesEstudio() {
        const data = await this.academicService.findAllPlanesEstudio();
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async findPlanEstudioById(id) {
        const data = await this.academicService.findPlanEstudioById(id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async findPlanesByCarrera(carrera_id) {
        const data = await this.academicService.findPlanesByCarrera(carrera_id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async updatePlanEstudio(id, dto) {
        const data = await this.academicService.updatePlanEstudio(id, dto);
        return api_response_dto_1.ApiResponseDto.success(data, 'Plan de estudio actualizado exitosamente');
    }
    async removePlanEstudio(id) {
        await this.academicService.removePlanEstudio(id);
        return api_response_dto_1.ApiResponseDto.success(null, 'Plan de estudio eliminado exitosamente');
    }
    async createMatricula(dto) {
        const data = await this.academicService.createMatricula(dto);
        return api_response_dto_1.ApiResponseDto.created(data, 'Matrícula creada exitosamente');
    }
    async findAllMatriculas() {
        const data = await this.academicService.findAllMatriculas();
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async findMatriculaById(id) {
        const data = await this.academicService.findMatriculaById(id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async findMatriculasByEstudiante(estudiante_id) {
        const data = await this.academicService.findMatriculasByEstudiante(estudiante_id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async findMatriculasByCarrera(carrera_id) {
        const data = await this.academicService.findMatriculasByCarrera(carrera_id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async updateMatricula(id, dto) {
        const data = await this.academicService.updateMatricula(id, dto);
        return api_response_dto_1.ApiResponseDto.success(data, 'Matrícula actualizada exitosamente');
    }
    async removeMatricula(id) {
        await this.academicService.removeMatricula(id);
        return api_response_dto_1.ApiResponseDto.success(null, 'Matrícula eliminada exitosamente');
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
    (0, common_1.Put)('carreras/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_carrera_dto_1.UpdateCarreraDto]),
    __metadata("design:returntype", Promise)
], AcademicController.prototype, "updateCarrera", null);
__decorate([
    (0, common_1.Delete)('carreras/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AcademicController.prototype, "removeCarrera", null);
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
    (0, common_1.Put)('asignaturas/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_asignatura_dto_1.UpdateAsignaturaDto]),
    __metadata("design:returntype", Promise)
], AcademicController.prototype, "updateAsignatura", null);
__decorate([
    (0, common_1.Delete)('asignaturas/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AcademicController.prototype, "removeAsignatura", null);
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
__decorate([
    (0, common_1.Get)('planes-estudio/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AcademicController.prototype, "findPlanEstudioById", null);
__decorate([
    (0, common_1.Get)('carreras/:carrera_id/planes-estudio'),
    __param(0, (0, common_1.Param)('carrera_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AcademicController.prototype, "findPlanesByCarrera", null);
__decorate([
    (0, common_1.Put)('planes-estudio/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_plan_estudio_dto_1.UpdatePlanEstudioDto]),
    __metadata("design:returntype", Promise)
], AcademicController.prototype, "updatePlanEstudio", null);
__decorate([
    (0, common_1.Delete)('planes-estudio/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AcademicController.prototype, "removePlanEstudio", null);
__decorate([
    (0, common_1.Post)('matriculas'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_matricula_dto_1.CreateMatriculaDto]),
    __metadata("design:returntype", Promise)
], AcademicController.prototype, "createMatricula", null);
__decorate([
    (0, common_1.Get)('matriculas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AcademicController.prototype, "findAllMatriculas", null);
__decorate([
    (0, common_1.Get)('matriculas/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AcademicController.prototype, "findMatriculaById", null);
__decorate([
    (0, common_1.Get)('estudiantes/:estudiante_id/matriculas'),
    __param(0, (0, common_1.Param)('estudiante_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AcademicController.prototype, "findMatriculasByEstudiante", null);
__decorate([
    (0, common_1.Get)('carreras/:carrera_id/matriculas'),
    __param(0, (0, common_1.Param)('carrera_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AcademicController.prototype, "findMatriculasByCarrera", null);
__decorate([
    (0, common_1.Put)('matriculas/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_matricula_dto_1.UpdateMatriculaDto]),
    __metadata("design:returntype", Promise)
], AcademicController.prototype, "updateMatricula", null);
__decorate([
    (0, common_1.Delete)('matriculas/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AcademicController.prototype, "removeMatricula", null);
exports.AcademicController = AcademicController = __decorate([
    (0, common_1.Controller)('academic'),
    __metadata("design:paramtypes", [academic_service_1.AcademicService])
], AcademicController);
//# sourceMappingURL=academic.controller.js.map