"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCriterioDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_criterio_dto_1 = require("./create-criterio.dto");
class UpdateCriterioDto extends (0, mapped_types_1.PartialType)(create_criterio_dto_1.CreateCriterioDto) {
}
exports.UpdateCriterioDto = UpdateCriterioDto;
//# sourceMappingURL=update-criterio.dto.js.map