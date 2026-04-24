import { Repository } from 'typeorm';
import { Carrera } from '../../domain/entities/carrera.entity';
import { Semestre } from '../../domain/entities/semestre.entity';
import { CreateCarreraDto } from '../dtos/create-carrera.dto';
import { UpdateCarreraDto } from '../dtos/update-carrera.dto';
export declare class CarrerasService {
    private readonly carreraRepository;
    private readonly semestreRepository;
    constructor(carreraRepository: Repository<Carrera>, semestreRepository: Repository<Semestre>);
    create(dto: CreateCarreraDto): Promise<Carrera>;
    findAll(): Promise<Carrera[]>;
    findById(id: string): Promise<Carrera>;
    update(id: string, dto: UpdateCarreraDto): Promise<Carrera>;
    archivar(id: string): Promise<Carrera>;
    remove(id: string): Promise<void>;
}
