import { Estudiante } from '../../../users/domain/entities/estudiante.entity';
import { Grupo } from './grupo.entity';
import { EstadoInscripcion } from '../../../common/constants/constants';
export declare class Inscripcion {
    id: string;
    estudiante: Estudiante;
    estudianteId: string;
    grupo: Grupo;
    grupoId: string;
    estado: EstadoInscripcion;
    createdAt: Date;
    updatedAt: Date;
}
