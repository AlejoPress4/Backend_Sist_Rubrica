import {
    Entity, PrimaryGeneratedColumn, Column,
    ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';
import { Docente } from '../../../users/domain/entities/docente.entity';
import { Asignatura } from '../../../academic/domain/entities/asignatura.entity';
import { Semestre } from './semestre.entity';

@Entity('grupos')
export class Grupo {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: true })
    nombre: string;

    @ManyToOne(() => Docente, { eager: true })
    @JoinColumn({ name: 'docenteId' })
    docente: Docente;

    @Column()
    docenteId: string;

    @ManyToOne(() => Asignatura, { eager: true })
    @JoinColumn({ name: 'asignaturaId' })
    asignatura: Asignatura;

    @Column()
    asignaturaId: string;

    @ManyToOne(() => Semestre, { eager: true })
    @JoinColumn({ name: 'semestreId' })
    semestre: Semestre;

    @Column()
    semestreId: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
