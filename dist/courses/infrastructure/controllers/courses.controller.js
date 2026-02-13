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
exports.CoursesController = void 0;
const common_1 = require("@nestjs/common");
const courses_service_1 = require("../../application/services/courses.service");
const create_semestre_dto_1 = require("../../application/dtos/create-semestre.dto");
const create_grupo_dto_1 = require("../../application/dtos/create-grupo.dto");
const create_inscripcion_dto_1 = require("../../application/dtos/create-inscripcion.dto");
let CoursesController = class CoursesController {
    coursesService;
    constructor(coursesService) {
        this.coursesService = coursesService;
    }
    async createSemestre(dto) {
    }
    async findAllSemestres() {
    }
    async createGrupo(dto) {
    }
    async findAllGrupos() {
    }
    async findGrupoById(id) {
    }
    async createInscripcion(dto) {
    }
    async findInscripcionesByGrupo(grupoId) {
    }
};
exports.CoursesController = CoursesController;
__decorate([
    (0, common_1.Post)('semestres'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_semestre_dto_1.CreateSemestreDto]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "createSemestre", null);
__decorate([
    (0, common_1.Get)('semestres'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "findAllSemestres", null);
__decorate([
    (0, common_1.Post)('grupos'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_grupo_dto_1.CreateGrupoDto]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "createGrupo", null);
__decorate([
    (0, common_1.Get)('grupos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "findAllGrupos", null);
__decorate([
    (0, common_1.Get)('grupos/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "findGrupoById", null);
__decorate([
    (0, common_1.Post)('inscripciones'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_inscripcion_dto_1.CreateInscripcionDto]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "createInscripcion", null);
__decorate([
    (0, common_1.Get)('grupos/:grupoId/inscripciones'),
    __param(0, (0, common_1.Param)('grupoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "findInscripcionesByGrupo", null);
exports.CoursesController = CoursesController = __decorate([
    (0, common_1.Controller)('courses'),
    __metadata("design:paramtypes", [courses_service_1.CoursesService])
], CoursesController);
//# sourceMappingURL=courses.controller.js.map