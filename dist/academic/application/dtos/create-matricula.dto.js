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
exports.CreateMatriculaDto = void 0;
const class_validator_1 = require("class-validator");
const constants_1 = require("../../../common/constants/constants");
class CreateMatriculaDto {
    estudiante_id;
    carrera_id;
    periodo_ingreso;
    estado_academico;
}
exports.CreateMatriculaDto = CreateMatriculaDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMatriculaDto.prototype, "estudiante_id", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMatriculaDto.prototype, "carrera_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(10),
    __metadata("design:type", String)
], CreateMatriculaDto.prototype, "periodo_ingreso", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(constants_1.EstadoMatricula),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateMatriculaDto.prototype, "estado_academico", void 0);
//# sourceMappingURL=create-matricula.dto.js.map