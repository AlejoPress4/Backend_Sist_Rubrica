import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    Index,
    OneToOne,
} from 'typeorm';
import { Estudiante } from '../../../users/domain/entities/estudiante.entity';
import { Grupo } from './grupo.entity';
import { Nota } from '../../../scores/domain/entities/nota.entity';

@Entity('inscripciones')
@Index(['estudiante_id', 'grupo_id'], { unique: true })
export class Inscripcion {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Estudiante, (estudiante) => estudiante.inscripciones, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'estudiante_id' })
    estudiante: Estudiante;

    @Column({ type: 'int' })
    estudiante_id: number;

    @ManyToOne(() => Grupo, (grupo) => grupo.inscripciones, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'grupo_id' })
    grupo: Grupo;
    @Column()
    grupo_id: string;

    @OneToOne(() => Nota, (nota) => nota.inscripcion)
    @JoinColumn({ name: 'inscripcion_id' })

    @CreateDateColumn()
    fechaInscripcion: Date;
}
