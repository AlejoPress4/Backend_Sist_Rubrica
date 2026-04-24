import { User } from './user.entity';
import { Grupo } from '../../../courses/domain/entities/grupo.entity';
export declare class Docente {
    id: number;
    nombre: string;
    titulo: string;
    user: User;
    userId: string;
    grupos: Grupo[];
    creadoEn: Date;
    actualizadoEn: Date;
}
