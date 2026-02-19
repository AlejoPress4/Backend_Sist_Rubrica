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

    @ManyToOne(() => Docente, docente => docente.grupos, { eager: true })
    @JoinColumn({ name: 'docente_id' })
    docente: Docente;

    @Column()
    docente_id: string;

    @ManyToOne(() => Asignatura, asignatura => asignatura.grupos, { eager: true })
    @JoinColumn({ name: 'asignatura_id' })
    asignatura: Asignatura;

    @Column()
    asignatura_id: string;

    @ManyToOne(() => Semestre, semestre => semestre.grupos, { eager: true })
    @JoinColumn({ name: 'semestre_id' })
    semestre: Semestre;

    @Column()
    semestre_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
