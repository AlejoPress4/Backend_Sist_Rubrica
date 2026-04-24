import { Repository } from 'typeorm';
import { Asignatura } from '../../domain/entities/asignatura.entity';
import { CreateAsignaturaDto } from '../dtos/create-asignatura.dto';
import { UpdateAsignaturaDto } from '../dtos/update-asignatura.dto';
export declare class AsignaturasService {
    private readonly asignaturaRepository;
    constructor(asignaturaRepository: Repository<Asignatura>);
    create(dto: CreateAsignaturaDto): Promise<Asignatura>;
    findAll(): Promise<Asignatura[]>;
    findById(id: string): Promise<Asignatura>;
    update(id: string, dto: UpdateAsignaturaDto): Promise<Asignatura>;
    remove(id: string): Promise<void>;
}
