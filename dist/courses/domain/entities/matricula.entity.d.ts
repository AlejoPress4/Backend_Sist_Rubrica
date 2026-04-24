import { Estudiante } from '../../../users/domain/entities/estudiante.entity';
import { Asignatura } from '../../../academic/domain/entities/asignatura.entity';
import { Semestre } from '../../../academic/domain/entities/semestre.entity';
import { EstadoMatricula } from '../../../common/enums';
export declare class Matricula {
    id: string;
    estado: EstadoMatricula;
    estudiante: Estudiante;
    estudiante_id: number;
    asignatura: Asignatura;
    asignatura_id: string;
    semestre: Semestre;
    semestre_id: string;
    fechaRegistro: Date;
    actualizadoEn: Date;
}
