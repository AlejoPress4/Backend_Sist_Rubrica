import { Grupo } from '../entities/grupo.entity';
import { Inscripcion } from '../entities/inscripcion.entity';
import { Semestre } from '../entities/semestre.entity';

export interface ICoursesService {
    // Semestres
    create(dto: CreateSemestreDto): Promise<Semestre>;
    findAll(): Promise<Semestre[]>;
    findById(id: string): Promise<Semestre>;
    update(id: string, dto: UpdateSemestreDto): Promise<Semestre>;
    remove(id: string): Promise<void>;

    // Grupos
    createGrupo(data: Partial<Grupo>): Promise<Grupo>;
    findAllGrupos(): Promise<Grupo[]>;
    findGrupoById(id: string): Promise<Grupo>;

    // Inscripciones
    createInscripcion(data: Partial<Inscripcion>): Promise<Inscripcion>;
    findInscripcionesByGrupo(grupo_id: string): Promise<Inscripcion[]>;
}
