import { User } from './user.entity';
import { Grupo } from '../../../courses/domain/entities/grupo.entity';
export declare class Docente {
    id: string;
    nombre: string;
    apellido: string;
    telefono: string;
    cedula: string;
    especialidad: string;
    user: User;
    user_id: string;
    grupos: Grupo[];
    created_at: Date;
    updated_at: Date;
}
