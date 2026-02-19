import {
    Entity, PrimaryGeneratedColumn, Column,
    ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';
import { Nota } from './nota.entity';
import { Criterio } from '../../../rubrics/domain/entities/criterio.entity';
import { Escala } from '../../../rubrics/domain/entities/escala.entity';

@Entity('calificacion_detalles')
export class CalificacionDetalle {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
    puntaje: number;

    @Column({ nullable: true })
    comentario: string;

    @ManyToOne(() => Nota)
    @JoinColumn({ name: 'nota_id' })
    nota: Nota;

    @Column()
    nota_id: string;

    @ManyToOne(() => Criterio, { eager: true })
    @JoinColumn({ name: 'criterio_id' })
    criterio: Criterio;

    @Column()
    criterio_id: string;

    @ManyToOne(() => Escala, { eager: true, nullable: true })
    @JoinColumn({ name: 'escala_id' })
    escala: Escala;

    @Column({ nullable: true })
    escala_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
