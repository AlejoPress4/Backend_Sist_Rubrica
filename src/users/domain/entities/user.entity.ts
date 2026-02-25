import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { UserRole } from '../../../common/constants/constants';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    codigo: number;

    @Column({ type: 'simple-enum', enum: UserRole })
    rol: UserRole;

    @Column({ default: true })
    is_active: boolean;i
    //i es una propiedad que indica si el usuario está activo o no, por defecto es true

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}