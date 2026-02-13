import { Rubrica } from './rubrica.entity';
import { Escala } from './escala.entity';
export declare class Criterio {
    id: string;
    nombre: string;
    descripcion: string;
    ponderacion: number;
    rubrica: Rubrica;
    rubricaId: string;
    escalas: Escala[];
    createdAt: Date;
    updatedAt: Date;
}
