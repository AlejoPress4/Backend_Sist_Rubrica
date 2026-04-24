import {
    Entity, PrimaryGeneratedColumn, Column,
    ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';
import { Estudiante } from '../../../users/domain/entities/estudiante.entity';
import { Grupo } from '../../../courses/domain/entities/grupo.entity';

@Entity('notas')
export class Nota {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
    nota_final: number;

    @Column({ nullable: true })
    observaciones: string;

    @ManyToOne(() => Estudiante)
    @JoinColumn()
    estudiante: Estudiante;

    @ManyToOne(() => Grupo)
    @JoinColumn({ name: 'grupo_id' })
    grupo: Grupo;
    @Column({ nullable: true })
    grupo_id: string;

    @Column({ default: false })
    oficial: boolean;

    @Column({ type: 'int' })
    inscripcion_id: number;

    @Column({ type: 'timestamp', nullable: true })
    fecha_registro: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
    inscripcion: any;
}
