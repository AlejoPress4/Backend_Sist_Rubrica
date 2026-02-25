declare const _default: (() => {
    type: "better-sqlite3";
    database: string;
    autoLoadEntities: boolean;
    synchronize: boolean;
    host?: undefined;
    port?: undefined;
    username?: undefined;
    password?: undefined;
} | {
    type: "postgres";
    host: string | undefined;
    port: number;
    username: string | undefined;
    password: string | undefined;
    database: string | undefined;
    autoLoadEntities: boolean;
    synchronize: boolean;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    type: "better-sqlite3";
    database: string;
    autoLoadEntities: boolean;
    synchronize: boolean;
    host?: undefined;
    port?: undefined;
    username?: undefined;
    password?: undefined;
} | {
    type: "postgres";
    host: string | undefined;
    port: number;
    username: string | undefined;
    password: string | undefined;
    database: string | undefined;
    autoLoadEntities: boolean;
    synchronize: boolean;
}>;
export default _default;
