import {
    Entity, PrimaryGeneratedColumn, Column,
    ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';
import { Escala } from '../../../rubrics/domain/entities/escala.entity';

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

    @Column({ nullable: true })
    escala_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
