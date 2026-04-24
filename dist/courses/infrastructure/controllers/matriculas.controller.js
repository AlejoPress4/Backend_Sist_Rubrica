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
exports.MatriculasController = void 0;
const common_1 = require("@nestjs/common");
const matriculas_service_1 = require("../../application/services/matriculas.service");
const inscripciones_service_1 = require("../../application/services/inscripciones.service");
const create_matricula_dto_1 = require("../../application/dtos/create-matricula.dto");
const create_inscripcion_dto_1 = require("../../application/dtos/create-inscripcion.dto");
const api_response_dto_1 = require("../../../common/dtos/api-response.dto");
const jwt_auth_guard_1 = require("../../../auth/infrastructure/guards/jwt-auth.guard");
const roles_guard_1 = require("../../../auth/infrastructure/guards/roles.guard");
const roles_decorator_1 = require("../../../common/decorators/roles.decorator");
const enums_1 = require("../../../common/enums");
let MatriculasController = class MatriculasController {
    matriculasService;
    inscripcionesService;
    constructor(matriculasService, inscripcionesService) {
        this.matriculasService = matriculasService;
        this.inscripcionesService = inscripcionesService;
    }
    async matricular(dto) {
        const data = await this.matriculasService.matricular(dto);
        return api_response_dto_1.ApiResponseDto.created(data, 'Matrícula(s) creada(s) exitosamente');
    }
    async findAllMatriculas(estudianteId) {
        if (estudianteId) {
            return api_response_dto_1.ApiResponseDto.success(await this.matriculasService.findByEstudiante(+estudianteId));
        }
        return api_response_dto_1.ApiResponseDto.success(await this.matriculasService.findAll());
    }
    async findMatriculaById(id) {
        const data = await this.matriculasService.findById(id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async findByEstudiante(estudianteId) {
        const data = await this.matriculasService.findByEstudiante(estudianteId);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async cancelar(id) {
        const data = await this.matriculasService.cancelar(id);
        return api_response_dto_1.ApiResponseDto.success(data, 'Matrícula cancelada');
    }
    async createInscripcion(dto) {
        const data = await this.inscripcionesService.create(dto);
        return api_response_dto_1.ApiResponseDto.created(data, 'Inscripción creada exitosamente');
    }
    async findAllInscripciones() {
        return api_response_dto_1.ApiResponseDto.success(await this.inscripcionesService.findAll());
    }
    async findInscripcionById(id) {
        return api_response_dto_1.ApiResponseDto.success(await this.inscripcionesService.findById(id));
    }
    async findByGrupo(grupoId) {
        return api_response_dto_1.ApiResponseDto.success(await this.inscripcionesService.findByGrupo(grupoId));
    }
    async findInscripcionesByEstudiante(estudianteId) {
        return api_response_dto_1.ApiResponseDto.success(await this.inscripcionesService.findByEstudiante(estudianteId));
    }
    async removeInscripcion(id) {
        await this.inscripcionesService.remove(id);
        return api_response_dto_1.ApiResponseDto.success(null, 'Inscripción eliminada exitosamente');
    }
};
exports.MatriculasController = MatriculasController;
__decorate([
    (0, common_1.Post)('matriculas'),
    (0, roles_decorator_1.Roles)(enums_1.Rol.ADMIN),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_matricula_dto_1.CreateMatriculaDto]),
    __metadata("design:returntype", Promise)
], MatriculasController.prototype, "matricular", null);
__decorate([
    (0, common_1.Get)('matriculas'),
    (0, roles_decorator_1.Roles)(enums_1.Rol.ADMIN),
    __param(0, (0, common_1.Query)('estudianteId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MatriculasController.prototype, "findAllMatriculas", null);
__decorate([
    (0, common_1.Get)('matriculas/:id'),
    (0, roles_decorator_1.Roles)(enums_1.Rol.ADMIN, enums_1.Rol.ESTUDIANTE),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MatriculasController.prototype, "findMatriculaById", null);
__decorate([
    (0, common_1.Get)('estudiantes/:estudianteId/matriculas'),
    (0, roles_decorator_1.Roles)(enums_1.Rol.ADMIN, enums_1.Rol.ESTUDIANTE),
    __param(0, (0, common_1.Param)('estudianteId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MatriculasController.prototype, "findByEstudiante", null);
__decorate([
    (0, common_1.Patch)('matriculas/:id/cancelar'),
    (0, roles_decorator_1.Roles)(enums_1.Rol.ADMIN),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MatriculasController.prototype, "cancelar", null);
__decorate([
    (0, common_1.Post)('inscripciones'),
    (0, roles_decorator_1.Roles)(enums_1.Rol.ADMIN, enums_1.Rol.DOCENTE),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_inscripcion_dto_1.CreateInscripcionDto]),
    __metadata("design:returntype", Promise)
], MatriculasController.prototype, "createInscripcion", null);
__decorate([
    (0, common_1.Get)('inscripciones'),
    (0, roles_decorator_1.Roles)(enums_1.Rol.ADMIN, enums_1.Rol.DOCENTE),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MatriculasController.prototype, "findAllInscripciones", null);
__decorate([
    (0, common_1.Get)('inscripciones/:id'),
    (0, roles_decorator_1.Roles)(enums_1.Rol.ADMIN, enums_1.Rol.DOCENTE, enums_1.Rol.ESTUDIANTE),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MatriculasController.prototype, "findInscripcionById", null);
__decorate([
    (0, common_1.Get)('grupos/:grupoId/inscripciones'),
    (0, roles_decorator_1.Roles)(enums_1.Rol.ADMIN, enums_1.Rol.DOCENTE),
    __param(0, (0, common_1.Param)('grupoId', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MatriculasController.prototype, "findByGrupo", null);
__decorate([
    (0, common_1.Get)('estudiantes/:estudianteId/inscripciones'),
    (0, roles_decorator_1.Roles)(enums_1.Rol.ADMIN, enums_1.Rol.ESTUDIANTE),
    __param(0, (0, common_1.Param)('estudianteId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MatriculasController.prototype, "findInscripcionesByEstudiante", null);
__decorate([
    (0, common_1.Delete)('inscripciones/:id'),
    (0, roles_decorator_1.Roles)(enums_1.Rol.ADMIN),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MatriculasController.prototype, "removeInscripcion", null);
exports.MatriculasController = MatriculasController = __decorate([
    (0, common_1.Controller)('courses'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [matriculas_service_1.MatriculasService,
        inscripciones_service_1.InscripcionesService])
], MatriculasController);
//# sourceMappingURL=matriculas.controller.js.map