import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    Index,
} from 'typeorm';
import { Carrera } from './carrera.entity';
import { PlanAsignatura } from './plan-asignatura.entity';

@Entity('planes_estudio')
@Index(['carrera_id', 'version'], { unique: true })
export class PlanEstudio {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'int', default: 1 })
    version: number;

    @Column({ default: false })
    publicado: boolean;

    @Column({ default: false })
    vigente: boolean;

    @Column({ type: 'datetime', nullable: true })
    fechaPublicacion: Date | null;

    @ManyToOne(() => Carrera, (carrera) => carrera.planes_estudio, { onDelete: 'RESTRICT' })
    @JoinColumn({ name: 'carrera_id' })
    carrera: Carrera;

    @Column()
    carrera_id: string;

    @OneToMany(() => PlanAsignatura, (pa) => pa.planEstudio, { cascade: true })
    asignaturas: PlanAsignatura[];

    @CreateDateColumn()
    creadoEn: Date;

    @UpdateDateColumn()
    actualizadoEn: Date;
}
