"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatriculasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const event_emitter_1 = require("@nestjs/event-emitter");
const matricula_entity_1 = require("../../domain/entities/matricula.entity");
const inscripcion_entity_1 = require("../../domain/entities/inscripcion.entity");
const grupo_entity_1 = require("../../domain/entities/grupo.entity");
const estudiante_entity_1 = require("../../../users/domain/entities/estudiante.entity");
const semestre_entity_1 = require("../../../academic/domain/entities/semestre.entity");
const asignatura_entity_1 = require("../../../academic/domain/entities/asignatura.entity");
const enums_1 = require("../../../common/enums");
let MatriculasService = class MatriculasService {
    matriculaRepository;
    inscripcionRepository;
    grupoRepository;
    estudianteRepository;
    semestreRepository;
    asignaturaRepository;
    dataSource;
    eventEmitter;
    constructor(matriculaRepository, inscripcionRepository, grupoRepository, estudianteRepository, semestreRepository, asignaturaRepository, dataSource, eventEmitter) {
        this.matriculaRepository = matriculaRepository;
        this.inscripcionRepository = inscripcionRepository;
        this.grupoRepository = grupoRepository;
        this.estudianteRepository = estudianteRepository;
        this.semestreRepository = semestreRepository;
        this.asignaturaRepository = asignaturaRepository;
        this.dataSource = dataSource;
        this.eventEmitter = eventEmitter;
    }
    async matricular(dto) {
        const estudiante = await this.estudianteRepository.findOne({ where: { id: dto.estudiante_id } });
        if (!estudiante) {
            throw new common_1.NotFoundException(`Estudiante con ID ${dto.estudiante_id} no encontrado`);
        }
        const semestre = await this.semestreRepository.findOne({ where: { id: dto.semestre_id } });
        if (!semestre) {
            throw new common_1.NotFoundException(`Semestre con ID ${dto.semestre_id} no encontrado`);
        }
        if (semestre.estado !== enums_1.EstadoSemestre.ACTIVO) {
            throw new common_1.BadRequestException('Solo se puede matricular en semestres ACTIVOS');
        }
        const asignaturas = await this.asignaturaRepository.find({
            where: dto.asignaturasIds.map((id) => ({ id })),
        });
        if (asignaturas.length !== dto.asignaturasIds.length) {
            throw new common_1.NotFoundException('Alguna asignatura indicada no existe');
        }
        const matriculasActivas = await this.matriculaRepository.find({
            where: {
                estudiante_id: dto.estudiante_id,
                semestre_id: dto.semestre_id,
                estado: enums_1.EstadoMatricula.ACTIVA,
            },
            relations: ['asignatura'],
        });
        const creditosYaMatriculados = matriculasActivas.reduce((acc, m) => acc + (m.asignatura?.creditos ?? 0), 0);
        const creditosNuevos = asignaturas.reduce((acc, a) => acc + a.creditos, 0);
        if (creditosYaMatriculados + creditosNuevos > estudiante.creditosMaximos) {
            throw new common_1.BadRequestException(`El estudiante excedería su máximo de créditos (${estudiante.creditosMaximos}). ` +
                `Ya matriculado: ${creditosYaMatriculados}, nuevo: ${creditosNuevos}.`);
        }
        return this.dataSource.transaction(async (manager) => {
            const creadas = [];
            for (const asignatura of asignaturas) {
                const existente = await manager.findOne(matricula_entity_1.Matricula, {
                    where: {
                        estudiante_id: dto.estudiante_id,
                        asignatura_id: asignatura.id,
                        semestre_id: dto.semestre_id,
                        estado: enums_1.EstadoMatricula.ACTIVA,
                    },
                });
                if (existente) {
                    throw new common_1.ConflictException(`El estudiante ya está matriculado en la asignatura ${asignatura.codigo}`);
                }
                const matricula = manager.create(matricula_entity_1.Matricula, {
                    estudiante_id: dto.estudiante_id,
                    asignatura_id: asignatura.id,
                    semestre_id: dto.semestre_id,
                    estado: enums_1.EstadoMatricula.ACTIVA,
                });
                const saved = await manager.save(matricula_entity_1.Matricula, matricula);
                creadas.push(saved);
                const gruposCandidatos = await manager.find(grupo_entity_1.Grupo, {
                    where: { asignatura_id: asignatura.id, semestre_id: dto.semestre_id },
                });
                if (gruposCandidatos.length === 1) {
                    const yaInscrito = await manager.findOne(inscripcion_entity_1.Inscripcion, {
                        where: { estudiante_id: dto.estudiante_id, grupo_id: gruposCandidatos[0].id },
                    });
                    if (!yaInscrito) {
                        const inscripcion = manager.create(inscripcion_entity_1.Inscripcion, {
                            estudiante_id: dto.estudiante_id,
                            grupo_id: gruposCandidatos[0].id,
                        });
                        await manager.save(inscripcion_entity_1.Inscripcion, inscripcion);
                    }
                }
            }
            this.eventEmitter.emit('matricula.created', {
                estudianteId: dto.estudiante_id,
                semestreId: dto.semestre_id,
                asignaturas: asignaturas.map((a) => a.codigo),
            });
            return creadas;
        });
    }
    async findAll() {
        return this.matriculaRepository.find({ relations: ['estudiante', 'asignatura', 'semestre'] });
    }
    async findById(id) {
        const matricula = await this.matriculaRepository.findOne({
            where: { id },
            relations: ['estudiante', 'asignatura', 'semestre'],
        });
        if (!matricula) {
            throw new common_1.NotFoundException(`Matrícula con ID ${id} no encontrada`);
        }
        return matricula;
    }
    async findByEstudiante(estudianteId) {
        return this.matriculaRepository.find({
            where: { estudiante_id: estudianteId },
            relations: ['asignatura', 'semestre'],
        });
    }
    async cancelar(id) {
        const matricula = await this.findById(id);
        if (matricula.estado === enums_1.EstadoMatricula.CANCELADA) {
            throw new common_1.BadRequestException('La matrícula ya está CANCELADA');
        }
        if (matricula.semestre.estado !== enums_1.EstadoSemestre.ACTIVO) {
            throw new common_1.BadRequestException('Solo se pueden cancelar matrículas de semestres ACTIVOS');
        }
        matricula.estado = enums_1.EstadoMatricula.CANCELADA;
        return this.matriculaRepository.save(matricula);
    }
};
exports.MatriculasService = MatriculasService;
exports.MatriculasService = MatriculasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(matricula_entity_1.Matricula)),
    __param(1, (0, typeorm_1.InjectRepository)(inscripcion_entity_1.Inscripcion)),
    __param(2, (0, typeorm_1.InjectRepository)(grupo_entity_1.Grupo)),
    __param(3, (0, typeorm_1.InjectRepository)(estudiante_entity_1.Estudiante)),
    __param(4, (0, typeorm_1.InjectRepository)(semestre_entity_1.Semestre)),
    __param(5, (0, typeorm_1.InjectRepository)(asignatura_entity_1.Asignatura)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.DataSource,
        event_emitter_1.EventEmitter2])
], MatriculasService);
//# sourceMappingURL=matriculas.service.js.map