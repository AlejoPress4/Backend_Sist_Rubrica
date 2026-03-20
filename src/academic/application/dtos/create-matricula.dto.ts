import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';
import { EstadoMatricula } from '../../../common/constants/constants';

export class CreateMatriculaDto {
    @IsInt({ message: 'El estudiante_id debe ser un número entero' })
    @IsNotEmpty({ message: 'El estudiante_id es obligatorio' })
    estudiante_id: number;

    @IsUUID('4', { message: 'El carrera_id debe ser un UUID v4 válido' })
    @IsNotEmpty({ message: 'El carrera_id es obligatorio' })
    carrera_id: string;

    @IsString({ message: 'El periodo de ingreso debe ser un texto (ej: 2026-1)' })
    @IsNotEmpty({ message: 'El periodo de ingreso es obligatorio' })
    @MaxLength(10, { message: 'El periodo de ingreso no debe superar los 10 caracteres' })
    periodo_ingreso: string;

    @IsEnum(EstadoMatricula, { message: 'El estado académico debe ser uno de: activo, graduado, retirado, suspendido' })
    @IsOptional()
    estado_academico?: EstadoMatricula;
}
