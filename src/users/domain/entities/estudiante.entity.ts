import {
    Entity, PrimaryGeneratedColumn, Column,
    OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn,
    OneToMany,
} from 'typeorm';
import { User } from './user.entity';
import { Inscripcion } from '../../../courses/domain/entities/inscripcion.entity';
import { Matricula } from '../../../academic/domain/entities/matricula.entity';

@Entity('estudiantes')
export class Estudiante {
    @PrimaryGeneratedColumn()
    id: number;

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

    // Relación: Un estudiante tiene muchas inscripciones a grupos
    @OneToMany(() => Inscripcion, (inscripcion) => inscripcion.estudiante)
    inscripciones: Inscripcion[];

    @OneToMany(() => Matricula, matricula => matricula.estudiante)
    matriculas: Matricula[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
