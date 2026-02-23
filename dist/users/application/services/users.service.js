"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
const user_entity_1 = require("../../domain/entities/user.entity");
const docente_entity_1 = require("../../domain/entities/docente.entity");
const estudiante_entity_1 = require("../../domain/entities/estudiante.entity");
let UsersService = class UsersService {
    userRepository;
    docenteRepository;
    estudianteRepository;
    constructor(userRepository, docenteRepository, estudianteRepository) {
        this.userRepository = userRepository;
        this.docenteRepository = docenteRepository;
        this.estudianteRepository = estudianteRepository;
    }
    async findAllUsers() {
        return this.userRepository.find();
    }
    async findUserById(id) {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException(`Usuario con ID ${id} no encontrado`);
        }
        return user;
    }
    async findUserByEmail(email) {
        const user = await this.userRepository.findOne({ where: { email } });
        if (!user) {
            throw new common_1.NotFoundException(`Usuario con email ${email} no encontrado`);
        }
        return user;
    }
    async createUser(dto) {
        const user = this.userRepository.create(dto);
        return this.userRepository.save(user);
    }
    async updateUser(id, dto) {
        const user = await this.findUserById(id);
        Object.assign(user, dto);
        return this.userRepository.save(user);
    }
    async removeUser(id) {
        const user = await this.findUserById(id);
        await this.userRepository.remove(user);
    }
    async findAllDocentes() {
        return this.docenteRepository.find();
    }
    async findDocenteById(id) {
        const docente = await this.docenteRepository.findOne({ where: { id } });
        if (!docente) {
            throw new common_1.NotFoundException(`Docente con ID ${id} no encontrado`);
        }
        return docente;
    }
    async findDocenteByUserId(user_id) {
        const docente = await this.docenteRepository.findOne({ where: { user_id } });
        if (!docente) {
            throw new common_1.NotFoundException(`Docente con user_id ${user_id} no encontrado`);
        }
        return docente;
    }
    async createDocente(dto) {
        const docente = this.docenteRepository.create(dto);
        return this.docenteRepository.save(docente);
    }
    async updateDocente(id, dto) {
        const docente = await this.findDocenteById(id);
        Object.assign(docente, dto);
        return this.docenteRepository.save(docente);
    }
    async removeDocente(id) {
        const docente = await this.findDocenteById(id);
        await this.docenteRepository.remove(docente);
    }
    async findAllEstudiantes() {
        return this.estudianteRepository.find();
    }
    async findEstudianteById(id) {
        const estudiante = await this.estudianteRepository.findOne({ where: { id } });
        if (!estudiante) {
            throw new common_1.NotFoundException(`Estudiante con ID ${id} no encontrado`);
        }
        return estudiante;
    }
    async findEstudianteByUserId(user_id) {
        const estudiante = await this.estudianteRepository.findOne({ where: { user_id } });
        if (!estudiante) {
            throw new common_1.NotFoundException(`Estudiante con user_id ${user_id} no encontrado`);
        }
        return estudiante;
    }
    async createEstudiante(dto) {
        const estudiante = this.estudianteRepository.create(dto);
        return this.estudianteRepository.save(estudiante);
    }
    async updateEstudiante(id, dto) {
        const estudiante = await this.findEstudianteById(id);
        Object.assign(estudiante, dto);
        return this.estudianteRepository.save(estudiante);
    }
    async removeEstudiante(id) {
        const estudiante = await this.findEstudianteById(id);
        await this.estudianteRepository.remove(estudiante);
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
        typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map