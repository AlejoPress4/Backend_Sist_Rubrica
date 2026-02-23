import { IsNumber, IsOptional, IsString, IsUUID, Max, Min } from 'class-validator';

export class CreateCalificacionDetalleDto {
    @IsNumber({ maxDecimalPlaces: 2 })
    @Min(0)
    @Max(5)
    @IsOptional()
    puntaje?: number;

    @IsString()
    @IsOptional()
    comentario?: string;

    @IsUUID()
    @IsOptional()
    escala_id?: string;
}
