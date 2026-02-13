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
exports.Evaluacion = void 0;
const typeorm_1 = require("typeorm");
const asignatura_entity_1 = require("../../../academic/domain/entities/asignatura.entity");
const rubrica_entity_1 = require("../../../rubrics/domain/entities/rubrica.entity");
let Evaluacion = class Evaluacion {
    id;
    nombre;
    descripcion;
    asignatura;
    asignaturaId;
    rubrica;
    rubricaId;
    createdAt;
    updatedAt;
};
exports.Evaluacion = Evaluacion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Evaluacion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Evaluacion.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Evaluacion.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => asignatura_entity_1.Asignatura, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'asignaturaId' }),
    __metadata("design:type", asignatura_entity_1.Asignatura)
], Evaluacion.prototype, "asignatura", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Evaluacion.prototype, "asignaturaId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => rubrica_entity_1.Rubrica, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'rubricaId' }),
    __metadata("design:type", rubrica_entity_1.Rubrica)
], Evaluacion.prototype, "rubrica", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Evaluacion.prototype, "rubricaId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Evaluacion.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Evaluacion.prototype, "updatedAt", void 0);
exports.Evaluacion = Evaluacion = __decorate([
    (0, typeorm_1.Entity)('evaluaciones')
], Evaluacion);
//# sourceMappingURL=evaluacion.entity.js.map