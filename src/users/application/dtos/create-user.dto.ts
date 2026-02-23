import { IsBoolean, IsEmail, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { UserRole } from '../../../common/constants/constants';

export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;

    @IsInt()
    @IsNotEmpty()
    codigo: number;

    @IsEnum(UserRole)
    @IsNotEmpty()
    rol: UserRole;

    @IsBoolean()
    @IsOptional()
    is_active?: boolean;
}
