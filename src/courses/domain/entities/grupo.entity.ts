import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    ManyToMany,
    JoinColumn,
    JoinTable,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from 'typeorm';
import { Docente } from '../../../users/domain/entities/docente.entity';
import { Asignatura } from '../../../academic/domain/entities/asignatura.entity';
import { Semestre } from '../../../academic/domain/entities/semestre.entity';
import { Inscripcion } from './inscripcion.entity';

@Entity('grupos')
export class Grupo {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    codigo: string;

    @Column({ nullable: true })
    nombre: string;

    @ManyToMany(() => Docente, (docente) => docente.grupos, { cascade: false })
    @JoinTable({
        name: 'grupo_docentes',
        joinColumn: { name: 'grupo_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'docente_id', referencedColumnName: 'id' },
    })
    docentes: Docente[];

    @ManyToOne(() => Asignatura, (asignatura) => asignatura.grupos, { onDelete: 'RESTRICT' })
    @JoinColumn({ name: 'asignatura_id' })
    asignatura: Asignatura;
    @Column()
    asignatura_id: string;

    @ManyToOne(() => Semestre, (semestre) => semestre.grupos, { onDelete: 'RESTRICT' })
    @JoinColumn({ name: 'semestre_id' })
    semestre: Semestre;
    @Column()
    semestre_id: string;

    @OneToMany(() => Inscripcion, (inscripcion) => inscripcion.grupo)
    inscripciones: Inscripcion[];

    @CreateDateColumn()
    creadoEn: Date;

    @UpdateDateColumn()
    actualizadoEn: Date;
}
