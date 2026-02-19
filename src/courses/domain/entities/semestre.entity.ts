import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Grupo } from './grupo.entity';
@Entity('semestres')
export class Semestre {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: true })
    fecha_inicio: Date;

    @Column({ nullable: true })
    fecha_fin: Date;

    //Atributos
    @Column()
    nombre: string;

    @Column()
    codigo: string;

    @Column({ default: true })
    estado: boolean;
    
    //Relacion hacia Grupo
    @OneToMany(()=> Grupo, (grupo) => grupo.semestre)
    grupos: Grupo[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
