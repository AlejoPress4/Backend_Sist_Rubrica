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
const carrera_entity_1 = require("./carrera.entity");
const constants_1 = require("../../../common/constants/constants");
let Matricula = class Matricula {
    id;
    periodo_ingreso;
    estado_academico;
    estudiante;
    estudiante_id;
    carrera;
    carrera_id;
    created_at;
    updated_at;
};
exports.Matricula = Matricula;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Matricula.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 10 }),
    __metadata("design:type", String)
], Matricula.prototype, "periodo_ingreso", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: constants_1.EstadoMatricula,
        default: constants_1.EstadoMatricula.ACTIVO
    }),
    __metadata("design:type", String)
], Matricula.prototype, "estado_academico", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estudiante_entity_1.Estudiante, (estudiante) => estudiante.matriculas),
    (0, typeorm_1.JoinColumn)({ name: 'estudiante_id' }),
    __metadata("design:type", estudiante_entity_1.Estudiante)
], Matricula.prototype, "estudiante", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Matricula.prototype, "estudiante_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => carrera_entity_1.Carrera, (carrera) => carrera.matriculas),
    (0, typeorm_1.JoinColumn)({ name: 'carrera_id' }),
    __metadata("design:type", carrera_entity_1.Carrera)
], Matricula.prototype, "carrera", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Matricula.prototype, "carrera_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Matricula.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Matricula.prototype, "updated_at", void 0);
exports.Matricula = Matricula = __decorate([
    (0, typeorm_1.Entity)('matriculas')
], Matricula);
//# sourceMappingURL=matricula.entity.js.map