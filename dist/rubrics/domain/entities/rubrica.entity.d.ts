import { Criterio } from './criterio.entity';
import { Evaluacion } from 'src/scores/domain/entities/evaluacion.entity';
export declare class Rubrica {
    id: string;
    titulo: string;
    descripcion: string;
    es_publica: boolean;
    criterios: Criterio[];
    evaluaciones: Evaluacion[];
    created_at: Date;
    updated_at: Date;
}
