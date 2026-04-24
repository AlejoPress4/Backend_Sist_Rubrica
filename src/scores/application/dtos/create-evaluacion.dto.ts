import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, Max, Min } from 'class-validator';

export class CreateEvaluacionDto {
    @IsString({ message: 'El nombre de la evaluación debe ser un texto' })
    @IsNotEmpty({ message: 'El nombre de la evaluación es obligatorio' })
    nombre: string;

    @IsString({ message: 'La descripción de la evaluación debe ser un texto' })
    @IsOptional()
    descripcion?: string;

    @IsNumber({}, { message: 'El peso debe ser un número' })
    @IsOptional()
    peso?: number;

    @IsNumber({ maxDecimalPlaces: 2 }, { message: 'La nota debe ser un número con máximo 2 decimales' })
    @Min(0, { message: 'La nota mínima es 0' })
    @Max(5, { message: 'La nota máxima es 5' })
    @IsNotEmpty({ message: 'La nota es obligatoria' })
    nota: number;

    @IsUUID('4', { message: 'El asignatura_id debe ser un UUID v4 válido' })
    @IsNotEmpty({ message: 'El asignatura_id es obligatorio' })
    asignatura_id: string;

    @IsUUID('4', { message: 'El rubrica_id debe ser un UUID v4 válido' })
    @IsNotEmpty({ message: 'El rubrica_id es obligatorio' })
    rubrica_id: string;
}
