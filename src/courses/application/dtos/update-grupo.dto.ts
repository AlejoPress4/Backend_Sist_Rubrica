import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateGrupoDto {
    @IsString()
    @MaxLength(20)
    @IsOptional()
    codigo?: string;

    @IsString()
    @IsOptional()
    nombre?: string;
}
