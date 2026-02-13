import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateGrupoDto {
    @IsString()
    @IsOptional()
    nombre?: string;

    @IsUUID()
    @IsNotEmpty()
    docenteId: string;

    @IsUUID()
    @IsNotEmpty()
    asignaturaId: string;

    @IsUUID()
    @IsNotEmpty()
    semestreId: string;
}
