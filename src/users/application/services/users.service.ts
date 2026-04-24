import {
    BadRequestException,
    ConflictException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { EventEmitter2 } from '@nestjs/event-emitter';
import * as bcrypt from 'bcrypt';
import { User } from '../../domain/entities/user.entity';
import { Docente } from '../../domain/entities/docente.entity';
import { Estudiante } from '../../domain/entities/estudiante.entity';
import { IUsersService } from '../../domain/interfaces/users-service.interface';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { FilterUsersDto } from '../dtos/filter-users.dto';
import { Rol } from '../../../common/enums';

const BCRYPT_ROUNDS = 10;

@Injectable()
export class UsersService implements IUsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(Docente)
        private readonly docenteRepository: Repository<Docente>,
        @InjectRepository(Estudiante)
        private readonly estudianteRepository: Repository<Estudiante>,
        private readonly dataSource: DataSource,
        private readonly eventEmitter: EventEmitter2,
    ) { }

    async findAll(filter: FilterUsersDto): Promise<User[]> {
        const qb = this.userRepository.createQueryBuilder('user')
            .leftJoinAndSelect('user.docente', 'docente')
            .leftJoinAndSelect('user.estudiante', 'estudiante');

        if (filter.rol) {
            qb.andWhere('user.rol = :rol', { rol: filter.rol });
        }
        if (filter.activo !== undefined) {
            qb.andWhere('user.activo = :activo', { activo: filter.activo });
        }
        if (filter.buscar) {
            qb.andWhere(
                '(user.correoInstitucional LIKE :q OR docente.nombre LIKE :q OR estudiante.nombre LIKE :q)',
                { q: `%${filter.buscar}%` },
            );
        }
        if (filter.carreraId) {
            qb.innerJoin('estudiante.carreras', 'carrera', 'carrera.id = :carreraId', {
                carreraId: filter.carreraId,
            });
        }

        return qb.getMany();
    }

    async findById(id: string): Promise<User> {
        const user = await this.userRepository.findOne({
            where: { id },
            relations: ['docente', 'estudiante'],
        });
        if (!user) {
            throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
        }
        return user;
    }

    async findByCorreo(correoInstitucional: string): Promise<User> {
        const user = await this.userRepository.findOne({
            where: { correoInstitucional },
            relations: ['docente', 'estudiante'],
        });
        if (!user) {
            throw new NotFoundException(`Usuario con correo ${correoInstitucional} no encontrado`);
        }
        return user;
    }

    async findByCorreoWithPassword(correoInstitucional: string): Promise<User> {
        const user = await this.userRepository.createQueryBuilder('user')
            .leftJoinAndSelect('user.docente', 'docente')
            .leftJoinAndSelect('user.estudiante', 'estudiante')
            .addSelect('user.password')
            .where('user.correoInstitucional = :correoInstitucional', { correoInstitucional })
            .getOne();

        if (!user) {
            throw new NotFoundException(`Usuario con correo ${correoInstitucional} no encontrado`);
        }
        return user;
    }

    async create(dto: CreateUserDto): Promise<User> {
        const existing = await this.userRepository.findOne({
            where: { correoInstitucional: dto.correoInstitucional },
        });
        if (existing) {
            throw new ConflictException(
                `Ya existe un usuario con el correo ${dto.correoInstitucional}`,
            );
        }

        if (dto.rol === Rol.DOCENTE && !dto.titulo) {
            throw new BadRequestException('El título es obligatorio para docentes');
        }

        if ((dto.rol === Rol.DOCENTE || dto.rol === Rol.ESTUDIANTE) && !dto.codigo) {
            throw new BadRequestException(
                'El código institucional es obligatorio para docentes y estudiantes',
            );
        }

        if (dto.codigo) {
            const docenteExistente = await this.docenteRepository.findOne({ where: { id: dto.codigo } });
            const estudianteExistente = await this.estudianteRepository.findOne({ where: { id: dto.codigo } });
            if (docenteExistente || estudianteExistente) {
                throw new ConflictException(
                    `Ya existe un docente o estudiante con el código ${dto.codigo}`,
                );
            }
        }

        const hashedPassword = await bcrypt.hash(dto.password, BCRYPT_ROUNDS);

        const savedUser = await this.dataSource.transaction(async (manager) => {
            const user = manager.create(User, {
                correoInstitucional: dto.correoInstitucional,
                password: hashedPassword,
                rol: dto.rol,
                activo: true,
            });
            const persistedUser = await manager.save(User, user);

            if (dto.rol === Rol.DOCENTE) {
                const docente = manager.create(Docente, {
                    id: dto.codigo!,
                    nombre: dto.nombre,
                    titulo: dto.titulo,
                    userId: persistedUser.id,
                });
                await manager.save(Docente, docente);
            } else if (dto.rol === Rol.ESTUDIANTE) {
                const estudiante = manager.create(Estudiante, {
                    id: dto.codigo!,
                    nombre: dto.nombre,
                    creditosMaximos: dto.creditosMaximos ?? 21,
                    userId: persistedUser.id,
                });
                await manager.save(Estudiante, estudiante);
            }

            return persistedUser;
        });

        const completeUser = await this.findById(savedUser.id);
        this.eventEmitter.emit('user.created', {
            userId: completeUser.id,
            correoInstitucional: completeUser.correoInstitucional,
            rol: completeUser.rol,
        });
        return completeUser;
    }

    async update(id: string, dto: UpdateUserDto): Promise<User> {
        const user = await this.findById(id);

        if (dto.correoInstitucional && dto.correoInstitucional !== user.correoInstitucional) {
            const conflict = await this.userRepository.findOne({
                where: { correoInstitucional: dto.correoInstitucional },
            });
            if (conflict) {
                throw new ConflictException(
                    `Ya existe un usuario con el correo ${dto.correoInstitucional}`,
                );
            }
            user.correoInstitucional = dto.correoInstitucional;
        }

        if (dto.password) {
            user.password = await bcrypt.hash(dto.password, BCRYPT_ROUNDS);
        }

        if (dto.activo !== undefined) {
            user.activo = dto.activo;
        }

        await this.dataSource.transaction(async (manager) => {
            await manager.save(User, user);

            if (user.rol === Rol.DOCENTE && user.docente) {
                if (dto.nombre !== undefined) user.docente.nombre = dto.nombre;
                if (dto.titulo !== undefined) user.docente.titulo = dto.titulo;
                await manager.save(Docente, user.docente);
            } else if (user.rol === Rol.ESTUDIANTE && user.estudiante) {
                if (dto.nombre !== undefined) user.estudiante.nombre = dto.nombre;
                if (dto.creditosMaximos !== undefined) {
                    user.estudiante.creditosMaximos = dto.creditosMaximos;
                }
                await manager.save(Estudiante, user.estudiante);
            }
        });

        const updated = await this.findById(id);
        this.eventEmitter.emit('user.updated', {
            userId: updated.id,
            correoInstitucional: updated.correoInstitucional,
        });
        return updated;
    }

    async desactivar(id: string): Promise<User> {
        const user = await this.findById(id);
        user.activo = false;
        const saved = await this.userRepository.save(user);
        this.eventEmitter.emit('user.deactivated', {
            userId: saved.id,
            correoInstitucional: saved.correoInstitucional,
        });
        return saved;
    }

    async remove(id: string): Promise<void> {
        const user = await this.findById(id);
        await this.userRepository.remove(user);
    }
}
