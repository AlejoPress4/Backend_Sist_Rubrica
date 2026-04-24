import { DataSource, Repository } from 'typeorm';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Matricula } from '../../domain/entities/matricula.entity';
import { Inscripcion } from '../../domain/entities/inscripcion.entity';
import { Grupo } from '../../domain/entities/grupo.entity';
import { Estudiante } from '../../../users/domain/entities/estudiante.entity';
import { Semestre } from '../../../academic/domain/entities/semestre.entity';
import { Asignatura } from '../../../academic/domain/entities/asignatura.entity';
import { CreateMatriculaDto } from '../dtos/create-matricula.dto';
export declare class MatriculasService {
    private readonly matriculaRepository;
    private readonly inscripcionRepository;
    private readonly grupoRepository;
    private readonly estudianteRepository;
    private readonly semestreRepository;
    private readonly asignaturaRepository;
    private readonly dataSource;
    private readonly eventEmitter;
    constructor(matriculaRepository: Repository<Matricula>, inscripcionRepository: Repository<Inscripcion>, grupoRepository: Repository<Grupo>, estudianteRepository: Repository<Estudiante>, semestreRepository: Repository<Semestre>, asignaturaRepository: Repository<Asignatura>, dataSource: DataSource, eventEmitter: EventEmitter2);
    matricular(dto: CreateMatriculaDto): Promise<Matricula[]>;
    findAll(): Promise<Matricula[]>;
    findById(id: string): Promise<Matricula>;
    findByEstudiante(estudianteId: number): Promise<Matricula[]>;
    cancelar(id: string): Promise<Matricula>;
}
