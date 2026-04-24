import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../../application/services/auth.service';
import { LoginDto } from '../../application/dtos/login.dto';
import { ApiResponseDto } from '../../../common/dtos/api-response.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async login(@Body() dto: LoginDto) {
        const data = await this.authService.login(dto);
        return ApiResponseDto.success(data, 'Inicio de sesión exitoso');
    }
}
