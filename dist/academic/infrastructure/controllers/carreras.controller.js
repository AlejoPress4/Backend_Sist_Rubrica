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
exports.CarrerasController = void 0;
const common_1 = require("@nestjs/common");
const carreras_service_1 = require("../../application/services/carreras.service");
const create_carrera_dto_1 = require("../../application/dtos/create-carrera.dto");
const update_carrera_dto_1 = require("../../application/dtos/update-carrera.dto");
const api_response_dto_1 = require("../../../common/dtos/api-response.dto");
const jwt_auth_guard_1 = require("../../../auth/infrastructure/guards/jwt-auth.guard");
const roles_guard_1 = require("../../../auth/infrastructure/guards/roles.guard");
const roles_decorator_1 = require("../../../common/decorators/roles.decorator");
const enums_1 = require("../../../common/enums");
let CarrerasController = class CarrerasController {
    carrerasService;
    constructor(carrerasService) {
        this.carrerasService = carrerasService;
    }
    async create(dto) {
        const data = await this.carrerasService.create(dto);
        return api_response_dto_1.ApiResponseDto.created(data, 'Carrera creada exitosamente');
    }
    async findAll() {
        const data = await this.carrerasService.findAll();
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async findById(id) {
        const data = await this.carrerasService.findById(id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async update(id, dto) {
        const data = await this.carrerasService.update(id, dto);
        return api_response_dto_1.ApiResponseDto.success(data, 'Carrera actualizada exitosamente');
    }
    async archivar(id) {
        const data = await this.carrerasService.archivar(id);
        return api_response_dto_1.ApiResponseDto.success(data, 'Carrera archivada exitosamente');
    }
    async remove(id) {
        await this.carrerasService.remove(id);
        return api_response_dto_1.ApiResponseDto.success(null, 'Carrera eliminada exitosamente');
    }
};
exports.CarrerasController = CarrerasController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(enums_1.Rol.ADMIN),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_carrera_dto_1.CreateCarreraDto]),
    __metadata("design:returntype", Promise)
], CarrerasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(enums_1.Rol.ADMIN, enums_1.Rol.DOCENTE, enums_1.Rol.ESTUDIANTE),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarrerasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(enums_1.Rol.ADMIN, enums_1.Rol.DOCENTE, enums_1.Rol.ESTUDIANTE),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarrerasController.prototype, "findById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(enums_1.Rol.ADMIN),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_carrera_dto_1.UpdateCarreraDto]),
    __metadata("design:returntype", Promise)
], CarrerasController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/archivar'),
    (0, roles_decorator_1.Roles)(enums_1.Rol.ADMIN),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarrerasController.prototype, "archivar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(enums_1.Rol.ADMIN),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarrerasController.prototype, "remove", null);
exports.CarrerasController = CarrerasController = __decorate([
    (0, common_1.Controller)('academic/carreras'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [carreras_service_1.CarrerasService])
], CarrerasController);
//# sourceMappingURL=carreras.controller.js.map