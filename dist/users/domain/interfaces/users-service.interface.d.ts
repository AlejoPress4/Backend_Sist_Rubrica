import { User } from '../entities/user.entity';
import { Docente } from '../entities/docente.entity';
import { Estudiante } from '../entities/estudiante.entity';
import { CreateUserDto } from '../../application/dtos/create-user.dto';
import { UpdateUserDto } from '../../application/dtos/update-user.dto';
import { CreateDocenteDto } from '../../application/dtos/create-docente.dto';
import { UpdateDocenteDto } from '../../application/dtos/update-docente.dto';
import { CreateEstudianteDto } from '../../application/dtos/create-estudiante.dto';
import { UpdateEstudianteDto } from '../../application/dtos/update-estudiante.dto';
export interface IUsersService {
    findAllUsers(): Promise<User[]>;
    findUserById(id: string): Promise<User>;
    findUserByEmail(email: string): Promise<User>;
    createUser(dto: CreateUserDto): Promise<User>;
    updateUser(id: string, dto: UpdateUserDto): Promise<User>;
    removeUser(id: string): Promise<void>;
    findAllDocentes(): Promise<Docente[]>;
    findDocenteById(id: string): Promise<Docente>;
    findDocenteByUserId(user_id: string): Promise<Docente>;
    createDocente(dto: CreateDocenteDto): Promise<Docente>;
    updateDocente(id: string, dto: UpdateDocenteDto): Promise<Docente>;
    removeDocente(id: string): Promise<void>;
    findAllEstudiantes(): Promise<Estudiante[]>;
    findEstudianteById(id: string): Promise<Estudiante>;
    findEstudianteByUserId(user_id: string): Promise<Estudiante>;
    createEstudiante(dto: CreateEstudianteDto): Promise<Estudiante>;
    updateEstudiante(id: string, dto: UpdateEstudianteDto): Promise<Estudiante>;
    removeEstudiante(id: string): Promise<void>;
}
