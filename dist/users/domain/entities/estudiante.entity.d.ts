import { User } from './user.entity';
import { Inscripcion } from '../../../courses/domain/entities/inscripcion.entity';
import { Matricula } from '../../../courses/domain/entities/matricula.entity';
import { CalificacionDetalle } from '../../../scores/domain/entities/calificacion-detalle.entity';
export declare class Estudiante {
    id: number;
    nombre: string;
    creditosMaximos: number;
    user: User;
    userId: string;
    inscripciones: Inscripcion[];
    matriculas: Matricula[];
    calificacionDetalles: CalificacionDetalle[];
    creadoEn: Date;
    actualizadoEn: Date;
}
