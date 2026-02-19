import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateInscripcionDto {
    @IsUUID()
    @IsNotEmpty()
    estudiante_id: string;

    @IsUUID()
    @IsNotEmpty()
    grupo_id: string;
}
