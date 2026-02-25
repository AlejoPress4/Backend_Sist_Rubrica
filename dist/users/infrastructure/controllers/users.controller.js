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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../../application/services/users.service");
const create_user_dto_1 = require("../../application/dtos/create-user.dto");
const update_user_dto_1 = require("../../application/dtos/update-user.dto");
const create_docente_dto_1 = require("../../application/dtos/create-docente.dto");
const update_docente_dto_1 = require("../../application/dtos/update-docente.dto");
const create_estudiante_dto_1 = require("../../application/dtos/create-estudiante.dto");
const update_estudiante_dto_1 = require("../../application/dtos/update-estudiante.dto");
const api_response_dto_1 = require("../../../common/dtos/api-response.dto");
let UsersController = class UsersController {
    usersService;
    constructor(usersService) {
        this.usersService = usersService;
    }
    async createUser(dto) {
        const data = await this.usersService.createUser(dto);
        return api_response_dto_1.ApiResponseDto.created(data, 'Usuario creado exitosamente');
    }
    async findAllUsers() {
        const data = await this.usersService.findAllUsers();
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async findUserById(id) {
        const data = await this.usersService.findUserById(id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async updateUser(id, dto) {
        const data = await this.usersService.updateUser(id, dto);
        return api_response_dto_1.ApiResponseDto.success(data, 'Usuario actualizado exitosamente');
    }
    async removeUser(id) {
        await this.usersService.removeUser(id);
        return api_response_dto_1.ApiResponseDto.success(null, 'Usuario eliminado exitosamente');
    }
    async createDocente(dto) {
        const data = await this.usersService.createDocente(dto);
        return api_response_dto_1.ApiResponseDto.created(data, 'Docente creado exitosamente');
    }
    async findAllDocentes() {
        const data = await this.usersService.findAllDocentes();
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async findDocenteById(id) {
        const data = await this.usersService.findDocenteById(id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async findDocenteByUserId(user_id) {
        const data = await this.usersService.findDocenteByUserId(user_id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async updateDocente(id, dto) {
        const data = await this.usersService.updateDocente(id, dto);
        return api_response_dto_1.ApiResponseDto.success(data, 'Docente actualizado exitosamente');
    }
    async removeDocente(id) {
        await this.usersService.removeDocente(id);
        return api_response_dto_1.ApiResponseDto.success(null, 'Docente eliminado exitosamente');
    }
    async createEstudiante(dto) {
        const data = await this.usersService.createEstudiante(dto);
        return api_response_dto_1.ApiResponseDto.created(data, 'Estudiante creado exitosamente');
    }
    async findAllEstudiantes() {
        const data = await this.usersService.findAllEstudiantes();
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async findEstudianteById(id) {
        const data = await this.usersService.findEstudianteById(id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async findEstudianteByUserId(user_id) {
        const data = await this.usersService.findEstudianteByUserId(user_id);
        return api_response_dto_1.ApiResponseDto.success(data);
    }
    async updateEstudiante(id, dto) {
        const data = await this.usersService.updateEstudiante(id, dto);
        return api_response_dto_1.ApiResponseDto.success(data, 'Estudiante actualizado exitosamente');
    }
    async removeEstudiante(id) {
        await this.usersService.removeEstudiante(id);
        return api_response_dto_1.ApiResponseDto.success(null, 'Estudiante eliminado exitosamente');
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAllUsers", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findUserById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "removeUser", null);
__decorate([
    (0, common_1.Post)('docentes'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_docente_dto_1.CreateDocenteDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createDocente", null);
__decorate([
    (0, common_1.Get)('docentes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAllDocentes", null);
__decorate([
    (0, common_1.Get)('docentes/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findDocenteById", null);
__decorate([
    (0, common_1.Get)('docentes/user/:user_id'),
    __param(0, (0, common_1.Param)('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findDocenteByUserId", null);
__decorate([
    (0, common_1.Put)('docentes/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_docente_dto_1.UpdateDocenteDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateDocente", null);
__decorate([
    (0, common_1.Delete)('docentes/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "removeDocente", null);
__decorate([
    (0, common_1.Post)('estudiantes'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_estudiante_dto_1.CreateEstudianteDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createEstudiante", null);
__decorate([
    (0, common_1.Get)('estudiantes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAllEstudiantes", null);
__decorate([
    (0, common_1.Get)('estudiantes/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findEstudianteById", null);
__decorate([
    (0, common_1.Get)('estudiantes/user/:user_id'),
    __param(0, (0, common_1.Param)('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findEstudianteByUserId", null);
__decorate([
    (0, common_1.Put)('estudiantes/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_estudiante_dto_1.UpdateEstudianteDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateEstudiante", null);
__decorate([
    (0, common_1.Delete)('estudiantes/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "removeEstudiante", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map