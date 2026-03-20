import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../../application/services/auth.service';
import { LoginDto } from '../../application/dtos/login.dto';
import { RegisterDto } from '../../application/dtos/register.dto';
import { GoogleLoginDto } from '../../application/dtos/google-login.dto';
import { ApiResponseDto } from '../../../common/dtos/api-response.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async login(@Body() loginDto: LoginDto) {
        const data = await this.authService.login(loginDto.email, loginDto.password);
        return ApiResponseDto.success(data, 'Inicio de sesión exitoso');
    }

    @Post('register')
    async register(@Body() registerDto: RegisterDto) {
        const data = await this.authService.register(registerDto);
        return ApiResponseDto.created(data, 'Usuario registrado exitosamente');
    }

    @Post('google')
    async googleLogin(@Body() googleLoginDto: GoogleLoginDto) {
        const data = await this.authService.googleLogin(googleLoginDto);
        return ApiResponseDto.success(data, 'Autenticación con Google exitosa');
    }

    // SEGURIDAD: @UseGuards() intencionalmente omitidos — rutas públicas durante desarrollo.
    // Para activar protección en el futuro, agregar en cada handler:
    // @UseGuards(JwtAuthGuard, RolesGuard) + @Roles(UserRole.ADMIN)
}
