declare const _default: (() => {
    port: number;
    jwtSecret: string;
    jwtExpiresIn: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    port: number;
    jwtSecret: string;
    jwtExpiresIn: string;
}>;
export default _default;
