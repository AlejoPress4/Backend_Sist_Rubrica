export declare class ApiResponseDto<T> {
    statusCode: number;
    message: string;
    data?: T;
    constructor(statusCode: number, message: string, data?: T);
    static success<T>(data: T, message?: string): ApiResponseDto<T>;
    static created<T>(data: T, message?: string): ApiResponseDto<T>;
    static error(message: string, statusCode?: number): ApiResponseDto<null>;
}
