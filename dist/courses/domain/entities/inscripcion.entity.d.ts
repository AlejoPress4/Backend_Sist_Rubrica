import { Estudiante } from '../../../users/domain/entities/estudiante.entity';
import { Grupo } from './grupo.entity';
import { EstadoInscripcion } from '../../../common/constants/constants';
import { Nota } from '../../../scores/domain/entities/nota.entity';
export declare class Inscripcion {
    id: string;
    fecha_inscripcion: Date;
    estado: EstadoInscripcion;
    estudiante: Estudiante;
    estudiante_id: number;
    grupo: Grupo;
    grupo_id: string;
    notas: Nota[];
    created_at: Date;
    updated_at: Date;
}
