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
exports.CreateEscalaDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CreateEscalaDto {
    nombre;
    descripcion;
    valor;
    criterio_id;
}
exports.CreateEscalaDto = CreateEscalaDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'El nombre de la escala debe ser un texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre de la escala es obligatorio' }),
    __metadata("design:type", String)
], CreateEscalaDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'La descripción de la escala debe ser un texto' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateEscalaDto.prototype, "descripcion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'El valor debe ser un número' }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateEscalaDto.prototype, "valor", void 0);
__decorate([
    (0, class_validator_1.IsUUID)('4', { message: 'El criterio_id debe ser un UUID v4 válido' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El criterio_id es obligatorio' }),
    __metadata("design:type", String)
], CreateEscalaDto.prototype, "criterio_id", void 0);
//# sourceMappingURL=create-escala.dto.js.map