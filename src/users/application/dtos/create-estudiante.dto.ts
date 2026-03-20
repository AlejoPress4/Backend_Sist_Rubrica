import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateEstudianteDto {
    @IsString({ message: 'El nombre del estudiante debe ser un texto' })
    @IsNotEmpty({ message: 'El nombre del estudiante es obligatorio' })
    nombre: string;

    @IsString({ message: 'El apellido del estudiante debe ser un texto' })
    @IsNotEmpty({ message: 'El apellido del estudiante es obligatorio' })
    apellido: string;

    @IsString({ message: 'La cédula debe ser un texto' })
    @IsOptional()
    cedula?: string;

    @IsUUID('4', { message: 'El user_id debe ser un UUID v4 válido' })
    @IsNotEmpty({ message: 'El user_id es obligatorio' })
    user_id: string;
}
