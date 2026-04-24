import { IsNumber, IsOptional, IsString, IsUUID, Max, Min } from 'class-validator';

export class CreateCalificacionDetalleDto {
    @IsNumber({ maxDecimalPlaces: 2 }, { message: 'El puntaje debe ser un número con máximo 2 decimales' })
    @Min(0, { message: 'El puntaje mínimo es 0' })
    @Max(5, { message: 'El puntaje máximo es 5' })
    @IsOptional()
    puntaje?: number;

    @IsString({ message: 'El comentario debe ser un texto' })
    @IsOptional()
    comentario?: string;

    @IsUUID('4', { message: 'El escala_id debe ser un UUID v4 válido' })
    @IsOptional()
    escala_id?: string;

    @IsNumber({}, { message: 'El estudiante_id debe ser un número' })
    estudiante_id: number;

    @IsUUID('4', { message: 'El evaluacion_id debe ser un UUID v4 válido' })
    evaluacion_id: string;
}
