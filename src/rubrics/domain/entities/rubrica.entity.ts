import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
import { Criterio } from './criterio.entity';
import { Nota } from '../../../scores/domain/entities/nota.entity';
import { Evaluacion } from 'src/scores/domain/entities/evaluacion.entity';

@Entity('rubricas')
export class Rubrica {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    titulo: string;

    @Column({ type: 'text', nullable: true })
    descripcion: string;

    @Column({ default: false })
    es_publica: boolean;

    //Relaciones 
    @OneToMany(() => Criterio, criterio => criterio.rubrica)
    criterios: Criterio[];

    @OneToMany(() => Nota, nota => nota.rubrica)
    notas: Nota[];

    @OneToMany(() => Evaluacion, evaluacion=> evaluacion.rubrica)
    evaluaciones: Evaluacion[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
