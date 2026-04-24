import {
    IsEmail,
    IsEnum,
    IsInt,
    IsNotEmpty,
    IsOptional,
    IsString,
    Max,
    Min,
    MinLength,
} from 'class-validator';
import { Rol } from '../../../common/enums';

export class CreateUserDto {
    @IsEmail({}, { message: 'El correo institucional debe tener un formato válido' })
    @IsNotEmpty({ message: 'El correo institucional es obligatorio' })
    correoInstitucional: string;

    @IsString({ message: 'La contraseña debe ser un texto' })
    @IsNotEmpty({ message: 'La contraseña es obligatoria' })
    @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
    password: string;

    @IsEnum(Rol, { message: 'El rol debe ser uno de: ADMIN, DOCENTE, ESTUDIANTE' })
    @IsNotEmpty({ message: 'El rol es obligatorio' })
    rol: Rol;

    @IsString({ message: 'El nombre debe ser un texto' })
    @IsNotEmpty({ message: 'El nombre es obligatorio' })
    nombre: string;

    // Código institucional del docente o estudiante (ej: 40201)
    // Obligatorio para rol DOCENTE o ESTUDIANTE, ignorado para ADMIN.
    @IsInt({ message: 'El código debe ser un número entero' })
    @Min(1, { message: 'El código debe ser mayor a 0' })
    @IsOptional()
    codigo?: number;

    // Solo para rol DOCENTE
    @IsString({ message: 'El título debe ser un texto' })
    @IsOptional()
    titulo?: string;

    // Solo para rol ESTUDIANTE
    @IsInt({ message: 'Los créditos máximos deben ser un número entero' })
    @Min(1, { message: 'Los créditos máximos deben ser al menos 1' })
    @Max(30, { message: 'Los créditos máximos no pueden superar 30' })
    @IsOptional()
    creditosMaximos?: number;
}
