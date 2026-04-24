import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseUUIDPipe,
    Patch,
    Post,
    Query,
    UseGuards,
} from '@nestjs/common';
import { UsersService } from '../../application/services/users.service';
import { CreateUserDto } from '../../application/dtos/create-user.dto';
import { UpdateUserDto } from '../../application/dtos/update-user.dto';
import { FilterUsersDto } from '../../application/dtos/filter-users.dto';
import { UserResponseDto } from '../../application/dtos/user-response.dto';
import { ApiResponseDto } from '../../../common/dtos/api-response.dto';
import { JwtAuthGuard } from '../../../auth/infrastructure/guards/jwt-auth.guard';
import { RolesGuard } from '../../../auth/infrastructure/guards/roles.guard';
import { Roles } from '../../../common/decorators/roles.decorator';
import { Rol } from '../../../common/enums';

@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    @Roles(Rol.ADMIN)
    async create(@Body() dto: CreateUserDto) {
        const user = await this.usersService.create(dto);
        return ApiResponseDto.created(
            UserResponseDto.fromEntity(user),
            'Usuario creado exitosamente',
        );
    }

    @Get()
    @Roles(Rol.ADMIN)
    async findAll(@Query() filter: FilterUsersDto) {
        const users = await this.usersService.findAll(filter);
        return ApiResponseDto.success(users.map(UserResponseDto.fromEntity));
    }

    @Get(':id')
    @Roles(Rol.ADMIN)
    async findById(@Param('id', ParseUUIDPipe) id: string) {
        const user = await this.usersService.findById(id);
        return ApiResponseDto.success(UserResponseDto.fromEntity(user));
    }

    @Patch(':id')
    @Roles(Rol.ADMIN)
    async update(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() dto: UpdateUserDto,
    ) {
        const user = await this.usersService.update(id, dto);
        return ApiResponseDto.success(
            UserResponseDto.fromEntity(user),
            'Usuario actualizado exitosamente',
        );
    }

    @Patch(':id/desactivar')
    @Roles(Rol.ADMIN)
    async desactivar(@Param('id', ParseUUIDPipe) id: string) {
        const user = await this.usersService.desactivar(id);
        return ApiResponseDto.success(
            UserResponseDto.fromEntity(user),
            'Usuario desactivado exitosamente',
        );
    }

    @Delete(':id')
    @Roles(Rol.ADMIN)
    async remove(@Param('id', ParseUUIDPipe) id: string) {
        await this.usersService.remove(id);
        return ApiResponseDto.success(null, 'Usuario eliminado exitosamente');
    }
}
