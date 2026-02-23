"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAsignaturaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_asignatura_dto_1 = require("./create-asignatura.dto");
class UpdateAsignaturaDto extends (0, mapped_types_1.PartialType)(create_asignatura_dto_1.CreateAsignaturaDto) {
}
exports.UpdateAsignaturaDto = UpdateAsignaturaDto;
//# sourceMappingURL=update-asignatura.dto.js.map