import { Rol } from '../../../common/enums';
export declare class CreateUserDto {
    correoInstitucional: string;
    password: string;
    rol: Rol;
    nombre: string;
    codigo?: number;
    titulo?: string;
    creditosMaximos?: number;
}
