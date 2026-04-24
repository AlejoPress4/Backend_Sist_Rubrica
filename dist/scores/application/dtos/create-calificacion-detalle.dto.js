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
exports.CreateCalificacionDetalleDto = void 0;
const class_validator_1 = require("class-validator");
class CreateCalificacionDetalleDto {
    puntaje;
    comentario;
    escala_id;
    estudiante_id;
    evaluacion_id;
}
exports.CreateCalificacionDetalleDto = CreateCalificacionDetalleDto;
__decorate([
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 2 }, { message: 'El puntaje debe ser un número con máximo 2 decimales' }),
    (0, class_validator_1.Min)(0, { message: 'El puntaje mínimo es 0' }),
    (0, class_validator_1.Max)(5, { message: 'El puntaje máximo es 5' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateCalificacionDetalleDto.prototype, "puntaje", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'El comentario debe ser un texto' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCalificacionDetalleDto.prototype, "comentario", void 0);
__decorate([
    (0, class_validator_1.IsUUID)('4', { message: 'El escala_id debe ser un UUID v4 válido' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCalificacionDetalleDto.prototype, "escala_id", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'El estudiante_id debe ser un número' }),
    __metadata("design:type", Number)
], CreateCalificacionDetalleDto.prototype, "estudiante_id", void 0);
__decorate([
    (0, class_validator_1.IsUUID)('4', { message: 'El evaluacion_id debe ser un UUID v4 válido' }),
    __metadata("design:type", String)
], CreateCalificacionDetalleDto.prototype, "evaluacion_id", void 0);
//# sourceMappingURL=create-calificacion-detalle.dto.js.map