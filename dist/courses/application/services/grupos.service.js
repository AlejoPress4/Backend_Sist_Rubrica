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
exports.GruposService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const event_emitter_1 = require("@nestjs/event-emitter");
const grupo_entity_1 = require("../../domain/entities/grupo.entity");
const docente_entity_1 = require("../../../users/domain/entities/docente.entity");
const asignatura_entity_1 = require("../../../academic/domain/entities/asignatura.entity");
const semestre_entity_1 = require("../../../academic/domain/entities/semestre.entity");
const enums_1 = require("../../../common/enums");
const calificacion_detalle_entity_1 = require("../../../scores/domain/entities/calificacion-detalle.entity");
let GruposService = class GruposService {
    grupoRepository;
    docenteRepository;
    asignaturaRepository;
    semestreRepository;
    calificacionDetalleRepository;
    eventEmitter;
    constructor(grupoRepository, docenteRepository, asignaturaRepository, semestreRepository, calificacionDetalleRepository, eventEmitter) {
        this.grupoRepository = grupoRepository;
        this.docenteRepository = docenteRepository;
        this.asignaturaRepository = asignaturaRepository;
        this.semestreRepository = semestreRepository;
        this.calificacionDetalleRepository = calificacionDetalleRepository;
        this.eventEmitter = eventEmitter;
    }
    async create(dto) {
        const semestre = await this.semestreRepository.findOne({ where: { id: dto.semestre_id } });
        if (!semestre) {
            throw new common_1.NotFoundException(`Semestre con ID ${dto.semestre_id} no encontrado`);
        }
        if (semestre.estado !== enums_1.EstadoSemestre.ACTIVO) {
            throw new common_1.BadRequestException('Solo se pueden crear grupos en semestres ACTIVOS');
        }
        const asignatura = await this.asignaturaRepository.findOne({ where: { id: dto.asignatura_id } });
        if (!asignatura) {
            throw new common_1.NotFoundException(`Asignatura con ID ${dto.asignatura_id} no encontrada`);
        }
        const docentes = await this.docenteRepository.find({
            where: dto.docentesIds.map((id) => ({ id })),
        });
        if (docentes.length !== dto.docentesIds.length) {
            throw new common_1.NotFoundException('Alguno de los docentes indicados no existe');
        }
        const grupo = this.grupoRepository.create({
            codigo: dto.codigo,
            nombre: dto.nombre,
            asignatura_id: dto.asignatura_id,
            semestre_id: dto.semestre_id,
            docentes,
        });
        const saved = await this.grupoRepository.save(grupo);
        docentes.forEach((docente) => {
            this.eventEmitter.emit('grupo.docente.asignado', {
                grupoId: saved.id,
                docenteId: docente.id,
            });
        });
        return saved;
    }
    async findAll() {
        return this.grupoRepository.find({ relations: ['docentes', 'asignatura', 'semestre'] });
    }
    async findById(id) {
        const grupo = await this.grupoRepository.findOne({
            where: { id },
            relations: ['docentes', 'asignatura', 'semestre', 'inscripciones'],
        });
        if (!grupo) {
            throw new common_1.NotFoundException(`Grupo con ID ${id} no encontrado`);
        }
        return grupo;
    }
    async findByDocente(docenteId) {
        return this.grupoRepository
            .createQueryBuilder('grupo')
            .innerJoinAndSelect('grupo.docentes', 'docente', 'docente.id = :docenteId', { docenteId })
            .leftJoinAndSelect('grupo.asignatura', 'asignatura')
            .leftJoinAndSelect('grupo.semestre', 'semestre')
            .getMany();
    }
    async findBySemestre(semestreId) {
        return this.grupoRepository.find({
            where: { semestre_id: semestreId },
            relations: ['docentes', 'asignatura'],
        });
    }
    async update(id, dto) {
        const grupo = await this.findById(id);
        Object.assign(grupo, dto);
        return this.grupoRepository.save(grupo);
    }
    async asignarDocente(grupoId, dto) {
        const grupo = await this.findById(grupoId);
        if (grupo.semestre.estado !== enums_1.EstadoSemestre.ACTIVO) {
            throw new common_1.BadRequestException('Solo se puede asignar docentes a grupos en semestre ACTIVO');
        }
        const yaAsignado = grupo.docentes.some((d) => d.id === dto.docenteId);
        if (yaAsignado) {
            throw new common_1.ConflictException('El docente ya está asignado a este grupo');
        }
        const docente = await this.docenteRepository.findOne({ where: { id: dto.docenteId } });
        if (!docente) {
            throw new common_1.NotFoundException(`Docente con ID ${dto.docenteId} no encontrado`);
        }
        grupo.docentes.push(docente);
        const saved = await this.grupoRepository.save(grupo);
        this.eventEmitter.emit('grupo.docente.asignado', {
            grupoId: saved.id,
            docenteId: docente.id,
        });
        return saved;
    }
    async quitarDocente(grupoId, docenteId) {
        const grupo = await this.findById(grupoId);
        const calificaciones = await this.calificacionDetalleRepository
            .createQueryBuilder('detalle')
            .innerJoin('detalle.evaluacion', 'evaluacion')
            .where('evaluacion.grupo_id = :grupoId', { grupoId })
            .getCount()
            .catch(() => 0);
        if (calificaciones > 0) {
            throw new common_1.ConflictException('No se puede quitar el docente: ya existen calificaciones en el grupo');
        }
        grupo.docentes = grupo.docentes.filter((d) => d.id !== docenteId);
        return this.grupoRepository.save(grupo);
    }
    async remove(id) {
        const grupo = await this.findById(id);
        await this.grupoRepository.remove(grupo);
    }
};
exports.GruposService = GruposService;
exports.GruposService = GruposService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(grupo_entity_1.Grupo)),
    __param(1, (0, typeorm_1.InjectRepository)(docente_entity_1.Docente)),
    __param(2, (0, typeorm_1.InjectRepository)(asignatura_entity_1.Asignatura)),
    __param(3, (0, typeorm_1.InjectRepository)(semestre_entity_1.Semestre)),
    __param(4, (0, typeorm_1.InjectRepository)(calificacion_detalle_entity_1.CalificacionDetalle)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        event_emitter_1.EventEmitter2])
], GruposService);
//# sourceMappingURL=grupos.service.js.map