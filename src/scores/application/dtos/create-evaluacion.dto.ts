import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, Max, Min } from 'class-validator';

export class CreateEvaluacionDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsOptional()
    descripcion?: string;

    @IsNumber({ maxDecimalPlaces: 2 })
    @Min(0)
    @Max(5)
    @IsNotEmpty()
    nota: number;

    @IsUUID()
    @IsNotEmpty()
    asignatura_id: string;

    @IsUUID()
    @IsNotEmpty()
    rubrica_id: string;
}
