import {
    Entity, PrimaryGeneratedColumn, Column,
    ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';
import { Estudiante } from '../../../users/domain/entities/estudiante.entity';
import { Evaluacion } from './evaluacion.entity';

@Entity('notas')
export class Nota {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
    nota_final: number;

    @Column({ nullable: true })
    observaciones: string;

    @ManyToOne(() => Estudiante, { eager: true })
    @JoinColumn({ name: 'estudiante_id' })
    estudiante: Estudiante;

    @Column()
    estudiante_id: string;

    @ManyToOne(() => Evaluacion, { eager: true })
    @JoinColumn({ name: 'evaluacion_id' })
    evaluacion: Evaluacion;

    @Column()
    evaluacion_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
