import { UserRole } from '../../../common/constants/constants';
export declare class CreateUserDto {
    email: string;
    password: string;
    nombre: string;
    apellido: string;
    rol: UserRole;
    especialidad?: string;

}
