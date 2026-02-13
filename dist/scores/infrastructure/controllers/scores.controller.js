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
exports.ScoresController = void 0;
const common_1 = require("@nestjs/common");
const scores_service_1 = require("../../application/services/scores.service");
const create_evaluacion_dto_1 = require("../../application/dtos/create-evaluacion.dto");
const create_nota_dto_1 = require("../../application/dtos/create-nota.dto");
const create_calificacion_detalle_dto_1 = require("../../application/dtos/create-calificacion-detalle.dto");
let ScoresController = class ScoresController {
    scoresService;
    constructor(scoresService) {
        this.scoresService = scoresService;
    }
    async createEvaluacion(dto) {
    }
    async findAllEvaluaciones() {
    }
    async findEvaluacionById(id) {
    }
    async createNota(dto) {
    }
    async findNotasByEvaluacion(evaluacionId) {
    }
    async createCalificacionDetalle(dto) {
    }
    async findDetallesByNota(notaId) {
    }
};
exports.ScoresController = ScoresController;
__decorate([
    (0, common_1.Post)('evaluaciones'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_evaluacion_dto_1.CreateEvaluacionDto]),
    __metadata("design:returntype", Promise)
], ScoresController.prototype, "createEvaluacion", null);
__decorate([
    (0, common_1.Get)('evaluaciones'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ScoresController.prototype, "findAllEvaluaciones", null);
__decorate([
    (0, common_1.Get)('evaluaciones/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ScoresController.prototype, "findEvaluacionById", null);
__decorate([
    (0, common_1.Post)('notas'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_nota_dto_1.CreateNotaDto]),
    __metadata("design:returntype", Promise)
], ScoresController.prototype, "createNota", null);
__decorate([
    (0, common_1.Get)('evaluaciones/:evaluacionId/notas'),
    __param(0, (0, common_1.Param)('evaluacionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ScoresController.prototype, "findNotasByEvaluacion", null);
__decorate([
    (0, common_1.Post)('calificacion-detalles'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_calificacion_detalle_dto_1.CreateCalificacionDetalleDto]),
    __metadata("design:returntype", Promise)
], ScoresController.prototype, "createCalificacionDetalle", null);
__decorate([
    (0, common_1.Get)('notas/:notaId/detalles'),
    __param(0, (0, common_1.Param)('notaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ScoresController.prototype, "findDetallesByNota", null);
exports.ScoresController = ScoresController = __decorate([
    (0, common_1.Controller)('scores'),
    __metadata("design:paramtypes", [scores_service_1.ScoresService])
], ScoresController);
//# sourceMappingURL=scores.controller.js.map