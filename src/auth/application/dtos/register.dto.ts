import { IsEmail, IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { UserRole } from '../../../common/constants/constants';

export class RegisterDto {
    @IsEmail({}, { message: 'El correo electrónico debe tener un formato válido' })
    @IsNotEmpty({ message: 'El correo electrónico es obligatorio' })
    email: string;

    @IsString({ message: 'La contraseña debe ser un texto' })
    @IsNotEmpty({ message: 'La contraseña es obligatoria' })
    @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
    password: string;

    @IsString({ message: 'El nombre debe ser un texto' })
    @IsNotEmpty({ message: 'El nombre es obligatorio' })
    nombre: string;

    @IsString({ message: 'El apellido debe ser un texto' })
    @IsNotEmpty({ message: 'El apellido es obligatorio' })
    apellido: string;

    @IsEnum(UserRole, { message: 'El rol debe ser uno de: admin, docente, estudiante' })
    @IsNotEmpty({ message: 'El rol es obligatorio' })
    rol: UserRole;
}
