import { UsersService } from '../../application/services/users.service';
import { CreateUserDto } from '../../application/dtos/create-user.dto';
import { UpdateUserDto } from '../../application/dtos/update-user.dto';
import { CreateDocenteDto } from '../../application/dtos/create-docente.dto';
import { UpdateDocenteDto } from '../../application/dtos/update-docente.dto';
import { CreateEstudianteDto } from '../../application/dtos/create-estudiante.dto';
import { UpdateEstudianteDto } from '../../application/dtos/update-estudiante.dto';
import { ApiResponseDto } from '../../../common/dtos/api-response.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(dto: CreateUserDto): Promise<ApiResponseDto<import("../../domain/entities/user.entity").User>>;
    findAllUsers(): Promise<ApiResponseDto<import("../../domain/entities/user.entity").User[]>>;
    findUserById(id: string): Promise<ApiResponseDto<import("../../domain/entities/user.entity").User>>;
    updateUser(id: string, dto: UpdateUserDto): Promise<ApiResponseDto<import("../../domain/entities/user.entity").User>>;
    removeUser(id: string): Promise<ApiResponseDto<null>>;
    createDocente(dto: CreateDocenteDto): Promise<ApiResponseDto<import("../../domain/entities/docente.entity").Docente>>;
    findAllDocentes(): Promise<ApiResponseDto<import("../../domain/entities/docente.entity").Docente[]>>;
    findDocenteById(id: string): Promise<ApiResponseDto<import("../../domain/entities/docente.entity").Docente>>;
    findDocenteByUserId(user_id: string): Promise<ApiResponseDto<import("../../domain/entities/docente.entity").Docente>>;
    updateDocente(id: string, dto: UpdateDocenteDto): Promise<ApiResponseDto<import("../../domain/entities/docente.entity").Docente>>;
    removeDocente(id: string): Promise<ApiResponseDto<null>>;
    createEstudiante(dto: CreateEstudianteDto): Promise<ApiResponseDto<import("../../domain/entities/estudiante.entity").Estudiante>>;
    findAllEstudiantes(): Promise<ApiResponseDto<import("../../domain/entities/estudiante.entity").Estudiante[]>>;
    findEstudianteById(id: string): Promise<ApiResponseDto<import("../../domain/entities/estudiante.entity").Estudiante>>;
    findEstudianteByUserId(user_id: string): Promise<ApiResponseDto<import("../../domain/entities/estudiante.entity").Estudiante>>;
    updateEstudiante(id: string, dto: UpdateEstudianteDto): Promise<ApiResponseDto<import("../../domain/entities/estudiante.entity").Estudiante>>;
    removeEstudiante(id: string): Promise<ApiResponseDto<null>>;
}
