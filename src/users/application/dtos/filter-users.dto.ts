import { IsBoolean, IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';
import { Transform } from 'class-transformer';
import { Rol } from '../../../common/enums';

export class FilterUsersDto {
    @IsEnum(Rol)
    @IsOptional()
    rol?: Rol;

    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    @IsOptional()
    activo?: boolean;

    @IsString()
    @IsOptional()
    buscar?: string;

    @IsUUID('4')
    @IsOptional()
    carreraId?: string;
}
