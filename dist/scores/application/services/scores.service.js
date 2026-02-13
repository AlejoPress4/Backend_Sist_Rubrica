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
exports.ScoresService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const evaluacion_entity_1 = require("../../domain/entities/evaluacion.entity");
const nota_entity_1 = require("../../domain/entities/nota.entity");
const calificacion_detalle_entity_1 = require("../../domain/entities/calificacion-detalle.entity");
let ScoresService = class ScoresService {
    evaluacionRepository;
    notaRepository;
    calificacionDetalleRepository;
    constructor(evaluacionRepository, notaRepository, calificacionDetalleRepository) {
        this.evaluacionRepository = evaluacionRepository;
        this.notaRepository = notaRepository;
        this.calificacionDetalleRepository = calificacionDetalleRepository;
    }
    async createEvaluacion(data) {
        throw new Error('Method not implemented.');
    }
    async findAllEvaluaciones() {
        throw new Error('Method not implemented.');
    }
    async findEvaluacionById(id) {
        throw new Error('Method not implemented.');
    }
    async createNota(data) {
        throw new Error('Method not implemented.');
    }
    async findNotasByEvaluacion(evaluacionId) {
        throw new Error('Method not implemented.');
    }
    async createCalificacionDetalle(data) {
        throw new Error('Method not implemented.');
    }
    async findDetallesByNota(notaId) {
        throw new Error('Method not implemented.');
    }
};
exports.ScoresService = ScoresService;
exports.ScoresService = ScoresService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(evaluacion_entity_1.Evaluacion)),
    __param(1, (0, typeorm_1.InjectRepository)(nota_entity_1.Nota)),
    __param(2, (0, typeorm_1.InjectRepository)(calificacion_detalle_entity_1.CalificacionDetalle)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ScoresService);
//# sourceMappingURL=scores.service.js.map