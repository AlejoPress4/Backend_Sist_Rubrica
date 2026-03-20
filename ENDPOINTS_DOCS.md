# Documentación de Endpoints — Sistema de Rúbricas

> **Base URL:** `http://localhost:3000/api`
>
> **Formato de respuesta estándar:**
> ```json
> {
>   "statusCode": 200,
>   "message": "Mensaje descriptivo",
>   "data": { ... }
> }
> ```
> Los errores de validación retornan `400 Bad Request`. Los recursos no encontrados retornan `404 Not Found`.

---

## 1. Módulo Auth — `/api/auth`

### POST `/api/auth/register`
Registra un nuevo usuario en el sistema.

**Body:**
```json
{
  "email": "juan.perez@ucaldas.edu.co",
  "password": "secreto123",
  "nombre": "Juan",
  "apellido": "Pérez",
  "rol": "docente"
}
```
| Campo | Tipo | Requerido | Validaciones |
|---|---|---|---|
| `email` | string | Sí | Formato email válido |
| `password` | string | Sí | Mínimo 6 caracteres |
| `nombre` | string | Sí | — |
| `apellido` | string | Sí | — |
| `rol` | string | Sí | `admin` \| `docente` \| `estudiante` |

**Respuesta 201:**
```json
{
  "statusCode": 201,
  "message": "Usuario registrado exitosamente",
  "data": {
    "id": "uuid-v4",
    "email": "juan.perez@ucaldas.edu.co",
    "codigo": 0,
    "rol": "docente",
    "is_active": true,
    "created_at": "2026-03-19T00:00:00.000Z",
    "updated_at": "2026-03-19T00:00:00.000Z"
  }
}
```

---

### POST `/api/auth/login`
Inicia sesión con correo y contraseña. Retorna un JWT.

**Body:**
```json
{
  "email": "juan.perez@ucaldas.edu.co",
  "password": "secreto123"
}
```
| Campo | Tipo | Requerido | Validaciones |
|---|---|---|---|
| `email` | string | Sí | Formato email válido |
| `password` | string | Sí | Mínimo 6 caracteres |

**Respuesta 200:**
```json
{
  "statusCode": 200,
  "message": "Inicio de sesión exitoso",
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

---

### POST `/api/auth/google`
Autentica un usuario con datos del payload de Google. Valida dominio `@ucaldas.edu.co`. Crea el usuario si no existe.

**Body:**
```json
{
  "email": "laura.garcia@ucaldas.edu.co",
  "nombre": "Laura García",
  "foto_url": "https://lh3.googleusercontent.com/..."
}
```
| Campo | Tipo | Requerido | Validaciones |
|---|---|---|---|
| `email` | string | Sí | Formato email; debe terminar en `@ucaldas.edu.co` |
| `nombre` | string | Sí | — |
| `foto_url` | string | No | — |

**Respuesta 200:**
```json
{
  "statusCode": 200,
  "message": "Autenticación con Google exitosa",
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```
**Error 401** si el dominio del email no es `@ucaldas.edu.co`.

---

## 2. Módulo Users — `/api/users`

### POST `/api/users`
Crea un usuario base.

**Body:**
```json
{
  "email": "carlos.ruiz@ucaldas.edu.co",
  "password": "clave123",
  "codigo": 1001234,
  "rol": "estudiante",
  "is_active": true
}
```
| Campo | Tipo | Requerido | Validaciones |
|---|---|---|---|
| `email` | string | Sí | Formato email válido |
| `password` | string | Sí | Mínimo 6 caracteres |
| `codigo` | integer | Sí | Entero |
| `rol` | string | Sí | `admin` \| `docente` \| `estudiante` |
| `is_active` | boolean | No | — |

**Respuesta 201** con el usuario creado.

---

### GET `/api/users`
Lista todos los usuarios.

**Respuesta 200** con array de usuarios.

---

### GET `/api/users/:id`
Obtiene un usuario por su UUID.

**Respuesta 200** con el usuario. **404** si no existe.

---

### PUT `/api/users/:id`
Actualiza un usuario. Todos los campos son opcionales.

**Body (ejemplo):**
```json
{
  "codigo": 2001234,
  "is_active": false
}
```
**Respuesta 200** con el usuario actualizado.

---

### DELETE `/api/users/:id`
Elimina un usuario por UUID.

**Respuesta 200:** `{ "data": null, "message": "Usuario eliminado exitosamente" }`

---

### POST `/api/users/docentes`
Crea el perfil de docente asociado a un usuario.

**Body:**
```json
{
  "nombre": "Ana",
  "apellido": "Martínez",
  "telefono": "3001234567",
  "cedula": "12345678",
  "especialidad": "Ingeniería de Software",
  "user_id": "uuid-del-usuario"
}
```
| Campo | Tipo | Requerido | Validaciones |
|---|---|---|---|
| `nombre` | string | Sí | — |
| `apellido` | string | Sí | — |
| `telefono` | string | No | — |
| `cedula` | string | No | — |
| `especialidad` | string | No | — |
| `user_id` | string | Sí | UUID v4 válido |

**Respuesta 201** con el docente creado.

---

### GET `/api/users/docentes`
Lista todos los docentes.

---

### GET `/api/users/docentes/:id`
Obtiene un docente por su ID entero.

---

### GET `/api/users/docentes/user/:user_id`
Obtiene el docente asociado a un `user_id` (UUID).

---

### PUT `/api/users/docentes/:id`
Actualiza el perfil de un docente. Todos los campos son opcionales.

---

### DELETE `/api/users/docentes/:id`
Elimina un docente.

---

### POST `/api/users/estudiantes`
Crea el perfil de estudiante asociado a un usuario.

**Body:**
```json
{
  "nombre": "Carlos",
  "apellido": "Ruiz",
  "cedula": "98765432",
  "user_id": "uuid-del-usuario"
}
```
| Campo | Tipo | Requerido | Validaciones |
|---|---|---|---|
| `nombre` | string | Sí | — |
| `apellido` | string | Sí | — |
| `cedula` | string | No | — |
| `user_id` | string | Sí | UUID v4 válido |

**Respuesta 201** con el estudiante creado.

---

### GET `/api/users/estudiantes`
Lista todos los estudiantes.

---

### GET `/api/users/estudiantes/:id`
Obtiene un estudiante por su ID entero.

---

### GET `/api/users/estudiantes/user/:user_id`
Obtiene el estudiante asociado a un `user_id` (UUID).

---

### PUT `/api/users/estudiantes/:id`
Actualiza el perfil de un estudiante. Todos los campos son opcionales.

---

### DELETE `/api/users/estudiantes/:id`
Elimina un estudiante.

---

## 3. Módulo Academic — `/api/academic`

### POST `/api/academic/carreras`
Crea una carrera académica.

**Body:**
```json
{
  "nombre": "Ingeniería de Sistemas",
  "codigo": "IS-2024",
  "descripcion": "Programa de pregrado en sistemas"
}
```
| Campo | Tipo | Requerido | Validaciones |
|---|---|---|---|
| `nombre` | string | Sí | — |
| `codigo` | string | No | — |
| `descripcion` | string | No | — |

**Respuesta 201** con la carrera creada.

---

### GET `/api/academic/carreras`
Lista todas las carreras.

---

### GET `/api/academic/carreras/:id`
Obtiene una carrera por UUID.

---

### PUT `/api/academic/carreras/:id`
Actualiza una carrera. Todos los campos son opcionales.

---

### DELETE `/api/academic/carreras/:id`
Elimina una carrera.

---

### POST `/api/academic/asignaturas`
Crea una asignatura.

**Body:**
```json
{
  "nombre": "Programación Orientada a Objetos",
  "codigo": "POO-101",
  "descripcion": "Fundamentos de POO",
  "creditos": 4
}
```
| Campo | Tipo | Requerido | Validaciones |
|---|---|---|---|
| `nombre` | string | Sí | — |
| `codigo` | string | No | — |
| `descripcion` | string | No | — |
| `creditos` | number | No | — |

**Respuesta 201** con la asignatura creada.

---

### GET `/api/academic/asignaturas`
Lista todas las asignaturas.

---

### GET `/api/academic/asignaturas/:id`
Obtiene una asignatura por UUID.

---

### PUT `/api/academic/asignaturas/:id`
Actualiza una asignatura. Todos los campos son opcionales.

---

### DELETE `/api/academic/asignaturas/:id`
Elimina una asignatura.

---

### POST `/api/academic/planes-estudio`
Crea un plan de estudio (relación entre carrera y asignatura).

**Body:**
```json
{
  "nombre": "Plan 2024",
  "anio": 2024,
  "carrera_id": "uuid-de-la-carrera",
  "asignatura_id": "uuid-de-la-asignatura"
}
```
| Campo | Tipo | Requerido | Validaciones |
|---|---|---|---|
| `nombre` | string | No | — |
| `anio` | number | No | — |
| `carrera_id` | string | Sí | UUID v4 válido |
| `asignatura_id` | string | Sí | UUID v4 válido |

**Respuesta 201** con el plan creado.

---

### GET `/api/academic/planes-estudio`
Lista todos los planes de estudio.

---

### GET `/api/academic/planes-estudio/:id`
Obtiene un plan de estudio por UUID.

---

### GET `/api/academic/carreras/:carrera_id/planes-estudio`
Lista los planes de estudio de una carrera específica.

---

### PUT `/api/academic/planes-estudio/:id`
Actualiza un plan de estudio. Todos los campos son opcionales.

---

### DELETE `/api/academic/planes-estudio/:id`
Elimina un plan de estudio.

---

### POST `/api/academic/matriculas`
Matricula un estudiante en una carrera.

**Body:**
```json
{
  "estudiante_id": 1,
  "carrera_id": "uuid-de-la-carrera",
  "periodo_ingreso": "2026-1",
  "estado_academico": "activo"
}
```
| Campo | Tipo | Requerido | Validaciones |
|---|---|---|---|
| `estudiante_id` | integer | Sí | — |
| `carrera_id` | string | Sí | UUID v4 válido |
| `periodo_ingreso` | string | Sí | Máx. 10 caracteres. Ej: `"2026-1"` |
| `estado_academico` | string | No | `activo` \| `graduado` \| `retirado` \| `suspendido` |

**Respuesta 201** con la matrícula creada.

---

### GET `/api/academic/matriculas`
Lista todas las matrículas.

---

### GET `/api/academic/matriculas/:id`
Obtiene una matrícula por UUID.

---

### GET `/api/academic/estudiantes/:estudiante_id/matriculas`
Lista las matrículas de un estudiante (ID entero).

---

### GET `/api/academic/carreras/:carrera_id/matriculas`
Lista las matrículas de una carrera (UUID).

---

### PUT `/api/academic/matriculas/:id`
Actualiza una matrícula. Todos los campos son opcionales.

---

### DELETE `/api/academic/matriculas/:id`
Elimina una matrícula.

---

## 4. Módulo Courses — `/api/courses`

### POST `/api/courses/semestres`
Crea un semestre académico.

**Body:**
```json
{
  "nombre": "2026-1",
  "codigo": "SEM-2026-1",
  "fecha_inicio": "2026-02-01",
  "fecha_fin": "2026-06-30",
  "estado": true
}
```
| Campo | Tipo | Requerido | Validaciones |
|---|---|---|---|
| `nombre` | string | Sí | — |
| `codigo` | string | Sí | — |
| `fecha_inicio` | date | No | Fecha ISO 8601 |
| `fecha_fin` | date | No | Fecha ISO 8601 |
| `estado` | boolean | No | — |

**Respuesta 201** con el semestre creado.

---

### GET `/api/courses/semestres`
Lista todos los semestres.

---

### GET `/api/courses/semestres/:id`
Obtiene un semestre por UUID.

---

### PUT `/api/courses/semestres/:id`
Actualiza un semestre. Todos los campos son opcionales.

---

### DELETE `/api/courses/semestres/:id`
Elimina un semestre.

---

### POST `/api/courses/grupos`
Crea un grupo (sección de clase).

**Body:**
```json
{
  "nombre": "Grupo A",
  "codigo_grupo": "POO-101-A",
  "docente_id": 1,
  "asignatura_id": "uuid-de-la-asignatura",
  "semestre_id": "uuid-del-semestre"
}
```
| Campo | Tipo | Requerido | Validaciones |
|---|---|---|---|
| `nombre` | string | No | — |
| `codigo_grupo` | string | Sí | — |
| `docente_id` | integer | Sí | — |
| `asignatura_id` | string | Sí | UUID v4 válido |
| `semestre_id` | string | Sí | UUID v4 válido |

**Respuesta 201** con el grupo creado (incluye relaciones eager: docente, asignatura, semestre).

---

### GET `/api/courses/grupos`
Lista todos los grupos.

---

### GET `/api/courses/grupos/:id`
Obtiene un grupo por UUID.

---

### GET `/api/courses/semestres/:semestre_id/grupos`
Lista los grupos de un semestre específico.

---

### GET `/api/courses/docentes/:docente_id/grupos`
Lista los grupos de un docente (ID entero).

---

### PUT `/api/courses/grupos/:id`
Actualiza un grupo. Todos los campos son opcionales.

---

### DELETE `/api/courses/grupos/:id`
Elimina un grupo.

---

### POST `/api/courses/inscripciones`
Inscribe un estudiante en un grupo.

**Body:**
```json
{
  "estudiante_id": 1,
  "grupo_id": "uuid-del-grupo",
  "fecha_inscripcion": "2026-02-05",
  "estado": "activo"
}
```
| Campo | Tipo | Requerido | Validaciones |
|---|---|---|---|
| `estudiante_id` | integer | Sí | — |
| `grupo_id` | string | Sí | UUID v4 válido |
| `fecha_inscripcion` | date | Sí | Fecha ISO 8601 |
| `estado` | string | No | `activo` \| `inactivo` \| `retirado` |

**Respuesta 201** con la inscripción creada.

---

### GET `/api/courses/inscripciones`
Lista todas las inscripciones.

---

### GET `/api/courses/inscripciones/:id`
Obtiene una inscripción por UUID.

---

### GET `/api/courses/grupos/:grupo_id/inscripciones`
Lista las inscripciones de un grupo.

---

### GET `/api/courses/estudiantes/:estudiante_id/inscripciones`
Lista las inscripciones de un estudiante (ID entero).

---

### PUT `/api/courses/inscripciones/:id`
Actualiza una inscripción. Todos los campos son opcionales.

---

### DELETE `/api/courses/inscripciones/:id`
Elimina una inscripción.

---

## 5. Módulo Rubrics — `/api/rubrics`

### POST `/api/rubrics`
Crea una rúbrica.

**Body:**
```json
{
  "titulo": "Rúbrica de Exposición Oral",
  "descripcion": "Evalúa la presentación oral de proyectos de grado",
  "es_publica": true
}
```
| Campo | Tipo | Requerido | Validaciones |
|---|---|---|---|
| `titulo` | string | Sí | — |
| `descripcion` | string | No | — |
| `es_publica` | boolean | No | — |

**Respuesta 201** con la rúbrica creada.

---

### GET `/api/rubrics`
Lista todas las rúbricas.

---

### GET `/api/rubrics/:id`
Obtiene una rúbrica por UUID (incluye criterios y escalas anidadas).

---

### PUT `/api/rubrics/:id`
Actualiza una rúbrica. Todos los campos son opcionales.

---

### DELETE `/api/rubrics/:id`
Elimina una rúbrica.

---

### POST `/api/rubrics/:rubrica_id/criterios`
Crea un criterio dentro de una rúbrica. El `rubrica_id` del parámetro de ruta tiene prioridad sobre el body.

**Body:**
```json
{
  "nombre": "Claridad en la Exposición",
  "descripcion": "El estudiante comunica sus ideas de forma clara y coherente"
}
```
| Campo | Tipo | Requerido | Validaciones |
|---|---|---|---|
| `nombre` | string | Sí | — |
| `descripcion` | string | No | — |
| `rubrica_id` | string | Opcional | UUID v4 (sobreescrito por el param de ruta) |

**Respuesta 201** con el criterio creado.

---

### GET `/api/rubrics/:rubrica_id/criterios`
Lista los criterios de una rúbrica (incluye escalas).

---

### GET `/api/rubrics/criterios/:id`
Obtiene un criterio por UUID (incluye escalas).

---

### PUT `/api/rubrics/criterios/:id`
Actualiza un criterio. Todos los campos son opcionales.

---

### DELETE `/api/rubrics/criterios/:id`
Elimina un criterio.

---

### POST `/api/rubrics/criterios/:criterio_id/escalas`
Crea una escala dentro de un criterio. El `criterio_id` del parámetro de ruta tiene prioridad sobre el body.

**Body:**
```json
{
  "nombre": "Excelente",
  "descripcion": "El estudiante demuestra dominio total del tema",
  "valor": 5.0
}
```
| Campo | Tipo | Requerido | Validaciones |
|---|---|---|---|
| `nombre` | string | Sí | — |
| `descripcion` | string | No | — |
| `valor` | number | No | Decimal (ej: `4.5`) |
| `criterio_id` | string | Opcional | UUID v4 (sobreescrito por el param de ruta) |

**Respuesta 201** con la escala creada.

---

### GET `/api/rubrics/criterios/:criterio_id/escalas`
Lista las escalas de un criterio.

---

### GET `/api/rubrics/escalas/:id`
Obtiene una escala por UUID.

---

### PUT `/api/rubrics/escalas/:id`
Actualiza una escala. Todos los campos son opcionales.

---

### DELETE `/api/rubrics/escalas/:id`
Elimina una escala.

---

## 6. Módulo Scores — `/api/scores`

### POST `/api/scores/evaluaciones`
Crea una evaluación asociada a una asignatura y rúbrica.

**Body:**
```json
{
  "nombre": "Parcial 1 — Diseño de Base de Datos",
  "descripcion": "Evaluación de modelado entidad-relación",
  "nota": 4.5,
  "asignatura_id": "uuid-de-la-asignatura",
  "rubrica_id": "uuid-de-la-rubrica"
}
```
| Campo | Tipo | Requerido | Validaciones |
|---|---|---|---|
| `nombre` | string | Sí | — |
| `descripcion` | string | No | — |
| `nota` | number | Sí | Entre `0` y `5`, máx. 2 decimales |
| `asignatura_id` | string | Sí | UUID v4 válido |
| `rubrica_id` | string | Sí | UUID v4 válido |

**Respuesta 201** con la evaluación creada.

---

### GET `/api/scores/evaluaciones`
Lista todas las evaluaciones.

---

### GET `/api/scores/evaluaciones/:id`
Obtiene una evaluación por UUID.

---

### GET `/api/scores/asignaturas/:asignatura_id/evaluaciones`
Lista las evaluaciones de una asignatura.

---

### GET `/api/scores/rubricas/:rubrica_id/evaluaciones`
Lista las evaluaciones asociadas a una rúbrica.

---

### PUT `/api/scores/evaluaciones/:id`
Actualiza una evaluación. Todos los campos son opcionales.

---

### DELETE `/api/scores/evaluaciones/:id`
Elimina una evaluación.

---

### POST `/api/scores/notas`
Registra la nota final de un estudiante para una inscripción y rúbrica.

**Body:**
```json
{
  "nota_final": 3.8,
  "observaciones": "Buen desempeño general, mejorar la parte escrita",
  "estudiante_id": 1,
  "inscripcion_id": "uuid-de-la-inscripcion",
  "rubrica_id": "uuid-de-la-rubrica"
}
```
| Campo | Tipo | Requerido | Validaciones |
|---|---|---|---|
| `nota_final` | number | No | Máx. 2 decimales |
| `observaciones` | string | No | — |
| `estudiante_id` | integer | Sí | — |
| `inscripcion_id` | string | Sí | UUID v4 válido |
| `rubrica_id` | string | Sí | UUID v4 válido |

**Respuesta 201** con la nota creada.

---

### GET `/api/scores/notas`
Lista todas las notas.

---

### GET `/api/scores/notas/:id`
Obtiene una nota por UUID.

---

### GET `/api/scores/inscripciones/:inscripcion_id/notas`
Lista las notas de una inscripción.

---

### GET `/api/scores/estudiantes/:estudiante_id/notas`
Lista las notas de un estudiante (ID entero).

---

### PUT `/api/scores/notas/:id`
Actualiza una nota. Todos los campos son opcionales.

---

### DELETE `/api/scores/notas/:id`
Elimina una nota.

---

### POST `/api/scores/calificacion-detalles`
Registra el detalle de calificación para una escala específica.

**Body:**
```json
{
  "puntaje": 4.0,
  "comentario": "Domina los conceptos pero falla en la presentación",
  "escala_id": "uuid-de-la-escala"
}
```
| Campo | Tipo | Requerido | Validaciones |
|---|---|---|---|
| `puntaje` | number | No | Entre `0` y `5`, máx. 2 decimales |
| `comentario` | string | No | — |
| `escala_id` | string | No | UUID v4 válido |

**Respuesta 201** con el detalle creado.

---

### GET `/api/scores/calificacion-detalles`
Lista todos los detalles de calificación.

---

### GET `/api/scores/calificacion-detalles/:id`
Obtiene un detalle de calificación por UUID.

---

### PUT `/api/scores/calificacion-detalles/:id`
Actualiza un detalle de calificación. Todos los campos son opcionales.

---

### DELETE `/api/scores/calificacion-detalles/:id`
Elimina un detalle de calificación.

---

## Resumen de Endpoints

| Módulo | Prefijo | Total |
|---|---|---|
| Auth | `/api/auth` | 3 |
| Users | `/api/users` | 15 |
| Academic | `/api/academic` | 17 |
| Courses | `/api/courses` | 16 |
| Rubrics | `/api/rubrics` | 15 |
| Scores | `/api/scores` | 17 |
| **Total** | | **83** |

---

## Notas de Seguridad

- Actualmente **todas las rutas son públicas** (sin guards activos) para facilitar el desarrollo.
- Los guards `JwtAuthGuard` y `RolesGuard` están implementados y listos para activarse.
- Para proteger una ruta, agregar en el controlador:
  ```typescript
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  ```
- El token JWT se envía como `Authorization: Bearer <token>` en el header.
- La autenticación Google solo acepta correos `@ucaldas.edu.co`.
