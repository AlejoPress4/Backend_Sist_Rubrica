import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreatePlanEstudioDto {
    @IsString()
    @IsOptional()
    nombre?: string;

    @IsNumber()
    @IsOptional()
    anio?: number;

    @IsUUID()
    @IsNotEmpty()
    carreraId: string;

    @IsUUID()
    @IsNotEmpty()
    asignaturaId: string;
}
