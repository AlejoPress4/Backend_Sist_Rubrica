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
exports.Carrera = void 0;
const typeorm_1 = require("typeorm");
const plan_estudio_entity_1 = require("./plan-estudio.entity");
const matricula_entity_1 = require("./matricula.entity");
let Carrera = class Carrera {
    id;
    nombre;
    codigo;
    descripcion;
    planes;
    matriculas;
    created_at;
    updated_at;
};
exports.Carrera = Carrera;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Carrera.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Carrera.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Carrera.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Carrera.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => plan_estudio_entity_1.PlanEstudio, planes => planes.carrera),
    __metadata("design:type", Array)
], Carrera.prototype, "planes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => matricula_entity_1.Matricula, matricula => matricula.carrera),
    __metadata("design:type", Array)
], Carrera.prototype, "matriculas", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Carrera.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Carrera.prototype, "updated_at", void 0);
exports.Carrera = Carrera = __decorate([
    (0, typeorm_1.Entity)('carreras')
], Carrera);
//# sourceMappingURL=carrera.entity.js.map