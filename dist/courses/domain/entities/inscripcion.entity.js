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
const constants_1 = require("../../../common/constants/constants");
let Inscripcion = class Inscripcion {
    id;
    estudiante;
    estudianteId;
    grupo;
    grupoId;
    estado;
    createdAt;
    updatedAt;
};
exports.Inscripcion = Inscripcion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Inscripcion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estudiante_entity_1.Estudiante, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'estudianteId' }),
    __metadata("design:type", estudiante_entity_1.Estudiante)
], Inscripcion.prototype, "estudiante", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Inscripcion.prototype, "estudianteId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => grupo_entity_1.Grupo, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'grupoId' }),
    __metadata("design:type", grupo_entity_1.Grupo)
], Inscripcion.prototype, "grupo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Inscripcion.prototype, "grupoId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: constants_1.EstadoInscripcion, default: constants_1.EstadoInscripcion.ACTIVO }),
    __metadata("design:type", String)
], Inscripcion.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Inscripcion.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Inscripcion.prototype, "updatedAt", void 0);
exports.Inscripcion = Inscripcion = __decorate([
    (0, typeorm_1.Entity)('inscripciones')
], Inscripcion);
//# sourceMappingURL=inscripcion.entity.js.map