"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResponseDto = void 0;
class UserResponseDto {
    id;
    correoInstitucional;
    rol;
    activo;
    nombre;
    titulo;
    creditosMaximos;
    docenteId;
    estudianteId;
    creadoEn;
    actualizadoEn;
    static fromEntity(user) {
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
        }
        else if (user.estudiante) {
            dto.nombre = user.estudiante.nombre;
            dto.creditosMaximos = user.estudiante.creditosMaximos;
            dto.estudianteId = user.estudiante.id;
        }
        else {
            dto.nombre = '';
        }
        return dto;
    }
}
exports.UserResponseDto = UserResponseDto;
//# sourceMappingURL=user-response.dto.js.map