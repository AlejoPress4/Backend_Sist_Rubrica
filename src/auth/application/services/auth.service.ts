import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
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

@Injectable()
export class AuthService implements IAuthService {
    constructor(
        @Inject('IUsersService')
        private readonly usersService: IUsersService,
        private readonly jwtService: JwtService,
    ) { }

    async login(dto: LoginDto): Promise<AuthResponseDto> {
        let user;
        try {
            user = await this.usersService.findByCorreoWithPassword(dto.correoInstitucional);
        } catch {
            throw new UnauthorizedException('Credenciales inválidas');
        }

        if (!user.activo) {
            throw new UnauthorizedException('La cuenta está desactivada');
        }

        const passwordMatch = await bcrypt.compare(dto.password, user.password);
        if (!passwordMatch) {
            throw new UnauthorizedException('Credenciales inválidas');
        }

        const nombre = user.docente?.nombre ?? user.estudiante?.nombre ?? '';

        const payload: JwtPayload = {
            sub: user.id,
            rol: user.rol,
            nombre,
            docenteId: user.docente?.id,
            estudianteId: user.estudiante?.id,
        };

        const accessToken = this.jwtService.sign(payload);

        return {
            accessToken,
            usuario: {
                id: user.id,
                correoInstitucional: user.correoInstitucional,
                rol: user.rol,
                nombre,
                docenteId: user.docente?.id,
                estudianteId: user.estudiante?.id,
            },
        };
    }
}
