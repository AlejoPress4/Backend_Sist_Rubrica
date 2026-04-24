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
exports.GruposController = void 0;
const common_1 = require("@nestjs/common");
const grupos_service_1 = require("../../application/services/grupos.service");
const create_grupo_dto_1 = require("../../application/dtos/create-grupo.dto");
const update_grupo_dto_1 = require("../../application/dtos/update-grupo.dto");
const asignar_docente_dto_1 = require("../../application/dtos/asignar-docente.dto");
const api_response_dto_1 = require("../../../common/dtos/api-response.dto");
const jwt_auth_guard_1 = require("../../../auth/infrastructure/guards/jwt-auth.guard");
const roles_guard_1 = require("../../../auth/infrastructure/guards/roles.guard");
const roles_decorator_1 = require("../../../common/decorators/roles.decorator");
const enums_1 = require("../../../common/enums");
let GruposController = class GruposController {
    gruposService;
    constructor(gruposService) {
        this.gruposService = gruposService;
    }
    async create(dto) {
        const data = await this.gruposService.create(dto);
        return api_response_dto_1.ApiResponseDto.created(data, 'Grupo creado exitosamente');
    }
    async findAll(semestreId, docenteId) {
        if (docenteId) {
            return api_response_dto_1.ApiResponseDto.success(await this.gruposService.findByDocente(+docenteId));
        }
        if (semestreId) {
            return api_response_dto_1.ApiResponseDto.success(await this.gruposService.findBySemestre(semestreId));
        }
        return api_response_dto_1.ApiResponseDto.success(await this.gruposService.findAll());
    }
    async misGrupos(req) {
        const user = req.user;
        if (!user.docenteId) {
            return api_response_dto_1.ApiResponseDto.success([]);
        }
        const data = await this.gruposService.findByDocente(user.docenteId);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async findById(id) {
        const data = await this.gruposService.findById(id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async update(id, dto) {
        const data = await this.gruposService.update(id, dto);
        return api_response_dto_1.ApiResponseDto.success(data, 'Grupo actualizado exitosamente');
    }
    async asignarDocente(id, dto) {
        const data = await this.gruposService.asignarDocente(id, dto);
        return api_response_dto_1.ApiResponseDto.success(data, 'Docente asignado al grupo');
    }
    async quitarDocente(id, docenteId) {
        const data = await this.gruposService.quitarDocente(id, docenteId);
        return api_response_dto_1.ApiResponseDto.success(data, 'Docente removido del grupo');
    }
    async remove(id) {
        await this.gruposService.remove(id);
        return api_response_dto_1.ApiResponseDto.success(null, 'Grupo eliminado exitosamente');
    }
};
exports.GruposController = GruposController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(enums_1.Rol.ADMIN),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_grupo_dto_1.CreateGrupoDto]),
    __metadata("design:returntype", Promise)
], GruposController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(enums_1.Rol.ADMIN, enums_1.Rol.DOCENTE),
    __param(0, (0, common_1.Query)('semestreId')),
    __param(1, (0, common_1.Query)('docenteId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], GruposController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('mis-grupos'),
    (0, roles_decorator_1.Roles)(enums_1.Rol.DOCENTE),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GruposController.prototype, "misGrupos", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(enums_1.Rol.ADMIN, enums_1.Rol.DOCENTE, enums_1.Rol.ESTUDIANTE),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GruposController.prototype, "findById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(enums_1.Rol.ADMIN),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_grupo_dto_1.UpdateGrupoDto]),
    __metadata("design:returntype", Promise)
], GruposController.prototype, "update", null);
__decorate([
    (0, common_1.Post)(':id/docentes'),
    (0, roles_decorator_1.Roles)(enums_1.Rol.ADMIN),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, asignar_docente_dto_1.AsignarDocenteDto]),
    __metadata("design:returntype", Promise)
], GruposController.prototype, "asignarDocente", null);
__decorate([
    (0, common_1.Delete)(':id/docentes/:docenteId'),
    (0, roles_decorator_1.Roles)(enums_1.Rol.ADMIN),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Param)('docenteId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], GruposController.prototype, "quitarDocente", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(enums_1.Rol.ADMIN),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GruposController.prototype, "remove", null);
exports.GruposController = GruposController = __decorate([
    (0, common_1.Controller)('courses/grupos'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [grupos_service_1.GruposService])
], GruposController);
//# sourceMappingURL=grupos.controller.js.map