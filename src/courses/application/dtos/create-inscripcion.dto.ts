import { IsInt, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateInscripcionDto {
    @IsInt({ message: 'El estudiante_id debe ser un número entero' })
    @IsNotEmpty({ message: 'El estudiante_id es obligatorio' })
    estudiante_id: number;

    @IsUUID('4', { message: 'El grupo_id debe ser un UUID v4 válido' })
    @IsNotEmpty({ message: 'El grupo_id es obligatorio' })
    grupo_id: string;
}
