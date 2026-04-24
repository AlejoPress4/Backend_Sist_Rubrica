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
exports.Matricula = void 0;
const typeorm_1 = require("typeorm");
const estudiante_entity_1 = require("../../../users/domain/entities/estudiante.entity");
const asignatura_entity_1 = require("../../../academic/domain/entities/asignatura.entity");
const semestre_entity_1 = require("../../../academic/domain/entities/semestre.entity");
const enums_1 = require("../../../common/enums");
let Matricula = class Matricula {
    id;
    estado;
    estudiante;
    estudiante_id;
    asignatura;
    asignatura_id;
    semestre;
    semestre_id;
    fechaRegistro;
    actualizadoEn;
};
exports.Matricula = Matricula;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Matricula.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'simple-enum',
        enum: enums_1.EstadoMatricula,
        default: enums_1.EstadoMatricula.ACTIVA,
    }),
    __metadata("design:type", String)
], Matricula.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estudiante_entity_1.Estudiante, (estudiante) => estudiante.matriculas, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'estudiante_id' }),
    __metadata("design:type", estudiante_entity_1.Estudiante)
], Matricula.prototype, "estudiante", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Matricula.prototype, "estudiante_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => asignatura_entity_1.Asignatura, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'asignatura_id' }),
    __metadata("design:type", asignatura_entity_1.Asignatura)
], Matricula.prototype, "asignatura", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Matricula.prototype, "asignatura_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => semestre_entity_1.Semestre, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'semestre_id' }),
    __metadata("design:type", semestre_entity_1.Semestre)
], Matricula.prototype, "semestre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Matricula.prototype, "semestre_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Matricula.prototype, "fechaRegistro", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Matricula.prototype, "actualizadoEn", void 0);
exports.Matricula = Matricula = __decorate([
    (0, typeorm_1.Entity)('matriculas'),
    (0, typeorm_1.Index)(['estudiante_id', 'asignatura_id', 'semestre_id'], { unique: true })
], Matricula);
//# sourceMappingURL=matricula.entity.js.map