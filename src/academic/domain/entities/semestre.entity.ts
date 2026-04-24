import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from 'typeorm';
import { Carrera } from './carrera.entity';
import { EstadoSemestre } from '../../../common/enums';
import { Grupo } from '../../../courses/domain/entities/grupo.entity';

@Entity('semestres')
export class Semestre {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;

    @Column({ type: 'date' })
    fechaInicio: Date;

    @Column({ type: 'date' })
    fechaFin: Date;

    @Column({
        type: 'simple-enum',
        enum: EstadoSemestre,
        default: EstadoSemestre.ACTIVO,
    })
    estado: EstadoSemestre;

    @ManyToOne(() => Carrera, (carrera) => carrera.semestres, { onDelete: 'RESTRICT' })
    @JoinColumn({ name: 'carrera_id' })
    carrera: Carrera;

    @Column()
    carrera_id: string;

    @OneToMany(() => Grupo, (grupo) => grupo.semestre)
    grupos: Grupo[];

    @CreateDateColumn()
    creadoEn: Date;

    @UpdateDateColumn()
    actualizadoEn: Date;
}
