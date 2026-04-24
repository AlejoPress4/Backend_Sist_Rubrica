# Plan de ImplementaciÃ³n â AlineaciÃ³n con planDesarrollo.md (v2)

> [!IMPORTANT]
> Este plan reemplaza la versiÃ³n anterior. Cambio fundamental: **Docente y Estudiante se MANTIENEN como entidades separadas** con relaciÃ³n 1:1 a User.

> [!NOTE]
> Contexto adicional integrado desde `HistoriadeUsuario_CasosUso.md` (13 HU + 13 CU). Todas las historias de usuario estÃ¡n cubiertas por los endpoints definidos en el plan.

---

## Hallazgos del AnÃ¡lisis de Historias de Usuario y Casos de Uso

Al cruzar las 13 HU y 13 CU con el `planDesarrollo.md`, se identificaron **3 requisitos adicionales** no explÃ­citos en el plan tÃ©cnico:

| # | Requisito (desde HU/CU) | Impacto en el Plan |
|---|------------------------|--------------------|
| 1 | **HU-01 criterio 4**: Filtrar usuarios por **carrera** | Agregar al `FilterUsersDto` un campo `carreraId?`. El QueryBuilder debe hacer JOIN a `estudiante.carreras` cuando se filtre por carrera. Solo aplica a rol ESTUDIANTE |
| 2 | **CU-04 flujo 4a**: Reasignar docente a grupo **solo si no ha registrado calificaciones** | Agregar validaciÃ³n en `GruposService.asignarDocente()`: verificar que no existan `CalificacionDetalle` del docente actual en evaluaciones del grupo |
| 3 | **HU-11 criterio 4 + CU-11 paso 5**: Generar **reporte de notas descargable** del grupo | Agregar endpoint `GET /scores/grupos/:grupoId/notas/reporte` que genere PDF/Excel (fase posterior, no bloqueante) |

### Trazabilidad HU â Endpoints

| HU | Endpoints que la cubren |
|----|------------------------|
| HU-01 | POST/GET/PATCH/DELETE /users |
| HU-02 | POST/GET/PATCH /academic/carreras + /academic/semestres |
| HU-03 | POST/GET/PATCH/DELETE /academic/planes + /academic/planes/:id/asignaturas |
| HU-04 | PATCH /courses/grupos/:id/docente |
| HU-05 | POST/GET/DELETE /courses/matriculas |
| HU-06 | POST /courses/inscripciones (+ GET /courses/mis-grupos) |
| HU-07 | POST/PATCH /rubrics + PATCH /rubrics/:id/publicar |
| HU-08 | POST/PATCH/DELETE /rubrics/:id/criterios + POST /rubrics/escalas |
| HU-09 | PATCH /scores/evaluaciones/:id/rubrica |
| HU-10 | PUT /scores/evaluaciones/:evalId/calificaciones/:estudianteId + POST .../enviar |
| HU-11 | GET /scores/grupos/:grupoId/notas-preview + POST .../confirmar |
| HU-12 | GET /rubrics/:id (ESTUDIANTE) + GET /scores/mis-evaluaciones |
| HU-13 | GET /scores/mis-calificaciones + GET /scores/mis-notas |

---

## Cambios vs Plan Anterior

| Aspecto | Plan v1 (anterior) | Plan v2 (actual) |
|---------|-------------------|------------------|
| Docente/Estudiante | â Eliminar, todo en User | â Mantener como entidades 1:1 con User |
| User | ContenÃ­a nombre, relaciones directas | Solo autenticaciÃ³n: correo, password, rol, activo |
| Docente.id | `number` (autoincrement) | `UUID` |
| Estudiante.id | `number` (autoincrement) | `UUID` |
| Estudiante | Sin creditosMaximos, sin ManyToMany Carrera | Con `creditosMaximos`, ManyToMany con Carrera |
| Docente | Sin titulo, sin relaciÃ³n con Rubrica | Con `titulo`, OneToMany con Rubrica (`creadaPor`) |
| Escala | Sin `creadaPor`, sin `descripcion` | Con `creadaPor` (Docente), con `descripcion` |
| Enums | Un solo archivo constants.ts | Archivos separados en `common/enums/` |
| Servicios | Un servicio monolÃ­tico por mÃ³dulo | Servicios granulares (CarrerasService, SemestresService, etc.) |
| JWT payload | Solo sub, email, rol | sub, rol, nombre, docenteId, estudianteId |
| Notificaciones | No contempladas | MÃ³dulo `notifications` con `@nestjs/event-emitter` |
| AuditorÃ­a | No contemplada | Entidad `AuditLog` + interceptor/servicio |
| Matricula apunta a | User | Estudiante |
| CalificacionDetalle apunta a | User | Estudiante |
| Nota apunta a | User | Estudiante |
| Grupo apunta a | User (rol docente) | Docente |
| Rubrica.creadaPor | No existÃ­a | Docente |

---

## DiagnÃ³stico Actualizado: Discrepancias con el CÃ³digo Actual

### ð´ Cambios Estructurales

| # | Problema | AcciÃ³n |
|---|---------|--------|
| 1 | **User tiene `email`, `codigo`, `carrera_id`** | Reescribir: solo `correoInstitucional`, `password`, `rol`, `activo`, `creadoEn`, `actualizadoEn`. Agregar relaciones 1:1 con Docente y Estudiante |
| 2 | **Docente tiene campos incorrectos** (`nombre`, `apellido`, `telefono`, `cedula`, `especialidad`, id numÃ©rico) | Reescribir: `id` UUID, `nombre`, `titulo`, `user` 1:1, `grupos`, `rubricas` |
| 3 | **Estudiante tiene campos incorrectos** (`nombre`, `apellido`, `cedula`, id numÃ©rico) | Reescribir: `id` UUID, `nombre`, `creditosMaximos`, `user` 1:1, `carreras` M:N, `matriculas`, `inscripciones`, `notas` |
| 4 | **Semestre duplicado** en academic y courses | Eliminar de courses, dejar solo en academic |
| 5 | **PlanEstudio mal modelado** | Reescribir con `version`, `publicado`, `fechaPublicacion`, relaciÃ³n M:N con Asignatura vÃ­a `PlanAsignatura` |
| 6 | **Entidad `PlanAsignatura` no existe** | Crear tabla intermedia con `semestreSugerido` |
| 7 | **Entidad `Item` no existe** | Crear con `etiqueta`, `descripcion`, `valor`, ManyToOne a Escala |
| 8 | **Escala modelada como Item** | Reescribir: Escala es contenedor de Items, con `creadaPor`, `descripcion`, reutilizable |
| 9 | **Matricula en mÃ³dulo incorrecto** y modelo equivocado | Mover a courses, apuntar a Estudiante+Asignatura+Semestre |
| 10 | **Enums en un solo archivo con valores minÃºsculas** | Separar en archivos, usar MAYÃSCULAS |
| 11 | **Servicios monolÃ­ticos sin lÃ³gica de negocio** | Dividir y agregar toda la lÃ³gica especificada |
| 12 | **Falta mÃ³dulo `notifications`** | Crear con `@nestjs/event-emitter` |
| 13 | **Falta sistema de auditorÃ­a** | Crear entidad AuditLog + interceptor |

### ð  Entidades Existentes con Relaciones Incorrectas

| Entidad | Cambios Requeridos |
|---------|-------------------|
| **Rubrica** | `titulo` â `nombre`, `es_publica` â `estado` (EstadoRubrica), agregar `fechaPublicacion`, `creadaPor` (Docente), `asignatura` (ManyToOne) |
| **Criterio** | Agregar `peso` (decimal), cambiar OneToManyâEscala a ManyToOneâEscala |
| **Evaluacion** | `nota` â `porcentaje`, eliminar `descripcion`, agregar ManyToOneâGrupo, hacer rubrica nullable |
| **CalificacionDetalle** | Eliminar `puntaje`, agregar `estado`, `enviadoEn`, cambiar EscalaâItem, EstudianteâEstudiante, agregar Evaluacion+Criterio |
| **Nota** | `nota_final` â `valor`, eliminar `observaciones`/`inscripcion_id`/`rubrica_id`, agregar `oficial`, `fechaRegistro`, Estudiante+Grupo |
| **Grupo** | Cambiar Docente(id numÃ©rico) â Docente(UUID), eliminar `codigo_grupo`, agregar Asignatura, OneToMany a Evaluacion+Nota |
| **Inscripcion** | Cambiar Estudiante(id numÃ©rico) â Estudiante(UUID), eliminar `estado` |
| **Carrera** | Agregar ManyToMany con Estudiante, eliminar relaciÃ³n con Matricula directa |
| **Asignatura** | Hacer `codigo` unique+NOT NULL, agregar OneToMany a Rubrica, Evaluacion, PlanAsignatura |

---

## Fases de ImplementaciÃ³n

### FASE 1 â Base (`common` + `config`)

#### Archivos a CREAR

| Archivo | DescripciÃ³n |
|---------|-------------|
| `src/common/enums/rol.enum.ts` | Enum: ADMIN, DOCENTE, ESTUDIANTE |
| `src/common/enums/estado-semestre.enum.ts` | Enum: ACTIVO, CERRADO |
| `src/common/enums/estado-rubrica.enum.ts` | Enum: BORRADOR, PUBLICADA, ARCHIVADA |
| `src/common/enums/estado-calificacion.enum.ts` | Enum: BORRADOR, ENVIADA |
| `src/common/enums/estado-matricula.enum.ts` | Enum: ACTIVA, CANCELADA |
| `src/common/enums/index.ts` | Barrel export de todos los enums |

#### Archivos a MODIFICAR

| Archivo | Cambios |
|---------|---------|
| `src/common/constants/constants.ts` | Eliminar enums (migrados a `enums/`), dejar solo `ROLES_KEY` |
| `src/common/decorators/roles.decorator.ts` | Importar `Rol` desde `enums/` en vez de `constants` |
| `src/auth/infrastructure/guards/roles.guard.ts` | Importar desde `enums/` |
| `src/auth/infrastructure/guards/jwt-auth.guard.ts` | Sin cambios |
| `src/common/filters/all-exceptions.filter.ts` | Sin cambios |

---

### FASE 2 â MÃ³dulo `users`

#### Archivos a REESCRIBIR

| Archivo | Cambios clave |
|---------|--------------|
| `src/users/domain/entities/user.entity.ts` | Solo autenticaciÃ³n: `correoInstitucional`, `password` (select:false), `rol`, `activo`, `creadoEn`, `actualizadoEn`. OneToOne con Docente y Estudiante |
| `src/users/domain/entities/docente.entity.ts` | UUID id, `nombre`, `titulo`, OneToOneâUser, OneToManyâGrupo, OneToManyâRubrica |
| `src/users/domain/entities/estudiante.entity.ts` | UUID id, `nombre`, `creditosMaximos`(default 21), OneToOneâUser, ManyToManyâCarrera, OneToManyâMatricula/Inscripcion/Nota |
| `src/users/application/dtos/create-user.dto.ts` | `correoInstitucional`, `password`, `rol`, `nombre`, `titulo?`, `creditosMaximos?` |
| `src/users/application/dtos/update-user.dto.ts` | SIN campo `rol` (inmutable). Campos: `nombre?`, `correoInstitucional?`, `password?`, `titulo?`, `creditosMaximos?` |
| `src/users/domain/interfaces/users-service.interface.ts` | Solo CRUD de User (sin mÃ©todos separados de Docente/Estudiante) |
| `src/users/application/services/users.service.ts` | TransacciÃ³n User+Docente/Estudiante, hasheo, eventos, filtros con QueryBuilder |
| `src/users/infrastructure/controllers/users.controller.ts` | Endpoints: POST/GET/GET:id/PATCH:id/DELETE:id + GET /docentes + GET /estudiantes |
| `src/users/users.module.ts` | Registrar User, Docente, Estudiante en TypeOrmModule. Exportar repositorios |

#### Archivos a CREAR

| Archivo | DescripciÃ³n |
|---------|-------------|
| `src/users/application/dtos/filter-users.dto.ts` | Filtro por rol, activo, bÃºsqueda, **carreraId** (HU-01 criterio 4) |
| `src/users/application/dtos/user-response.dto.ts` | DTO de respuesta sin password, con campos condicionales |

#### DTOs a ELIMINAR (se fusionan en CreateUserDto)

| Archivo |
|---------|
| `src/users/application/dtos/create-docente.dto.ts` |
| `src/users/application/dtos/update-docente.dto.ts` |
| `src/users/application/dtos/create-estudiante.dto.ts` |
| `src/users/application/dtos/update-estudiante.dto.ts` |

---

### FASE 3 â MÃ³dulo `auth`

#### Archivos a MODIFICAR

| Archivo | Cambios |
|---------|---------|
| `src/auth/application/dtos/login.dto.ts` | `email` â `correoInstitucional` |
| `src/auth/application/dtos/register.dto.ts` | ELIMINAR â el registro lo hace el ADMIN vÃ­a POST /users |
| `src/auth/application/dtos/google-login.dto.ts` | Actualizar campo a `correoInstitucional` |
| `src/auth/application/services/auth.service.ts` | Login con addSelect('password'), JWT payload con docenteId/estudianteId, eliminar register |
| `src/auth/infrastructure/controllers/auth.controller.ts` | Solo POST /auth/login (pÃºblico). Eliminar /register y /google |
| `src/auth/infrastructure/strategies/jwt.strategy.ts` | validate() retorna payload completo con docenteId/estudianteId |

#### Archivos a CREAR

| Archivo | DescripciÃ³n |
|---------|-------------|
| `src/auth/application/dtos/auth-response.dto.ts` | Respuesta con access_token + datos del usuario |

---

### FASE 4 â MÃ³dulo `academic`

#### Archivos a REESCRIBIR

| Archivo | Cambios clave |
|---------|--------------|
| `src/academic/domain/entities/carrera.entity.ts` | Agregar `archivada`, ManyToManyâEstudiante. Eliminar relaciÃ³n con Matricula |
| `src/academic/domain/entities/semestre.entity.ts` | Agregar `estado` (EstadoSemestre), OneToManyâGrupo, OneToManyâMatricula |
| `src/academic/domain/entities/asignatura.entity.ts` | `codigo` unique, agregar OneToMany a Grupo, Rubrica, Evaluacion, PlanAsignatura |
| `src/academic/domain/entities/plan-estudio.entity.ts` | Eliminar `nombre`/`anio`. Agregar `version`, `publicado`, `fechaPublicacion`. OneToManyâPlanAsignatura |
| `src/academic/application/services/academic.service.ts` | DIVIDIR en 4 servicios: carreras, semestres, asignaturas, plan-estudio |
| `src/academic/infrastructure/controllers/academic.controller.ts` | DIVIDIR en 4 controladores |
| `src/academic/academic.module.ts` | Registrar PlanAsignatura. Quitar Matricula. Importar UsersModule |

#### Archivos a CREAR

| Archivo | DescripciÃ³n |
|---------|-------------|
| `src/academic/domain/entities/plan-asignatura.entity.ts` | Tabla intermedia: plan, asignatura, semestreSugerido. Index unique |
| `src/academic/application/services/carreras.service.ts` | CRUD + archivarCarrera con validaciones |
| `src/academic/application/services/semestres.service.ts` | CRUD + cerrarSemestre + validaciÃ³n semestre activo Ãºnico |
| `src/academic/application/services/asignaturas.service.ts` | CRUD con validaciÃ³n de cÃ³digo Ãºnico |
| `src/academic/application/services/plan-estudio.service.ts` | CRUD + agregarAsignatura + publicarPlan con transacciÃ³n |
| `src/academic/infrastructure/controllers/carreras.controller.ts` | Endpoints de carreras |
| `src/academic/infrastructure/controllers/semestres.controller.ts` | Endpoints de semestres |
| `src/academic/infrastructure/controllers/asignaturas.controller.ts` | Endpoints de asignaturas |
| `src/academic/infrastructure/controllers/plan-estudio.controller.ts` | Endpoints de planes |
| DTOs nuevos para cada entidad | create/update para carrera, semestre, asignatura, plan-estudio, plan-asignatura |

#### Archivos a ELIMINAR

| Archivo | RazÃ³n |
|---------|-------|
| `src/academic/domain/entities/matricula.entity.ts` | Se mueve a courses |
| `src/academic/application/dtos/create-matricula.dto.ts` | Se mueve a courses |
| `src/academic/application/dtos/update-matricula.dto.ts` | Se mueve a courses |

---

### FASE 5 â MÃ³dulo `courses`

#### Archivos a REESCRIBIR

| Archivo | Cambios clave |
|---------|--------------|
| `src/courses/domain/entities/grupo.entity.ts` | ManyToOneâDocente(UUID), ManyToOneâAsignatura, eliminar `codigo_grupo`, agregar OneToMany a Evaluacion+Nota |
| `src/courses/domain/entities/inscripcion.entity.ts` | ManyToOneâEstudiante(UUID), eliminar `estado`, agregar Index unique |
| `src/courses/application/services/courses.service.ts` | DIVIDIR en 3 servicios |
| `src/courses/infrastructure/controllers/courses.controller.ts` | DIVIDIR en 2 controladores |
| `src/courses/courses.module.ts` | Quitar Semestre. Agregar Matricula. Importar AcademicModule y UsersModule |

#### Archivos a CREAR

| Archivo | DescripciÃ³n |
|---------|-------------|
| `src/courses/domain/entities/matricula.entity.ts` | ManyToOne a Estudiante, Asignatura, Semestre. Estado ACTIVA/CANCELADA |
| `src/courses/application/services/grupos.service.ts` | CRUD + asignarDocente con validaciones y eventos |
| `src/courses/application/services/matriculas.service.ts` | Matricular con validaciÃ³n de crÃ©ditos + inscripciÃ³n automÃ¡tica |
| `src/courses/application/services/inscripciones.service.ts` | CRUD de inscripciones manuales |
| `src/courses/infrastructure/controllers/grupos.controller.ts` | Endpoints de grupos |
| `src/courses/infrastructure/controllers/matriculas.controller.ts` | Endpoints de matrÃ­culas e inscripciones |
| DTOs de matricula e inscripciÃ³n | create/update para cada entidad |

#### Archivos a ELIMINAR

| Archivo | RazÃ³n |
|---------|-------|
| `src/courses/domain/entities/semestre.entity.ts` | Duplicado, queda en academic |
| `src/courses/application/dtos/create-semestre.dto.ts` | Se mueve a academic |
| `src/courses/application/dtos/update-semestre.dto.ts` | Se mueve a academic |

---

### FASE 6 â MÃ³dulo `rubrics`

#### Archivos a REESCRIBIR

| Archivo | Cambios clave |
|---------|--------------|
| `src/rubrics/domain/entities/rubrica.entity.ts` | `titulo`â`nombre`, `es_publica`â`estado`(EstadoRubrica), agregar `fechaPublicacion`, `creadaPor`(Docente), `asignatura`(ManyToOne) |
| `src/rubrics/domain/entities/criterio.entity.ts` | Agregar `peso`(decimal), cambiar OneToManyâEscala a ManyToOneâEscala(nullable), agregar OneToManyâCalificacionDetalle |
| `src/rubrics/domain/entities/escala.entity.ts` | RediseÃ±ar: contenedor de Items, agregar `descripcion`, `creadaPor`(Docente), `creadoEn`, eliminar `valor`, OneToManyâItem, OneToManyâCriterio |
| `src/rubrics/application/services/rubrics.service.ts` | DIVIDIR en 3 servicios con lÃ³gica de publicaciÃ³n y validaciÃ³n |
| `src/rubrics/infrastructure/controllers/rubrics.controller.ts` | DIVIDIR en 3 controladores |
| `src/rubrics/rubrics.module.ts` | Agregar Item. Importar AcademicModule y UsersModule |

#### Archivos a CREAR

| Archivo | DescripciÃ³n |
|---------|-------------|
| `src/rubrics/domain/entities/item.entity.ts` | `etiqueta`, `descripcion`, `valor`(decimal), ManyToOneâEscala, Index unique(escala,valor) |
| `src/rubrics/application/services/rubricas.service.ts` | CRUD + publicarRubrica(7 pasos) + archivarRubrica |
| `src/rubrics/application/services/criterios.service.ts` | CRUD + asignarEscala con ownership check |
| `src/rubrics/application/services/escalas.service.ts` | CRUD + agregarItem + eliminarItem con validaciones |
| `src/rubrics/infrastructure/controllers/rubricas.controller.ts` | Endpoints de rÃºbricas |
| `src/rubrics/infrastructure/controllers/criterios.controller.ts` | Endpoints de criterios |
| `src/rubrics/infrastructure/controllers/escalas.controller.ts` | Endpoints de escalas e items |
| DTOs de item, rubrica, criterio, escala | create/update para cada entidad |

---

### FASE 7 â MÃ³dulo `scores`

#### Archivos a REESCRIBIR

| Archivo | Cambios clave |
|---------|--------------|
| `src/scores/domain/entities/evaluacion.entity.ts` | `nota`â`porcentaje`, eliminar `descripcion`, agregar ManyToOneâGrupo, rubrica nullable, OneToManyâCalificacionDetalle |
| `src/scores/domain/entities/calificacion-detalle.entity.ts` | Eliminar `puntaje`, agregar `estado`(EstadoCalificacion), `enviadoEn`, ManyToOne a Evaluacion+Estudiante+Criterio+Item |
| `src/scores/domain/entities/nota.entity.ts` | `nota_final`â`valor`, agregar `oficial`, `fechaRegistro`, ManyToOne a Estudiante+Grupo, Index unique |
| `src/scores/application/services/scores.service.ts` | DIVIDIR en 3 servicios |
| `src/scores/infrastructure/controllers/scores.controller.ts` | Reescribir con todos los endpoints del plan |
| `src/scores/scores.module.ts` | Importar RubricsModule, CoursesModule, UsersModule |

#### Archivos a CREAR

| Archivo | DescripciÃ³n |
|---------|-------------|
| `src/scores/application/services/evaluaciones.service.ts` | CRUD + asignarRubrica con validaciones |
| `src/scores/application/services/calificaciones.service.ts` | guardarBorrador + enviarCalificacion + calcularNotaEvaluacion |
| `src/scores/application/services/notas.service.ts` | calcularNotaFinal + previsualizarNotas + confirmarNotaFinal |

---

### FASE 8 â Notificaciones y AuditorÃ­a

#### Archivos a CREAR

| Archivo | DescripciÃ³n |
|---------|-------------|
| `src/notifications/notifications.module.ts` | Importa EventEmitterModule |
| `src/notifications/listeners/notifications.listener.ts` | @OnEvent handlers para todos los eventos |
| `src/common/interceptors/audit-log.interceptor.ts` | Interceptor para registrar operaciones crÃ­ticas |
| `src/common/entities/audit-log.entity.ts` | Entidad: usuarioId, accion, entidad, entidadId, timestamp, metadatos |

---

## Dependencias npm a Instalar

```bash
npm install @nestjs/event-emitter
```

---

## Resumen de Archivos por AcciÃ³n

### CREAR (~25 archivos nuevos)
- 6 archivos de enums
- 1 PlanAsignatura entity
- 1 Item entity
- 1 Matricula entity (en courses)
- 8 servicios granulares nuevos
- 4 controladores granulares nuevos
- 2 DTOs nuevos (filter-users, user-response, auth-response)
- 2 archivos de notificaciones
- 2 archivos de auditorÃ­a

### REESCRIBIR (~30 archivos)
- 16 entidades
- 8 servicios
- 4 controladores
- ~15 DTOs
- 5 mÃ³dulos
- Auth service + controller + strategy

### ELIMINAR (~7 archivos)
- create/update-docente.dto.ts (fusionados en create-user.dto.ts)
- create/update-estudiante.dto.ts (fusionados en create-user.dto.ts)
- courses/semestre.entity.ts (duplicado)
- courses/create/update-semestre.dto.ts
- academic/matricula.entity.ts (movida a courses)
- register.dto.ts (registro lo hace ADMIN)

---

## VerificaciÃ³n

1. `npm run build` â compilaciÃ³n sin errores TypeScript
2. Eliminar `rubrica.db` â la BD se recrea con `synchronize: true`
3. `npm run start:dev` â arranca y sincroniza tablas
4. Verificar tablas con las columnas y relaciones correctas
5. Probar endpoints CRUD bÃ¡sicos
