import { LoginDto } from '../../application/dtos/login.dto';
import { AuthResponseDto } from '../../application/dtos/auth-response.dto';
export interface IAuthService {
    login(dto: LoginDto): Promise<AuthResponseDto>;
}
