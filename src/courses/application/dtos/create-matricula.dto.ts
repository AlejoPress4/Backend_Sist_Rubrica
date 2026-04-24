import { ArrayNotEmpty, IsArray, IsInt, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateMatriculaDto {
    @IsInt({ message: 'El estudiante_id debe ser un número entero' })
    @IsNotEmpty({ message: 'El estudiante_id es obligatorio' })
    estudiante_id: number;

    @IsUUID('4', { message: 'El semestre_id debe ser un UUID v4 válido' })
    @IsNotEmpty({ message: 'El semestre_id es obligatorio' })
    semestre_id: string;

    @IsArray({ message: 'asignaturasIds debe ser un arreglo' })
    @ArrayNotEmpty({ message: 'Debe indicarse al menos una asignatura' })
    @IsUUID('4', { each: true, message: 'Cada asignatura_id debe ser un UUID v4 válido' })
    asignaturasIds: string[];
}
