import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rubrica } from './domain/entities/rubrica.entity';
import { Criterio } from './domain/entities/criterio.entity';
import { Escala } from './domain/entities/escala.entity';
import { RubricsService } from './application/services/rubrics.service';
import { RubricsController } from './infrastructure/controllers/rubrics.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Rubrica, Criterio, Escala])],
    controllers: [RubricsController],
    providers: [RubricsService],
    exports: [RubricsService],
})
export class RubricsModule { }
