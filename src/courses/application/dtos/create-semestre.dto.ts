import { IsNotEmpty, IsOptional, IsString, IsBoolean, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateSemestreDto {
    @IsString({ message: 'El nombre del semestre debe ser un texto' })
    @IsNotEmpty({ message: 'El nombre del semestre es obligatorio' })
    nombre: string;

    @IsString({ message: 'El código del semestre debe ser un texto' })
    @IsNotEmpty({ message: 'El código del semestre es obligatorio' })
    codigo: string;

    @IsOptional()
    @Type(() => Date)
    @IsDate({ message: 'La fecha de inicio debe ser una fecha válida' })
    fecha_inicio?: Date;

    @IsOptional()
    @Type(() => Date)
    @IsDate({ message: 'La fecha de fin debe ser una fecha válida' })
    fecha_fin?: Date;

    @IsBoolean({ message: 'El estado debe ser verdadero o falso' })
    @IsOptional()
    estado?: boolean;
}
