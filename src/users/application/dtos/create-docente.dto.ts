import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateDocenteDto {
    @IsString({ message: 'El nombre del docente debe ser un texto' })
    @IsNotEmpty({ message: 'El nombre del docente es obligatorio' })
    nombre: string;

    @IsString({ message: 'El apellido del docente debe ser un texto' })
    @IsNotEmpty({ message: 'El apellido del docente es obligatorio' })
    apellido: string;

    @IsString({ message: 'El teléfono debe ser un texto' })
    @IsOptional()
    telefono?: string;

    @IsString({ message: 'La cédula debe ser un texto' })
    @IsOptional()
    cedula?: string;

    @IsString({ message: 'La especialidad debe ser un texto' })
    @IsOptional()
    especialidad?: string;

    @IsUUID('4', { message: 'El user_id debe ser un UUID v4 válido' })
    @IsNotEmpty({ message: 'El user_id es obligatorio' })
    user_id: string;
}
