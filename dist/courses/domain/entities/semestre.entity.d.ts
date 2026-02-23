import { Grupo } from './grupo.entity';
export declare class Semestre {
    id: string;
    fecha_inicio: Date;
    fecha_fin: Date;
    nombre: string;
    codigo: string;
    estado: boolean;
    grupos: Grupo[];
    created_at: Date;
    updated_at: Date;
}
