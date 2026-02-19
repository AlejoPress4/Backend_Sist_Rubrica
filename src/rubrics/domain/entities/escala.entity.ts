import {
    Entity, PrimaryGeneratedColumn, Column,
    ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';
import { Criterio } from './criterio.entity';

@Entity('escalas')
export class Escala {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;

    @Column({ nullable: true })
    descripcion: string;

    @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
    valor: number;

    @ManyToOne(() => Criterio, (criterio) => criterio.escalas)
    @JoinColumn({ name: 'criterio_id' })
    criterio: Criterio;

    @Column()
    criterio_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
