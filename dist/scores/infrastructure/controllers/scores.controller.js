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
const update_evaluacion_dto_1 = require("../../application/dtos/update-evaluacion.dto");
const create_nota_dto_1 = require("../../application/dtos/create-nota.dto");
const update_nota_dto_1 = require("../../application/dtos/update-nota.dto");
const create_calificacion_detalle_dto_1 = require("../../application/dtos/create-calificacion-detalle.dto");
const update_calificacion_detalle_dto_1 = require("../../application/dtos/update-calificacion-detalle.dto");
const api_response_dto_1 = require("../../../common/dtos/api-response.dto");
let ScoresController = class ScoresController {
    scoresService;
    constructor(scoresService) {
        this.scoresService = scoresService;
    }
    async createEvaluacion(dto) {
        const data = await this.scoresService.createEvaluacion(dto);
        return api_response_dto_1.ApiResponseDto.created(data, 'Evaluación creada exitosamente');
    }
    async findAllEvaluaciones() {
        const data = await this.scoresService.findAllEvaluaciones();
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async findEvaluacionById(id) {
        const data = await this.scoresService.findEvaluacionById(id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async findEvaluacionesByAsignatura(asignatura_id) {
        const data = await this.scoresService.findEvaluacionesByAsignatura(asignatura_id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async findEvaluacionesByRubrica(rubrica_id) {
        const data = await this.scoresService.findEvaluacionesByRubrica(rubrica_id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async updateEvaluacion(id, dto) {
        const data = await this.scoresService.updateEvaluacion(id, dto);
        return api_response_dto_1.ApiResponseDto.success(data, 'Evaluación actualizada exitosamente');
    }
    async removeEvaluacion(id) {
        await this.scoresService.removeEvaluacion(id);
        return api_response_dto_1.ApiResponseDto.success(null, 'Evaluación eliminada exitosamente');
    }
    async createNota(dto) {
        const data = await this.scoresService.createNota(dto);
        return api_response_dto_1.ApiResponseDto.created(data, 'Nota creada exitosamente');
    }
    async findAllNotas() {
        const data = await this.scoresService.findAllNotas();
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async findNotaById(id) {
        const data = await this.scoresService.findNotaById(id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async findNotasByInscripcion(inscripcion_id) {
        const data = await this.scoresService.findNotasByInscripcion(inscripcion_id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async findNotasByEstudiante(estudiante_id) {
        const data = await this.scoresService.findNotasByEstudiante(estudiante_id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async updateNota(id, dto) {
        const data = await this.scoresService.updateNota(id, dto);
        return api_response_dto_1.ApiResponseDto.success(data, 'Nota actualizada exitosamente');
    }
    async removeNota(id) {
        await this.scoresService.removeNota(id);
        return api_response_dto_1.ApiResponseDto.success(null, 'Nota eliminada exitosamente');
    }
    async createCalificacionDetalle(dto) {
        const data = await this.scoresService.createCalificacionDetalle(dto);
        return api_response_dto_1.ApiResponseDto.created(data, 'Calificación detalle creada exitosamente');
    }
    async findAllDetalles() {
        const data = await this.scoresService.findAllDetalles();
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async findDetalleById(id) {
        const data = await this.scoresService.findDetalleById(id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async findDetallesByEstudiante(estudiante_id) {
        const data = await this.scoresService.findDetallesByEstudiante(estudiante_id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async findPromedioByEstudiante(estudiante_id) {
        const data = await this.scoresService.findPromedioByEstudiante(estudiante_id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async updateCalificacionDetalle(id, dto) {
        const data = await this.scoresService.updateCalificacionDetalle(id, dto);
        return api_response_dto_1.ApiResponseDto.success(data, 'Calificación detalle actualizada exitosamente');
    }
    async removeCalificacionDetalle(id) {
        await this.scoresService.removeCalificacionDetalle(id);
        return api_response_dto_1.ApiResponseDto.success(null, 'Calificación detalle eliminada exitosamente');
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
    (0, common_1.Get)('asignaturas/:asignatura_id/evaluaciones'),
    __param(0, (0, common_1.Param)('asignatura_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ScoresController.prototype, "findEvaluacionesByAsignatura", null);
__decorate([
    (0, common_1.Get)('rubricas/:rubrica_id/evaluaciones'),
    __param(0, (0, common_1.Param)('rubrica_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ScoresController.prototype, "findEvaluacionesByRubrica", null);
__decorate([
    (0, common_1.Put)('evaluaciones/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_evaluacion_dto_1.UpdateEvaluacionDto]),
    __metadata("design:returntype", Promise)
], ScoresController.prototype, "updateEvaluacion", null);
__decorate([
    (0, common_1.Delete)('evaluaciones/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ScoresController.prototype, "removeEvaluacion", null);
__decorate([
    (0, common_1.Post)('notas'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_nota_dto_1.CreateNotaDto]),
    __metadata("design:returntype", Promise)
], ScoresController.prototype, "createNota", null);
__decorate([
    (0, common_1.Get)('notas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ScoresController.prototype, "findAllNotas", null);
__decorate([
    (0, common_1.Get)('notas/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ScoresController.prototype, "findNotaById", null);
__decorate([
    (0, common_1.Get)('inscripciones/:inscripcion_id/notas'),
    __param(0, (0, common_1.Param)('inscripcion_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ScoresController.prototype, "findNotasByInscripcion", null);
__decorate([
    (0, common_1.Get)('estudiantes/:estudiante_id/notas'),
    __param(0, (0, common_1.Param)('estudiante_id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ScoresController.prototype, "findNotasByEstudiante", null);
__decorate([
    (0, common_1.Put)('notas/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_nota_dto_1.UpdateNotaDto]),
    __metadata("design:returntype", Promise)
], ScoresController.prototype, "updateNota", null);
__decorate([
    (0, common_1.Delete)('notas/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ScoresController.prototype, "removeNota", null);
__decorate([
    (0, common_1.Post)('calificacion-detalles'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_calificacion_detalle_dto_1.CreateCalificacionDetalleDto]),
    __metadata("design:returntype", Promise)
], ScoresController.prototype, "createCalificacionDetalle", null);
__decorate([
    (0, common_1.Get)('calificacion-detalles'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ScoresController.prototype, "findAllDetalles", null);
__decorate([
    (0, common_1.Get)('calificacion-detalles/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ScoresController.prototype, "findDetalleById", null);
__decorate([
    (0, common_1.Get)('estudiantes/:estudiante_id/calificacion-detalles'),
    __param(0, (0, common_1.Param)('estudiante_id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ScoresController.prototype, "findDetallesByEstudiante", null);
__decorate([
    (0, common_1.Get)('estudiantes/:estudiante_id/promedio'),
    __param(0, (0, common_1.Param)('estudiante_id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ScoresController.prototype, "findPromedioByEstudiante", null);
__decorate([
    (0, common_1.Put)('calificacion-detalles/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_calificacion_detalle_dto_1.UpdateCalificacionDetalleDto]),
    __metadata("design:returntype", Promise)
], ScoresController.prototype, "updateCalificacionDetalle", null);
__decorate([
    (0, common_1.Delete)('calificacion-detalles/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ScoresController.prototype, "removeCalificacionDetalle", null);
exports.ScoresController = ScoresController = __decorate([
    (0, common_1.Controller)('scores'),
    __metadata("design:paramtypes", [scores_service_1.ScoresService])
], ScoresController);
//# sourceMappingURL=scores.controller.js.map