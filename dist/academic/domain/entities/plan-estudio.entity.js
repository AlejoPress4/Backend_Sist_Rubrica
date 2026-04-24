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
exports.PlanEstudio = void 0;
const typeorm_1 = require("typeorm");
const carrera_entity_1 = require("./carrera.entity");
const plan_asignatura_entity_1 = require("./plan-asignatura.entity");
let PlanEstudio = class PlanEstudio {
    id;
    version;
    publicado;
    vigente;
    fechaPublicacion;
    carrera;
    carrera_id;
    asignaturas;
    creadoEn;
    actualizadoEn;
};
exports.PlanEstudio = PlanEstudio;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PlanEstudio.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 1 }),
    __metadata("design:type", Number)
], PlanEstudio.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], PlanEstudio.prototype, "publicado", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], PlanEstudio.prototype, "vigente", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Object)
], PlanEstudio.prototype, "fechaPublicacion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => carrera_entity_1.Carrera, (carrera) => carrera.planes_estudio, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'carrera_id' }),
    __metadata("design:type", carrera_entity_1.Carrera)
], PlanEstudio.prototype, "carrera", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PlanEstudio.prototype, "carrera_id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => plan_asignatura_entity_1.PlanAsignatura, (pa) => pa.planEstudio, { cascade: true }),
    __metadata("design:type", Array)
], PlanEstudio.prototype, "asignaturas", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PlanEstudio.prototype, "creadoEn", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PlanEstudio.prototype, "actualizadoEn", void 0);
exports.PlanEstudio = PlanEstudio = __decorate([
    (0, typeorm_1.Entity)('planes_estudio'),
    (0, typeorm_1.Index)(['carrera_id', 'version'], { unique: true })
], PlanEstudio);
//# sourceMappingURL=plan-estudio.entity.js.map