import {
    BadRequestException,
    ConflictException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { PlanEstudio } from '../../domain/entities/plan-estudio.entity';
import { PlanAsignatura } from '../../domain/entities/plan-asignatura.entity';
import { Asignatura } from '../../domain/entities/asignatura.entity';
import { Carrera } from '../../domain/entities/carrera.entity';
import { CreatePlanEstudioDto } from '../dtos/create-plan-estudio.dto';
import { AgregarAsignaturaAlPlanDto } from '../dtos/agregar-asignatura.dto';

@Injectable()
export class PlanEstudioService {
    constructor(
        @InjectRepository(PlanEstudio)
        private readonly planRepository: Repository<PlanEstudio>,
        @InjectRepository(PlanAsignatura)
        private readonly planAsignaturaRepository: Repository<PlanAsignatura>,
        @InjectRepository(Asignatura)
        private readonly asignaturaRepository: Repository<Asignatura>,
        @InjectRepository(Carrera)
        private readonly carreraRepository: Repository<Carrera>,
        private readonly dataSource: DataSource,
    ) { }

    async create(dto: CreatePlanEstudioDto): Promise<PlanEstudio> {
        const carrera = await this.carreraRepository.findOne({ where: { id: dto.carrera_id } });
        if (!carrera) {
            throw new NotFoundException(`Carrera con ID ${dto.carrera_id} no encontrada`);
        }

        const ultimaVersion = await this.planRepository
            .createQueryBuilder('plan')
            .select('MAX(plan.version)', 'max')
            .where('plan.carrera_id = :carrera_id', { carrera_id: dto.carrera_id })
            .getRawOne<{ max: number | null }>();

        const siguienteVersion = (ultimaVersion?.max ?? 0) + 1;

        const plan = this.planRepository.create({
            carrera_id: dto.carrera_id,
            version: siguienteVersion,
            publicado: false,
            vigente: false,
        });
        return this.planRepository.save(plan);
    }

    async findAll(): Promise<PlanEstudio[]> {
        return this.planRepository.find({ relations: ['asignaturas', 'asignaturas.asignatura'] });
    }

    async findById(id: string): Promise<PlanEstudio> {
        const plan = await this.planRepository.findOne({
            where: { id },
            relations: ['asignaturas', 'asignaturas.asignatura'],
        });
        if (!plan) {
            throw new NotFoundException(`Plan de Estudio con ID ${id} no encontrado`);
        }
        return plan;
    }

    async findByCarrera(carrera_id: string): Promise<PlanEstudio[]> {
        return this.planRepository.find({
            where: { carrera_id },
            relations: ['asignaturas', 'asignaturas.asignatura'],
            order: { version: 'DESC' },
        });
    }

    async findVigenteByCarrera(carrera_id: string): Promise<PlanEstudio | null> {
        return this.planRepository.findOne({
            where: { carrera_id, vigente: true },
            relations: ['asignaturas', 'asignaturas.asignatura'],
        });
    }

    async agregarAsignatura(
        planId: string,
        dto: AgregarAsignaturaAlPlanDto,
    ): Promise<PlanAsignatura> {
        const plan = await this.findById(planId);
        if (plan.publicado) {
            throw new BadRequestException(
                'No se pueden modificar las asignaturas de un plan publicado. Crea una nueva versión.',
            );
        }

        const asignatura = await this.asignaturaRepository.findOne({ where: { id: dto.asignatura_id } });
        if (!asignatura) {
            throw new NotFoundException(`Asignatura con ID ${dto.asignatura_id} no encontrada`);
        }

        const existente = await this.planAsignaturaRepository.findOne({
            where: { planEstudio_id: planId, asignatura_id: dto.asignatura_id },
        });
        if (existente) {
            throw new ConflictException('La asignatura ya está en el plan');
        }

        const planAsignatura = this.planAsignaturaRepository.create({
            planEstudio_id: planId,
            asignatura_id: dto.asignatura_id,
            semestreSugerido: dto.semestreSugerido,
            creditos: dto.creditos,
        });
        return this.planAsignaturaRepository.save(planAsignatura);
    }

    async removerAsignatura(planId: string, asignaturaId: string): Promise<void> {
        const plan = await this.findById(planId);
        if (plan.publicado) {
            throw new BadRequestException(
                'No se pueden modificar las asignaturas de un plan publicado',
            );
        }
        const planAsignatura = await this.planAsignaturaRepository.findOne({
            where: { planEstudio_id: planId, asignatura_id: asignaturaId },
        });
        if (!planAsignatura) {
            throw new NotFoundException('La asignatura no está en el plan');
        }
        await this.planAsignaturaRepository.remove(planAsignatura);
    }

    async publicar(id: string): Promise<PlanEstudio> {
        const plan = await this.findById(id);
        if (plan.publicado) {
            throw new BadRequestException('El plan ya está publicado');
        }
        if (!plan.asignaturas || plan.asignaturas.length === 0) {
            throw new BadRequestException('El plan no tiene asignaturas asignadas');
        }

        return this.dataSource.transaction(async (manager) => {
            // Marcar como no vigente cualquier plan anterior publicado de la misma carrera
            await manager.update(
                PlanEstudio,
                { carrera_id: plan.carrera_id, vigente: true },
                { vigente: false },
            );

            plan.publicado = true;
            plan.vigente = true;
            plan.fechaPublicacion = new Date();
            return manager.save(PlanEstudio, plan);
        });
    }

    async remove(id: string): Promise<void> {
        const plan = await this.findById(id);
        if (plan.publicado) {
            throw new BadRequestException(
                'No se puede eliminar un plan publicado. Crea una nueva versión para invalidarlo.',
            );
        }
        await this.planRepository.remove(plan);
    }
}
