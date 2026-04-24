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
exports.PlanAsignatura = void 0;
const typeorm_1 = require("typeorm");
const plan_estudio_entity_1 = require("./plan-estudio.entity");
const asignatura_entity_1 = require("./asignatura.entity");
let PlanAsignatura = class PlanAsignatura {
    id;
    semestreSugerido;
    creditos;
    planEstudio;
    planEstudio_id;
    asignatura;
    asignatura_id;
};
exports.PlanAsignatura = PlanAsignatura;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PlanAsignatura.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], PlanAsignatura.prototype, "semestreSugerido", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], PlanAsignatura.prototype, "creditos", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => plan_estudio_entity_1.PlanEstudio, (plan) => plan.asignaturas, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'planEstudio_id' }),
    __metadata("design:type", plan_estudio_entity_1.PlanEstudio)
], PlanAsignatura.prototype, "planEstudio", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PlanAsignatura.prototype, "planEstudio_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => asignatura_entity_1.Asignatura, (asignatura) => asignatura.planAsignaturas, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'asignatura_id' }),
    __metadata("design:type", asignatura_entity_1.Asignatura)
], PlanAsignatura.prototype, "asignatura", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PlanAsignatura.prototype, "asignatura_id", void 0);
exports.PlanAsignatura = PlanAsignatura = __decorate([
    (0, typeorm_1.Entity)('plan_asignaturas'),
    (0, typeorm_1.Index)(['planEstudio_id', 'asignatura_id'], { unique: true })
], PlanAsignatura);
//# sourceMappingURL=plan-asignatura.entity.js.map