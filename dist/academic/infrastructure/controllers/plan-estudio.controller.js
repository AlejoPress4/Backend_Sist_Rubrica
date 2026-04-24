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
exports.PlanEstudioController = void 0;
const common_1 = require("@nestjs/common");
const plan_estudio_service_1 = require("../../application/services/plan-estudio.service");
const create_plan_estudio_dto_1 = require("../../application/dtos/create-plan-estudio.dto");
const agregar_asignatura_dto_1 = require("../../application/dtos/agregar-asignatura.dto");
const api_response_dto_1 = require("../../../common/dtos/api-response.dto");
const jwt_auth_guard_1 = require("../../../auth/infrastructure/guards/jwt-auth.guard");
const roles_guard_1 = require("../../../auth/infrastructure/guards/roles.guard");
const roles_decorator_1 = require("../../../common/decorators/roles.decorator");
const enums_1 = require("../../../common/enums");
let PlanEstudioController = class PlanEstudioController {
    planService;
    constructor(planService) {
        this.planService = planService;
    }
    async create(dto) {
        const data = await this.planService.create(dto);
        return api_response_dto_1.ApiResponseDto.created(data, 'Plan de estudio creado (borrador)');
    }
    async findAll(carreraId) {
        const data = carreraId
            ? await this.planService.findByCarrera(carreraId)
            : await this.planService.findAll();
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async findVigente(carreraId) {
        const data = await this.planService.findVigenteByCarrera(carreraId);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async findById(id) {
        const data = await this.planService.findById(id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async agregarAsignatura(id, dto) {
        const data = await this.planService.agregarAsignatura(id, dto);
        return api_response_dto_1.ApiResponseDto.created(data, 'Asignatura agregada al plan');
    }
    async removerAsignatura(id, asignaturaId) {
        await this.planService.removerAsignatura(id, asignaturaId);
        return api_response_dto_1.ApiResponseDto.success(null, 'Asignatura removida del plan');
    }
    async publicar(id) {
        const data = await this.planService.publicar(id);
        return api_response_dto_1.ApiResponseDto.success(data, 'Plan de estudio publicado y vigente');
    }
    async remove(id) {
        await this.planService.remove(id);
        return api_response_dto_1.ApiResponseDto.success(null, 'Plan de estudio eliminado');
    }
};
exports.PlanEstudioController = PlanEstudioController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(enums_1.Rol.ADMIN),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_plan_estudio_dto_1.CreatePlanEstudioDto]),
    __metadata("design:returntype", Promise)
], PlanEstudioController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(enums_1.Rol.ADMIN, enums_1.Rol.DOCENTE, enums_1.Rol.ESTUDIANTE),
    __param(0, (0, common_1.Query)('carreraId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PlanEstudioController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('vigente'),
    (0, roles_decorator_1.Roles)(enums_1.Rol.ADMIN, enums_1.Rol.DOCENTE, enums_1.Rol.ESTUDIANTE),
    __param(0, (0, common_1.Query)('carreraId', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PlanEstudioController.prototype, "findVigente", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(enums_1.Rol.ADMIN, enums_1.Rol.DOCENTE, enums_1.Rol.ESTUDIANTE),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PlanEstudioController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(':id/asignaturas'),
    (0, roles_decorator_1.Roles)(enums_1.Rol.ADMIN),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, agregar_asignatura_dto_1.AgregarAsignaturaAlPlanDto]),
    __metadata("design:returntype", Promise)
], PlanEstudioController.prototype, "agregarAsignatura", null);
__decorate([
    (0, common_1.Delete)(':id/asignaturas/:asignaturaId'),
    (0, roles_decorator_1.Roles)(enums_1.Rol.ADMIN),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Param)('asignaturaId', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], PlanEstudioController.prototype, "removerAsignatura", null);
__decorate([
    (0, common_1.Patch)(':id/publicar'),
    (0, roles_decorator_1.Roles)(enums_1.Rol.ADMIN),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PlanEstudioController.prototype, "publicar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(enums_1.Rol.ADMIN),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PlanEstudioController.prototype, "remove", null);
exports.PlanEstudioController = PlanEstudioController = __decorate([
    (0, common_1.Controller)('academic/planes'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [plan_estudio_service_1.PlanEstudioService])
], PlanEstudioController);
//# sourceMappingURL=plan-estudio.controller.js.map