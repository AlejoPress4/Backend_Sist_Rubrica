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
const semestre_entity_1 = require("../../../academic/domain/entities/semestre.entity");
const inscripcion_entity_1 = require("./inscripcion.entity");
let Grupo = class Grupo {
    id;
    codigo;
    nombre;
    docentes;
    asignatura;
    asignatura_id;
    semestre;
    semestre_id;
    inscripciones;
    creadoEn;
    actualizadoEn;
};
exports.Grupo = Grupo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Grupo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Grupo.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Grupo.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => docente_entity_1.Docente, (docente) => docente.grupos, { cascade: false }),
    (0, typeorm_1.JoinTable)({
        name: 'grupo_docentes',
        joinColumn: { name: 'grupo_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'docente_id', referencedColumnName: 'id' },
    }),
    __metadata("design:type", Array)
], Grupo.prototype, "docentes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => asignatura_entity_1.Asignatura, (asignatura) => asignatura.grupos, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'asignatura_id' }),
    __metadata("design:type", asignatura_entity_1.Asignatura)
], Grupo.prototype, "asignatura", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Grupo.prototype, "asignatura_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => semestre_entity_1.Semestre, (semestre) => semestre.grupos, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'semestre_id' }),
    __metadata("design:type", semestre_entity_1.Semestre)
], Grupo.prototype, "semestre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Grupo.prototype, "semestre_id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => inscripcion_entity_1.Inscripcion, (inscripcion) => inscripcion.grupo),
    __metadata("design:type", Array)
], Grupo.prototype, "inscripciones", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Grupo.prototype, "creadoEn", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Grupo.prototype, "actualizadoEn", void 0);
exports.Grupo = Grupo = __decorate([
    (0, typeorm_1.Entity)('grupos')
], Grupo);
//# sourceMappingURL=grupo.entity.js.map