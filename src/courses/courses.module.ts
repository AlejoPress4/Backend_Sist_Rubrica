import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grupo } from './domain/entities/grupo.entity';
import { Inscripcion } from './domain/entities/inscripcion.entity';
import { Semestre } from './domain/entities/semestre.entity';
import { CoursesService } from './application/services/courses.service';
import { CoursesController } from './infrastructure/controllers/courses.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Grupo, Inscripcion, Semestre])],
    controllers: [CoursesController],
    providers: [CoursesService],
    exports: [CoursesService],
})
export class CoursesModule { }
