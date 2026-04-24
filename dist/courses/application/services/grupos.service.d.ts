import { Repository } from 'typeorm';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Grupo } from '../../domain/entities/grupo.entity';
import { Docente } from '../../../users/domain/entities/docente.entity';
import { Asignatura } from '../../../academic/domain/entities/asignatura.entity';
import { Semestre } from '../../../academic/domain/entities/semestre.entity';
import { CreateGrupoDto } from '../dtos/create-grupo.dto';
import { UpdateGrupoDto } from '../dtos/update-grupo.dto';
import { AsignarDocenteDto } from '../dtos/asignar-docente.dto';
import { CalificacionDetalle } from '../../../scores/domain/entities/calificacion-detalle.entity';
export declare class GruposService {
    private readonly grupoRepository;
    private readonly docenteRepository;
    private readonly asignaturaRepository;
    private readonly semestreRepository;
    private readonly calificacionDetalleRepository;
    private readonly eventEmitter;
    constructor(grupoRepository: Repository<Grupo>, docenteRepository: Repository<Docente>, asignaturaRepository: Repository<Asignatura>, semestreRepository: Repository<Semestre>, calificacionDetalleRepository: Repository<CalificacionDetalle>, eventEmitter: EventEmitter2);
    create(dto: CreateGrupoDto): Promise<Grupo>;
    findAll(): Promise<Grupo[]>;
    findById(id: string): Promise<Grupo>;
    findByDocente(docenteId: number): Promise<Grupo[]>;
    findBySemestre(semestreId: string): Promise<Grupo[]>;
    update(id: string, dto: UpdateGrupoDto): Promise<Grupo>;
    asignarDocente(grupoId: string, dto: AsignarDocenteDto): Promise<Grupo>;
    quitarDocente(grupoId: string, docenteId: number): Promise<Grupo>;
    remove(id: string): Promise<void>;
}
