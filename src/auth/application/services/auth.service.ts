import { Inject, Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { IAuthService } from '../../domain/interfaces/auth-service.interface';
import { IUsersService } from '../../../users/domain/interfaces/users-service.interface';
import { RegisterDto } from '../dtos/register.dto';
import { GoogleLoginDto } from '../dtos/google-login.dto';
import { UserRole } from '../../../common/constants/constants';

@Injectable()
export class AuthService implements IAuthService {
    constructor(
        @Inject('IUsersService')
        private readonly usersService: IUsersService,
        private readonly jwtService: JwtService,
    ) { }

    async validateUser(email: string, password: string): Promise<any> {
        try {
            const user = await this.usersService.findUserByEmail(email);
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return null;
            const { password: _pw, ...result } = user as any;
            return result;
        } catch {
            return null;
        }
    }

    async login(email: string, password: string): Promise<{ accessToken: string }> {
        const user = await this.validateUser(email, password);
        if (!user) {
            throw new UnauthorizedException('Credenciales inválidas. Verifica tu correo y contraseña');
        }
        const payload = { sub: user.id, email: user.email, rol: user.rol };
        return { accessToken: this.jwtService.sign(payload) };
    }

    async register(registerDto: RegisterDto): Promise<any> {
        try {
            await this.usersService.findUserByEmail(registerDto.email);
            throw new ConflictException('Ya existe un usuario registrado con ese correo electrónico');
        } catch (error) {
            if (error instanceof ConflictException) throw error;
            // NotFoundException → email disponible, continuar
        }
        const hashedPassword = await bcrypt.hash(registerDto.password, 10);
        const user = await this.usersService.createUser({
            email: registerDto.email,
            password: hashedPassword,
            codigo: 0, // TODO: actualizar vía PUT /api/users/:id tras el registro
            rol: registerDto.rol,
        });
        const { password: _pw, ...userWithoutPassword } = user as any;
        return userWithoutPassword;
    }

    async googleLogin(payload: GoogleLoginDto): Promise<{ accessToken: string }> {
        const ALLOWED_DOMAIN = '@ucaldas.edu.co';
        if (!payload.email.endsWith(ALLOWED_DOMAIN)) {
            throw new UnauthorizedException(
                `Acceso denegado: solo se permiten correos institucionales con dominio ${ALLOWED_DOMAIN}`,
            );
        }
        let user: any;
        try {
            user = await this.usersService.findUserByEmail(payload.email);
        } catch {
            // Usuario no existe → crear con contraseña aleatoria (no puede iniciar sesión por contraseña)
            const randomPassword = await bcrypt.hash(Math.random().toString(), 10);
            user = await this.usersService.createUser({
                email: payload.email,
                password: randomPassword,
                codigo: 0,
                rol: UserRole.ESTUDIANTE,
            });
        }
        const jwtPayload = { sub: user.id, email: user.email, rol: user.rol };
        return { accessToken: this.jwtService.sign(jwtPayload) };
    }
}
