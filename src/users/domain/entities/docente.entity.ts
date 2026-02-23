import {
    Entity, PrimaryGeneratedColumn, Column,
    OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToMany
} from 'typeorm';
import { User } from './user.entity';
import { Grupo } from '../../../courses/domain/entities/grupo.entity';

@Entity('docentes')
export class Docente {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column({ nullable: true })
    telefono: string;

    @Column({ nullable: true })
    cedula: string;

    @Column({ nullable: true })
    especialidad: string;

    @OneToOne(() => User, { eager: true })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column()
    user_id: string;

    //Relación hacia Grupo
    @OneToMany(() => Grupo, grupo => grupo.docente)
    grupos: Grupo[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
