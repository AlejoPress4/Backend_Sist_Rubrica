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
const rubrics_service_1 = require("../../../rubrics/application/services/rubrics.service");
let ScoresService = class ScoresService {
    evaluacionRepository;
    notaRepository;
    calificacionDetalleRepository;
    rubricsService;
    constructor(evaluacionRepository, notaRepository, calificacionDetalleRepository, rubricsService) {
        this.evaluacionRepository = evaluacionRepository;
        this.notaRepository = notaRepository;
        this.calificacionDetalleRepository = calificacionDetalleRepository;
        this.rubricsService = rubricsService;
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
        let puntaje = dto.puntaje || 0;
        if (dto.escala_id) {
            const escala = await this.rubricsService.findEscalaById(dto.escala_id);
            const criterio = await this.rubricsService.findCriterioById(escala.criterio_id);
            puntaje = Number(escala.valor) * (Number(criterio.peso) / 100);
        }
        const detalle = this.calificacionDetalleRepository.create({
            ...dto,
            puntaje,
            evaluacion: { id: dto.evaluacion_id },
            estudiante: { id: dto.estudiante_id }
        });
        return this.calificacionDetalleRepository.save(detalle);
    }
    async findDetallesByEstudiante(estudiante_id) {
        return this.calificacionDetalleRepository.find({ where: { estudiante: { id: estudiante_id } } });
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
        if (dto.escala_id && dto.escala_id !== detalle.escala?.id) {
            const escala = await this.rubricsService.findEscalaById(dto.escala_id);
            const criterio = await this.rubricsService.findCriterioById(escala.criterio_id);
            detalle.puntaje = Number(escala.valor) * (Number(criterio.peso) / 100);
        }
        return this.calificacionDetalleRepository.save(detalle);
    }
    async removeCalificacionDetalle(id) {
        const detalle = await this.findDetalleById(id);
        await this.calificacionDetalleRepository.remove(detalle);
    }
    async findPromedioByEstudiante(estudiante_id) {
        const detalles = await this.findDetallesByEstudiante(estudiante_id);
        if (detalles.length === 0)
            return 0;
        const promedio = detalles.reduce((acc, detalle) => acc + Number(detalle.puntaje), 0) / detalles.length;
        return promedio;
    }
    async calcularNotaEvaluacionEstudiante(evaluacion_id, estudiante_id) {
        const detalles = await this.calificacionDetalleRepository.find({
            where: {
                evaluacion: { id: evaluacion_id },
                estudiante: { id: estudiante_id }
            }
        });
        const nota = detalles.reduce((acc, det) => acc + Number(det.puntaje), 0);
        return nota;
    }
    async registrarNotaFinalGrupo(grupo_id, estudiante_id, asignaturas_ids) {
        const evaluaciones = await this.evaluacionRepository.createQueryBuilder('ev')
            .where('ev.asignatura_id IN (:...asignaturas_ids)', { asignaturas_ids })
            .getMany();
        let notaFinal = 0;
        for (const ev of evaluaciones) {
            const notaEv = await this.calcularNotaEvaluacionEstudiante(ev.id, estudiante_id);
            notaFinal += notaEv * (Number(ev.peso) / 100);
        }
        const nota = this.notaRepository.create({
            nota_final: notaFinal,
            estudiante_id,
            grupo_id,
            oficial: true,
            fecha_registro: new Date()
        });
        return this.notaRepository.save(nota);
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
        typeorm_2.Repository,
        rubrics_service_1.RubricsService])
], ScoresService);
//# sourceMappingURL=scores.service.js.map