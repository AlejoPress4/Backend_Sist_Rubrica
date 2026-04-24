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
exports.CreateUserDto = void 0;
const class_validator_1 = require("class-validator");
const enums_1 = require("../../../common/enums");
class CreateUserDto {
    correoInstitucional;
    password;
    rol;
    nombre;
    codigo;
    titulo;
    creditosMaximos;
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'El correo institucional debe tener un formato válido' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El correo institucional es obligatorio' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "correoInstitucional", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'La contraseña debe ser un texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'La contraseña es obligatoria' }),
    (0, class_validator_1.MinLength)(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(enums_1.Rol, { message: 'El rol debe ser uno de: ADMIN, DOCENTE, ESTUDIANTE' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El rol es obligatorio' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "rol", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'El nombre debe ser un texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre es obligatorio' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'El código debe ser un número entero' }),
    (0, class_validator_1.Min)(1, { message: 'El código debe ser mayor a 0' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "codigo", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'El título debe ser un texto' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "titulo", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'Los créditos máximos deben ser un número entero' }),
    (0, class_validator_1.Min)(1, { message: 'Los créditos máximos deben ser al menos 1' }),
    (0, class_validator_1.Max)(30, { message: 'Los créditos máximos no pueden superar 30' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "creditosMaximos", void 0);
//# sourceMappingURL=create-user.dto.js.map