import {
    Entity, PrimaryGeneratedColumn, Column,
    ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';
import { Estudiante } from '../../../users/domain/entities/estudiante.entity';
import { Grupo } from './grupo.entity';
import { EstadoInscripcion } from '../../../common/constants/constants';
import { OneToMany } from 'typeorm/browser';
import { Nota } from '../../../scores/domain/entities/nota.entity';
@Entity('inscripciones')
export class Inscripcion {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    fecha_inscripcion: Date;

    @Column({ type: 'enum', enum: EstadoInscripcion, default: EstadoInscripcion.ACTIVO })
    estado: EstadoInscripcion;

    //Relaciones
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

    @OneToMany(() => Nota, nota => nota.inscripcion, { eager: true })
    notas: Nota[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
