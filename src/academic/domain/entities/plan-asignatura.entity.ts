import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    Index,
} from 'typeorm';
import { PlanEstudio } from './plan-estudio.entity';
import { Asignatura } from './asignatura.entity';

@Entity('plan_asignaturas')
@Index(['planEstudio_id', 'asignatura_id'], { unique: true })
export class PlanAsignatura {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'int' })
    semestreSugerido: number;

    @Column({ type: 'int' })
    creditos: number;

    @ManyToOne(() => PlanEstudio, (plan) => plan.asignaturas, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'planEstudio_id' })
    planEstudio: PlanEstudio;

    @Column()
    planEstudio_id: string;

    @ManyToOne(() => Asignatura, (asignatura) => asignatura.planAsignaturas, { onDelete: 'RESTRICT' })
    @JoinColumn({ name: 'asignatura_id' })
    asignatura: Asignatura;

    @Column()
    asignatura_id: string;
}
