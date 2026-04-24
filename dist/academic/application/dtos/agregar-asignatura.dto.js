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
exports.AgregarAsignaturaAlPlanDto = void 0;
const class_validator_1 = require("class-validator");
class AgregarAsignaturaAlPlanDto {
    asignatura_id;
    semestreSugerido;
    creditos;
}
exports.AgregarAsignaturaAlPlanDto = AgregarAsignaturaAlPlanDto;
__decorate([
    (0, class_validator_1.IsUUID)('4', { message: 'El asignatura_id debe ser un UUID v4 válido' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El asignatura_id es obligatorio' }),
    __metadata("design:type", String)
], AgregarAsignaturaAlPlanDto.prototype, "asignatura_id", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'El semestre sugerido debe ser un número entero' }),
    (0, class_validator_1.Min)(1, { message: 'El semestre sugerido debe ser mayor o igual a 1' }),
    (0, class_validator_1.Max)(14, { message: 'El semestre sugerido no puede superar 14' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El semestre sugerido es obligatorio' }),
    __metadata("design:type", Number)
], AgregarAsignaturaAlPlanDto.prototype, "semestreSugerido", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'Los créditos deben ser un número entero' }),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(10),
    (0, class_validator_1.IsNotEmpty)({ message: 'Los créditos son obligatorios' }),
    __metadata("design:type", Number)
], AgregarAsignaturaAlPlanDto.prototype, "creditos", void 0);
//# sourceMappingURL=agregar-asignatura.dto.js.map