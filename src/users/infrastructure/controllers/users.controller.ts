import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from '../../application/services/users.service';
import { CreateUserDto } from '../../application/dtos/create-user.dto';
import { UpdateUserDto } from '../../application/dtos/update-user.dto';
import { CreateDocenteDto } from '../../application/dtos/create-docente.dto';
import { UpdateDocenteDto } from '../../application/dtos/update-docente.dto';
import { CreateEstudianteDto } from '../../application/dtos/create-estudiante.dto';
import { UpdateEstudianteDto } from '../../application/dtos/update-estudiante.dto';
import { ApiResponseDto } from '../../../common/dtos/api-response.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    // ==================== Users ====================

    @Post()
    async createUser(@Body() dto: CreateUserDto) {
        const data = await this.usersService.createUser(dto);
        return ApiResponseDto.created(data, 'Usuario creado exitosamente');
    }

    @Get()
    async findAllUsers() {
        const data = await this.usersService.findAllUsers();
        return ApiResponseDto.success(data);
    }

    @Get(':id')
    async findUserById(@Param('id') id: string) {
        const data = await this.usersService.findUserById(id);
        return ApiResponseDto.success(data);
    }

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() dto: UpdateUserDto) {
        const data = await this.usersService.updateUser(id, dto);
        return ApiResponseDto.success(data, 'Usuario actualizado exitosamente');
    }

    @Delete(':id')
    async removeUser(@Param('id') id: string) {
        await this.usersService.removeUser(id);
        return ApiResponseDto.success(null, 'Usuario eliminado exitosamente');
    }

    // ==================== Docentes ====================

    @Post('docentes')
    async createDocente(@Body() dto: CreateDocenteDto) {
        const data = await this.usersService.createDocente(dto);
        return ApiResponseDto.created(data, 'Docente creado exitosamente');
    }

    @Get('docentes')
    async findAllDocentes() {
        const data = await this.usersService.findAllDocentes();
        return ApiResponseDto.success(data);
    }

    @Get('docentes/:id')
    async findDocenteById(@Param('id', ParseIntPipe) id: number) {
        const data = await this.usersService.findDocenteById(id);
        return ApiResponseDto.success(data);
    }

    @Get('docentes/user/:user_id')
    async findDocenteByUserId(@Param('user_id') user_id: string) {
        const data = await this.usersService.findDocenteByUserId(user_id);
        return ApiResponseDto.success(data);
    }

    @Put('docentes/:id')
    async updateDocente(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateDocenteDto) {
        const data = await this.usersService.updateDocente(id, dto);
        return ApiResponseDto.success(data, 'Docente actualizado exitosamente');
    }

    @Delete('docentes/:id')
    async removeDocente(@Param('id', ParseIntPipe) id: number) {
        await this.usersService.removeDocente(id);
        return ApiResponseDto.success(null, 'Docente eliminado exitosamente');
    }

    // ==================== Estudiantes ====================

    @Post('estudiantes')
    async createEstudiante(@Body() dto: CreateEstudianteDto) {
        const data = await this.usersService.createEstudiante(dto);
        return ApiResponseDto.created(data, 'Estudiante creado exitosamente');
    }

    @Get('estudiantes')
    async findAllEstudiantes() {
        const data = await this.usersService.findAllEstudiantes();
        return ApiResponseDto.success(data);
    }

    @Get('estudiantes/:id')
    async findEstudianteById(@Param('id', ParseIntPipe) id: number) {
        const data = await this.usersService.findEstudianteById(id);
        return ApiResponseDto.success(data);
    }

    @Get('estudiantes/user/:user_id')
    async findEstudianteByUserId(@Param('user_id') user_id: string) {
        const data = await this.usersService.findEstudianteByUserId(user_id);
        return ApiResponseDto.success(data);
    }

    @Put('estudiantes/:id')
    async updateEstudiante(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateEstudianteDto) {
        const data = await this.usersService.updateEstudiante(id, dto);
        return ApiResponseDto.success(data, 'Estudiante actualizado exitosamente');
    }

    @Delete('estudiantes/:id')
    async removeEstudiante(@Param('id', ParseIntPipe) id: number) {
        await this.usersService.removeEstudiante(id);
        return ApiResponseDto.success(null, 'Estudiante eliminado exitosamente');
    }
}
