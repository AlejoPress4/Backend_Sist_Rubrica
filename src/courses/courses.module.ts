import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grupo } from './domain/entities/grupo.entity';
import { Inscripcion } from './domain/entities/inscripcion.entity';
import { Matricula } from './domain/entities/matricula.entity';
import { GruposService } from './application/services/grupos.service';
import { MatriculasService } from './application/services/matriculas.service';
import { InscripcionesService } from './application/services/inscripciones.service';
import { GruposController } from './infrastructure/controllers/grupos.controller';
import { MatriculasController } from './infrastructure/controllers/matriculas.controller';
import { AcademicModule } from '../academic/academic.module';
import { UsersModule } from '../users/users.module';
import { AuthModule } from '../auth/auth.module';
import { CalificacionDetalle } from '../scores/domain/entities/calificacion-detalle.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Grupo, Inscripcion, Matricula, CalificacionDetalle]),
        forwardRef(() => AcademicModule),
        forwardRef(() => UsersModule),
        forwardRef(() => AuthModule),
    ],
    controllers: [GruposController, MatriculasController],
    providers: [GruposService, MatriculasService, InscripcionesService],
    exports: [TypeOrmModule, GruposService, MatriculasService, InscripcionesService],
})
export class CoursesModule { }
