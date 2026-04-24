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
exports.PlanEstudioService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const plan_estudio_entity_1 = require("../../domain/entities/plan-estudio.entity");
const plan_asignatura_entity_1 = require("../../domain/entities/plan-asignatura.entity");
const asignatura_entity_1 = require("../../domain/entities/asignatura.entity");
const carrera_entity_1 = require("../../domain/entities/carrera.entity");
let PlanEstudioService = class PlanEstudioService {
    planRepository;
    planAsignaturaRepository;
    asignaturaRepository;
    carreraRepository;
    dataSource;
    constructor(planRepository, planAsignaturaRepository, asignaturaRepository, carreraRepository, dataSource) {
        this.planRepository = planRepository;
        this.planAsignaturaRepository = planAsignaturaRepository;
        this.asignaturaRepository = asignaturaRepository;
        this.carreraRepository = carreraRepository;
        this.dataSource = dataSource;
    }
    async create(dto) {
        const carrera = await this.carreraRepository.findOne({ where: { id: dto.carrera_id } });
        if (!carrera) {
            throw new common_1.NotFoundException(`Carrera con ID ${dto.carrera_id} no encontrada`);
        }
        const ultimaVersion = await this.planRepository
            .createQueryBuilder('plan')
            .select('MAX(plan.version)', 'max')
            .where('plan.carrera_id = :carrera_id', { carrera_id: dto.carrera_id })
            .getRawOne();
        const siguienteVersion = (ultimaVersion?.max ?? 0) + 1;
        const plan = this.planRepository.create({
            carrera_id: dto.carrera_id,
            version: siguienteVersion,
            publicado: false,
            vigente: false,
        });
        return this.planRepository.save(plan);
    }
    async findAll() {
        return this.planRepository.find({ relations: ['asignaturas', 'asignaturas.asignatura'] });
    }
    async findById(id) {
        const plan = await this.planRepository.findOne({
            where: { id },
            relations: ['asignaturas', 'asignaturas.asignatura'],
        });
        if (!plan) {
            throw new common_1.NotFoundException(`Plan de Estudio con ID ${id} no encontrado`);
        }
        return plan;
    }
    async findByCarrera(carrera_id) {
        return this.planRepository.find({
            where: { carrera_id },
            relations: ['asignaturas', 'asignaturas.asignatura'],
            order: { version: 'DESC' },
        });
    }
    async findVigenteByCarrera(carrera_id) {
        return this.planRepository.findOne({
            where: { carrera_id, vigente: true },
            relations: ['asignaturas', 'asignaturas.asignatura'],
        });
    }
    async agregarAsignatura(planId, dto) {
        const plan = await this.findById(planId);
        if (plan.publicado) {
            throw new common_1.BadRequestException('No se pueden modificar las asignaturas de un plan publicado. Crea una nueva versión.');
        }
        const asignatura = await this.asignaturaRepository.findOne({ where: { id: dto.asignatura_id } });
        if (!asignatura) {
            throw new common_1.NotFoundException(`Asignatura con ID ${dto.asignatura_id} no encontrada`);
        }
        const existente = await this.planAsignaturaRepository.findOne({
            where: { planEstudio_id: planId, asignatura_id: dto.asignatura_id },
        });
        if (existente) {
            throw new common_1.ConflictException('La asignatura ya está en el plan');
        }
        const planAsignatura = this.planAsignaturaRepository.create({
            planEstudio_id: planId,
            asignatura_id: dto.asignatura_id,
            semestreSugerido: dto.semestreSugerido,
            creditos: dto.creditos,
        });
        return this.planAsignaturaRepository.save(planAsignatura);
    }
    async removerAsignatura(planId, asignaturaId) {
        const plan = await this.findById(planId);
        if (plan.publicado) {
            throw new common_1.BadRequestException('No se pueden modificar las asignaturas de un plan publicado');
        }
        const planAsignatura = await this.planAsignaturaRepository.findOne({
            where: { planEstudio_id: planId, asignatura_id: asignaturaId },
        });
        if (!planAsignatura) {
            throw new common_1.NotFoundException('La asignatura no está en el plan');
        }
        await this.planAsignaturaRepository.remove(planAsignatura);
    }
    async publicar(id) {
        const plan = await this.findById(id);
        if (plan.publicado) {
            throw new common_1.BadRequestException('El plan ya está publicado');
        }
        if (!plan.asignaturas || plan.asignaturas.length === 0) {
            throw new common_1.BadRequestException('El plan no tiene asignaturas asignadas');
        }
        return this.dataSource.transaction(async (manager) => {
            await manager.update(plan_estudio_entity_1.PlanEstudio, { carrera_id: plan.carrera_id, vigente: true }, { vigente: false });
            plan.publicado = true;
            plan.vigente = true;
            plan.fechaPublicacion = new Date();
            return manager.save(plan_estudio_entity_1.PlanEstudio, plan);
        });
    }
    async remove(id) {
        const plan = await this.findById(id);
        if (plan.publicado) {
            throw new common_1.BadRequestException('No se puede eliminar un plan publicado. Crea una nueva versión para invalidarlo.');
        }
        await this.planRepository.remove(plan);
    }
};
exports.PlanEstudioService = PlanEstudioService;
exports.PlanEstudioService = PlanEstudioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(plan_estudio_entity_1.PlanEstudio)),
    __param(1, (0, typeorm_1.InjectRepository)(plan_asignatura_entity_1.PlanAsignatura)),
    __param(2, (0, typeorm_1.InjectRepository)(asignatura_entity_1.Asignatura)),
    __param(3, (0, typeorm_1.InjectRepository)(carrera_entity_1.Carrera)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.DataSource])
], PlanEstudioService);
//# sourceMappingURL=plan-estudio.service.js.map