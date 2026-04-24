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
exports.InscripcionesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const inscripcion_entity_1 = require("../../domain/entities/inscripcion.entity");
const grupo_entity_1 = require("../../domain/entities/grupo.entity");
const estudiante_entity_1 = require("../../../users/domain/entities/estudiante.entity");
let InscripcionesService = class InscripcionesService {
    inscripcionRepository;
    grupoRepository;
    estudianteRepository;
    constructor(inscripcionRepository, grupoRepository, estudianteRepository) {
        this.inscripcionRepository = inscripcionRepository;
        this.grupoRepository = grupoRepository;
        this.estudianteRepository = estudianteRepository;
    }
    async create(dto) {
        const estudiante = await this.estudianteRepository.findOne({ where: { id: dto.estudiante_id } });
        if (!estudiante) {
            throw new common_1.NotFoundException(`Estudiante con ID ${dto.estudiante_id} no encontrado`);
        }
        const grupo = await this.grupoRepository.findOne({ where: { id: dto.grupo_id } });
        if (!grupo) {
            throw new common_1.NotFoundException(`Grupo con ID ${dto.grupo_id} no encontrado`);
        }
        const existente = await this.inscripcionRepository.findOne({
            where: { estudiante_id: dto.estudiante_id, grupo_id: dto.grupo_id },
        });
        if (existente) {
            throw new common_1.ConflictException('El estudiante ya está inscrito en este grupo');
        }
        const inscripcion = this.inscripcionRepository.create({
            estudiante_id: dto.estudiante_id,
            grupo_id: dto.grupo_id,
        });
        return this.inscripcionRepository.save(inscripcion);
    }
    async findAll() {
        return this.inscripcionRepository.find({ relations: ['estudiante', 'grupo'] });
    }
    async findById(id) {
        const inscripcion = await this.inscripcionRepository.findOne({
            where: { id },
            relations: ['estudiante', 'grupo'],
        });
        if (!inscripcion) {
            throw new common_1.NotFoundException(`Inscripción con ID ${id} no encontrada`);
        }
        return inscripcion;
    }
    async findByGrupo(grupoId) {
        return this.inscripcionRepository.find({
            where: { grupo_id: grupoId },
            relations: ['estudiante'],
        });
    }
    async findByEstudiante(estudianteId) {
        return this.inscripcionRepository.find({
            where: { estudiante_id: estudianteId },
            relations: ['grupo', 'grupo.asignatura', 'grupo.semestre'],
        });
    }
    async remove(id) {
        const inscripcion = await this.findById(id);
        await this.inscripcionRepository.remove(inscripcion);
    }
};
exports.InscripcionesService = InscripcionesService;
exports.InscripcionesService = InscripcionesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(inscripcion_entity_1.Inscripcion)),
    __param(1, (0, typeorm_1.InjectRepository)(grupo_entity_1.Grupo)),
    __param(2, (0, typeorm_1.InjectRepository)(estudiante_entity_1.Estudiante)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], InscripcionesService);
//# sourceMappingURL=inscripciones.service.js.map