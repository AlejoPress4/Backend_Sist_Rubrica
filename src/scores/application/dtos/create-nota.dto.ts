import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateNotaDto {
    @IsNumber({ maxDecimalPlaces: 2 })
    @IsOptional()
    nota_final?: number;

    @IsString()
    @IsOptional()
    observaciones?: string;

    @IsInt()
    @IsNotEmpty()
    estudiante_id: number;

    @IsUUID()
    @IsNotEmpty()
    inscripcion_id: string;

    @IsUUID()
    @IsNotEmpty()
    rubrica_id: string;
}
