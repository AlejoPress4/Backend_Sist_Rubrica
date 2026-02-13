import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateEvaluacionDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsOptional()
    descripcion?: string;

    @IsUUID()
    @IsNotEmpty()
    asignaturaId: string;

    @IsUUID()
    @IsNotEmpty()
    rubricaId: string;
}
