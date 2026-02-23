import { Criterio } from './criterio.entity';
import { CalificacionDetalle } from 'src/scores/domain/entities/calificacion-detalle.entity';
export declare class Escala {
    id: string;
    nombre: string;
    descripcion: string;
    valor: number;
    criterio: Criterio;
    criterio_id: string;
    calificacionDetalles: CalificacionDetalle[];
    created_at: Date;
    updated_at: Date;
}
