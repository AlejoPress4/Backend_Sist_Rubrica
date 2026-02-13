import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { IAuthService } from '../../domain/interfaces/auth-service.interface';
import { IUsersService } from '../../../users/domain/interfaces/users-service.interface';
import { RegisterDto } from '../dtos/register.dto';

@Injectable()
export class AuthService implements IAuthService {
    constructor() { }

    async validateUser(email: string, password: string): Promise<any> {
        // TODO: Implement user validation logic
        return { email, userId: 'dummy-id', rol: 'docente' };
    }

    async login(email: string, password: string): Promise<{ accessToken: string }> {
        // TODO: Implement login logic
        return { accessToken: 'dummy-token' };
    }

    async register(registerDto: RegisterDto): Promise<any> {
        // TODO: Implement registration logic
        return { message: 'User registered (dummy)' };
    }
}
