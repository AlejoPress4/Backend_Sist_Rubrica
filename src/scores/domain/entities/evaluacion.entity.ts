import {
    Entity, PrimaryGeneratedColumn, Column,
    ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToMany
} from 'typeorm';
import { Asignatura } from '../../../academic/domain/entities/asignatura.entity';
import { Rubrica } from '../../../rubrics/domain/entities/rubrica.entity';
import { CalificacionDetalle } from './calificacion-detalle.entity';

@Entity('evaluaciones')
export class Evaluacion {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;

    @Column({ nullable: true })
    descripcion: string;

    @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
    nota: number;

    @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
    peso: number;

    @ManyToOne(() => Asignatura, { eager: true })
    @JoinColumn({ name: 'asignatura_id' })
    asignatura: Asignatura;
    @Column()
    asignatura_id: string;

    @ManyToOne(() => Rubrica, { eager: true })
    @JoinColumn({ name: 'rubrica_id' })
    rubrica: Rubrica;
    @Column()
    rubrica_id: string;

    @OneToMany(() => CalificacionDetalle, detalle => detalle.evaluacion)
    calificacionDetalles: CalificacionDetalle[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}