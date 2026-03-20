import { IsBoolean, IsEmail, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { UserRole } from '../../../common/constants/constants';

export class CreateUserDto {
    @IsEmail({}, { message: 'El correo electrónico debe tener un formato válido' })
    @IsNotEmpty({ message: 'El correo electrónico es obligatorio' })
    email: string;

    @IsString({ message: 'La contraseña debe ser un texto' })
    @IsNotEmpty({ message: 'La contraseña es obligatoria' })
    @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
    password: string;

    @IsInt({ message: 'El código debe ser un número entero' })
    @IsNotEmpty({ message: 'El código es obligatorio' })
    codigo: number;

    @IsEnum(UserRole, { message: 'El rol debe ser uno de: admin, docente, estudiante' })
    @IsNotEmpty({ message: 'El rol es obligatorio' })
    rol: UserRole;

    @IsBoolean({ message: 'El campo activo debe ser verdadero o falso' })
    @IsOptional()
    is_active?: boolean;
}
