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
exports.CalificacionDetalle = void 0;
const typeorm_1 = require("typeorm");
const nota_entity_1 = require("./nota.entity");
const criterio_entity_1 = require("../../../rubrics/domain/entities/criterio.entity");
const escala_entity_1 = require("../../../rubrics/domain/entities/escala.entity");
let CalificacionDetalle = class CalificacionDetalle {
    id;
    puntaje;
    comentario;
    nota;
    notaId;
    criterio;
    criterioId;
    escala;
    escalaId;
    createdAt;
    updatedAt;
};
exports.CalificacionDetalle = CalificacionDetalle;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CalificacionDetalle.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], CalificacionDetalle.prototype, "puntaje", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CalificacionDetalle.prototype, "comentario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => nota_entity_1.Nota),
    (0, typeorm_1.JoinColumn)({ name: 'notaId' }),
    __metadata("design:type", nota_entity_1.Nota)
], CalificacionDetalle.prototype, "nota", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CalificacionDetalle.prototype, "notaId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => criterio_entity_1.Criterio, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'criterioId' }),
    __metadata("design:type", criterio_entity_1.Criterio)
], CalificacionDetalle.prototype, "criterio", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CalificacionDetalle.prototype, "criterioId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => escala_entity_1.Escala, { eager: true, nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'escalaId' }),
    __metadata("design:type", escala_entity_1.Escala)
], CalificacionDetalle.prototype, "escala", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CalificacionDetalle.prototype, "escalaId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CalificacionDetalle.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CalificacionDetalle.prototype, "updatedAt", void 0);
exports.CalificacionDetalle = CalificacionDetalle = __decorate([
    (0, typeorm_1.Entity)('calificacion_detalles')
], CalificacionDetalle);
//# sourceMappingURL=calificacion-detalle.entity.js.map