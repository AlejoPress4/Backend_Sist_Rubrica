import {
    Entity, PrimaryGeneratedColumn, Column,
    ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';
import { Asignatura } from '../../../academic/domain/entities/asignatura.entity';
import { Rubrica } from '../../../rubrics/domain/entities/rubrica.entity';

@Entity('evaluaciones')
export class Evaluacion {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;

    @Column({ nullable: true })
    descripcion: string;

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

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
