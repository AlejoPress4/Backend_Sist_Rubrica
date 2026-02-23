import { EstadoMatricula } from '../../../common/constants/constants';
export declare class CreateMatriculaDto {
    estudiante_id: string;
    carrera_id: string;
    periodo_ingreso: string;
    estado_academico?: EstadoMatricula;
}
