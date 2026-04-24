import { MatriculasService } from '../../application/services/matriculas.service';
import { InscripcionesService } from '../../application/services/inscripciones.service';
import { CreateMatriculaDto } from '../../application/dtos/create-matricula.dto';
import { CreateInscripcionDto } from '../../application/dtos/create-inscripcion.dto';
import { ApiResponseDto } from '../../../common/dtos/api-response.dto';
export declare class MatriculasController {
    private readonly matriculasService;
    private readonly inscripcionesService;
    constructor(matriculasService: MatriculasService, inscripcionesService: InscripcionesService);
    matricular(dto: CreateMatriculaDto): Promise<ApiResponseDto<import("../../domain/entities/matricula.entity").Matricula[]>>;
    findAllMatriculas(estudianteId?: string): Promise<ApiResponseDto<import("../../domain/entities/matricula.entity").Matricula[]>>;
    findMatriculaById(id: string): Promise<ApiResponseDto<import("../../domain/entities/matricula.entity").Matricula>>;
    findByEstudiante(estudianteId: number): Promise<ApiResponseDto<import("../../domain/entities/matricula.entity").Matricula[]>>;
    cancelar(id: string): Promise<ApiResponseDto<import("../../domain/entities/matricula.entity").Matricula>>;
    createInscripcion(dto: CreateInscripcionDto): Promise<ApiResponseDto<import("../../domain/entities/inscripcion.entity").Inscripcion>>;
    findAllInscripciones(): Promise<ApiResponseDto<import("../../domain/entities/inscripcion.entity").Inscripcion[]>>;
    findInscripcionById(id: string): Promise<ApiResponseDto<import("../../domain/entities/inscripcion.entity").Inscripcion>>;
    findByGrupo(grupoId: string): Promise<ApiResponseDto<import("../../domain/entities/inscripcion.entity").Inscripcion[]>>;
    findInscripcionesByEstudiante(estudianteId: number): Promise<ApiResponseDto<import("../../domain/entities/inscripcion.entity").Inscripcion[]>>;
    removeInscripcion(id: string): Promise<ApiResponseDto<null>>;
}
