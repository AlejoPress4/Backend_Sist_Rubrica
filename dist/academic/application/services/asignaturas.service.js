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
exports.AsignaturasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const asignatura_entity_1 = require("../../domain/entities/asignatura.entity");
let AsignaturasService = class AsignaturasService {
    asignaturaRepository;
    constructor(asignaturaRepository) {
        this.asignaturaRepository = asignaturaRepository;
    }
    async create(dto) {
        const existente = await this.asignaturaRepository.findOne({ where: { codigo: dto.codigo } });
        if (existente) {
            throw new common_1.ConflictException(`Ya existe una asignatura con el código ${dto.codigo}`);
        }
        const asignatura = this.asignaturaRepository.create(dto);
        return this.asignaturaRepository.save(asignatura);
    }
    async findAll() {
        return this.asignaturaRepository.find();
    }
    async findById(id) {
        const asignatura = await this.asignaturaRepository.findOne({ where: { id } });
        if (!asignatura) {
            throw new common_1.NotFoundException(`Asignatura con ID ${id} no encontrada`);
        }
        return asignatura;
    }
    async update(id, dto) {
        const asignatura = await this.findById(id);
        if (dto.codigo && dto.codigo !== asignatura.codigo) {
            const conflicto = await this.asignaturaRepository.findOne({ where: { codigo: dto.codigo } });
            if (conflicto) {
                throw new common_1.ConflictException(`Ya existe una asignatura con el código ${dto.codigo}`);
            }
        }
        Object.assign(asignatura, dto);
        return this.asignaturaRepository.save(asignatura);
    }
    async remove(id) {
        const asignatura = await this.findById(id);
        await this.asignaturaRepository.remove(asignatura);
    }
};
exports.AsignaturasService = AsignaturasService;
exports.AsignaturasService = AsignaturasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(asignatura_entity_1.Asignatura)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AsignaturasService);
//# sourceMappingURL=asignaturas.service.js.map