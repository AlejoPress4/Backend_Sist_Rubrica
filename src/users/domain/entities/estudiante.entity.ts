import {
    Entity,
    PrimaryColumn,
    Column,
    OneToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from 'typeorm';
import { User } from './user.entity';
import { Inscripcion } from '../../../courses/domain/entities/inscripcion.entity';
import { Matricula } from '../../../courses/domain/entities/matricula.entity';
import { CalificacionDetalle } from '../../../scores/domain/entities/calificacion-detalle.entity';

@Entity('estudiantes')
export class Estudiante {
    @PrimaryColumn({ type: 'int' })
    id: number;

    @Column()
    nombre: string;

    @Column({ type: 'int', default: 21 })
    creditosMaximos: number;

    @OneToOne(() => User, (user) => user.estudiante, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'userId' })
    user: User;

    @Column()
    userId: string;

    @OneToMany(() => Inscripcion, (inscripcion) => inscripcion.estudiante)
    inscripciones: Inscripcion[];

    @OneToMany(() => Matricula, (matricula) => matricula.estudiante)
    matriculas: Matricula[];

    // @OneToMany(() => CalificacionDetalle, (detalle) => detalle.estudiante)
    // calificacionDetalles: CalificacionDetalle[];

    @CreateDateColumn()
    creadoEn: Date;

    @UpdateDateColumn()
    actualizadoEn: Date;
}
