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
const semestre_entity_1 = require("./domain/entities/semestre.entity");
const asignatura_entity_1 = require("./domain/entities/asignatura.entity");
const plan_estudio_entity_1 = require("./domain/entities/plan-estudio.entity");
const plan_asignatura_entity_1 = require("./domain/entities/plan-asignatura.entity");
const matricula_entity_1 = require("../courses/domain/entities/matricula.entity");
const carreras_service_1 = require("./application/services/carreras.service");
const semestres_service_1 = require("./application/services/semestres.service");
const asignaturas_service_1 = require("./application/services/asignaturas.service");
const plan_estudio_service_1 = require("./application/services/plan-estudio.service");
const carreras_controller_1 = require("./infrastructure/controllers/carreras.controller");
const semestres_controller_1 = require("./infrastructure/controllers/semestres.controller");
const asignaturas_controller_1 = require("./infrastructure/controllers/asignaturas.controller");
const plan_estudio_controller_1 = require("./infrastructure/controllers/plan-estudio.controller");
const auth_module_1 = require("../auth/auth.module");
let AcademicModule = class AcademicModule {
};
exports.AcademicModule = AcademicModule;
exports.AcademicModule = AcademicModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                carrera_entity_1.Carrera,
                semestre_entity_1.Semestre,
                asignatura_entity_1.Asignatura,
                plan_estudio_entity_1.PlanEstudio,
                plan_asignatura_entity_1.PlanAsignatura,
                matricula_entity_1.Matricula,
            ]),
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
        ],
        controllers: [
            carreras_controller_1.CarrerasController,
            semestres_controller_1.SemestresController,
            asignaturas_controller_1.AsignaturasController,
            plan_estudio_controller_1.PlanEstudioController,
        ],
        providers: [
            carreras_service_1.CarrerasService,
            semestres_service_1.SemestresService,
            asignaturas_service_1.AsignaturasService,
            plan_estudio_service_1.PlanEstudioService,
        ],
        exports: [
            typeorm_1.TypeOrmModule,
            carreras_service_1.CarrerasService,
            semestres_service_1.SemestresService,
            asignaturas_service_1.AsignaturasService,
            plan_estudio_service_1.PlanEstudioService,
        ],
    })
], AcademicModule);
//# sourceMappingURL=academic.module.js.map