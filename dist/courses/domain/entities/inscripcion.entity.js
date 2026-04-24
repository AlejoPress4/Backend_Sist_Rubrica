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
exports.Inscripcion = void 0;
const typeorm_1 = require("typeorm");
const estudiante_entity_1 = require("../../../users/domain/entities/estudiante.entity");
const grupo_entity_1 = require("./grupo.entity");
let Inscripcion = class Inscripcion {
    id;
    estudiante;
    estudiante_id;
    grupo;
    grupo_id;
    fechaInscripcion;
};
exports.Inscripcion = Inscripcion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Inscripcion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estudiante_entity_1.Estudiante, (estudiante) => estudiante.inscripciones, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'estudiante_id' }),
    __metadata("design:type", estudiante_entity_1.Estudiante)
], Inscripcion.prototype, "estudiante", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Inscripcion.prototype, "estudiante_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => grupo_entity_1.Grupo, (grupo) => grupo.inscripciones, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'grupo_id' }),
    __metadata("design:type", grupo_entity_1.Grupo)
], Inscripcion.prototype, "grupo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Inscripcion.prototype, "grupo_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Inscripcion.prototype, "fechaInscripcion", void 0);
exports.Inscripcion = Inscripcion = __decorate([
    (0, typeorm_1.Entity)('inscripciones'),
    (0, typeorm_1.Index)(['estudiante_id', 'grupo_id'], { unique: true })
], Inscripcion);
//# sourceMappingURL=inscripcion.entity.js.map