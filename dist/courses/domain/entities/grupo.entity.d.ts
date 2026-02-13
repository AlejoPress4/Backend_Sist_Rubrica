import { Docente } from '../../../users/domain/entities/docente.entity';
import { Asignatura } from '../../../academic/domain/entities/asignatura.entity';
import { Semestre } from './semestre.entity';
export declare class Grupo {
    id: string;
    nombre: string;
    docente: Docente;
    docenteId: string;
    asignatura: Asignatura;
    asignaturaId: string;
    semestre: Semestre;
    semestreId: string;
    createdAt: Date;
    updatedAt: Date;
}
