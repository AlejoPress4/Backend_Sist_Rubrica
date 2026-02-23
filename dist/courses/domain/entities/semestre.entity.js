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
const grupo_entity_1 = require("./grupo.entity");
let Semestre = class Semestre {
    id;
    fecha_inicio;
    fecha_fin;
    nombre;
    codigo;
    estado;
    grupos;
    created_at;
    updated_at;
};
exports.Semestre = Semestre;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Semestre.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Semestre.prototype, "fecha_inicio", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Semestre.prototype, "fecha_fin", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Semestre.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Semestre.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Semestre.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => grupo_entity_1.Grupo, (grupo) => grupo.semestre),
    __metadata("design:type", Array)
], Semestre.prototype, "grupos", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Semestre.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Semestre.prototype, "updated_at", void 0);
exports.Semestre = Semestre = __decorate([
    (0, typeorm_1.Entity)('semestres')
], Semestre);
//# sourceMappingURL=semestre.entity.js.map