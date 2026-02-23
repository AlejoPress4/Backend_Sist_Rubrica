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
exports.Asignatura = void 0;
const typeorm_1 = require("typeorm");
const grupo_entity_1 = require("../../../courses/domain/entities/grupo.entity");
const evaluacion_entity_1 = require("../../../scores/domain/entities/evaluacion.entity");
const plan_estudio_entity_1 = require("./plan-estudio.entity");
let Asignatura = class Asignatura {
    id;
    nombre;
    codigo;
    descripcion;
    creditos;
    grupos;
    evaluaciones;
    planes;
    created_at;
    updated_at;
};
exports.Asignatura = Asignatura;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Asignatura.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Asignatura.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Asignatura.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Asignatura.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Asignatura.prototype, "creditos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => grupo_entity_1.Grupo, grupo => grupo.asignatura),
    __metadata("design:type", Array)
], Asignatura.prototype, "grupos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => evaluacion_entity_1.Evaluacion, evaluacion => evaluacion.asignatura),
    __metadata("design:type", Array)
], Asignatura.prototype, "evaluaciones", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => plan_estudio_entity_1.PlanEstudio, plan => plan.asignatura),
    __metadata("design:type", Array)
], Asignatura.prototype, "planes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Asignatura.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Asignatura.prototype, "updated_at", void 0);
exports.Asignatura = Asignatura = __decorate([
    (0, typeorm_1.Entity)('asignaturas')
], Asignatura);
//# sourceMappingURL=asignatura.entity.js.map