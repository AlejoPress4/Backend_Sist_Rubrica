import { IsDate, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateSemestreDto {
    @IsString()
    @IsOptional()
    nombre?: string;

    @Type(() => Date)
    @IsDate()
    @IsOptional()
    fechaInicio?: Date;

    @Type(() => Date)
    @IsDate()
    @IsOptional()
    fechaFin?: Date;
}
