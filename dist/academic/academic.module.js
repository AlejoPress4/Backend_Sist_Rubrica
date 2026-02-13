"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const carrera_entity_1 = require("./domain/entities/carrera.entity");
const asignatura_entity_1 = require("./domain/entities/asignatura.entity");
const plan_estudio_entity_1 = require("./domain/entities/plan-estudio.entity");
const academic_service_1 = require("./application/services/academic.service");
const academic_controller_1 = require("./infrastructure/controllers/academic.controller");
let AcademicModule = class AcademicModule {
};
exports.AcademicModule = AcademicModule;
exports.AcademicModule = AcademicModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([carrera_entity_1.Carrera, asignatura_entity_1.Asignatura, plan_estudio_entity_1.PlanEstudio])],
        controllers: [academic_controller_1.AcademicController],
        providers: [academic_service_1.AcademicService],
        exports: [academic_service_1.AcademicService],
    })
], AcademicModule);
//# sourceMappingURL=academic.module.js.map