import {
    IsBoolean,
    IsEmail,
    IsInt,
    IsOptional,
    IsString,
    Max,
    Min,
    MinLength,
} from 'class-validator';

export class UpdateUserDto {
    @IsEmail({}, { message: 'El correo institucional debe tener un formato válido' })
    @IsOptional()
    correoInstitucional?: string;

    @IsString({ message: 'La contraseña debe ser un texto' })
    @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
    @IsOptional()
    password?: string;

    @IsBoolean({ message: 'El campo activo debe ser verdadero o falso' })
    @IsOptional()
    activo?: boolean;

    @IsString({ message: 'El nombre debe ser un texto' })
    @IsOptional()
    nombre?: string;

    @IsString({ message: 'El título debe ser un texto' })
    @IsOptional()
    titulo?: string;

    @IsInt({ message: 'Los créditos máximos deben ser un número entero' })
    @Min(1)
    @Max(30)
    @IsOptional()
    creditosMaximos?: number;
}
