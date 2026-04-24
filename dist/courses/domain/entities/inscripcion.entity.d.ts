import { Estudiante } from '../../../users/domain/entities/estudiante.entity';
import { Grupo } from './grupo.entity';
export declare class Inscripcion {
    id: string;
    estudiante: Estudiante;
    estudiante_id: number;
    grupo: Grupo;
    grupo_id: string;
    fechaInscripcion: Date;
}
