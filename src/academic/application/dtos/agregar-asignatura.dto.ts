import { IsInt, IsNotEmpty, IsUUID, Max, Min } from 'class-validator';

export class AgregarAsignaturaAlPlanDto {
    @IsUUID('4', { message: 'El asignatura_id debe ser un UUID v4 válido' })
    @IsNotEmpty({ message: 'El asignatura_id es obligatorio' })
    asignatura_id: string;

    @IsInt({ message: 'El semestre sugerido debe ser un número entero' })
    @Min(1, { message: 'El semestre sugerido debe ser mayor o igual a 1' })
    @Max(14, { message: 'El semestre sugerido no puede superar 14' })
    @IsNotEmpty({ message: 'El semestre sugerido es obligatorio' })
    semestreSugerido: number;

    @IsInt({ message: 'Los créditos deben ser un número entero' })
    @Min(1)
    @Max(10)
    @IsNotEmpty({ message: 'Los créditos son obligatorios' })
    creditos: number;
}
