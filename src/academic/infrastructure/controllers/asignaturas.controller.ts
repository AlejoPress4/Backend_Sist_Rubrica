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
import { AsignaturasService } from '../../application/services/asignaturas.service';
import { CreateAsignaturaDto } from '../../application/dtos/create-asignatura.dto';
import { UpdateAsignaturaDto } from '../../application/dtos/update-asignatura.dto';
import { ApiResponseDto } from '../../../common/dtos/api-response.dto';
import { JwtAuthGuard } from '../../../auth/infrastructure/guards/jwt-auth.guard';
import { RolesGuard } from '../../../auth/infrastructure/guards/roles.guard';
import { Roles } from '../../../common/decorators/roles.decorator';
import { Rol } from '../../../common/enums';

@Controller('academic/asignaturas')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AsignaturasController {
    constructor(private readonly asignaturasService: AsignaturasService) { }

    @Post()
    @Roles(Rol.ADMIN)
    async create(@Body() dto: CreateAsignaturaDto) {
        const data = await this.asignaturasService.create(dto);
        return ApiResponseDto.created(data, 'Asignatura creada exitosamente');
    }

    @Get()
    @Roles(Rol.ADMIN, Rol.DOCENTE, Rol.ESTUDIANTE)
    async findAll() {
        const data = await this.asignaturasService.findAll();
        return ApiResponseDto.success(data);
    }

    @Get(':id')
    @Roles(Rol.ADMIN, Rol.DOCENTE, Rol.ESTUDIANTE)
    async findById(@Param('id', ParseUUIDPipe) id: string) {
        const data = await this.asignaturasService.findById(id);
        return ApiResponseDto.success(data);
    }

    @Patch(':id')
    @Roles(Rol.ADMIN)
    async update(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() dto: UpdateAsignaturaDto,
    ) {
        const data = await this.asignaturasService.update(id, dto);
        return ApiResponseDto.success(data, 'Asignatura actualizada exitosamente');
    }

    @Delete(':id')
    @Roles(Rol.ADMIN)
    async remove(@Param('id', ParseUUIDPipe) id: string) {
        await this.asignaturasService.remove(id);
        return ApiResponseDto.success(null, 'Asignatura eliminada exitosamente');
    }
}
