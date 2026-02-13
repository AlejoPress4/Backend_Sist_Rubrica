import { Estudiante } from '../../../users/domain/entities/estudiante.entity';
import { Evaluacion } from './evaluacion.entity';
export declare class Nota {
    id: string;
    notaFinal: number;
    observaciones: string;
    estudiante: Estudiante;
    estudianteId: string;
    evaluacion: Evaluacion;
    evaluacionId: string;
    createdAt: Date;
    updatedAt: Date;
}
