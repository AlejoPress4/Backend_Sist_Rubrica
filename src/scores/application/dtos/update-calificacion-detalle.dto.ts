import { PartialType } from '@nestjs/mapped-types';
import { CreateCalificacionDetalleDto } from './create-calificacion-detalle.dto';

export class UpdateCalificacionDetalleDto extends PartialType(CreateCalificacionDetalleDto) {}
