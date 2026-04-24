import { IsNotEmpty, IsOptional, IsString, IsUUID, IsNumber, Min, Max } from 'class-validator';

export class CreateCriterioDto {
    @IsString({ message: 'El nombre del criterio debe ser un texto' })
    @IsNotEmpty({ message: 'El nombre del criterio es obligatorio' })
    nombre: string;

    @IsString({ message: 'La descripción del criterio debe ser un texto' })
    @IsOptional()
    descripcion?: string;

    @IsNumber({}, { message: 'El peso debe ser un número' })
    @Min(0, { message: 'El peso no puede ser negativo' })
    @Max(100, { message: 'El peso no puede superar 100' })
    @IsNotEmpty({ message: 'El peso es obligatorio' })
    peso: number;

    @IsUUID('4', { message: 'El rubrica_id debe ser un UUID v4 válido' })
    @IsNotEmpty({ message: 'El rubrica_id es obligatorio' })
    rubrica_id: string;
}
