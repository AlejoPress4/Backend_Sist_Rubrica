import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateEstudianteDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    apellido: string;

    @IsString()
    @IsOptional()
    cedula?: string;

    @IsUUID()
    @IsNotEmpty()
    user_id: string;
}
