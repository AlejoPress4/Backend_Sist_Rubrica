import { Rol } from '../../../common/enums';
export declare class AuthResponseDto {
    accessToken: string;
    usuario: {
        id: string;
        correoInstitucional: string;
        rol: Rol;
        nombre: string;
        docenteId?: number;
        estudianteId?: number;
    };
}
