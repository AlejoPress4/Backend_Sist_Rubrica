import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { PlanEstudio } from './plan-estudio.entity';
import { Matricula } from './matricula.entity';

@Entity('carreras')
export class Carrera {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;

    @Column({ nullable: true })
    codigo: string;

    @Column({ nullable: true })
    descripcion: string;

    @OneToMany(() => PlanEstudio, planes => planes.carrera)
    planes: PlanEstudio[];

    @OneToMany(() => Matricula, matricula => matricula.carrera)
    matriculas: Matricula[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
