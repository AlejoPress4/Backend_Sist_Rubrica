import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateDocenteDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    apellido: string;

    @IsString()
    @IsOptional()
    telefono?: string;

    @IsString()
    @IsOptional()
    cedula?: string;

    @IsString()
    @IsOptional()
    especialidad?: string;

    @IsUUID()
    @IsNotEmpty()
    user_id: string;
    
}
