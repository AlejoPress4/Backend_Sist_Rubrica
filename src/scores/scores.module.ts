import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evaluacion } from './domain/entities/evaluacion.entity';
import { Nota } from './domain/entities/nota.entity';
import { CalificacionDetalle } from './domain/entities/calificacion-detalle.entity';
import { ScoresService } from './application/services/scores.service';
import { ScoresController } from './infrastructure/controllers/scores.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Evaluacion, Nota, CalificacionDetalle])],
    controllers: [ScoresController],
    providers: [ScoresService],
    exports: [ScoresService],
})
export class ScoresModule { }
