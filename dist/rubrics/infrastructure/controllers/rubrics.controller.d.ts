import { RubricsService } from '../../application/services/rubrics.service';
import { CreateRubricaDto } from '../../application/dtos/create-rubrica.dto';
import { UpdateRubricaDto } from '../../application/dtos/update-rubrica.dto';
import { CreateCriterioDto } from '../../application/dtos/create-criterio.dto';
import { CreateEscalaDto } from '../../application/dtos/create-escala.dto';
export declare class RubricsController {
    private readonly rubricsService;
    constructor(rubricsService: RubricsService);
    createRubrica(dto: CreateRubricaDto): Promise<import("../../domain/entities/rubrica.entity").Rubrica>;
    findAllRubricas(): Promise<import("../../domain/entities/rubrica.entity").Rubrica[]>;
    findRubricaById(id: string): Promise<import("../../domain/entities/rubrica.entity").Rubrica | null>;
    updateRubrica(id: string, dto: UpdateRubricaDto): Promise<import("../../domain/entities/rubrica.entity").Rubrica>;
    removeRubrica(id: string): Promise<void>;
    createCriterio(rubricaId: string, dto: CreateCriterioDto): Promise<void>;
    findCriteriosByRubrica(rubricaId: string): Promise<void>;
    createEscala(criterioId: string, dto: CreateEscalaDto): Promise<void>;
    findEscalasByCriterio(criterioId: string): Promise<void>;
}
