import { User } from '../entities/user.entity';
import { CreateUserDto } from '../../application/dtos/create-user.dto';
import { UpdateUserDto } from '../../application/dtos/update-user.dto';
import { FilterUsersDto } from '../../application/dtos/filter-users.dto';
export interface IUsersService {
    findAll(filter: FilterUsersDto): Promise<User[]>;
    findById(id: string): Promise<User>;
    findByCorreo(correoInstitucional: string): Promise<User>;
    findByCorreoWithPassword(correoInstitucional: string): Promise<User>;
    create(dto: CreateUserDto): Promise<User>;
    update(id: string, dto: UpdateUserDto): Promise<User>;
    desactivar(id: string): Promise<User>;
    remove(id: string): Promise<void>;
}
