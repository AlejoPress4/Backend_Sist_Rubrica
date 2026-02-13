import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRubricaDto {
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @IsString()
    @IsOptional()
    descripcion?: string;

    @IsOptional()
    es_publica?: boolean;
}
