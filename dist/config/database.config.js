"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('database', () => {
    const dbType = process.env.DB_TYPE;
    if (dbType === 'sqlite') {
        return {
            type: 'better-sqlite3',
            database: process.env.DB_SQLITE_PATH || './rubrica.db',
            autoLoadEntities: true,
            synchronize: process.env.NODE_ENV !== 'production',
        };
    }
    return {
        type: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        autoLoadEntities: true,
        synchronize: process.env.NODE_ENV !== 'production',
    };
});
//# sourceMappingURL=database.config.js.map