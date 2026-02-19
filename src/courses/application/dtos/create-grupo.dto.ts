import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateGrupoDto {
    @IsString()
    @IsOptional()
    nombre?: string;

    @IsUUID()
    @IsNotEmpty()
    docente_id: string;

    @IsUUID()
    @IsNotEmpty()
    asignatura_id: string;

    @IsUUID()
    @IsNotEmpty()
    semestre_id: string;
}
