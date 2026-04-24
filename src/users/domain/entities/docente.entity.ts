import {
    Entity,
    PrimaryColumn,
    Column,
    OneToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToMany,
} from 'typeorm';
import { User } from './user.entity';
import { Grupo } from '../../../courses/domain/entities/grupo.entity';

@Entity('docentes')
export class Docente {
    @PrimaryColumn({ type: 'int' })
    id: number;

    @Column()
    nombre: string;

    @Column({ nullable: true })
    titulo: string;

    @OneToOne(() => User, (user) => user.docente, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'userId' })
    user: User;

    @Column()
    userId: string;

    @ManyToMany(() => Grupo, (grupo) => grupo.docentes)
    grupos: Grupo[];

    @CreateDateColumn()
    creadoEn: Date;

    @UpdateDateColumn()
    actualizadoEn: Date;
}
