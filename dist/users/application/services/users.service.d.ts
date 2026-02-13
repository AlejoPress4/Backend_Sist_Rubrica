import { Repository } from 'typeorm';
import { User } from '../../domain/entities/user.entity';
import { IUsersService } from '../../domain/interfaces/users-service.interface';
export declare class UsersService implements IUsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findById(id: string): Promise<User>;
    findByEmail(email: string): Promise<User>;
    create(userData: Partial<User>): Promise<User>;
    update(id: string, userData: Partial<User>): Promise<User>;
    remove(id: string): Promise<void>;
}
