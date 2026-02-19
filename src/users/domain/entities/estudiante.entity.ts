import {
    Entity, PrimaryGeneratedColumn, Column,
    OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('estudiantes')
export class Estudiante {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column({ nullable: true })
    cedula: string;
    
    @OneToOne(() => User, { eager: true })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column()
    user_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
