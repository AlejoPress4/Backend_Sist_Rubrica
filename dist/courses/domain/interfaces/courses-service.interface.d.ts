import { Grupo } from '../entities/grupo.entity';
import { Inscripcion } from '../entities/inscripcion.entity';
import { Semestre } from '../entities/semestre.entity';
export interface ICoursesService {
    createSemestre(data: Partial<Semestre>): Promise<Semestre>;
    findAllSemestres(): Promise<Semestre[]>;
    createGrupo(data: Partial<Grupo>): Promise<Grupo>;
    findAllGrupos(): Promise<Grupo[]>;
    findGrupoById(id: string): Promise<Grupo>;
    createInscripcion(data: Partial<Inscripcion>): Promise<Inscripcion>;
    findInscripcionesByGrupo(grupoId: string): Promise<Inscripcion[]>;
}
