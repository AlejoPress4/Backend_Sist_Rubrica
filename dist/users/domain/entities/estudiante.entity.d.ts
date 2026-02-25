import { User } from './user.entity';
import { Inscripcion } from '../../../courses/domain/entities/inscripcion.entity';
import { Matricula } from '../../../academic/domain/entities/matricula.entity';
export declare class Estudiante {
    id: number;
    nombre: string;
    apellido: string;
    cedula: string;
    user: User;
    user_id: string;
    inscripciones: Inscripcion[];
    matriculas: Matricula[];
    created_at: Date;
    updated_at: Date;
}
