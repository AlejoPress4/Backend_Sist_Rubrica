import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateCriterioDto {
    @IsString({ message: 'El nombre del criterio debe ser un texto' })
    @IsNotEmpty({ message: 'El nombre del criterio es obligatorio' })
    nombre: string;

    @IsString({ message: 'La descripción del criterio debe ser un texto' })
    @IsOptional()
    descripcion?: string;

    @IsUUID('4', { message: 'El rubrica_id debe ser un UUID v4 válido' })
    @IsNotEmpty({ message: 'El rubrica_id es obligatorio' })
    rubrica_id: string;
}
