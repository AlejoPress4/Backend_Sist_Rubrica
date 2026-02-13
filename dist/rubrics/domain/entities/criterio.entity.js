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
exports.Criterio = void 0;
const typeorm_1 = require("typeorm");
const rubrica_entity_1 = require("./rubrica.entity");
const escala_entity_1 = require("./escala.entity");
let Criterio = class Criterio {
    id;
    nombre;
    descripcion;
    ponderacion;
    rubrica;
    rubricaId;
    escalas;
    createdAt;
    updatedAt;
};
exports.Criterio = Criterio;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Criterio.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Criterio.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Criterio.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Criterio.prototype, "ponderacion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => rubrica_entity_1.Rubrica, (rubrica) => rubrica.criterios),
    (0, typeorm_1.JoinColumn)({ name: 'rubricaId' }),
    __metadata("design:type", rubrica_entity_1.Rubrica)
], Criterio.prototype, "rubrica", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Criterio.prototype, "rubricaId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => escala_entity_1.Escala, (escala) => escala.criterio),
    __metadata("design:type", Array)
], Criterio.prototype, "escalas", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Criterio.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Criterio.prototype, "updatedAt", void 0);
exports.Criterio = Criterio = __decorate([
    (0, typeorm_1.Entity)('criterios')
], Criterio);
//# sourceMappingURL=criterio.entity.js.map