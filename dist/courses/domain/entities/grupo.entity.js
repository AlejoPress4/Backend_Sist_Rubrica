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
exports.Grupo = void 0;
const typeorm_1 = require("typeorm");
const docente_entity_1 = require("../../../users/domain/entities/docente.entity");
const asignatura_entity_1 = require("../../../academic/domain/entities/asignatura.entity");
const semestre_entity_1 = require("./semestre.entity");
let Grupo = class Grupo {
    id;
    nombre;
    codigo_grupo;
    docente;
    docente_id;
    asignatura;
    asignatura_id;
    semestre;
    semestre_id;
    created_at;
    updated_at;
};
exports.Grupo = Grupo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Grupo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Grupo.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Grupo.prototype, "codigo_grupo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => docente_entity_1.Docente, docente => docente.grupos, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'docente_id' }),
    __metadata("design:type", docente_entity_1.Docente)
], Grupo.prototype, "docente", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Grupo.prototype, "docente_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => asignatura_entity_1.Asignatura, asignatura => asignatura.grupos, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'asignatura_id' }),
    __metadata("design:type", asignatura_entity_1.Asignatura)
], Grupo.prototype, "asignatura", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Grupo.prototype, "asignatura_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => semestre_entity_1.Semestre, semestre => semestre.grupos, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'semestre_id' }),
    __metadata("design:type", semestre_entity_1.Semestre)
], Grupo.prototype, "semestre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Grupo.prototype, "semestre_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Grupo.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Grupo.prototype, "updated_at", void 0);
exports.Grupo = Grupo = __decorate([
    (0, typeorm_1.Entity)('grupos')
], Grupo);
//# sourceMappingURL=grupo.entity.js.map