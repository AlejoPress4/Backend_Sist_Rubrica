import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Grupo } from '../../../courses/domain/entities/grupo.entity';
import { Evaluacion } from 'src/scores/domain/entities/evaluacion.entity';
import { PlanEstudio } from './plan-estudio.entity';

@Entity('asignaturas')
export class Asignatura {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;

    @Column({ nullable: true })
    codigo: string;

    @Column({ nullable: true })
    descripcion: string;

    @Column({ default: 0 })
    creditos: number;

    @OneToMany(() => Grupo, grupo => grupo.asignatura)
    grupos: Grupo[];

    @OneToMany(() => Evaluacion, evaluacion => evaluacion.asignatura)
    evaluaciones: Evaluacion[];

    @OneToMany(() => PlanEstudio, plan => plan.asignatura)
    planes: PlanEstudio[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
