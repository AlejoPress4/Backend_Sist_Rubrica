import { Asignatura } from '../../../academic/domain/entities/asignatura.entity';
import { Rubrica } from '../../../rubrics/domain/entities/rubrica.entity';
export declare class Evaluacion {
    id: string;
    nombre: string;
    descripcion: string;
    asignatura: Asignatura;
    asignaturaId: string;
    rubrica: Rubrica;
    rubricaId: string;
    createdAt: Date;
    updatedAt: Date;
}
