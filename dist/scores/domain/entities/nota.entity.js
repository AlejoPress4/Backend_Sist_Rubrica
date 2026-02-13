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
exports.Nota = void 0;
const typeorm_1 = require("typeorm");
const estudiante_entity_1 = require("../../../users/domain/entities/estudiante.entity");
const evaluacion_entity_1 = require("./evaluacion.entity");
let Nota = class Nota {
    id;
    notaFinal;
    observaciones;
    estudiante;
    estudianteId;
    evaluacion;
    evaluacionId;
    createdAt;
    updatedAt;
};
exports.Nota = Nota;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Nota.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Nota.prototype, "notaFinal", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Nota.prototype, "observaciones", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estudiante_entity_1.Estudiante, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'estudianteId' }),
    __metadata("design:type", estudiante_entity_1.Estudiante)
], Nota.prototype, "estudiante", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Nota.prototype, "estudianteId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => evaluacion_entity_1.Evaluacion, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'evaluacionId' }),
    __metadata("design:type", evaluacion_entity_1.Evaluacion)
], Nota.prototype, "evaluacion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Nota.prototype, "evaluacionId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Nota.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Nota.prototype, "updatedAt", void 0);
exports.Nota = Nota = __decorate([
    (0, typeorm_1.Entity)('notas')
], Nota);
//# sourceMappingURL=nota.entity.js.map