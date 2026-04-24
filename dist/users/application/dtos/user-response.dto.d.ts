import { Rol } from '../../../common/enums';
import { User } from '../../domain/entities/user.entity';
export declare class UserResponseDto {
    id: string;
    correoInstitucional: string;
    rol: Rol;
    activo: boolean;
    nombre: string;
    titulo?: string;
    creditosMaximos?: number;
    docenteId?: number;
    estudianteId?: number;
    creadoEn: Date;
    actualizadoEn: Date;
    static fromEntity(user: User): UserResponseDto;
}
