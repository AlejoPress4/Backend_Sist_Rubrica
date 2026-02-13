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
const create_escala_dto_1 = require("../../application/dtos/create-escala.dto");
let RubricsController = class RubricsController {
    rubricsService;
    constructor(rubricsService) {
        this.rubricsService = rubricsService;
    }
    async createRubrica(dto) {
        return this.rubricsService.createRubrica(dto);
    }
    async findAllRubricas() {
        return this.rubricsService.findAllRubricas();
    }
    async findRubricaById(id) {
        return this.rubricsService.findRubricaById(id);
    }
    async updateRubrica(id, dto) {
        return this.rubricsService.updateRubrica(id, dto);
    }
    async removeRubrica(id) {
        return this.rubricsService.removeRubrica(id);
    }
    async createCriterio(rubricaId, dto) {
    }
    async findCriteriosByRubrica(rubricaId) {
    }
    async createEscala(criterioId, dto) {
    }
    async findEscalasByCriterio(criterioId) {
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
    (0, common_1.Post)(':rubricaId/criterios'),
    __param(0, (0, common_1.Param)('rubricaId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_criterio_dto_1.CreateCriterioDto]),
    __metadata("design:returntype", Promise)
], RubricsController.prototype, "createCriterio", null);
__decorate([
    (0, common_1.Get)(':rubricaId/criterios'),
    __param(0, (0, common_1.Param)('rubricaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RubricsController.prototype, "findCriteriosByRubrica", null);
__decorate([
    (0, common_1.Post)('criterios/:criterioId/escalas'),
    __param(0, (0, common_1.Param)('criterioId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_escala_dto_1.CreateEscalaDto]),
    __metadata("design:returntype", Promise)
], RubricsController.prototype, "createEscala", null);
__decorate([
    (0, common_1.Get)('criterios/:criterioId/escalas'),
    __param(0, (0, common_1.Param)('criterioId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RubricsController.prototype, "findEscalasByCriterio", null);
exports.RubricsController = RubricsController = __decorate([
    (0, common_1.Controller)('rubrics'),
    __metadata("design:paramtypes", [rubrics_service_1.RubricsService])
], RubricsController);
//# sourceMappingURL=rubrics.controller.js.map