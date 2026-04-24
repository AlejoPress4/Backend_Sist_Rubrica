import {
    Entity, PrimaryGeneratedColumn, Column,
    ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';
import { Escala } from '../../../rubrics/domain/entities/escala.entity';
import { Estudiante } from '../../../users/domain/entities/estudiante.entity';
import { Evaluacion } from './evaluacion.entity';

@Entity('calificacion_detalles')
export class CalificacionDetalle {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
    puntaje: number;

    @Column({ nullable: true })
    comentario: string;

    @ManyToOne(() => Escala, escala => escala.calificacionDetalles)
    @JoinColumn({ name: 'escala_id' })
    escala: Escala;

    @ManyToOne(() => Estudiante, estudiante => estudiante.calificacionDetalles)
    @JoinColumn({ name: 'estudiante_id' })
    estudiante: Estudiante;

    @ManyToOne(() => Evaluacion, evaluacion => evaluacion.calificacionDetalles)
    @JoinColumn({ name: 'evaluacion_id' })
    evaluacion: Evaluacion;
    @Column()
    evaluacion_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
