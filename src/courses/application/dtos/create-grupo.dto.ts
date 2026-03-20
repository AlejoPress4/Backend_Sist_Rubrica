import { IsInt, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateGrupoDto {
    @IsString({ message: 'El nombre del grupo debe ser un texto' })
    @IsOptional()
    nombre?: string;

    @IsString({ message: 'El código del grupo debe ser un texto' })
    @IsNotEmpty({ message: 'El código del grupo es obligatorio' })
    codigo_grupo: string;

    @IsInt({ message: 'El docente_id debe ser un número entero' })
    @IsNotEmpty({ message: 'El docente_id es obligatorio' })
    docente_id: number;

    @IsUUID('4', { message: 'El asignatura_id debe ser un UUID v4 válido' })
    @IsNotEmpty({ message: 'El asignatura_id es obligatorio' })
    asignatura_id: string;

    @IsUUID('4', { message: 'El semestre_id debe ser un UUID v4 válido' })
    @IsNotEmpty({ message: 'El semestre_id es obligatorio' })
    semestre_id: string;
}
