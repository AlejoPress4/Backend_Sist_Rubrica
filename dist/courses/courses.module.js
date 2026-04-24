"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const grupo_entity_1 = require("./domain/entities/grupo.entity");
const inscripcion_entity_1 = require("./domain/entities/inscripcion.entity");
const matricula_entity_1 = require("./domain/entities/matricula.entity");
const grupos_service_1 = require("./application/services/grupos.service");
const matriculas_service_1 = require("./application/services/matriculas.service");
const inscripciones_service_1 = require("./application/services/inscripciones.service");
const grupos_controller_1 = require("./infrastructure/controllers/grupos.controller");
const matriculas_controller_1 = require("./infrastructure/controllers/matriculas.controller");
const academic_module_1 = require("../academic/academic.module");
const users_module_1 = require("../users/users.module");
const auth_module_1 = require("../auth/auth.module");
const calificacion_detalle_entity_1 = require("../scores/domain/entities/calificacion-detalle.entity");
let CoursesModule = class CoursesModule {
};
exports.CoursesModule = CoursesModule;
exports.CoursesModule = CoursesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([grupo_entity_1.Grupo, inscripcion_entity_1.Inscripcion, matricula_entity_1.Matricula, calificacion_detalle_entity_1.CalificacionDetalle]),
            (0, common_1.forwardRef)(() => academic_module_1.AcademicModule),
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
        ],
        controllers: [grupos_controller_1.GruposController, matriculas_controller_1.MatriculasController],
        providers: [grupos_service_1.GruposService, matriculas_service_1.MatriculasService, inscripciones_service_1.InscripcionesService],
        exports: [typeorm_1.TypeOrmModule, grupos_service_1.GruposService, matriculas_service_1.MatriculasService, inscripciones_service_1.InscripcionesService],
    })
], CoursesModule);
//# sourceMappingURL=courses.module.js.map