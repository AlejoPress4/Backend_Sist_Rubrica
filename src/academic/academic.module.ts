import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrera } from './domain/entities/carrera.entity';
import { Semestre } from './domain/entities/semestre.entity';
import { Asignatura } from './domain/entities/asignatura.entity';
import { PlanEstudio } from './domain/entities/plan-estudio.entity';
import { PlanAsignatura } from './domain/entities/plan-asignatura.entity';
import { Matricula } from '../courses/domain/entities/matricula.entity';
import { CarrerasService } from './application/services/carreras.service';
import { SemestresService } from './application/services/semestres.service';
import { AsignaturasService } from './application/services/asignaturas.service';
import { PlanEstudioService } from './application/services/plan-estudio.service';
import { CarrerasController } from './infrastructure/controllers/carreras.controller';
import { SemestresController } from './infrastructure/controllers/semestres.controller';
import { AsignaturasController } from './infrastructure/controllers/asignaturas.controller';
import { PlanEstudioController } from './infrastructure/controllers/plan-estudio.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Carrera,
            Semestre,
            Asignatura,
            PlanEstudio,
            PlanAsignatura,
            Matricula,
        ]),
        forwardRef(() => AuthModule),
    ],
    controllers: [
        CarrerasController,
        SemestresController,
        AsignaturasController,
        PlanEstudioController,
    ],
    providers: [
        CarrerasService,
        SemestresService,
        AsignaturasService,
        PlanEstudioService,
    ],
    exports: [
        TypeOrmModule,
        CarrerasService,
        SemestresService,
        AsignaturasService,
        PlanEstudioService,
    ],
})
export class AcademicModule { }
