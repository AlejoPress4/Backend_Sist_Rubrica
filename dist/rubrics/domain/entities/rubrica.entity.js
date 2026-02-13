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
exports.Rubrica = void 0;
const typeorm_1 = require("typeorm");
const criterio_entity_1 = require("./criterio.entity");
let Rubrica = class Rubrica {
    id;
    titulo;
    descripcion;
    es_publica;
    criterios;
    createdAt;
    updatedAt;
};
exports.Rubrica = Rubrica;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Rubrica.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Rubrica.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Rubrica.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Rubrica.prototype, "es_publica", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => criterio_entity_1.Criterio, (criterio) => criterio.rubrica),
    __metadata("design:type", Array)
], Rubrica.prototype, "criterios", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Rubrica.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Rubrica.prototype, "updatedAt", void 0);
exports.Rubrica = Rubrica = __decorate([
    (0, typeorm_1.Entity)('rubricas')
], Rubrica);
//# sourceMappingURL=rubrica.entity.js.map