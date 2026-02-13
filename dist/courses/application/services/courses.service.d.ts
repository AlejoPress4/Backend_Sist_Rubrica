import { Repository } from 'typeorm';
import { Grupo } from '../../domain/entities/grupo.entity';
import { Inscripcion } from '../../domain/entities/inscripcion.entity';
import { Semestre } from '../../domain/entities/semestre.entity';
import { ICoursesService } from '../../domain/interfaces/courses-service.interface';
export declare class CoursesService implements ICoursesService {
    private readonly semestreRepository;
    private readonly grupoRepository;
    private readonly inscripcionRepository;
    constructor(semestreRepository: Repository<Semestre>, grupoRepository: Repository<Grupo>, inscripcionRepository: Repository<Inscripcion>);
    createSemestre(data: Partial<Semestre>): Promise<Semestre>;
    findAllSemestres(): Promise<Semestre[]>;
    createGrupo(data: Partial<Grupo>): Promise<Grupo>;
    findAllGrupos(): Promise<Grupo[]>;
    findGrupoById(id: string): Promise<Grupo>;
    createInscripcion(data: Partial<Inscripcion>): Promise<Inscripcion>;
    findInscripcionesByGrupo(grupoId: string): Promise<Inscripcion[]>;
}
