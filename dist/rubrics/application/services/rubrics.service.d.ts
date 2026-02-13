import { Repository } from 'typeorm';
import { Rubrica } from '../../domain/entities/rubrica.entity';
import { Criterio } from '../../domain/entities/criterio.entity';
import { Escala } from '../../domain/entities/escala.entity';
import { IRubricsService } from '../../domain/interfaces/rubrics-service.interface';
export declare class RubricsService implements IRubricsService {
    private readonly rubricaRepository;
    private readonly criterioRepository;
    private readonly escalaRepository;
    constructor(rubricaRepository: Repository<Rubrica>, criterioRepository: Repository<Criterio>, escalaRepository: Repository<Escala>);
    createRubrica(data: Partial<Rubrica>): Promise<Rubrica>;
    findAllRubricas(): Promise<Rubrica[]>;
    findRubricaById(id: string): Promise<Rubrica | null>;
    updateRubrica(id: string, data: Partial<Rubrica>): Promise<Rubrica>;
    removeRubrica(id: string): Promise<void>;
    createCriterio(data: Partial<Criterio>): Promise<Criterio>;
    findCriteriosByRubrica(rubricaId: string): Promise<Criterio[]>;
    createEscala(data: Partial<Escala>): Promise<Escala>;
    findEscalasByCriterio(criterioId: string): Promise<Escala[]>;
}
