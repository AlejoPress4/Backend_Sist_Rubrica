import { Criterio } from './criterio.entity';
export declare class Rubrica {
    id: string;
    titulo: string;
    descripcion: string;
    es_publica: boolean;
    criterios: Criterio[];
    createdAt: Date;
    updatedAt: Date;
}
