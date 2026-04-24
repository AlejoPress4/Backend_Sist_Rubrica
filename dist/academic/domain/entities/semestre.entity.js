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
exports.Semestre = void 0;
const typeorm_1 = require("typeorm");
const carrera_entity_1 = require("./carrera.entity");
const enums_1 = require("../../../common/enums");
const grupo_entity_1 = require("../../../courses/domain/entities/grupo.entity");
let Semestre = class Semestre {
    id;
    nombre;
    fechaInicio;
    fechaFin;
    estado;
    carrera;
    carrera_id;
    grupos;
    creadoEn;
    actualizadoEn;
};
exports.Semestre = Semestre;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Semestre.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Semestre.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Semestre.prototype, "fechaInicio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Semestre.prototype, "fechaFin", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'simple-enum',
        enum: enums_1.EstadoSemestre,
        default: enums_1.EstadoSemestre.ACTIVO,
    }),
    __metadata("design:type", String)
], Semestre.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => carrera_entity_1.Carrera, (carrera) => carrera.semestres, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'carrera_id' }),
    __metadata("design:type", carrera_entity_1.Carrera)
], Semestre.prototype, "carrera", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Semestre.prototype, "carrera_id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => grupo_entity_1.Grupo, (grupo) => grupo.semestre),
    __metadata("design:type", Array)
], Semestre.prototype, "grupos", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Semestre.prototype, "creadoEn", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Semestre.prototype, "actualizadoEn", void 0);
exports.Semestre = Semestre = __decorate([
    (0, typeorm_1.Entity)('semestres')
], Semestre);
//# sourceMappingURL=semestre.entity.js.map