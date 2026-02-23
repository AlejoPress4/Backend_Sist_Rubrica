import { IsInt, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateGrupoDto {
    @IsString()
    @IsOptional()
    nombre?: string;

    @IsString()
    @IsNotEmpty()
    codigo_grupo: string;

    @IsInt()
    @IsNotEmpty()
    docente_id: number;

    @IsUUID()
    @IsNotEmpty()
    asignatura_id: string;

    @IsUUID()
    @IsNotEmpty()
    semestre_id: string;
    
}
