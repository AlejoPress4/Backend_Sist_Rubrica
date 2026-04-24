import { Repository } from 'typeorm';
import { Inscripcion } from '../../domain/entities/inscripcion.entity';
import { Grupo } from '../../domain/entities/grupo.entity';
import { Estudiante } from '../../../users/domain/entities/estudiante.entity';
import { CreateInscripcionDto } from '../dtos/create-inscripcion.dto';
export declare class InscripcionesService {
    private readonly inscripcionRepository;
    private readonly grupoRepository;
    private readonly estudianteRepository;
    constructor(inscripcionRepository: Repository<Inscripcion>, grupoRepository: Repository<Grupo>, estudianteRepository: Repository<Estudiante>);
    create(dto: CreateInscripcionDto): Promise<Inscripcion>;
    findAll(): Promise<Inscripcion[]>;
    findById(id: string): Promise<Inscripcion>;
    findByGrupo(grupoId: string): Promise<Inscripcion[]>;
    findByEstudiante(estudianteId: number): Promise<Inscripcion[]>;
    remove(id: string): Promise<void>;
}
