import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrera } from './domain/entities/carrera.entity';
import { Asignatura } from './domain/entities/asignatura.entity';
import { PlanEstudio } from './domain/entities/plan-estudio.entity';
import { Matricula } from './domain/entities/matricula.entity';
import { AcademicService } from './application/services/academic.service';
import { AcademicController } from './infrastructure/controllers/academic.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Carrera, Asignatura, PlanEstudio, Matricula])],
    controllers: [AcademicController],
    providers: [AcademicService],
    exports: [AcademicService],
})
export class AcademicModule { }
