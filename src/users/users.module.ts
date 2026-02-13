import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './domain/entities/user.entity';
import { Docente } from './domain/entities/docente.entity';
import { Estudiante } from './domain/entities/estudiante.entity';
import { UsersService } from './application/services/users.service';
import { UsersController } from './infrastructure/controllers/users.controller';

@Module({
    imports: [TypeOrmModule.forFeature([User, Docente, Estudiante])],
    controllers: [UsersController],
    providers: [
        UsersService,
        {
            provide: 'IUsersService',
            useExisting: UsersService,
        },
    ],
    exports: [UsersService, 'IUsersService'],
})
export class UsersModule { }
