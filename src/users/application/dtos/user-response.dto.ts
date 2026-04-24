import { Rol } from '../../../common/enums';
import { User } from '../../domain/entities/user.entity';

export class UserResponseDto {
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

    static fromEntity(user: User): UserResponseDto {
        const dto = new UserResponseDto();
        dto.id = user.id;
        dto.correoInstitucional = user.correoInstitucional;
        dto.rol = user.rol;
        dto.activo = user.activo;
        dto.creadoEn = user.creadoEn;
        dto.actualizadoEn = user.actualizadoEn;

        if (user.docente) {
            dto.nombre = user.docente.nombre;
            dto.titulo = user.docente.titulo;
            dto.docenteId = user.docente.id;
        } else if (user.estudiante) {
            dto.nombre = user.estudiante.nombre;
            dto.creditosMaximos = user.estudiante.creditosMaximos;
            dto.estudianteId = user.estudiante.id;
        } else {
            dto.nombre = '';
        }

        return dto;
    }
}
