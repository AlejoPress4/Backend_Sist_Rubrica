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
exports.RubricsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const rubrica_entity_1 = require("../../domain/entities/rubrica.entity");
const criterio_entity_1 = require("../../domain/entities/criterio.entity");
const escala_entity_1 = require("../../domain/entities/escala.entity");
let RubricsService = class RubricsService {
    rubricaRepository;
    criterioRepository;
    escalaRepository;
    constructor(rubricaRepository, criterioRepository, escalaRepository) {
        this.rubricaRepository = rubricaRepository;
        this.criterioRepository = criterioRepository;
        this.escalaRepository = escalaRepository;
    }
    async createRubrica(data) {
        const nuevaRubrica = this.rubricaRepository.create(data);
        return this.rubricaRepository.save(nuevaRubrica);
    }
    async findAllRubricas() {
        return this.rubricaRepository.find();
    }
    async findRubricaById(id) {
        return this.rubricaRepository.findOne({
            where: { id },
            relations: ['criterios'],
        });
    }
    async updateRubrica(id, data) {
        await this.rubricaRepository.update(id, data);
        const rubrica = await this.findRubricaById(id);
        if (!rubrica) {
            throw new common_1.NotFoundException(`Rubrica with ID ${id} not found`);
        }
        return rubrica;
    }
    async removeRubrica(id) {
        await this.rubricaRepository.delete(id);
    }
    async createCriterio(data) {
        throw new Error('Method not implemented.');
    }
    async findCriteriosByRubrica(rubricaId) {
        throw new Error('Method not implemented.');
    }
    async createEscala(data) {
        throw new Error('Method not implemented.');
    }
    async findEscalasByCriterio(criterioId) {
        throw new Error('Method not implemented.');
    }
};
exports.RubricsService = RubricsService;
exports.RubricsService = RubricsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(rubrica_entity_1.Rubrica)),
    __param(1, (0, typeorm_1.InjectRepository)(criterio_entity_1.Criterio)),
    __param(2, (0, typeorm_1.InjectRepository)(escala_entity_1.Escala)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], RubricsService);
//# sourceMappingURL=rubrics.service.js.map