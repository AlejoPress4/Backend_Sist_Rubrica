import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateCriterioDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsOptional()
    descripcion?: string;

    @IsUUID()
    @IsNotEmpty()
    rubrica_id: string;
}
