import { Docente } from '../../../users/domain/entities/docente.entity';
import { Asignatura } from '../../../academic/domain/entities/asignatura.entity';
import { Semestre } from '../../../academic/domain/entities/semestre.entity';
import { Inscripcion } from './inscripcion.entity';
export declare class Grupo {
    id: string;
    codigo: string;
    nombre: string;
    docentes: Docente[];
    asignatura: Asignatura;
    asignatura_id: string;
    semestre: Semestre;
    semestre_id: string;
    inscripciones: Inscripcion[];
    creadoEn: Date;
    actualizadoEn: Date;
}
