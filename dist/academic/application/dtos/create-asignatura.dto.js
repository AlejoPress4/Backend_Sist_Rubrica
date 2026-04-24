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
exports.CreateAsignaturaDto = void 0;
const class_validator_1 = require("class-validator");
class CreateAsignaturaDto {
    codigo;
    nombre;
    descripcion;
    creditos;
}
exports.CreateAsignaturaDto = CreateAsignaturaDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'El código debe ser un texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El código es obligatorio' }),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], CreateAsignaturaDto.prototype, "codigo", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'El nombre de la asignatura debe ser un texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre de la asignatura es obligatorio' }),
    __metadata("design:type", String)
], CreateAsignaturaDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'La descripción debe ser un texto' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAsignaturaDto.prototype, "descripcion", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'Los créditos deben ser un número entero' }),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(10),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateAsignaturaDto.prototype, "creditos", void 0);
//# sourceMappingURL=create-asignatura.dto.js.map