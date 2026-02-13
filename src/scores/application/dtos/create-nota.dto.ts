import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateNotaDto {
    @IsNumber()
    @IsOptional()
    notaFinal?: number;

    @IsString()
    @IsOptional()
    observaciones?: string;

    @IsUUID()
    @IsNotEmpty()
    estudianteId: string;

    @IsUUID()
    @IsNotEmpty()
    evaluacionId: string;
}
