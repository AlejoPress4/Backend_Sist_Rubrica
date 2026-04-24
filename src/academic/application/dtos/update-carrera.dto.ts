import { IsBoolean, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateCarreraDto {
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

    @IsBoolean()
    @IsOptional()
    archivada?: boolean;
}
