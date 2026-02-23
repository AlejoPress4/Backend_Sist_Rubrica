import { IsDate, IsEnum, IsInt, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';
import { EstadoInscripcion } from '../../../common/constants/constants';

export class CreateInscripcionDto {
    @IsInt()
    @IsNotEmpty()
    estudiante_id: number;

    @IsUUID()
    @IsNotEmpty()
    grupo_id: string;

    @Type(() => Date)
    @IsDate()
    @IsNotEmpty()
    fecha_inscripcion: Date;

    @IsEnum(EstadoInscripcion)
    @IsOptional()
    estado?: EstadoInscripcion;
}
