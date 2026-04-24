import { IsInt, IsOptional, IsString, Max, MaxLength, Min } from 'class-validator';

export class UpdateAsignaturaDto {
    @IsString()
    @MaxLength(20)
    @IsOptional()
    codigo?: string;

    @IsString()
    @IsOptional()
    nombre?: string;

    @IsString()
    @IsOptional()
    descripcion?: string;

    @IsInt()
    @Min(1)
    @Max(10)
    @IsOptional()
    creditos?: number;
}
