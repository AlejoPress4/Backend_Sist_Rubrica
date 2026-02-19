import {
    Entity, PrimaryGeneratedColumn, Column,
    ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';
import { Inscripcion } from '../../../courses/domain/entities/inscripcion.entity';
import { Rubrica } from 'src/rubrics/domain/entities/rubrica.entity';

@Entity('notas')
export class Nota {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
    nota_final: number;

    @Column({ nullable: true })
    observaciones: string;

    @Column()
    estudiante_id: string;


    //Relaciones
    @ManyToOne(() => Inscripcion, inscripcion => inscripcion.notas)
    @JoinColumn({ name: 'inscripcion_id' })
    inscripcion: Inscripcion;
    @Column()
    inscripcion_id: string;
    
    @ManyToOne(() => Rubrica, rubrica => rubrica.notas)
    @JoinColumn({ name: 'rubrica_id' })
    rubrica: Rubrica
    @Column()
    rubrica_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
