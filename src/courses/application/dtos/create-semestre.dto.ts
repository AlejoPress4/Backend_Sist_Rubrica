import { IsNotEmpty, IsOptional, IsString, IsBoolean, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateSemestreDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    fecha_inicio?: Date;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    fecha_fin?: Date;

    @IsBoolean()
    @IsOptional()
    activo?: boolean;
}
