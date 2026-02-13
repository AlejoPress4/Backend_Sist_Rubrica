import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../../application/services/auth.service';
import { LoginDto } from '../../application/dtos/login.dto';
import { RegisterDto } from '../../application/dtos/register.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async login(@Body() loginDto: LoginDto) {
        // TODO: Delegate to authService.login()
    }

    @Post('register')
    async register(@Body() registerDto: RegisterDto) {
        // TODO: Delegate to authService.register()
    }
}
