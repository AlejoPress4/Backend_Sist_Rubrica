import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRubricaDto {
    @IsString({ message: 'El título de la rúbrica debe ser un texto' })
    @IsNotEmpty({ message: 'El título de la rúbrica es obligatorio' })
    titulo: string;

    @IsString({ message: 'La descripción de la rúbrica debe ser un texto' })
    @IsOptional()
    descripcion?: string;

    @IsBoolean({ message: 'El campo es_publica debe ser verdadero o falso' })
    @IsOptional()
    es_publica?: boolean;
}
