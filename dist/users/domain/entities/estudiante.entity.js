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
exports.Estudiante = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const inscripcion_entity_1 = require("../../../courses/domain/entities/inscripcion.entity");
const matricula_entity_1 = require("../../../academic/domain/entities/matricula.entity");
let Estudiante = class Estudiante {
    id;
    nombre;
    apellido;
    cedula;
    user;
    user_id;
    inscripciones;
    matriculas;
    created_at;
    updated_at;
};
exports.Estudiante = Estudiante;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Estudiante.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Estudiante.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Estudiante.prototype, "apellido", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Estudiante.prototype, "cedula", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.User)
], Estudiante.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Estudiante.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => inscripcion_entity_1.Inscripcion, (inscripcion) => inscripcion.estudiante),
    __metadata("design:type", Array)
], Estudiante.prototype, "inscripciones", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => matricula_entity_1.Matricula, matricula => matricula.estudiante),
    __metadata("design:type", Array)
], Estudiante.prototype, "matriculas", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Estudiante.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Estudiante.prototype, "updated_at", void 0);
exports.Estudiante = Estudiante = __decorate([
    (0, typeorm_1.Entity)('estudiantes')
], Estudiante);
//# sourceMappingURL=estudiante.entity.js.map