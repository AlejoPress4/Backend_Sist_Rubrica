import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreatePlanEstudioDto {
    @IsString({ message: 'El nombre del plan de estudio debe ser un texto' })
    @IsOptional()
    nombre?: string;

    @IsNumber({}, { message: 'El año debe ser un número entero' })
    @IsOptional()
    anio?: number;

    @IsUUID('4', { message: 'El carrera_id debe ser un UUID v4 válido' })
    @IsNotEmpty({ message: 'El carrera_id es obligatorio' })
    carrera_id: string;

    @IsUUID('4', { message: 'El asignatura_id debe ser un UUID v4 válido' })
    @IsNotEmpty({ message: 'El asignatura_id es obligatorio' })
    asignatura_id: string;
}
