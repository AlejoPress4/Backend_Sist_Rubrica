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
    async createRubrica(dto) {
        const rubrica = this.rubricaRepository.create(dto);
        return this.rubricaRepository.save(rubrica);
    }
    async findAllRubricas() {
        return this.rubricaRepository.find();
    }
    async findRubricaById(id) {
        return this.rubricaRepository.findOne({
            where: { id },
            relations: ['criterios', 'criterios.escalas'],
        });
    }
    async updateRubrica(id, dto) {
        const rubrica = await this.findRubricaById(id);
        if (!rubrica) {
            throw new common_1.NotFoundException(`Rúbrica con ID ${id} no encontrada`);
        }
        if (dto.es_publica && !rubrica.es_publica) {
            if (!rubrica.criterios || rubrica.criterios.length === 0) {
                throw new common_1.BadRequestException('No se puede publicar una rúbrica sin criterios.');
            }
            let totalPeso = 0;
            for (const criterio of rubrica.criterios) {
                totalPeso += Number(criterio.peso || 0);
                if (!criterio.escalas || criterio.escalas.length < 2 || criterio.escalas.length > 5) {
                    throw new common_1.BadRequestException(`El criterio '${criterio.nombre}' debe tener entre 2 y 5 escalas.`);
                }
            }
            if (totalPeso !== 100) {
                throw new common_1.BadRequestException(`La suma de los pesos de los criterios debe ser exactamente 100. Actual: ${totalPeso}`);
            }
        }
        Object.assign(rubrica, dto);
        return this.rubricaRepository.save(rubrica);
    }
    async removeRubrica(id) {
        const rubrica = await this.findRubricaById(id);
        if (!rubrica) {
            throw new common_1.NotFoundException(`Rúbrica con ID ${id} no encontrada`);
        }
        if (rubrica.es_publica) {
            throw new common_1.BadRequestException('No se puede eliminar una rúbrica publicada.');
        }
        await this.rubricaRepository.remove(rubrica);
    }
    async createCriterio(dto) {
        const criterio = this.criterioRepository.create(dto);
        return this.criterioRepository.save(criterio);
    }
    async findCriteriosByRubrica(rubrica_id) {
        return this.criterioRepository.find({
            where: { rubrica_id },
            relations: ['escalas'],
        });
    }
    async findCriterioById(id) {
        const criterio = await this.criterioRepository.findOne({
            where: { id },
            relations: ['escalas'],
        });
        if (!criterio) {
            throw new common_1.NotFoundException(`Criterio con ID ${id} no encontrado`);
        }
        return criterio;
    }
    async updateCriterio(id, dto) {
        const criterio = await this.findCriterioById(id);
        Object.assign(criterio, dto);
        return this.criterioRepository.save(criterio);
    }
    async removeCriterio(id) {
        const criterio = await this.findCriterioById(id);
        await this.criterioRepository.remove(criterio);
    }
    async createEscala(dto) {
        const existing = await this.escalaRepository.findOne({ where: { criterio_id: dto.criterio_id, valor: dto.valor } });
        if (existing) {
            throw new common_1.ConflictException(`Ya existe una escala con el valor ${dto.valor} en este criterio.`);
        }
        const escala = this.escalaRepository.create(dto);
        return this.escalaRepository.save(escala);
    }
    async findEscalasByCriterio(criterio_id) {
        return this.escalaRepository.find({ where: { criterio_id } });
    }
    async findEscalaById(id) {
        const escala = await this.escalaRepository.findOne({ where: { id } });
        if (!escala) {
            throw new common_1.NotFoundException(`Escala con ID ${id} no encontrada`);
        }
        return escala;
    }
    async updateEscala(id, dto) {
        const escala = await this.findEscalaById(id);
        if (dto.valor !== undefined && dto.valor !== escala.valor) {
            const existing = await this.escalaRepository.findOne({ where: { criterio_id: escala.criterio_id, valor: dto.valor } });
            if (existing) {
                throw new common_1.ConflictException(`Ya existe una escala con el valor ${dto.valor} en este criterio.`);
            }
        }
        Object.assign(escala, dto);
        return this.escalaRepository.save(escala);
    }
    async removeEscala(id) {
        const escala = await this.findEscalaById(id);
        await this.escalaRepository.remove(escala);
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