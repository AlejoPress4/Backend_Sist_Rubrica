import { CoursesService } from '../../application/services/courses.service';
import { CreateSemestreDto } from '../../application/dtos/create-semestre.dto';
import { CreateGrupoDto } from '../../application/dtos/create-grupo.dto';
import { CreateInscripcionDto } from '../../application/dtos/create-inscripcion.dto';
export declare class CoursesController {
    private readonly coursesService;
    constructor(coursesService: CoursesService);
    createSemestre(dto: CreateSemestreDto): Promise<void>;
    findAllSemestres(): Promise<void>;
    createGrupo(dto: CreateGrupoDto): Promise<void>;
    findAllGrupos(): Promise<void>;
    findGrupoById(id: string): Promise<void>;
    createInscripcion(dto: CreateInscripcionDto): Promise<void>;
    findInscripcionesByGrupo(grupoId: string): Promise<void>;
}
