import { IsDate, IsEnum, IsInt, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';
import { EstadoInscripcion } from '../../../common/constants/constants';

export class CreateInscripcionDto {
    @IsInt({ message: 'El estudiante_id debe ser un número entero' })
    @IsNotEmpty({ message: 'El estudiante_id es obligatorio' })
    estudiante_id: number;

    @IsUUID('4', { message: 'El grupo_id debe ser un UUID v4 válido' })
    @IsNotEmpty({ message: 'El grupo_id es obligatorio' })
    grupo_id: string;

    @Type(() => Date)
    @IsDate({ message: 'La fecha de inscripción debe ser una fecha válida' })
    @IsNotEmpty({ message: 'La fecha de inscripción es obligatoria' })
    fecha_inscripcion: Date;

    @IsEnum(EstadoInscripcion, { message: 'El estado debe ser uno de: activo, inactivo, retirado' })
    @IsOptional()
    estado?: EstadoInscripcion;
}
