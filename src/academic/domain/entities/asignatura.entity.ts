import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from 'typeorm';
import { Grupo } from '../../../courses/domain/entities/grupo.entity';
import { Evaluacion } from '../../../scores/domain/entities/evaluacion.entity';
import { PlanAsignatura } from './plan-asignatura.entity';

@Entity('asignaturas')
export class Asignatura {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;

    @Column({ unique: true })
    codigo: string;

    @Column({ nullable: true })
    descripcion: string;

    @Column({ type: 'int', default: 0 })
    creditos: number;

    @OneToMany(() => Grupo, (grupo) => grupo.asignatura)
    grupos: Grupo[];

    @OneToMany(() => Evaluacion, (evaluacion) => evaluacion.asignatura)
    evaluaciones: Evaluacion[];

    @OneToMany(() => PlanAsignatura, (pa) => pa.asignatura)
    planAsignaturas: PlanAsignatura[];

    @CreateDateColumn()
    creadoEn: Date;

    @UpdateDateColumn()
    actualizadoEn: Date;
}
