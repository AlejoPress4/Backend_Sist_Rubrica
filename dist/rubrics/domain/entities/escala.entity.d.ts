import { Criterio } from './criterio.entity';
export declare class Escala {
    id: string;
    nombre: string;
    descripcion: string;
    valor: number;
    criterio: Criterio;
    criterioId: string;
    createdAt: Date;
    updatedAt: Date;
}
