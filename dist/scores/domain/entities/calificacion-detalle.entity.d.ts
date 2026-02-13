import { Nota } from './nota.entity';
import { Criterio } from '../../../rubrics/domain/entities/criterio.entity';
import { Escala } from '../../../rubrics/domain/entities/escala.entity';
export declare class CalificacionDetalle {
    id: string;
    puntaje: number;
    comentario: string;
    nota: Nota;
    notaId: string;
    criterio: Criterio;
    criterioId: string;
    escala: Escala;
    escalaId: string;
    createdAt: Date;
    updatedAt: Date;
}
