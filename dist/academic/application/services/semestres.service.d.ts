import { Repository } from 'typeorm';
import { Semestre } from '../../domain/entities/semestre.entity';
import { Carrera } from '../../domain/entities/carrera.entity';
import { CreateSemestreDto } from '../dtos/create-semestre.dto';
import { UpdateSemestreDto } from '../dtos/update-semestre.dto';
export declare class SemestresService {
    private readonly semestreRepository;
    private readonly carreraRepository;
    constructor(semestreRepository: Repository<Semestre>, carreraRepository: Repository<Carrera>);
    create(dto: CreateSemestreDto): Promise<Semestre>;
    findAll(): Promise<Semestre[]>;
    findById(id: string): Promise<Semestre>;
    findByCarrera(carrera_id: string): Promise<Semestre[]>;
    update(id: string, dto: UpdateSemestreDto): Promise<Semestre>;
    cerrar(id: string): Promise<Semestre>;
    remove(id: string): Promise<void>;
}
