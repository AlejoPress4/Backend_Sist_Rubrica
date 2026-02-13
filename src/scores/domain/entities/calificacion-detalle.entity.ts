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
    @JoinColumn({ name: 'notaId' })
    nota: Nota;

    @Column()
    notaId: string;

    @ManyToOne(() => Criterio, { eager: true })
    @JoinColumn({ name: 'criterioId' })
    criterio: Criterio;

    @Column()
    criterioId: string;

    @ManyToOne(() => Escala, { eager: true, nullable: true })
    @JoinColumn({ name: 'escalaId' })
    escala: Escala;

    @Column({ nullable: true })
    escalaId: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
