import { Grupo } from '../entities/grupo.entity';
import { Inscripcion } from '../entities/inscripcion.entity';
import { Semestre } from '../entities/semestre.entity';

export interface ICoursesService {
    // Semestres
    createSemestre(data: Partial<Semestre>): Promise<Semestre>;
    findAllSemestres(): Promise<Semestre[]>;

    // Grupos
    createGrupo(data: Partial<Grupo>): Promise<Grupo>;
    findAllGrupos(): Promise<Grupo[]>;
    findGrupoById(id: string): Promise<Grupo>;

    // Inscripciones
    createInscripcion(data: Partial<Inscripcion>): Promise<Inscripcion>;
    findInscripcionesByGrupo(grupoId: string): Promise<Inscripcion[]>;
}
