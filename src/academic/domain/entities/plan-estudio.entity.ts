import {
    Entity, PrimaryGeneratedColumn, Column,
    ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';
import { Carrera } from './carrera.entity';
import { Asignatura } from './asignatura.entity';

@Entity('planes_estudio')
export class PlanEstudio {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: true })
    nombre: string;

    @Column({ nullable: true })
    anio: number;

    @ManyToOne(() => Carrera, { eager: true })
    @JoinColumn({ name: 'carreraId' })
    carrera: Carrera;

    @Column()
    carreraId: string;

    @ManyToOne(() => Asignatura, { eager: true })
    @JoinColumn({ name: 'asignaturaId' })
    asignatura: Asignatura;

    @Column()
    asignaturaId: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
