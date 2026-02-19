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
    @JoinColumn({ name: 'carrera_id' })
    carrera: Carrera;

    @Column()
    carrera_id: string;

    @ManyToOne(() => Asignatura, { eager: true })
    @JoinColumn({ name: 'asignatura_id' })
    asignatura: Asignatura;

    @Column()
    asignatura_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
