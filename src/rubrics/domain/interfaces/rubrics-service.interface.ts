import { Rubrica } from '../entities/rubrica.entity';
import { Criterio } from '../entities/criterio.entity';
import { Escala } from '../entities/escala.entity';

export interface IRubricsService {
    // Rúbricas
    createRubrica(data: Partial<Rubrica>): Promise<Rubrica>;
    findAllRubricas(): Promise<Rubrica[]>;
    findRubricaById(id: string): Promise<Rubrica | null>;
    updateRubrica(id: string, data: Partial<Rubrica>): Promise<Rubrica>;
    removeRubrica(id: string): Promise<void>;

    // Criterios
    createCriterio(data: Partial<Criterio>): Promise<Criterio>;
    findCriteriosByRubrica(rubricaId: string): Promise<Criterio[]>;

    // Escalas
    createEscala(data: Partial<Escala>): Promise<Escala>;
    findEscalasByCriterio(criterioId: string): Promise<Escala[]>;
}
