import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseUUIDPipe,
    Patch,
    Post,
    UseGuards,
} from '@nestjs/common';
import { CarrerasService } from '../../application/services/carreras.service';
import { CreateCarreraDto } from '../../application/dtos/create-carrera.dto';
import { UpdateCarreraDto } from '../../application/dtos/update-carrera.dto';
import { ApiResponseDto } from '../../../common/dtos/api-response.dto';
import { JwtAuthGuard } from '../../../auth/infrastructure/guards/jwt-auth.guard';
import { RolesGuard } from '../../../auth/infrastructure/guards/roles.guard';
import { Roles } from '../../../common/decorators/roles.decorator';
import { Rol } from '../../../common/enums';

@Controller('academic/carreras')
@UseGuards(JwtAuthGuard, RolesGuard)
export class CarrerasController {
    constructor(private readonly carrerasService: CarrerasService) { }

    @Post()
    @Roles(Rol.ADMIN)
    async create(@Body() dto: CreateCarreraDto) {
        const data = await this.carrerasService.create(dto);
        return ApiResponseDto.created(data, 'Carrera creada exitosamente');
    }

    @Get()
    @Roles(Rol.ADMIN, Rol.DOCENTE, Rol.ESTUDIANTE)
    async findAll() {
        const data = await this.carrerasService.findAll();
        return ApiResponseDto.success(data);
    }

    @Get(':id')
    @Roles(Rol.ADMIN, Rol.DOCENTE, Rol.ESTUDIANTE)
    async findById(@Param('id', ParseUUIDPipe) id: string) {
        const data = await this.carrerasService.findById(id);
        return ApiResponseDto.success(data);
    }

    @Patch(':id')
    @Roles(Rol.ADMIN)
    async update(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() dto: UpdateCarreraDto,
    ) {
        const data = await this.carrerasService.update(id, dto);
        return ApiResponseDto.success(data, 'Carrera actualizada exitosamente');
    }

    @Patch(':id/archivar')
    @Roles(Rol.ADMIN)
    async archivar(@Param('id', ParseUUIDPipe) id: string) {
        const data = await this.carrerasService.archivar(id);
        return ApiResponseDto.success(data, 'Carrera archivada exitosamente');
    }

    @Delete(':id')
    @Roles(Rol.ADMIN)
    async remove(@Param('id', ParseUUIDPipe) id: string) {
        await this.carrerasService.remove(id);
        return ApiResponseDto.success(null, 'Carrera eliminada exitosamente');
    }
}
