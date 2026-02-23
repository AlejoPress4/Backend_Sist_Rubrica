import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';
import { EstadoMatricula } from '../../../common/constants/constants';

export class CreateMatriculaDto {
    @IsInt()
    @IsNotEmpty()
    estudiante_id: number;

    @IsUUID()
    @IsNotEmpty()
    carrera_id: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(10)
    periodo_ingreso: string; // ej: "2026-1", "2026-2"

    @IsEnum(EstadoMatricula)
    @IsOptional()
    estado_academico?: EstadoMatricula;
}
