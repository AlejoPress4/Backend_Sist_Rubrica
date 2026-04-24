import { IsInt, IsNotEmpty, IsOptional, IsString, Max, MaxLength, Min } from 'class-validator';

export class CreateAsignaturaDto {
    @IsString({ message: 'El código debe ser un texto' })
    @IsNotEmpty({ message: 'El código es obligatorio' })
    @MaxLength(20)
    codigo: string;

    @IsString({ message: 'El nombre de la asignatura debe ser un texto' })
    @IsNotEmpty({ message: 'El nombre de la asignatura es obligatorio' })
    nombre: string;

    @IsString({ message: 'La descripción debe ser un texto' })
    @IsOptional()
    descripcion?: string;

    @IsInt({ message: 'Los créditos deben ser un número entero' })
    @Min(1)
    @Max(10)
    @IsOptional()
    creditos?: number;
}
