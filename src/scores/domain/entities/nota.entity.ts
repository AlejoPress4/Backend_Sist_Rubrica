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
    notaFinal: number;

    @Column({ nullable: true })
    observaciones: string;

    @ManyToOne(() => Estudiante, { eager: true })
    @JoinColumn({ name: 'estudianteId' })
    estudiante: Estudiante;

    @Column()
    estudianteId: string;

    @ManyToOne(() => Evaluacion, { eager: true })
    @JoinColumn({ name: 'evaluacionId' })
    evaluacion: Evaluacion;

    @Column()
    evaluacionId: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
