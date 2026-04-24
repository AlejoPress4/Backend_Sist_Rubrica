import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateNotaDto {
    @IsNumber({ maxDecimalPlaces: 2 }, { message: 'La nota final debe ser un número con máximo 2 decimales' })
    @IsOptional()
    nota_final?: number;

    @IsString({ message: 'Las observaciones deben ser un texto' })
    @IsOptional()
    observaciones?: string;

    @IsInt({ message: 'El estudiante_id debe ser un número entero' })
    @IsNotEmpty({ message: 'El estudiante_id es obligatorio' })
    estudiante_id: number;

    @IsUUID('4', { message: 'El grupo_id debe ser un UUID v4 válido' })
    @IsNotEmpty({ message: 'El grupo_id es obligatorio' })
    grupo_id: string;
}
