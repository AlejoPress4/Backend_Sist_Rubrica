import { UserRole } from '../../../common/constants/constants';
export declare class CreateUserDto {
    email: string;
    password: string;
    codigo: number;
    rol: UserRole;
    is_active?: boolean;
}
