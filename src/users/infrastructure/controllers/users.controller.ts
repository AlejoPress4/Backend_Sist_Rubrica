import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UsersService } from '../../application/services/users.service';
import { CreateUserDto } from '../../application/dtos/create-user.dto';
import { UpdateUserDto } from '../../application/dtos/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        // TODO: Delegate to usersService.create()
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        // TODO: Delegate to usersService.findById()
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        // TODO: Delegate to usersService.update()
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        // TODO: Delegate to usersService.remove()
    }
}
