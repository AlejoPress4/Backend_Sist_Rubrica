import { IAuthService } from '../../domain/interfaces/auth-service.interface';
import { RegisterDto } from '../dtos/register.dto';
export declare class AuthService implements IAuthService {
    constructor();
    validateUser(email: string, password: string): Promise<any>;
    login(email: string, password: string): Promise<{
        accessToken: string;
    }>;
    register(registerDto: RegisterDto): Promise<any>;
}
