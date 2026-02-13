"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRubricaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_rubrica_dto_1 = require("./create-rubrica.dto");
class UpdateRubricaDto extends (0, mapped_types_1.PartialType)(create_rubrica_dto_1.CreateRubricaDto) {
}
exports.UpdateRubricaDto = UpdateRubricaDto;
//# sourceMappingURL=update-rubrica.dto.js.map