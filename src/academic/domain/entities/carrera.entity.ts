import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from 'typeorm';
import { PlanEstudio } from './plan-estudio.entity';
import { Semestre } from './semestre.entity';

@Entity('carreras')
export class Carrera {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    codigo: string;

    @Column()
    nombre: string;

    @Column({ nullable: true })
    descripcion: string;

    @Column({ default: false })
    archivada: boolean;

    @OneToMany(() => PlanEstudio, (plan) => plan.carrera)
    planes_estudio: PlanEstudio[];

    @OneToMany(() => Semestre, (semestre) => semestre.carrera)
    semestres: Semestre[];

    @CreateDateColumn()
    creadoEn: Date;

    @UpdateDateColumn()
    actualizadoEn: Date;
}
