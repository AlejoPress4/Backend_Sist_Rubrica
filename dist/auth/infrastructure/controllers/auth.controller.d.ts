import { AuthService } from '../../application/services/auth.service';
import { LoginDto } from '../../application/dtos/login.dto';
import { ApiResponseDto } from '../../../common/dtos/api-response.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(dto: LoginDto): Promise<ApiResponseDto<import("../../application/dtos/auth-response.dto").AuthResponseDto>>;
}
