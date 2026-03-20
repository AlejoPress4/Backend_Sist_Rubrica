import { GoogleLoginDto } from '../../application/dtos/google-login.dto';

export interface IAuthService {
    login(email: string, password: string): Promise<{ accessToken: string }>;
    register(payload: any): Promise<any>;
    validateUser(email: string, password: string): Promise<any>;
    googleLogin(payload: GoogleLoginDto): Promise<{ accessToken: string }>;
}
