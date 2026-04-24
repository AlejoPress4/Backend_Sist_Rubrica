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
exports.CreateEvaluacionDto = void 0;
const class_validator_1 = require("class-validator");
class CreateEvaluacionDto {
    nombre;
    descripcion;
    peso;
    nota;
    asignatura_id;
    rubrica_id;
}
exports.CreateEvaluacionDto = CreateEvaluacionDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'El nombre de la evaluación debe ser un texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre de la evaluación es obligatorio' }),
    __metadata("design:type", String)
], CreateEvaluacionDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'La descripción de la evaluación debe ser un texto' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateEvaluacionDto.prototype, "descripcion", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'El peso debe ser un número' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateEvaluacionDto.prototype, "peso", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 2 }, { message: 'La nota debe ser un número con máximo 2 decimales' }),
    (0, class_validator_1.Min)(0, { message: 'La nota mínima es 0' }),
    (0, class_validator_1.Max)(5, { message: 'La nota máxima es 5' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'La nota es obligatoria' }),
    __metadata("design:type", Number)
], CreateEvaluacionDto.prototype, "nota", void 0);
__decorate([
    (0, class_validator_1.IsUUID)('4', { message: 'El asignatura_id debe ser un UUID v4 válido' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El asignatura_id es obligatorio' }),
    __metadata("design:type", String)
], CreateEvaluacionDto.prototype, "asignatura_id", void 0);
__decorate([
    (0, class_validator_1.IsUUID)('4', { message: 'El rubrica_id debe ser un UUID v4 válido' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El rubrica_id es obligatorio' }),
    __metadata("design:type", String)
], CreateEvaluacionDto.prototype, "rubrica_id", void 0);
//# sourceMappingURL=create-evaluacion.dto.js.map