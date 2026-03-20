import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCarreraDto {
    @IsString({ message: 'El nombre de la carrera debe ser un texto' })
    @IsNotEmpty({ message: 'El nombre de la carrera es obligatorio' })
    nombre: string;

    @IsString({ message: 'El código de la carrera debe ser un texto' })
    @IsOptional()
    codigo?: string;

    @IsString({ message: 'La descripción de la carrera debe ser un texto' })
    @IsOptional()
    descripcion?: string;
}
