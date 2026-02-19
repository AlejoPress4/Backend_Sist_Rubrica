import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Estudiante } from '../../../users/domain/entities/estudiante.entity';
import { Carrera } from './carrera.entity';
import { EstadoMatricula } from '../../../common/constants/constants';

@Entity('matriculas')
export class Matricula {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 10 })
  cohorte: string; // "2026", "2025"

  @Column({ type: 'date' })
  fecha_ingreso: Date;

  @Column({
    type: 'enum',
    enum: EstadoMatricula,
    default: EstadoMatricula.ACTIVO,
  })
  estado: EstadoMatricula;

  // Relaciones
  @ManyToOne(() => Estudiante, (estudiante) => estudiante.matriculas)
  @JoinColumn({ name: 'estudiante_id' })
  estudiante: Estudiante;
  @Column()
  estudiante_id: string;

  @ManyToOne(() => Carrera, (carrera) => carrera.matriculas)
  @JoinColumn({ name: 'carrera_id' })
  carrera: Carrera;
  @Column()
  carrera_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
