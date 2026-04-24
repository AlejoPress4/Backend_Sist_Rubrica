import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Semestre } from '../../domain/entities/semestre.entity';
import { Carrera } from '../../domain/entities/carrera.entity';
import { CreateSemestreDto } from '../dtos/create-semestre.dto';
import { UpdateSemestreDto } from '../dtos/update-semestre.dto';
import { EstadoSemestre } from '../../../common/enums';

@Injectable()
export class SemestresService {
    constructor(
        @InjectRepository(Semestre)
        private readonly semestreRepository: Repository<Semestre>,
        @InjectRepository(Carrera)
        private readonly carreraRepository: Repository<Carrera>,
    ) { }

    async create(dto: CreateSemestreDto): Promise<Semestre> {
        const carrera = await this.carreraRepository.findOne({ where: { id: dto.carrera_id } });
        if (!carrera) {
            throw new NotFoundException(`Carrera con ID ${dto.carrera_id} no encontrada`);
        }
        if (carrera.archivada) {
            throw new BadRequestException('No se pueden crear semestres en una carrera archivada');
        }
        if (new Date(dto.fechaInicio) >= new Date(dto.fechaFin)) {
            throw new BadRequestException(
                'La fecha de inicio debe ser anterior a la fecha de fin',
            );
        }

        const existeActivo = await this.semestreRepository.findOne({
            where: { carrera_id: dto.carrera_id, estado: EstadoSemestre.ACTIVO },
        });
        if (existeActivo) {
            throw new BadRequestException(
                'Ya existe un semestre ACTIVO para esta carrera. Cierra el actual antes de crear uno nuevo.',
            );
        }

        const semestre = this.semestreRepository.create({
            ...dto,
            estado: EstadoSemestre.ACTIVO,
        });
        return this.semestreRepository.save(semestre);
    }

    async findAll(): Promise<Semestre[]> {
        return this.semestreRepository.find();
    }

    async findById(id: string): Promise<Semestre> {
        const semestre = await this.semestreRepository.findOne({ where: { id } });
        if (!semestre) {
            throw new NotFoundException(`Semestre con ID ${id} no encontrado`);
        }
        return semestre;
    }

    async findByCarrera(carrera_id: string): Promise<Semestre[]> {
        return this.semestreRepository.find({ where: { carrera_id } });
    }

    async update(id: string, dto: UpdateSemestreDto): Promise<Semestre> {
        const semestre = await this.findById(id);
        if (dto.fechaInicio && dto.fechaFin && new Date(dto.fechaInicio) >= new Date(dto.fechaFin)) {
            throw new BadRequestException('La fecha de inicio debe ser anterior a la fecha de fin');
        }
        Object.assign(semestre, dto);
        return this.semestreRepository.save(semestre);
    }

    async cerrar(id: string): Promise<Semestre> {
        const semestre = await this.findById(id);
        if (semestre.estado === EstadoSemestre.CERRADO) {
            throw new BadRequestException('El semestre ya está CERRADO');
        }
        semestre.estado = EstadoSemestre.CERRADO;
        return this.semestreRepository.save(semestre);
    }

    async remove(id: string): Promise<void> {
        const semestre = await this.findById(id);
        await this.semestreRepository.remove(semestre);
    }
}
