import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../domain/entities/user.entity';
import { IUsersService } from '../../domain/interfaces/users-service.interface';

@Injectable()
export class UsersService implements IUsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async findById(id: string): Promise<User> {
        // TODO: Implement findById
        throw new Error('Method not implemented.');
    }

    async findByEmail(email: string): Promise<User> {
        // TODO: Implement findByEmail
        throw new Error('Method not implemented.');
    }

    async create(userData: Partial<User>): Promise<User> {
        // TODO: Implement create
        throw new Error('Method not implemented.');
    }

    async update(id: string, userData: Partial<User>): Promise<User> {
        // TODO: Implement update
        throw new Error('Method not implemented.');
    }

    async remove(id: string): Promise<void> {
        // TODO: Implement remove
        throw new Error('Method not implemented.');
    }
}
