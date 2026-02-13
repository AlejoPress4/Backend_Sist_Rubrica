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
exports.CoursesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const grupo_entity_1 = require("../../domain/entities/grupo.entity");
const inscripcion_entity_1 = require("../../domain/entities/inscripcion.entity");
const semestre_entity_1 = require("../../domain/entities/semestre.entity");
let CoursesService = class CoursesService {
    semestreRepository;
    grupoRepository;
    inscripcionRepository;
    constructor(semestreRepository, grupoRepository, inscripcionRepository) {
        this.semestreRepository = semestreRepository;
        this.grupoRepository = grupoRepository;
        this.inscripcionRepository = inscripcionRepository;
    }
    async createSemestre(data) {
        throw new Error('Method not implemented.');
    }
    async findAllSemestres() {
        throw new Error('Method not implemented.');
    }
    async createGrupo(data) {
        throw new Error('Method not implemented.');
    }
    async findAllGrupos() {
        throw new Error('Method not implemented.');
    }
    async findGrupoById(id) {
        throw new Error('Method not implemented.');
    }
    async createInscripcion(data) {
        throw new Error('Method not implemented.');
    }
    async findInscripcionesByGrupo(grupoId) {
        throw new Error('Method not implemented.');
    }
};
exports.CoursesService = CoursesService;
exports.CoursesService = CoursesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(semestre_entity_1.Semestre)),
    __param(1, (0, typeorm_1.InjectRepository)(grupo_entity_1.Grupo)),
    __param(2, (0, typeorm_1.InjectRepository)(inscripcion_entity_1.Inscripcion)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], CoursesService);
//# sourceMappingURL=courses.service.js.map