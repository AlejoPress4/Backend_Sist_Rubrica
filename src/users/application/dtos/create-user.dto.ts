import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { UserRole } from '../../../common/constants/constants';

export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;

    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    apellido: string;

    @IsEnum(UserRole)
    @IsNotEmpty()
    rol: UserRole;

    @IsString()
    @IsOptional()
    especialidad?: string;

    @IsString()
    @IsOptional()
    matricula?: string;
}
