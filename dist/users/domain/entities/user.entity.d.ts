import { Rol } from '../../../common/enums';
import { Docente } from './docente.entity';
import { Estudiante } from './estudiante.entity';
export declare class User {
    id: string;
    correoInstitucional: string;
    password: string;
    rol: Rol;
    activo: boolean;
    docente?: Docente;
    estudiante?: Estudiante;
    creadoEn: Date;
    actualizadoEn: Date;
}
