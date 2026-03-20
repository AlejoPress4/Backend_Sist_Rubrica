import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateEscalaDto {
    @IsString({ message: 'El nombre de la escala debe ser un texto' })
    @IsNotEmpty({ message: 'El nombre de la escala es obligatorio' })
    nombre: string;

    @IsString({ message: 'La descripción de la escala debe ser un texto' })
    @IsOptional()
    descripcion?: string;

    @IsOptional()
    @IsNumber({}, { message: 'El valor debe ser un número' })
    @Type(() => Number)
    valor?: number;

    @IsUUID('4', { message: 'El criterio_id debe ser un UUID v4 válido' })
    @IsNotEmpty({ message: 'El criterio_id es obligatorio' })
    criterio_id: string;
}
