import {
    Entity, PrimaryGeneratedColumn, Column,
    ManyToOne, OneToMany, JoinColumn, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';
import { Rubrica } from './rubrica.entity';
import { Escala } from './escala.entity';

@Entity('criterios')
export class Criterio {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;

    @Column({ nullable: true })
    descripcion: string;

    @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
    ponderacion: number;

    @ManyToOne(() => Rubrica, (rubrica) => rubrica.criterios)
    @JoinColumn({ name: 'rubrica_id' })
    rubrica: Rubrica;

    @Column()
    rubrica_id: string;

    @OneToMany(() => Escala, (escala) => escala.criterio)
    escalas: Escala[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
