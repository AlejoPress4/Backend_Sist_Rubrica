"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEvaluacionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_evaluacion_dto_1 = require("./create-evaluacion.dto");
class UpdateEvaluacionDto extends (0, mapped_types_1.PartialType)(create_evaluacion_dto_1.CreateEvaluacionDto) {
}
exports.UpdateEvaluacionDto = UpdateEvaluacionDto;
//# sourceMappingURL=update-evaluacion.dto.js.map