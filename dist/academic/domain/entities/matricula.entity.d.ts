import { Estudiante } from '../../../users/domain/entities/estudiante.entity';
import { Carrera } from './carrera.entity';
import { EstadoMatricula } from '../../../common/constants/constants';
export declare class Matricula {
    id: string;
    periodo_ingreso: string;
    estado_academico: EstadoMatricula;
    estudiante: Estudiante;
    estudiante_id: string;
    carrera: Carrera;
    carrera_id: string;
    created_at: Date;
    updated_at: Date;
}
