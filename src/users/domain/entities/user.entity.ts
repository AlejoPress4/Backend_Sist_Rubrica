import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
} from 'typeorm';
import { Rol } from '../../../common/enums';
import { Docente } from './docente.entity';
import { Estudiante } from './estudiante.entity';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    correoInstitucional: string;

    @Column({ select: false })
    password: string;

    @Column({ type: 'simple-enum', enum: Rol })
    rol: Rol;

    @Column({ default: true })
    activo: boolean;

    @OneToOne(() => Docente, (docente) => docente.user)
    docente?: Docente;

    @OneToOne(() => Estudiante, (estudiante) => estudiante.user)
    estudiante?: Estudiante;

    @CreateDateColumn()
    creadoEn: Date;

    @UpdateDateColumn()
    actualizadoEn: Date;
}
