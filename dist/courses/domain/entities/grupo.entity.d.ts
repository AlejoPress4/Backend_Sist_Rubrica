import { Docente } from '../../../users/domain/entities/docente.entity';
import { Asignatura } from '../../../academic/domain/entities/asignatura.entity';
import { Semestre } from './semestre.entity';
export declare class Grupo {
    id: string;
    nombre: string;
    codigo_grupo: string;
    docente: Docente;
    docente_id: number;
    asignatura: Asignatura;
    asignatura_id: string;
    semestre: Semestre;
    semestre_id: string;
    created_at: Date;
    updated_at: Date;
}
