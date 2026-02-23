"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNotaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_nota_dto_1 = require("./create-nota.dto");
class UpdateNotaDto extends (0, mapped_types_1.PartialType)(create_nota_dto_1.CreateNotaDto) {
}
exports.UpdateNotaDto = UpdateNotaDto;
//# sourceMappingURL=update-nota.dto.js.map