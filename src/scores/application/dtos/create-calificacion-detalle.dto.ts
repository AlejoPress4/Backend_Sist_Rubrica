import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateCalificacionDetalleDto {
    @IsNumber()
    @IsOptional()
    puntaje?: number;

    @IsString()
    @IsOptional()
    comentario?: string;

    @IsUUID()
    @IsNotEmpty()
    notaId: string;

    @IsUUID()
    @IsNotEmpty()
    criterioId: string;

    @IsUUID()
    @IsOptional()
    escalaId?: string;
}
