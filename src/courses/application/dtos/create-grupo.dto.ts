import { ArrayNotEmpty, IsArray, IsInt, IsNotEmpty, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';

export class CreateGrupoDto {
    @IsString({ message: 'El código del grupo debe ser un texto' })
    @IsNotEmpty({ message: 'El código del grupo es obligatorio' })
    @MaxLength(20)
    codigo: string;

    @IsString({ message: 'El nombre debe ser un texto' })
    @IsOptional()
    nombre?: string;

    @IsArray({ message: 'docentesIds debe ser un arreglo' })
    @ArrayNotEmpty({ message: 'Debe asignarse al menos un docente al grupo' })
    @IsInt({ each: true, message: 'Cada id de docente debe ser un número entero' })
    docentesIds: number[];

    @IsUUID('4', { message: 'El asignatura_id debe ser un UUID v4 válido' })
    @IsNotEmpty({ message: 'El asignatura_id es obligatorio' })
    asignatura_id: string;

    @IsUUID('4', { message: 'El semestre_id debe ser un UUID v4 válido' })
    @IsNotEmpty({ message: 'El semestre_id es obligatorio' })
    semestre_id: string;
}
