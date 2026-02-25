import { EstadoMatricula } from '../../../common/constants/constants';
export declare class CreateMatriculaDto {
    estudiante_id: number;
    carrera_id: string;
    periodo_ingreso: string;
    estado_academico?: EstadoMatricula;
}
