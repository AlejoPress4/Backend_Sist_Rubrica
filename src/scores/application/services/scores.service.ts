import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evaluacion } from '../../domain/entities/evaluacion.entity';
import { Nota } from '../../domain/entities/nota.entity';
import { CalificacionDetalle } from '../../domain/entities/calificacion-detalle.entity';
import { IScoresService } from '../../domain/interfaces/scores-service.interface';
import { CreateEvaluacionDto } from '../dtos/create-evaluacion.dto';
import { UpdateEvaluacionDto } from '../dtos/update-evaluacion.dto';
import { CreateNotaDto } from '../dtos/create-nota.dto';
import { UpdateNotaDto } from '../dtos/update-nota.dto';
import { CreateCalificacionDetalleDto } from '../dtos/create-calificacion-detalle.dto';
import { UpdateCalificacionDetalleDto } from '../dtos/update-calificacion-detalle.dto';
import { RubricsService } from '../../../rubrics/application/services/rubrics.service';

@Injectable()
export class ScoresService implements IScoresService {
    constructor(
        @InjectRepository(Evaluacion)
        private readonly evaluacionRepository: Repository<Evaluacion>,
        @InjectRepository(Nota)
        private readonly notaRepository: Repository<Nota>,
        @InjectRepository(CalificacionDetalle)
        private readonly calificacionDetalleRepository: Repository<CalificacionDetalle>,
        private readonly rubricsService: RubricsService,
    ) { }

    // ==================== Evaluaciones ====================

    async createEvaluacion(dto: CreateEvaluacionDto): Promise<Evaluacion> {
        const evaluacion = this.evaluacionRepository.create(dto);
        return this.evaluacionRepository.save(evaluacion);
    }

    async findAllEvaluaciones(): Promise<Evaluacion[]> {
        return this.evaluacionRepository.find();
    }

    async findEvaluacionById(id: string): Promise<Evaluacion> {
        const evaluacion = await this.evaluacionRepository.findOne({ where: { id } });
        if (!evaluacion) {
            throw new NotFoundException(`Evaluación con ID ${id} no encontrada`);
        }
        return evaluacion;
    }

    async findEvaluacionesByAsignatura(asignatura_id: string): Promise<Evaluacion[]> {
        return this.evaluacionRepository.find({ where: { asignatura_id } });
    }

    async findEvaluacionesByRubrica(rubrica_id: string): Promise<Evaluacion[]> {
        return this.evaluacionRepository.find({ where: { rubrica_id } });
    }

    async updateEvaluacion(id: string, dto: UpdateEvaluacionDto): Promise<Evaluacion> {
        const evaluacion = await this.findEvaluacionById(id);
        Object.assign(evaluacion, dto);
        return this.evaluacionRepository.save(evaluacion);
    }

    async removeEvaluacion(id: string): Promise<void> {
        const evaluacion = await this.findEvaluacionById(id);
        await this.evaluacionRepository.remove(evaluacion);
    }

    // ==================== Notas ====================

    async createNota(dto: CreateNotaDto): Promise<Nota> {
        const nota = this.notaRepository.create(dto);
        return this.notaRepository.save(nota);
    }

    async findAllNotas(): Promise<Nota[]> {
        return this.notaRepository.find();
    }

    async findNotaById(id: string): Promise<Nota> {
        const nota = await this.notaRepository.findOne({ where: { id } });
        if (!nota) {
            throw new NotFoundException(`Nota con ID ${id} no encontrada`);
        }
        return nota;
    }

    async findNotasByInscripcion(inscripcion_id: string): Promise<Nota[]> {
        // Obsoleto si no se usa inscripcion_id, devuelto a propósito de compatibilidad
        return this.notaRepository.find({ where: { inscripcion_id } } as any);
    }

    async findNotasByEstudiante(estudiante_id: number): Promise<Nota[]> {
        return this.notaRepository.find({ where: { estudiante_id } });
    }

    async updateNota(id: string, dto: UpdateNotaDto): Promise<Nota> {
        const nota = await this.findNotaById(id);
        Object.assign(nota, dto);
        return this.notaRepository.save(nota);
    }

    async removeNota(id: string): Promise<void> {
        const nota = await this.findNotaById(id);
        await this.notaRepository.remove(nota);
    }

    // ==================== Calificación Detalle ====================

    async createCalificacionDetalle(dto: CreateCalificacionDetalleDto): Promise<CalificacionDetalle> {
        let puntaje = dto.puntaje || 0;

        if (dto.escala_id) {
            const escala = await this.rubricsService.findEscalaById(dto.escala_id);
            const criterio = await this.rubricsService.findCriterioById(escala.criterio_id);
            
            // Calculo ponderado: valor escala * (peso criterio / 100)
            puntaje = Number(escala.valor) * (Number(criterio.peso) / 100);
        }

        const detalle = this.calificacionDetalleRepository.create({
            ...dto,
            puntaje,
            evaluacion: { id: dto.evaluacion_id },
            estudiante: { id: dto.estudiante_id }
        });
        
        return this.calificacionDetalleRepository.save(detalle);
    }

    async findDetallesByEstudiante(estudiante_id: number): Promise<CalificacionDetalle[]> {
        return this.calificacionDetalleRepository.find({ where: { estudiante: { id: estudiante_id } } });
    }

    async findAllDetalles(): Promise<CalificacionDetalle[]> {
        return this.calificacionDetalleRepository.find();
    }

    async findDetalleById(id: string): Promise<CalificacionDetalle> {
        const detalle = await this.calificacionDetalleRepository.findOne({ where: { id } });
        if (!detalle) {
            throw new NotFoundException(`Calificación Detalle con ID ${id} no encontrado`);
        }
        return detalle;
    }

    async updateCalificacionDetalle(id: string, dto: UpdateCalificacionDetalleDto): Promise<CalificacionDetalle> {
        const detalle = await this.findDetalleById(id);
        Object.assign(detalle, dto);
        
        if (dto.escala_id && dto.escala_id !== detalle.escala?.id) {
             const escala = await this.rubricsService.findEscalaById(dto.escala_id);
             const criterio = await this.rubricsService.findCriterioById(escala.criterio_id);
             detalle.puntaje = Number(escala.valor) * (Number(criterio.peso) / 100);
        }
        
        return this.calificacionDetalleRepository.save(detalle);
    }

    async removeCalificacionDetalle(id: string): Promise<void> {
        const detalle = await this.findDetalleById(id);
        await this.calificacionDetalleRepository.remove(detalle);
    }

    async findPromedioByEstudiante(estudiante_id: number): Promise<number> {
        const detalles = await this.findDetallesByEstudiante(estudiante_id);
        if (detalles.length === 0) return 0;
        const promedio = detalles.reduce((acc, detalle) => acc + Number(detalle.puntaje), 0) / detalles.length;
        return promedio;
    }

    // ==================== Cálculos de Notas (Nuevos Métodos) ====================

    async calcularNotaEvaluacionEstudiante(evaluacion_id: string, estudiante_id: number): Promise<number> {
        const detalles = await this.calificacionDetalleRepository.find({
            where: {
                evaluacion: { id: evaluacion_id },
                estudiante: { id: estudiante_id }
            }
        });
        
        const nota = detalles.reduce((acc, det) => acc + Number(det.puntaje), 0);
        return nota;
    }

    async registrarNotaFinalGrupo(grupo_id: string, estudiante_id: number, asignaturas_ids: string[]): Promise<Nota> {
        const evaluaciones = await this.evaluacionRepository.createQueryBuilder('ev')
            .where('ev.asignatura_id IN (:...asignaturas_ids)', { asignaturas_ids })
            .getMany();
            
        let notaFinal = 0;
        
        for (const ev of evaluaciones) {
            const notaEv = await this.calcularNotaEvaluacionEstudiante(ev.id, estudiante_id);
            notaFinal += notaEv * (Number(ev.peso) / 100);
        }
        
        const nota = this.notaRepository.create({
            nota_final: notaFinal,
            estudiante_id,
            grupo_id,
            oficial: true,
            fecha_registro: new Date()
        });
        
        return this.notaRepository.save(nota);
    }
}
