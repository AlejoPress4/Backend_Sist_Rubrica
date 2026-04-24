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
exports.SemestresService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const semestre_entity_1 = require("../../domain/entities/semestre.entity");
const carrera_entity_1 = require("../../domain/entities/carrera.entity");
const enums_1 = require("../../../common/enums");
let SemestresService = class SemestresService {
    semestreRepository;
    carreraRepository;
    constructor(semestreRepository, carreraRepository) {
        this.semestreRepository = semestreRepository;
        this.carreraRepository = carreraRepository;
    }
    async create(dto) {
        const carrera = await this.carreraRepository.findOne({ where: { id: dto.carrera_id } });
        if (!carrera) {
            throw new common_1.NotFoundException(`Carrera con ID ${dto.carrera_id} no encontrada`);
        }
        if (carrera.archivada) {
            throw new common_1.BadRequestException('No se pueden crear semestres en una carrera archivada');
        }
        if (new Date(dto.fechaInicio) >= new Date(dto.fechaFin)) {
            throw new common_1.BadRequestException('La fecha de inicio debe ser anterior a la fecha de fin');
        }
        const existeActivo = await this.semestreRepository.findOne({
            where: { carrera_id: dto.carrera_id, estado: enums_1.EstadoSemestre.ACTIVO },
        });
        if (existeActivo) {
            throw new common_1.BadRequestException('Ya existe un semestre ACTIVO para esta carrera. Cierra el actual antes de crear uno nuevo.');
        }
        const semestre = this.semestreRepository.create({
            ...dto,
            estado: enums_1.EstadoSemestre.ACTIVO,
        });
        return this.semestreRepository.save(semestre);
    }
    async findAll() {
        return this.semestreRepository.find();
    }
    async findById(id) {
        const semestre = await this.semestreRepository.findOne({ where: { id } });
        if (!semestre) {
            throw new common_1.NotFoundException(`Semestre con ID ${id} no encontrado`);
        }
        return semestre;
    }
    async findByCarrera(carrera_id) {
        return this.semestreRepository.find({ where: { carrera_id } });
    }
    async update(id, dto) {
        const semestre = await this.findById(id);
        if (dto.fechaInicio && dto.fechaFin && new Date(dto.fechaInicio) >= new Date(dto.fechaFin)) {
            throw new common_1.BadRequestException('La fecha de inicio debe ser anterior a la fecha de fin');
        }
        Object.assign(semestre, dto);
        return this.semestreRepository.save(semestre);
    }
    async cerrar(id) {
        const semestre = await this.findById(id);
        if (semestre.estado === enums_1.EstadoSemestre.CERRADO) {
            throw new common_1.BadRequestException('El semestre ya está CERRADO');
        }
        semestre.estado = enums_1.EstadoSemestre.CERRADO;
        return this.semestreRepository.save(semestre);
    }
    async remove(id) {
        const semestre = await this.findById(id);
        await this.semestreRepository.remove(semestre);
    }
};
exports.SemestresService = SemestresService;
exports.SemestresService = SemestresService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(semestre_entity_1.Semestre)),
    __param(1, (0, typeorm_1.InjectRepository)(carrera_entity_1.Carrera)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], SemestresService);
//# sourceMappingURL=semestres.service.js.map