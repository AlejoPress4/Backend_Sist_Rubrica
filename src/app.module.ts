import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import appConfig from './config/app.config';
import databaseConfig from './config/database.config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AcademicModule } from './academic/academic.module';
import { CoursesModule } from './courses/courses.module';
import { RubricsModule } from './rubrics/rubrics.module';
import { ScoresModule } from './scores/scores.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [appConfig, databaseConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>
        configService.get('database') as any,
      inject: [ConfigService],
    }),
    AuthModule,
    UsersModule,
    AcademicModule,
    CoursesModule,
    RubricsModule,
    ScoresModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
