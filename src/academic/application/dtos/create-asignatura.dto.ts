import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAsignaturaDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsOptional()
    codigo?: string;

    @IsString()
    @IsOptional()
    descripcion?: string;

    @IsNumber()
    @IsOptional()
    creditos?: number;
}
