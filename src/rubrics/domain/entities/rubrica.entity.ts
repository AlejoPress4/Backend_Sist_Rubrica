import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Criterio } from './criterio.entity';

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

    @OneToMany(() => Criterio, (criterio) => criterio.rubrica)
    criterios: Criterio[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
