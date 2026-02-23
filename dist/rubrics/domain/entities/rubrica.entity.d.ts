import { Criterio } from './criterio.entity';
import { Nota } from '../../../scores/domain/entities/nota.entity';
import { Evaluacion } from 'src/scores/domain/entities/evaluacion.entity';
export declare class Rubrica {
    id: string;
    titulo: string;
    descripcion: string;
    es_publica: boolean;
    criterios: Criterio[];
    notas: Nota[];
    evaluaciones: Evaluacion[];
    created_at: Date;
    updated_at: Date;
}
