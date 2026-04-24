import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreatePlanEstudioDto {
    @IsUUID('4', { message: 'El carrera_id debe ser un UUID v4 válido' })
    @IsNotEmpty({ message: 'El carrera_id es obligatorio' })
    carrera_id: string;
}
