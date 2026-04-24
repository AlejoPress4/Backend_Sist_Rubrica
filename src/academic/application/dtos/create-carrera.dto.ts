import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateCarreraDto {
    @IsString({ message: 'El código debe ser un texto' })
    @IsNotEmpty({ message: 'El código es obligatorio' })
    @MaxLength(20)
    codigo: string;

    @IsString({ message: 'El nombre de la carrera debe ser un texto' })
    @IsNotEmpty({ message: 'El nombre de la carrera es obligatorio' })
    nombre: string;

    @IsString({ message: 'La descripción debe ser un texto' })
    @IsOptional()
    descripcion?: string;
}
