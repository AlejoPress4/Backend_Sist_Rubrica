import { IsInt, IsNotEmpty } from 'class-validator';

export class AsignarDocenteDto {
    @IsInt({ message: 'El docenteId debe ser un número entero' })
    @IsNotEmpty({ message: 'El docenteId es obligatorio' })
    docenteId: number;
}
