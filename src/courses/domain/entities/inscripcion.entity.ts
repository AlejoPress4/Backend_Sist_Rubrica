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
    @JoinColumn({ name: 'estudianteId' })
    estudiante: Estudiante;

    @Column()
    estudianteId: string;

    @ManyToOne(() => Grupo, { eager: true })
    @JoinColumn({ name: 'grupoId' })
    grupo: Grupo;

    @Column()
    grupoId: string;

    @Column({ type: 'enum', enum: EstadoInscripcion, default: EstadoInscripcion.ACTIVO })
    estado: EstadoInscripcion;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
