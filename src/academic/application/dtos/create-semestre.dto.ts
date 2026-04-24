import { IsDate, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateSemestreDto {
    @IsString({ message: 'El nombre del semestre debe ser un texto' })
    @IsNotEmpty({ message: 'El nombre del semestre es obligatorio' })
    nombre: string;

    @Type(() => Date)
    @IsDate({ message: 'La fecha de inicio debe ser una fecha válida' })
    @IsNotEmpty({ message: 'La fecha de inicio es obligatoria' })
    fechaInicio: Date;

    @Type(() => Date)
    @IsDate({ message: 'La fecha de fin debe ser una fecha válida' })
    @IsNotEmpty({ message: 'La fecha de fin es obligatoria' })
    fechaFin: Date;

    @IsUUID('4', { message: 'El carrera_id debe ser un UUID v4 válido' })
    @IsNotEmpty({ message: 'El carrera_id es obligatorio' })
    carrera_id: string;
}
