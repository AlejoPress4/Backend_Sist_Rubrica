import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateEscalaDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsOptional()
    descripcion?: string;

    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    valor?: number;

    @IsUUID()
    @IsNotEmpty()
    criterio_id: string;
}
