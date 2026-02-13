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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanEstudio = void 0;
const typeorm_1 = require("typeorm");
const carrera_entity_1 = require("./carrera.entity");
const asignatura_entity_1 = require("./asignatura.entity");
let PlanEstudio = class PlanEstudio {
    id;
    nombre;
    anio;
    carrera;
    carreraId;
    asignatura;
    asignaturaId;
    createdAt;
    updatedAt;
};
exports.PlanEstudio = PlanEstudio;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PlanEstudio.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PlanEstudio.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], PlanEstudio.prototype, "anio", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => carrera_entity_1.Carrera, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'carreraId' }),
    __metadata("design:type", carrera_entity_1.Carrera)
], PlanEstudio.prototype, "carrera", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PlanEstudio.prototype, "carreraId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => asignatura_entity_1.Asignatura, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'asignaturaId' }),
    __metadata("design:type", asignatura_entity_1.Asignatura)
], PlanEstudio.prototype, "asignatura", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PlanEstudio.prototype, "asignaturaId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PlanEstudio.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PlanEstudio.prototype, "updatedAt", void 0);
exports.PlanEstudio = PlanEstudio = __decorate([
    (0, typeorm_1.Entity)('planes_estudio')
], PlanEstudio);
//# sourceMappingURL=plan-estudio.entity.js.map