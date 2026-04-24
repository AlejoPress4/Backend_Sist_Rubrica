import { JwtService } from '@nestjs/jwt';
import { IAuthService } from '../../domain/interfaces/auth-service.interface';
import type { IUsersService } from '../../../users/domain/interfaces/users-service.interface';
import { LoginDto } from '../dtos/login.dto';
import { AuthResponseDto } from '../dtos/auth-response.dto';
import { Rol } from '../../../common/enums';
export interface JwtPayload {
    sub: string;
    rol: Rol;
    nombre: string;
    docenteId?: number;
    estudianteId?: number;
}
export declare class AuthService implements IAuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: IUsersService, jwtService: JwtService);
    login(dto: LoginDto): Promise<AuthResponseDto>;
}
