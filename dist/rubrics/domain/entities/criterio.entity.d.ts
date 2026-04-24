import { Rubrica } from './rubrica.entity';
import { Escala } from './escala.entity';
export declare class Criterio {
    id: string;
    nombre: string;
    descripcion: string;
    peso: number;
    rubrica: Rubrica;
    rubrica_id: string;
    escalas: Escala[];
    created_at: Date;
    updated_at: Date;
}
