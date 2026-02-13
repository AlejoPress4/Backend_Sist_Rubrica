import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateInscripcionDto {
    @IsUUID()
    @IsNotEmpty()
    estudianteId: string;

    @IsUUID()
    @IsNotEmpty()
    grupoId: string;
}
