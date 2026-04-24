import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './domain/entities/user.entity';
import { Docente } from './domain/entities/docente.entity';
import { Estudiante } from './domain/entities/estudiante.entity';
import { UsersService } from './application/services/users.service';
import { UsersController } from './infrastructure/controllers/users.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([User, Docente, Estudiante]),
        forwardRef(() => AuthModule),
    ],
    controllers: [UsersController],
    providers: [
        UsersService,
        {
            provide: 'IUsersService',
            useExisting: UsersService,
        },
    ],
    exports: [UsersService, 'IUsersService', TypeOrmModule],
})
export class UsersModule { }
