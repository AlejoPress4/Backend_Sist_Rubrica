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
    async createEvaluacion(dto) {
        const evaluacion = this.evaluacionRepository.create(dto);
        return this.evaluacionRepository.save(evaluacion);
    }
    async findAllEvaluaciones() {
        return this.evaluacionRepository.find();
    }
    async findEvaluacionById(id) {
        const evaluacion = await this.evaluacionRepository.findOne({ where: { id } });
        if (!evaluacion) {
            throw new common_1.NotFoundException(`Evaluación con ID ${id} no encontrada`);
        }
        return evaluacion;
    }
    async findEvaluacionesByAsignatura(asignatura_id) {
        return this.evaluacionRepository.find({ where: { asignatura_id } });
    }
    async findEvaluacionesByRubrica(rubrica_id) {
        return this.evaluacionRepository.find({ where: { rubrica_id } });
    }
    async updateEvaluacion(id, dto) {
        const evaluacion = await this.findEvaluacionById(id);
        Object.assign(evaluacion, dto);
        return this.evaluacionRepository.save(evaluacion);
    }
    async removeEvaluacion(id) {
        const evaluacion = await this.findEvaluacionById(id);
        await this.evaluacionRepository.remove(evaluacion);
    }
    async createNota(dto) {
        const nota = this.notaRepository.create(dto);
        return this.notaRepository.save(nota);
    }
    async findAllNotas() {
        return this.notaRepository.find();
    }
    async findNotaById(id) {
        const nota = await this.notaRepository.findOne({ where: { id } });
        if (!nota) {
            throw new common_1.NotFoundException(`Nota con ID ${id} no encontrada`);
        }
        return nota;
    }
    async findNotasByInscripcion(inscripcion_id) {
        return this.notaRepository.find({ where: { inscripcion_id } });
    }
    async findNotasByEstudiante(estudiante_id) {
        return this.notaRepository.find({ where: { estudiante_id } });
    }
    async updateNota(id, dto) {
        const nota = await this.findNotaById(id);
        Object.assign(nota, dto);
        return this.notaRepository.save(nota);
    }
    async removeNota(id) {
        const nota = await this.findNotaById(id);
        await this.notaRepository.remove(nota);
    }
    async createCalificacionDetalle(dto) {
        const detalle = this.calificacionDetalleRepository.create(dto);
        return this.calificacionDetalleRepository.save(detalle);
    }
    async findAllDetalles() {
        return this.calificacionDetalleRepository.find();
    }
    async findDetalleById(id) {
        const detalle = await this.calificacionDetalleRepository.findOne({ where: { id } });
        if (!detalle) {
            throw new common_1.NotFoundException(`Calificación Detalle con ID ${id} no encontrado`);
        }
        return detalle;
    }
    async updateCalificacionDetalle(id, dto) {
        const detalle = await this.findDetalleById(id);
        Object.assign(detalle, dto);
        return this.calificacionDetalleRepository.save(detalle);
    }
    async removeCalificacionDetalle(id) {
        const detalle = await this.findDetalleById(id);
        await this.calificacionDetalleRepository.remove(detalle);
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