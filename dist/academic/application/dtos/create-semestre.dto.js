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
exports.CreateSemestreDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CreateSemestreDto {
    nombre;
    fechaInicio;
    fechaFin;
    carrera_id;
}
exports.CreateSemestreDto = CreateSemestreDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'El nombre del semestre debe ser un texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre del semestre es obligatorio' }),
    __metadata("design:type", String)
], CreateSemestreDto.prototype, "nombre", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsDate)({ message: 'La fecha de inicio debe ser una fecha válida' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'La fecha de inicio es obligatoria' }),
    __metadata("design:type", Date)
], CreateSemestreDto.prototype, "fechaInicio", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsDate)({ message: 'La fecha de fin debe ser una fecha válida' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'La fecha de fin es obligatoria' }),
    __metadata("design:type", Date)
], CreateSemestreDto.prototype, "fechaFin", void 0);
__decorate([
    (0, class_validator_1.IsUUID)('4', { message: 'El carrera_id debe ser un UUID v4 válido' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El carrera_id es obligatorio' }),
    __metadata("design:type", String)
], CreateSemestreDto.prototype, "carrera_id", void 0);
//# sourceMappingURL=create-semestre.dto.js.map