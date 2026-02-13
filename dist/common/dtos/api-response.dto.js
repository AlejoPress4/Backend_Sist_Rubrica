"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponseDto = void 0;
class ApiResponseDto {
    statusCode;
    message;
    data;
    constructor(statusCode, message, data) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
    }
    static success(data, message = 'Success') {
        return new ApiResponseDto(200, message, data);
    }
    static created(data, message = 'Created') {
        return new ApiResponseDto(201, message, data);
    }
    static error(message, statusCode = 400) {
        return new ApiResponseDto(statusCode, message);
    }
}
exports.ApiResponseDto = ApiResponseDto;
//# sourceMappingURL=api-response.dto.js.map