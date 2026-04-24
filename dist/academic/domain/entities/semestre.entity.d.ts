import { Carrera } from './carrera.entity';
import { EstadoSemestre } from '../../../common/enums';
import { Grupo } from '../../../courses/domain/entities/grupo.entity';
export declare class Semestre {
    id: string;
    nombre: string;
    fechaInicio: Date;
    fechaFin: Date;
    estado: EstadoSemestre;
    carrera: Carrera;
    carrera_id: string;
    grupos: Grupo[];
    creadoEn: Date;
    actualizadoEn: Date;
}
