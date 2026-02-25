import { EstadoInscripcion } from '../../../common/constants/constants';
export declare class CreateInscripcionDto {
    estudiante_id: number;
    grupo_id: string;
    fecha_inscripcion: Date;
    estado?: EstadoInscripcion;
}
