import { Rubrica } from '../entities/rubrica.entity';
import { Criterio } from '../entities/criterio.entity';
import { Escala } from '../entities/escala.entity';
import { CreateCriterioDto } from '../../application/dtos/create-criterio.dto';
import { CreateEscalaDto } from '../../application/dtos/create-escala.dto';

export interface IRubricsService {
    // Rúbricas
    createRubrica(data: Partial<Rubrica>): Promise<Rubrica>;
    findAllRubricas(): Promise<Rubrica[]>;
    findRubricaById(id: string): Promise<Rubrica | null>;
    updateRubrica(id: string, data: Partial<Rubrica>): Promise<Rubrica>;
    removeRubrica(id: string): Promise<void>;

    // Criterios
    createCriterio(rubrica_id: string, data: CreateCriterioDto): Promise<Criterio>;
    findCriteriosByRubrica(rubrica_id: string): Promise<Criterio[]>;

    // Escalas
    createEscala(criterio_id: string, data: CreateEscalaDto): Promise<Escala>;
    findEscalasByCriterio(criterio_id: string): Promise<Escala[]>;
}




//return this.rubricsService.createCriterio({ ...dto, rubrica: { id: rubricaId } as any });


//return this.rubricsService.createCriterio(rubricaId, dto);