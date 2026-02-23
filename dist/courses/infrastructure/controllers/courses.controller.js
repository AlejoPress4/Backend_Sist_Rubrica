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
exports.CoursesController = void 0;
const common_1 = require("@nestjs/common");
const courses_service_1 = require("../../application/services/courses.service");
const create_semestre_dto_1 = require("../../application/dtos/create-semestre.dto");
const update_semestre_dto_1 = require("../../application/dtos/update-semestre.dto");
const create_grupo_dto_1 = require("../../application/dtos/create-grupo.dto");
const update_grupo_dto_1 = require("../../application/dtos/update-grupo.dto");
const create_inscripcion_dto_1 = require("../../application/dtos/create-inscripcion.dto");
const update_inscripcion_dto_1 = require("../../application/dtos/update-inscripcion.dto");
const api_response_dto_1 = require("../../../common/dtos/api-response.dto");
let CoursesController = class CoursesController {
    coursesService;
    constructor(coursesService) {
        this.coursesService = coursesService;
    }
    async createSemestre(dto) {
        const data = await this.coursesService.createSemestre(dto);
        return api_response_dto_1.ApiResponseDto.created(data, 'Semestre creado exitosamente');
    }
    async findAllSemestres() {
        const data = await this.coursesService.findAllSemestres();
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async findSemestreById(id) {
        const data = await this.coursesService.findSemestreById(id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async updateSemestre(id, dto) {
        const data = await this.coursesService.updateSemestre(id, dto);
        return api_response_dto_1.ApiResponseDto.success(data, 'Semestre actualizado exitosamente');
    }
    async removeSemestre(id) {
        await this.coursesService.removeSemestre(id);
        return api_response_dto_1.ApiResponseDto.success(null, 'Semestre eliminado exitosamente');
    }
    async createGrupo(dto) {
        const data = await this.coursesService.createGrupo(dto);
        return api_response_dto_1.ApiResponseDto.created(data, 'Grupo creado exitosamente');
    }
    async findAllGrupos() {
        const data = await this.coursesService.findAllGrupos();
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async findGrupoById(id) {
        const data = await this.coursesService.findGrupoById(id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async findGruposBySemestre(semestre_id) {
        const data = await this.coursesService.findGruposBySemestre(semestre_id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async findGruposByDocente(docente_id) {
        const data = await this.coursesService.findGruposByDocente(docente_id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async updateGrupo(id, dto) {
        const data = await this.coursesService.updateGrupo(id, dto);
        return api_response_dto_1.ApiResponseDto.success(data, 'Grupo actualizado exitosamente');
    }
    async removeGrupo(id) {
        await this.coursesService.removeGrupo(id);
        return api_response_dto_1.ApiResponseDto.success(null, 'Grupo eliminado exitosamente');
    }
    async createInscripcion(dto) {
        const data = await this.coursesService.createInscripcion(dto);
        return api_response_dto_1.ApiResponseDto.created(data, 'Inscripción creada exitosamente');
    }
    async findAllInscripciones() {
        const data = await this.coursesService.findAllInscripciones();
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async findInscripcionById(id) {
        const data = await this.coursesService.findInscripcionById(id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async findInscripcionesByGrupo(grupo_id) {
        const data = await this.coursesService.findInscripcionesByGrupo(grupo_id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async findInscripcionesByEstudiante(estudiante_id) {
        const data = await this.coursesService.findInscripcionesByEstudiante(estudiante_id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async updateInscripcion(id, dto) {
        const data = await this.coursesService.updateInscripcion(id, dto);
        return api_response_dto_1.ApiResponseDto.success(data, 'Inscripción actualizada exitosamente');
    }
    async removeInscripcion(id) {
        await this.coursesService.removeInscripcion(id);
        return api_response_dto_1.ApiResponseDto.success(null, 'Inscripción eliminada exitosamente');
    }
};
exports.CoursesController = CoursesController;
__decorate([
    (0, common_1.Post)('semestres'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_semestre_dto_1.CreateSemestreDto]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "createSemestre", null);
__decorate([
    (0, common_1.Get)('semestres'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "findAllSemestres", null);
__decorate([
    (0, common_1.Get)('semestres/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "findSemestreById", null);
__decorate([
    (0, common_1.Put)('semestres/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_semestre_dto_1.UpdateSemestreDto]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "updateSemestre", null);
__decorate([
    (0, common_1.Delete)('semestres/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "removeSemestre", null);
__decorate([
    (0, common_1.Post)('grupos'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_grupo_dto_1.CreateGrupoDto]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "createGrupo", null);
__decorate([
    (0, common_1.Get)('grupos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "findAllGrupos", null);
__decorate([
    (0, common_1.Get)('grupos/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "findGrupoById", null);
__decorate([
    (0, common_1.Get)('semestres/:semestre_id/grupos'),
    __param(0, (0, common_1.Param)('semestre_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "findGruposBySemestre", null);
__decorate([
    (0, common_1.Get)('docentes/:docente_id/grupos'),
    __param(0, (0, common_1.Param)('docente_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "findGruposByDocente", null);
__decorate([
    (0, common_1.Put)('grupos/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_grupo_dto_1.UpdateGrupoDto]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "updateGrupo", null);
__decorate([
    (0, common_1.Delete)('grupos/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "removeGrupo", null);
__decorate([
    (0, common_1.Post)('inscripciones'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_inscripcion_dto_1.CreateInscripcionDto]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "createInscripcion", null);
__decorate([
    (0, common_1.Get)('inscripciones'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "findAllInscripciones", null);
__decorate([
    (0, common_1.Get)('inscripciones/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "findInscripcionById", null);
__decorate([
    (0, common_1.Get)('grupos/:grupo_id/inscripciones'),
    __param(0, (0, common_1.Param)('grupo_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "findInscripcionesByGrupo", null);
__decorate([
    (0, common_1.Get)('estudiantes/:estudiante_id/inscripciones'),
    __param(0, (0, common_1.Param)('estudiante_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "findInscripcionesByEstudiante", null);
__decorate([
    (0, common_1.Put)('inscripciones/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_inscripcion_dto_1.UpdateInscripcionDto]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "updateInscripcion", null);
__decorate([
    (0, common_1.Delete)('inscripciones/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "removeInscripcion", null);
exports.CoursesController = CoursesController = __decorate([
    (0, common_1.Controller)('courses'),
    __metadata("design:paramtypes", [courses_service_1.CoursesService])
], CoursesController);
//# sourceMappingURL=courses.controller.js.map