import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rubrica } from '../../domain/entities/rubrica.entity';
import { Criterio } from '../../domain/entities/criterio.entity';
import { Escala } from '../../domain/entities/escala.entity';
import { CreateCriterioDto } from '../dtos/create-criterio.dto';
import { CreateEscalaDto } from '../dtos/create-escala.dto';
import { IRubricsService } from '../../domain/interfaces/rubrics-service.interface';

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

    // --- Rúbricas ---

    async createRubrica(data: Partial<Rubrica>): Promise<Rubrica> {
        const nuevaRubrica = this.rubricaRepository.create(data);
        return this.rubricaRepository.save(nuevaRubrica);
    }

    async findAllRubricas(): Promise<Rubrica[]> {
        return this.rubricaRepository.find();
    }

    async findRubricaById(id: string): Promise<Rubrica | null> {
        return this.rubricaRepository.findOne({
            where: { id },
            relations: ['criterios'],
        });
    }

    async updateRubrica(id: string, data: Partial<Rubrica>): Promise<Rubrica> {
        await this.rubricaRepository.update(id, data);
        const rubrica = await this.findRubricaById(id);
        if (!rubrica) {
            throw new NotFoundException(`Rubrica with ID ${id} not found`);
        }
        return rubrica;
    }

    async removeRubrica(id: string): Promise<void> {
        await this.rubricaRepository.delete(id);
    }

    // --- Criterios ---

    async createCriterio(rubrica_id: string, data: CreateCriterioDto): Promise<Criterio> {
        const criterio = this.criterioRepository.create({
            ...data,
            rubrica: { id: rubrica_id } as any,
        });
        return this.criterioRepository.save(criterio);
    }

    async findCriteriosByRubrica(rubrica_id: string): Promise<Criterio[]> {
        // TODO: Implement
        throw new Error('Method not implemented.');
    }

    // --- Escalas ---

    async createEscala(criterio_id: string, data: CreateEscalaDto): Promise<Escala> {
        const escala = this.escalaRepository.create({
            ...data,
            criterio: { id: criterio_id } as any,
        });
        return this.escalaRepository.save(escala);
    }

    async findEscalasByCriterio(criterio_id: string): Promise<Escala[]> {
        // TODO: Implement
        throw new Error('Method not implemented.');
    }
}
