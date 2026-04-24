import {
    ConflictException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asignatura } from '../../domain/entities/asignatura.entity';
import { CreateAsignaturaDto } from '../dtos/create-asignatura.dto';
import { UpdateAsignaturaDto } from '../dtos/update-asignatura.dto';

@Injectable()
export class AsignaturasService {
    constructor(
        @InjectRepository(Asignatura)
        private readonly asignaturaRepository: Repository<Asignatura>,
    ) { }

    async create(dto: CreateAsignaturaDto): Promise<Asignatura> {
        const existente = await this.asignaturaRepository.findOne({ where: { codigo: dto.codigo } });
        if (existente) {
            throw new ConflictException(`Ya existe una asignatura con el código ${dto.codigo}`);
        }
        const asignatura = this.asignaturaRepository.create(dto);
        return this.asignaturaRepository.save(asignatura);
    }

    async findAll(): Promise<Asignatura[]> {
        return this.asignaturaRepository.find();
    }

    async findById(id: string): Promise<Asignatura> {
        const asignatura = await this.asignaturaRepository.findOne({ where: { id } });
        if (!asignatura) {
            throw new NotFoundException(`Asignatura con ID ${id} no encontrada`);
        }
        return asignatura;
    }

    async update(id: string, dto: UpdateAsignaturaDto): Promise<Asignatura> {
        const asignatura = await this.findById(id);
        if (dto.codigo && dto.codigo !== asignatura.codigo) {
            const conflicto = await this.asignaturaRepository.findOne({ where: { codigo: dto.codigo } });
            if (conflicto) {
                throw new ConflictException(`Ya existe una asignatura con el código ${dto.codigo}`);
            }
        }
        Object.assign(asignatura, dto);
        return this.asignaturaRepository.save(asignatura);
    }

    async remove(id: string): Promise<void> {
        const asignatura = await this.findById(id);
        await this.asignaturaRepository.remove(asignatura);
    }
}
