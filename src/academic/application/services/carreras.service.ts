import {
    BadRequestException,
    ConflictException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carrera } from '../../domain/entities/carrera.entity';
import { Semestre } from '../../domain/entities/semestre.entity';
import { CreateCarreraDto } from '../dtos/create-carrera.dto';
import { UpdateCarreraDto } from '../dtos/update-carrera.dto';
import { EstadoSemestre } from '../../../common/enums';

@Injectable()
export class CarrerasService {
    constructor(
        @InjectRepository(Carrera)
        private readonly carreraRepository: Repository<Carrera>,
        @InjectRepository(Semestre)
        private readonly semestreRepository: Repository<Semestre>,
    ) { }

    async create(dto: CreateCarreraDto): Promise<Carrera> {
        const existente = await this.carreraRepository.findOne({ where: { codigo: dto.codigo } });
        if (existente) {
            throw new ConflictException(`Ya existe una carrera con el código ${dto.codigo}`);
        }
        const carrera = this.carreraRepository.create(dto);
        return this.carreraRepository.save(carrera);
    }

    async findAll(): Promise<Carrera[]> {
        return this.carreraRepository.find();
    }

    async findById(id: string): Promise<Carrera> {
        const carrera = await this.carreraRepository.findOne({ where: { id } });
        if (!carrera) {
            throw new NotFoundException(`Carrera con ID ${id} no encontrada`);
        }
        return carrera;
    }

    async update(id: string, dto: UpdateCarreraDto): Promise<Carrera> {
        const carrera = await this.findById(id);

        if (dto.codigo && dto.codigo !== carrera.codigo) {
            const conflicto = await this.carreraRepository.findOne({ where: { codigo: dto.codigo } });
            if (conflicto) {
                throw new ConflictException(`Ya existe una carrera con el código ${dto.codigo}`);
            }
        }

        Object.assign(carrera, dto);
        return this.carreraRepository.save(carrera);
    }

    async archivar(id: string): Promise<Carrera> {
        const carrera = await this.findById(id);
        const semestreActivo = await this.semestreRepository.findOne({
            where: { carrera_id: id, estado: EstadoSemestre.ACTIVO },
        });
        if (semestreActivo) {
            throw new BadRequestException(
                'No se puede archivar una carrera con un semestre ACTIVO',
            );
        }
        carrera.archivada = true;
        return this.carreraRepository.save(carrera);
    }

    async remove(id: string): Promise<void> {
        const carrera = await this.findById(id);
        await this.carreraRepository.remove(carrera);
    }
}
