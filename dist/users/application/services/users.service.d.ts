import { DataSource, Repository } from 'typeorm';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { User } from '../../domain/entities/user.entity';
import { Docente } from '../../domain/entities/docente.entity';
import { Estudiante } from '../../domain/entities/estudiante.entity';
import { IUsersService } from '../../domain/interfaces/users-service.interface';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { FilterUsersDto } from '../dtos/filter-users.dto';
export declare class UsersService implements IUsersService {
    private readonly userRepository;
    private readonly docenteRepository;
    private readonly estudianteRepository;
    private readonly dataSource;
    private readonly eventEmitter;
    constructor(userRepository: Repository<User>, docenteRepository: Repository<Docente>, estudianteRepository: Repository<Estudiante>, dataSource: DataSource, eventEmitter: EventEmitter2);
    findAll(filter: FilterUsersDto): Promise<User[]>;
    findById(id: string): Promise<User>;
    findByCorreo(correoInstitucional: string): Promise<User>;
    findByCorreoWithPassword(correoInstitucional: string): Promise<User>;
    create(dto: CreateUserDto): Promise<User>;
    update(id: string, dto: UpdateUserDto): Promise<User>;
    desactivar(id: string): Promise<User>;
    remove(id: string): Promise<void>;
}
