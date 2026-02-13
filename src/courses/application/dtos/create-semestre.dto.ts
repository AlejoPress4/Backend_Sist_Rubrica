import { IsNotEmpty, IsOptional, IsString, IsDateString, IsBoolean } from 'class-validator';

export class CreateSemestreDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsDateString()
    @IsOptional()
    fechaInicio?: string;

    @IsDateString()
    @IsOptional()
    fechaFin?: string;

    @IsBoolean()
    @IsOptional()
    activo?: boolean;
}
