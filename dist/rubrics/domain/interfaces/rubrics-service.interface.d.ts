import { Rubrica } from '../entities/rubrica.entity';
import { Criterio } from '../entities/criterio.entity';
import { Escala } from '../entities/escala.entity';
import { CreateRubricaDto } from '../../application/dtos/create-rubrica.dto';
import { UpdateRubricaDto } from '../../application/dtos/update-rubrica.dto';
import { CreateCriterioDto } from '../../application/dtos/create-criterio.dto';
import { UpdateCriterioDto } from '../../application/dtos/update-criterio.dto';
import { CreateEscalaDto } from '../../application/dtos/create-escala.dto';
import { UpdateEscalaDto } from '../../application/dtos/update-escala.dto';
export interface IRubricsService {
    createRubrica(dto: CreateRubricaDto): Promise<Rubrica>;
    findAllRubricas(): Promise<Rubrica[]>;
    findRubricaById(id: string): Promise<Rubrica | null>;
    updateRubrica(id: string, dto: UpdateRubricaDto): Promise<Rubrica>;
    removeRubrica(id: string): Promise<void>;
    createCriterio(dto: CreateCriterioDto): Promise<Criterio>;
    findCriteriosByRubrica(rubrica_id: string): Promise<Criterio[]>;
    findCriterioById(id: string): Promise<Criterio>;
    updateCriterio(id: string, dto: UpdateCriterioDto): Promise<Criterio>;
    removeCriterio(id: string): Promise<void>;
    createEscala(dto: CreateEscalaDto): Promise<Escala>;
    findEscalasByCriterio(criterio_id: string): Promise<Escala[]>;
    findEscalaById(id: string): Promise<Escala>;
    updateEscala(id: string, dto: UpdateEscalaDto): Promise<Escala>;
    removeEscala(id: string): Promise<void>;
}
