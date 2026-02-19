import { IsDateString, IsEnum, IsNotEmpty, IsString, IsUUID, MaxLength } from 'class-validator';
import { EstadoMatricula } from '../../../common/constants/constants';

export class CreateMatriculaDto {
  @IsUUID()
  @IsNotEmpty()
  estudiante_id: string;

  @IsUUID()
  @IsNotEmpty()
  carrera_id: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  cohorte: string; // "2026", "2025"

  @IsDateString()
  @IsNotEmpty()
  fecha_ingreso: string; // "2026-02-01"

  @IsEnum(EstadoMatricula)
  @IsNotEmpty()
  estado: EstadoMatricula;
}
