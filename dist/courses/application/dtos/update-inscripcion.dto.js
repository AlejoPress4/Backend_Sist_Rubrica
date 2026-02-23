"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInscripcionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_inscripcion_dto_1 = require("./create-inscripcion.dto");
class UpdateInscripcionDto extends (0, mapped_types_1.PartialType)(create_inscripcion_dto_1.CreateInscripcionDto) {
}
exports.UpdateInscripcionDto = UpdateInscripcionDto;
//# sourceMappingURL=update-inscripcion.dto.js.map