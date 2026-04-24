import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Index,
} from 'typeorm';
import { Estudiante } from '../../../users/domain/entities/estudiante.entity';
import { Asignatura } from '../../../academic/domain/entities/asignatura.entity';
import { Semestre } from '../../../academic/domain/entities/semestre.entity';
import { EstadoMatricula } from '../../../common/enums';

@Entity('matriculas')
@Index(['estudiante_id', 'asignatura_id', 'semestre_id'], { unique: true })
export class Matricula {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'simple-enum',
        enum: EstadoMatricula,
        default: EstadoMatricula.ACTIVA,
    })
    estado: EstadoMatricula;

    @ManyToOne(() => Estudiante, (estudiante) => estudiante.matriculas, { onDelete: 'RESTRICT' })
    @JoinColumn({ name: 'estudiante_id' })
    estudiante: Estudiante;
    @Column({ type: 'int' })
    estudiante_id: number;

    @ManyToOne(() => Asignatura, { onDelete: 'RESTRICT' })
    @JoinColumn({ name: 'asignatura_id' })
    asignatura: Asignatura;
    @Column()
    asignatura_id: string;

    @ManyToOne(() => Semestre, { onDelete: 'RESTRICT' })
    @JoinColumn({ name: 'semestre_id' })
    semestre: Semestre;
    @Column()
    semestre_id: string;

    @CreateDateColumn()
    fechaRegistro: Date;

    @UpdateDateColumn()
    actualizadoEn: Date;
}
