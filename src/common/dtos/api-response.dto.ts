export class ApiResponseDto<T> {
    statusCode: number;
    message: string;
    data?: T;

    constructor(statusCode: number, message: string, data?: T) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
    }

    static success<T>(data: T, message = 'Success'): ApiResponseDto<T> {
        return new ApiResponseDto<T>(200, message, data);
    }

    static created<T>(data: T, message = 'Created'): ApiResponseDto<T> {
        return new ApiResponseDto<T>(201, message, data);
    }

    static error(message: string, statusCode = 400): ApiResponseDto<null> {
        return new ApiResponseDto<null>(statusCode, message);
    }
}
