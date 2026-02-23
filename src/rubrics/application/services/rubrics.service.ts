import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rubrica } from '../../domain/entities/rubrica.entity';
import { Criterio } from '../../domain/entities/criterio.entity';
import { Escala } from '../../domain/entities/escala.entity';
import { IRubricsService } from '../../domain/interfaces/rubrics-service.interface';
import { CreateRubricaDto } from '../dtos/create-rubrica.dto';
import { UpdateRubricaDto } from '../dtos/update-rubrica.dto';
import { CreateCriterioDto } from '../dtos/create-criterio.dto';
import { UpdateCriterioDto } from '../dtos/update-criterio.dto';
import { CreateEscalaDto } from '../dtos/create-escala.dto';
import { UpdateEscalaDto } from '../dtos/update-escala.dto';

@Injectable()
export class RubricsService implements IRubricsService {
    constructor(
        @InjectRepository(Rubrica)
        private readonly rubricaRepository: Repository<Rubrica>,
        @InjectRepository(Criterio)
        private readonly criterioRepository: Repository<Criterio>,
        @InjectRepository(Escala)
        private readonly escalaRepository: Repository<Escala>,
    ) { }

    // ==================== Rúbricas ====================

    async createRubrica(dto: CreateRubricaDto): Promise<Rubrica> {
        const rubrica = this.rubricaRepository.create(dto);
        return this.rubricaRepository.save(rubrica);
    }

    async findAllRubricas(): Promise<Rubrica[]> {
        return this.rubricaRepository.find();
    }

    async findRubricaById(id: string): Promise<Rubrica | null> {
        return this.rubricaRepository.findOne({
            where: { id },
            relations: ['criterios', 'criterios.escalas'],
        });
    }

    async updateRubrica(id: string, dto: UpdateRubricaDto): Promise<Rubrica> {
        const rubrica = await this.findRubricaById(id);
        if (!rubrica) {
            throw new NotFoundException(`Rúbrica con ID ${id} no encontrada`);
        }
        Object.assign(rubrica, dto);
        return this.rubricaRepository.save(rubrica);
    }

    async removeRubrica(id: string): Promise<void> {
        const rubrica = await this.findRubricaById(id);
        if (!rubrica) {
            throw new NotFoundException(`Rúbrica con ID ${id} no encontrada`);
        }
        await this.rubricaRepository.remove(rubrica);
    }

    // ==================== Criterios ====================

    async createCriterio(dto: CreateCriterioDto): Promise<Criterio> {
        const criterio = this.criterioRepository.create(dto);
        return this.criterioRepository.save(criterio);
    }

    async findCriteriosByRubrica(rubrica_id: string): Promise<Criterio[]> {
        return this.criterioRepository.find({
            where: { rubrica_id },
            relations: ['escalas'],
        });
    }

    async findCriterioById(id: string): Promise<Criterio> {
        const criterio = await this.criterioRepository.findOne({
            where: { id },
            relations: ['escalas'],
        });
        if (!criterio) {
            throw new NotFoundException(`Criterio con ID ${id} no encontrado`);
        }
        return criterio;
    }

    async updateCriterio(id: string, dto: UpdateCriterioDto): Promise<Criterio> {
        const criterio = await this.findCriterioById(id);
        Object.assign(criterio, dto);
        return this.criterioRepository.save(criterio);
    }

    async removeCriterio(id: string): Promise<void> {
        const criterio = await this.findCriterioById(id);
        await this.criterioRepository.remove(criterio);
    }

    // ==================== Escalas ====================

    async createEscala(dto: CreateEscalaDto): Promise<Escala> {
        const escala = this.escalaRepository.create(dto);
        return this.escalaRepository.save(escala);
    }

    async findEscalasByCriterio(criterio_id: string): Promise<Escala[]> {
        return this.escalaRepository.find({ where: { criterio_id } });
    }

    async findEscalaById(id: string): Promise<Escala> {
        const escala = await this.escalaRepository.findOne({ where: { id } });
        if (!escala) {
            throw new NotFoundException(`Escala con ID ${id} no encontrada`);
        }
        return escala;
    }

    async updateEscala(id: string, dto: UpdateEscalaDto): Promise<Escala> {
        const escala = await this.findEscalaById(id);
        Object.assign(escala, dto);
        return this.escalaRepository.save(escala);
    }

    async removeEscala(id: string): Promise<void> {
        const escala = await this.findEscalaById(id);
        await this.escalaRepository.remove(escala);
    }
}
