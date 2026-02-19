import {
    Entity, PrimaryGeneratedColumn, Column,
    ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';
import { Estudiante } from '../../../users/domain/entities/estudiante.entity';
import { Grupo } from './grupo.entity';
import { EstadoInscripcion } from '../../../common/constants/constants';

@Entity('inscripciones')
export class Inscripcion {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Estudiante, { eager: true })
    @JoinColumn({ name: 'estudiante_id' })
    estudiante: Estudiante;

    @Column()
    estudiante_id: string;

    @ManyToOne(() => Grupo, { eager: true })
    @JoinColumn({ name: 'grupo_id' })
    grupo: Grupo;

    @Column()
    grupo_id: string;

    @Column({ type: 'enum', enum: EstadoInscripcion, default: EstadoInscripcion.ACTIVO })
    estado: EstadoInscripcion;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
