import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAsignaturaDto {
    @IsString({ message: 'El nombre de la asignatura debe ser un texto' })
    @IsNotEmpty({ message: 'El nombre de la asignatura es obligatorio' })
    nombre: string;

    @IsString({ message: 'El código de la asignatura debe ser un texto' })
    @IsOptional()
    codigo?: string;

    @IsString({ message: 'La descripción de la asignatura debe ser un texto' })
    @IsOptional()
    descripcion?: string;

    @IsNumber({}, { message: 'Los créditos deben ser un número' })
    @IsOptional()
    creditos?: number;
}
