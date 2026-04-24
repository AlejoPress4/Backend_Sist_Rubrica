import { Estudiante } from '../../../users/domain/entities/estudiante.entity';
import { Grupo } from '../../../courses/domain/entities/grupo.entity';
export declare class Nota {
    id: string;
    nota_final: number;
    observaciones: string;
    estudiante: Estudiante;
    estudiante_id: number;
    grupo: Grupo;
    grupo_id: string;
    oficial: boolean;
    fecha_registro: Date;
    created_at: Date;
    updated_at: Date;
}
