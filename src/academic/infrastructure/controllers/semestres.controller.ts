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
import { SemestresService } from '../../application/services/semestres.service';
import { CreateSemestreDto } from '../../application/dtos/create-semestre.dto';
import { UpdateSemestreDto } from '../../application/dtos/update-semestre.dto';
import { ApiResponseDto } from '../../../common/dtos/api-response.dto';
import { JwtAuthGuard } from '../../../auth/infrastructure/guards/jwt-auth.guard';
import { RolesGuard } from '../../../auth/infrastructure/guards/roles.guard';
import { Roles } from '../../../common/decorators/roles.decorator';
import { Rol } from '../../../common/enums';

@Controller('academic/semestres')
@UseGuards(JwtAuthGuard, RolesGuard)
export class SemestresController {
    constructor(private readonly semestresService: SemestresService) { }

    @Post()
    @Roles(Rol.ADMIN)
    async create(@Body() dto: CreateSemestreDto) {
        const data = await this.semestresService.create(dto);
        return ApiResponseDto.created(data, 'Semestre creado exitosamente');
    }

    @Get()
    @Roles(Rol.ADMIN, Rol.DOCENTE, Rol.ESTUDIANTE)
    async findAll(@Query('carreraId') carreraId?: string) {
        const data = carreraId
            ? await this.semestresService.findByCarrera(carreraId)
            : await this.semestresService.findAll();
        return ApiResponseDto.success(data);
    }

    @Get(':id')
    @Roles(Rol.ADMIN, Rol.DOCENTE, Rol.ESTUDIANTE)
    async findById(@Param('id', ParseUUIDPipe) id: string) {
        const data = await this.semestresService.findById(id);
        return ApiResponseDto.success(data);
    }

    @Patch(':id')
    @Roles(Rol.ADMIN)
    async update(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() dto: UpdateSemestreDto,
    ) {
        const data = await this.semestresService.update(id, dto);
        return ApiResponseDto.success(data, 'Semestre actualizado exitosamente');
    }

    @Patch(':id/cerrar')
    @Roles(Rol.ADMIN)
    async cerrar(@Param('id', ParseUUIDPipe) id: string) {
        const data = await this.semestresService.cerrar(id);
        return ApiResponseDto.success(data, 'Semestre cerrado exitosamente');
    }

    @Delete(':id')
    @Roles(Rol.ADMIN)
    async remove(@Param('id', ParseUUIDPipe) id: string) {
        await this.semestresService.remove(id);
        return ApiResponseDto.success(null, 'Semestre eliminado exitosamente');
    }
}
