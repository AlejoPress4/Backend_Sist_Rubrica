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
exports.Escala = void 0;
const typeorm_1 = require("typeorm");
const criterio_entity_1 = require("./criterio.entity");
let Escala = class Escala {
    id;
    nombre;
    descripcion;
    valor;
    criterio;
    criterioId;
    createdAt;
    updatedAt;
};
exports.Escala = Escala;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Escala.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Escala.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Escala.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Escala.prototype, "valor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => criterio_entity_1.Criterio, (criterio) => criterio.escalas),
    (0, typeorm_1.JoinColumn)({ name: 'criterioId' }),
    __metadata("design:type", criterio_entity_1.Criterio)
], Escala.prototype, "criterio", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Escala.prototype, "criterioId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Escala.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Escala.prototype, "updatedAt", void 0);
exports.Escala = Escala = __decorate([
    (0, typeorm_1.Entity)('escalas')
], Escala);
//# sourceMappingURL=escala.entity.js.map