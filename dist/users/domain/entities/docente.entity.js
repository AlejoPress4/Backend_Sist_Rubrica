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
exports.Docente = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const grupo_entity_1 = require("../../../courses/domain/entities/grupo.entity");
let Docente = class Docente {
    id;
    nombre;
    titulo;
    user;
    userId;
    grupos;
    creadoEn;
    actualizadoEn;
};
exports.Docente = Docente;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], Docente.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Docente.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Docente.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User, (user) => user.docente, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", user_entity_1.User)
], Docente.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Docente.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => grupo_entity_1.Grupo, (grupo) => grupo.docentes),
    __metadata("design:type", Array)
], Docente.prototype, "grupos", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Docente.prototype, "creadoEn", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Docente.prototype, "actualizadoEn", void 0);
exports.Docente = Docente = __decorate([
    (0, typeorm_1.Entity)('docentes')
], Docente);
//# sourceMappingURL=docente.entity.js.map