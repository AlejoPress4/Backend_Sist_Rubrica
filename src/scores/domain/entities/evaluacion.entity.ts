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
    @JoinColumn({ name: 'asignaturaId' })
    asignatura: Asignatura;

    @Column()
    asignaturaId: string;

    @ManyToOne(() => Rubrica, { eager: true })
    @JoinColumn({ name: 'rubricaId' })
    rubrica: Rubrica;

    @Column()
    rubricaId: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
