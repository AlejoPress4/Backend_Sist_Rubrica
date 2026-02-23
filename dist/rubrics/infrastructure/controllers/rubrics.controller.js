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
exports.RubricsController = void 0;
const common_1 = require("@nestjs/common");
const rubrics_service_1 = require("../../application/services/rubrics.service");
const create_rubrica_dto_1 = require("../../application/dtos/create-rubrica.dto");
const update_rubrica_dto_1 = require("../../application/dtos/update-rubrica.dto");
const create_criterio_dto_1 = require("../../application/dtos/create-criterio.dto");
const update_criterio_dto_1 = require("../../application/dtos/update-criterio.dto");
const create_escala_dto_1 = require("../../application/dtos/create-escala.dto");
const update_escala_dto_1 = require("../../application/dtos/update-escala.dto");
const api_response_dto_1 = require("../../../common/dtos/api-response.dto");
let RubricsController = class RubricsController {
    rubricsService;
    constructor(rubricsService) {
        this.rubricsService = rubricsService;
    }
    async createRubrica(dto) {
        const data = await this.rubricsService.createRubrica(dto);
        return api_response_dto_1.ApiResponseDto.created(data, 'Rúbrica creada exitosamente');
    }
    async findAllRubricas() {
        const data = await this.rubricsService.findAllRubricas();
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async findRubricaById(id) {
        const data = await this.rubricsService.findRubricaById(id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async updateRubrica(id, dto) {
        const data = await this.rubricsService.updateRubrica(id, dto);
        return api_response_dto_1.ApiResponseDto.success(data, 'Rúbrica actualizada exitosamente');
    }
    async removeRubrica(id) {
        await this.rubricsService.removeRubrica(id);
        return api_response_dto_1.ApiResponseDto.success(null, 'Rúbrica eliminada exitosamente');
    }
    async createCriterio(rubrica_id, dto) {
        const data = await this.rubricsService.createCriterio({ ...dto, rubrica_id });
        return api_response_dto_1.ApiResponseDto.created(data, 'Criterio creado exitosamente');
    }
    async findCriteriosByRubrica(rubrica_id) {
        const data = await this.rubricsService.findCriteriosByRubrica(rubrica_id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async findCriterioById(id) {
        const data = await this.rubricsService.findCriterioById(id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async updateCriterio(id, dto) {
        const data = await this.rubricsService.updateCriterio(id, dto);
        return api_response_dto_1.ApiResponseDto.success(data, 'Criterio actualizado exitosamente');
    }
    async removeCriterio(id) {
        await this.rubricsService.removeCriterio(id);
        return api_response_dto_1.ApiResponseDto.success(null, 'Criterio eliminado exitosamente');
    }
    async createEscala(criterio_id, dto) {
        const data = await this.rubricsService.createEscala({ ...dto, criterio_id });
        return api_response_dto_1.ApiResponseDto.created(data, 'Escala creada exitosamente');
    }
    async findEscalasByCriterio(criterio_id) {
        const data = await this.rubricsService.findEscalasByCriterio(criterio_id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async findEscalaById(id) {
        const data = await this.rubricsService.findEscalaById(id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async updateEscala(id, dto) {
        const data = await this.rubricsService.updateEscala(id, dto);
        return api_response_dto_1.ApiResponseDto.success(data, 'Escala actualizada exitosamente');
    }
    async removeEscala(id) {
        await this.rubricsService.removeEscala(id);
        return api_response_dto_1.ApiResponseDto.success(null, 'Escala eliminada exitosamente');
    }
};
exports.RubricsController = RubricsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_rubrica_dto_1.CreateRubricaDto]),
    __metadata("design:returntype", Promise)
], RubricsController.prototype, "createRubrica", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RubricsController.prototype, "findAllRubricas", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RubricsController.prototype, "findRubricaById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_rubrica_dto_1.UpdateRubricaDto]),
    __metadata("design:returntype", Promise)
], RubricsController.prototype, "updateRubrica", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RubricsController.prototype, "removeRubrica", null);
__decorate([
    (0, common_1.Post)(':rubrica_id/criterios'),
    __param(0, (0, common_1.Param)('rubrica_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_criterio_dto_1.CreateCriterioDto]),
    __metadata("design:returntype", Promise)
], RubricsController.prototype, "createCriterio", null);
__decorate([
    (0, common_1.Get)(':rubrica_id/criterios'),
    __param(0, (0, common_1.Param)('rubrica_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RubricsController.prototype, "findCriteriosByRubrica", null);
__decorate([
    (0, common_1.Get)('criterios/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RubricsController.prototype, "findCriterioById", null);
__decorate([
    (0, common_1.Put)('criterios/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_criterio_dto_1.UpdateCriterioDto]),
    __metadata("design:returntype", Promise)
], RubricsController.prototype, "updateCriterio", null);
__decorate([
    (0, common_1.Delete)('criterios/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RubricsController.prototype, "removeCriterio", null);
__decorate([
    (0, common_1.Post)('criterios/:criterio_id/escalas'),
    __param(0, (0, common_1.Param)('criterio_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_escala_dto_1.CreateEscalaDto]),
    __metadata("design:returntype", Promise)
], RubricsController.prototype, "createEscala", null);
__decorate([
    (0, common_1.Get)('criterios/:criterio_id/escalas'),
    __param(0, (0, common_1.Param)('criterio_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RubricsController.prototype, "findEscalasByCriterio", null);
__decorate([
    (0, common_1.Get)('escalas/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RubricsController.prototype, "findEscalaById", null);
__decorate([
    (0, common_1.Put)('escalas/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_escala_dto_1.UpdateEscalaDto]),
    __metadata("design:returntype", Promise)
], RubricsController.prototype, "updateEscala", null);
__decorate([
    (0, common_1.Delete)('escalas/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RubricsController.prototype, "removeEscala", null);
exports.RubricsController = RubricsController = __decorate([
    (0, common_1.Controller)('rubrics'),
    __metadata("design:paramtypes", [rubrics_service_1.RubricsService])
], RubricsController);
//# sourceMappingURL=rubrics.controller.js.map