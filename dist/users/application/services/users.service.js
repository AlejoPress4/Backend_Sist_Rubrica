"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const event_emitter_1 = require("@nestjs/event-emitter");
const bcrypt = __importStar(require("bcrypt"));
const user_entity_1 = require("../../domain/entities/user.entity");
const docente_entity_1 = require("../../domain/entities/docente.entity");
const estudiante_entity_1 = require("../../domain/entities/estudiante.entity");
const enums_1 = require("../../../common/enums");
const BCRYPT_ROUNDS = 10;
let UsersService = class UsersService {
    userRepository;
    docenteRepository;
    estudianteRepository;
    dataSource;
    eventEmitter;
    constructor(userRepository, docenteRepository, estudianteRepository, dataSource, eventEmitter) {
        this.userRepository = userRepository;
        this.docenteRepository = docenteRepository;
        this.estudianteRepository = estudianteRepository;
        this.dataSource = dataSource;
        this.eventEmitter = eventEmitter;
    }
    async findAll(filter) {
        const qb = this.userRepository.createQueryBuilder('user')
            .leftJoinAndSelect('user.docente', 'docente')
            .leftJoinAndSelect('user.estudiante', 'estudiante');
        if (filter.rol) {
            qb.andWhere('user.rol = :rol', { rol: filter.rol });
        }
        if (filter.activo !== undefined) {
            qb.andWhere('user.activo = :activo', { activo: filter.activo });
        }
        if (filter.buscar) {
            qb.andWhere('(user.correoInstitucional LIKE :q OR docente.nombre LIKE :q OR estudiante.nombre LIKE :q)', { q: `%${filter.buscar}%` });
        }
        if (filter.carreraId) {
            qb.innerJoin('estudiante.carreras', 'carrera', 'carrera.id = :carreraId', {
                carreraId: filter.carreraId,
            });
        }
        return qb.getMany();
    }
    async findById(id) {
        const user = await this.userRepository.findOne({
            where: { id },
            relations: ['docente', 'estudiante'],
        });
        if (!user) {
            throw new common_1.NotFoundException(`Usuario con ID ${id} no encontrado`);
        }
        return user;
    }
    async findByCorreo(correoInstitucional) {
        const user = await this.userRepository.findOne({
            where: { correoInstitucional },
            relations: ['docente', 'estudiante'],
        });
        if (!user) {
            throw new common_1.NotFoundException(`Usuario con correo ${correoInstitucional} no encontrado`);
        }
        return user;
    }
    async findByCorreoWithPassword(correoInstitucional) {
        const user = await this.userRepository.createQueryBuilder('user')
            .leftJoinAndSelect('user.docente', 'docente')
            .leftJoinAndSelect('user.estudiante', 'estudiante')
            .addSelect('user.password')
            .where('user.correoInstitucional = :correoInstitucional', { correoInstitucional })
            .getOne();
        if (!user) {
            throw new common_1.NotFoundException(`Usuario con correo ${correoInstitucional} no encontrado`);
        }
        return user;
    }
    async create(dto) {
        const existing = await this.userRepository.findOne({
            where: { correoInstitucional: dto.correoInstitucional },
        });
        if (existing) {
            throw new common_1.ConflictException(`Ya existe un usuario con el correo ${dto.correoInstitucional}`);
        }
        if (dto.rol === enums_1.Rol.DOCENTE && !dto.titulo) {
            throw new common_1.BadRequestException('El título es obligatorio para docentes');
        }
        if ((dto.rol === enums_1.Rol.DOCENTE || dto.rol === enums_1.Rol.ESTUDIANTE) && !dto.codigo) {
            throw new common_1.BadRequestException('El código institucional es obligatorio para docentes y estudiantes');
        }
        if (dto.codigo) {
            const docenteExistente = await this.docenteRepository.findOne({ where: { id: dto.codigo } });
            const estudianteExistente = await this.estudianteRepository.findOne({ where: { id: dto.codigo } });
            if (docenteExistente || estudianteExistente) {
                throw new common_1.ConflictException(`Ya existe un docente o estudiante con el código ${dto.codigo}`);
            }
        }
        const hashedPassword = await bcrypt.hash(dto.password, BCRYPT_ROUNDS);
        const savedUser = await this.dataSource.transaction(async (manager) => {
            const user = manager.create(user_entity_1.User, {
                correoInstitucional: dto.correoInstitucional,
                password: hashedPassword,
                rol: dto.rol,
                activo: true,
            });
            const persistedUser = await manager.save(user_entity_1.User, user);
            if (dto.rol === enums_1.Rol.DOCENTE) {
                const docente = manager.create(docente_entity_1.Docente, {
                    id: dto.codigo,
                    nombre: dto.nombre,
                    titulo: dto.titulo,
                    userId: persistedUser.id,
                });
                await manager.save(docente_entity_1.Docente, docente);
            }
            else if (dto.rol === enums_1.Rol.ESTUDIANTE) {
                const estudiante = manager.create(estudiante_entity_1.Estudiante, {
                    id: dto.codigo,
                    nombre: dto.nombre,
                    creditosMaximos: dto.creditosMaximos ?? 21,
                    userId: persistedUser.id,
                });
                await manager.save(estudiante_entity_1.Estudiante, estudiante);
            }
            return persistedUser;
        });
        const completeUser = await this.findById(savedUser.id);
        this.eventEmitter.emit('user.created', {
            userId: completeUser.id,
            correoInstitucional: completeUser.correoInstitucional,
            rol: completeUser.rol,
        });
        return completeUser;
    }
    async update(id, dto) {
        const user = await this.findById(id);
        if (dto.correoInstitucional && dto.correoInstitucional !== user.correoInstitucional) {
            const conflict = await this.userRepository.findOne({
                where: { correoInstitucional: dto.correoInstitucional },
            });
            if (conflict) {
                throw new common_1.ConflictException(`Ya existe un usuario con el correo ${dto.correoInstitucional}`);
            }
            user.correoInstitucional = dto.correoInstitucional;
        }
        if (dto.password) {
            user.password = await bcrypt.hash(dto.password, BCRYPT_ROUNDS);
        }
        if (dto.activo !== undefined) {
            user.activo = dto.activo;
        }
        await this.dataSource.transaction(async (manager) => {
            await manager.save(user_entity_1.User, user);
            if (user.rol === enums_1.Rol.DOCENTE && user.docente) {
                if (dto.nombre !== undefined)
                    user.docente.nombre = dto.nombre;
                if (dto.titulo !== undefined)
                    user.docente.titulo = dto.titulo;
                await manager.save(docente_entity_1.Docente, user.docente);
            }
            else if (user.rol === enums_1.Rol.ESTUDIANTE && user.estudiante) {
                if (dto.nombre !== undefined)
                    user.estudiante.nombre = dto.nombre;
                if (dto.creditosMaximos !== undefined) {
                    user.estudiante.creditosMaximos = dto.creditosMaximos;
                }
                await manager.save(estudiante_entity_1.Estudiante, user.estudiante);
            }
        });
        const updated = await this.findById(id);
        this.eventEmitter.emit('user.updated', {
            userId: updated.id,
            correoInstitucional: updated.correoInstitucional,
        });
        return updated;
    }
    async desactivar(id) {
        const user = await this.findById(id);
        user.activo = false;
        const saved = await this.userRepository.save(user);
        this.eventEmitter.emit('user.deactivated', {
            userId: saved.id,
            correoInstitucional: saved.correoInstitucional,
        });
        return saved;
    }
    async remove(id) {
        const user = await this.findById(id);
        await this.userRepository.remove(user);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(docente_entity_1.Docente)),
    __param(2, (0, typeorm_1.InjectRepository)(estudiante_entity_1.Estudiante)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.DataSource,
        event_emitter_1.EventEmitter2])
], UsersService);
//# sourceMappingURL=users.service.js.map