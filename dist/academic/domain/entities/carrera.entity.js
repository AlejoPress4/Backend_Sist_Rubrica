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
exports.Carrera = void 0;
const typeorm_1 = require("typeorm");
const plan_estudio_entity_1 = require("./plan-estudio.entity");
const semestre_entity_1 = require("./semestre.entity");
let Carrera = class Carrera {
    id;
    codigo;
    nombre;
    descripcion;
    archivada;
    planes_estudio;
    semestres;
    creadoEn;
    actualizadoEn;
};
exports.Carrera = Carrera;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Carrera.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Carrera.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Carrera.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Carrera.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Carrera.prototype, "archivada", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => plan_estudio_entity_1.PlanEstudio, (plan) => plan.carrera),
    __metadata("design:type", Array)
], Carrera.prototype, "planes_estudio", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => semestre_entity_1.Semestre, (semestre) => semestre.carrera),
    __metadata("design:type", Array)
], Carrera.prototype, "semestres", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Carrera.prototype, "creadoEn", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Carrera.prototype, "actualizadoEn", void 0);
exports.Carrera = Carrera = __decorate([
    (0, typeorm_1.Entity)('carreras')
], Carrera);
//# sourceMappingURL=carrera.entity.js.map