import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../domain/entities/user.entity';
import { Docente } from '../../domain/entities/docente.entity';
import { Estudiante } from '../../domain/entities/estudiante.entity';
import { IUsersService } from '../../domain/interfaces/users-service.interface';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { CreateDocenteDto } from '../dtos/create-docente.dto';
import { UpdateDocenteDto } from '../dtos/update-docente.dto';
import { CreateEstudianteDto } from '../dtos/create-estudiante.dto';
import { UpdateEstudianteDto } from '../dtos/update-estudiante.dto';

@Injectable()
export class UsersService implements IUsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(Docente)
        private readonly docenteRepository: Repository<Docente>,
        @InjectRepository(Estudiante)
        private readonly estudianteRepository: Repository<Estudiante>,
    ) { }

    // ==================== Users ====================

    async findAllUsers(): Promise<User[]> {
        return this.userRepository.find();
    }

    async findUserById(id: string): Promise<User> {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
            throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
        }
        return user;
    }

    async findUserByEmail(email: string): Promise<User> {
        const user = await this.userRepository.findOne({ where: { email } });
        if (!user) {
            throw new NotFoundException(`Usuario con email ${email} no encontrado`);
        }
        return user;
    }

    async createUser(dto: CreateUserDto): Promise<User> {
        const user = this.userRepository.create(dto);
        return this.userRepository.save(user);
    }

    async updateUser(id: string, dto: UpdateUserDto): Promise<User> {
        const user = await this.findUserById(id);
        Object.assign(user, dto);
        return this.userRepository.save(user);
    }

    async removeUser(id: string): Promise<void> {
        const user = await this.findUserById(id);
        await this.userRepository.remove(user);
    }

    // ==================== Docentes ====================

    async findAllDocentes(): Promise<Docente[]> {
        return this.docenteRepository.find();
    }

    async findDocenteById(id: number): Promise<Docente> {
        const docente = await this.docenteRepository.findOne({ where: { id } });
        if (!docente) {
            throw new NotFoundException(`Docente con ID ${id} no encontrado`);
        }
        return docente;
    }

    async findDocenteByUserId(user_id: string): Promise<Docente> {
        const docente = await this.docenteRepository.findOne({ where: { user_id } });
        if (!docente) {
            throw new NotFoundException(`Docente con user_id ${user_id} no encontrado`);
        }
        return docente;
    }

    async createDocente(dto: CreateDocenteDto): Promise<Docente> {
        const docente = this.docenteRepository.create(dto);
        return this.docenteRepository.save(docente);
    }

    async updateDocente(id: number, dto: UpdateDocenteDto): Promise<Docente> {
        const docente = await this.findDocenteById(id);
        Object.assign(docente, dto);
        return this.docenteRepository.save(docente);
    }

    async removeDocente(id: number): Promise<void> {
        const docente = await this.findDocenteById(id);
        await this.docenteRepository.remove(docente);
    }

    // ==================== Estudiantes ====================

    async findAllEstudiantes(): Promise<Estudiante[]> {
        return this.estudianteRepository.find();
    }

    async findEstudianteById(id: number): Promise<Estudiante> {
        const estudiante = await this.estudianteRepository.findOne({ where: { id } });
        if (!estudiante) {
            throw new NotFoundException(`Estudiante con ID ${id} no encontrado`);
        }
        return estudiante;
    }

    async findEstudianteByUserId(user_id: string): Promise<Estudiante> {
        const estudiante = await this.estudianteRepository.findOne({ where: { user_id } });
        if (!estudiante) {
            throw new NotFoundException(`Estudiante con user_id ${user_id} no encontrado`);
        }
        return estudiante;
    }

    async createEstudiante(dto: CreateEstudianteDto): Promise<Estudiante> {
        const estudiante = this.estudianteRepository.create(dto);
        return this.estudianteRepository.save(estudiante);
    }

    async updateEstudiante(id: number, dto: UpdateEstudianteDto): Promise<Estudiante> {
        const estudiante = await this.findEstudianteById(id);
        Object.assign(estudiante, dto);
        return this.estudianteRepository.save(estudiante);
    }

    async removeEstudiante(id: number): Promise<void> {
        const estudiante = await this.findEstudianteById(id);
        await this.estudianteRepository.remove(estudiante);
    }
}
