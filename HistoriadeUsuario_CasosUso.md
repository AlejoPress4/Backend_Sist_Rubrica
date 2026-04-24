---

# Historias de usuario

## Administrador

---

**HU-01 — Gestionar usuarios**
**Actor:** Administrador

*Como administrador, quiero gestionar los usuarios del sistema (docentes y estudiantes) para mantener actualizado el registro de personas con acceso a la plataforma.*

Criterios de aceptación:
1. El administrador puede crear, editar y desactivar cuentas de usuario.
2. Al crear un usuario se valida que el correo institucional no esté duplicado.
3. El sistema envía una notificación al usuario cuando su cuenta es creada o modificada.
4. El administrador puede filtrar usuarios por rol, carrera o estado (activo/inactivo).

---

**HU-02 — Gestionar carreras y semestres**
**Actor:** Administrador

*Como administrador, quiero gestionar carreras y semestres para estructurar la oferta académica del sistema.*

Criterios de aceptación:
1. Se pueden crear, editar y archivar carreras con nombre y código único.
2. Los semestres tienen fecha de inicio, fecha de fin y estado (activo/cerrado).
3. No se puede eliminar una carrera que tenga estudiantes matriculados.
4. Solo puede haber un semestre activo a la vez por carrera.

---

**HU-03 — Gestionar plan de estudios**
**Actor:** Administrador

*Como administrador, quiero gestionar el plan de estudios de cada carrera para definir qué asignaturas la conforman y en qué semestre se cursan.*

Criterios de aceptación:
1. Se pueden agregar o remover asignaturas del plan de estudios de una carrera.
2. Cada asignatura en el plan tiene un semestre sugerido y créditos asociados.
3. Los cambios al plan solo aplican a nuevas cohortes, no a estudiantes ya matriculados.
4. Se puede consultar el histórico de versiones del plan de estudios.

---

**HU-04 — Asignar docente a grupo**
**Actor:** Administrador

*Como administrador, quiero asignar docentes a grupos de clase para que puedan gestionar sus grupos en el sistema.*

Criterios de aceptación:
1. Se puede asignar uno o más docentes a un grupo en un semestre activo.
2. Un docente no puede estar asignado dos veces al mismo grupo.
3. El sistema notifica al docente cuando se le asigna un nuevo grupo.
4. Se puede reasignar un docente a otro grupo en caso de cambio.

---

**HU-05 — Matricular estudiante**
**Actor:** Administrador

*Como administrador, quiero matricular estudiantes en las asignaturas de su carrera para que queden inscritos en los grupos correspondientes.*

Criterios de aceptación:
1. Se puede matricular un estudiante en una o varias asignaturas del semestre activo.
2. El sistema valida que el estudiante no exceda el máximo de créditos permitido.
3. Se genera un registro de matrícula con fecha y estado.
4. El administrador puede cancelar una matrícula antes del cierre del semestre.

---

## Docente

---

**HU-06 — Inscribir grupo a asignatura**
**Actor:** Docente

*Como docente, quiero inscribir mi grupo a una asignatura del semestre activo para tener acceso a los estudiantes que debo evaluar.*

Criterios de aceptación:
1. El docente solo ve los grupos y asignaturas que le han sido asignados.
2. La inscripción queda activa desde la fecha de registro hasta el cierre del semestre.
3. No se puede inscribir un grupo si ya existe otro del mismo docente en la misma asignatura y semestre.
4. El sistema confirma la inscripción con un resumen del grupo y el número de estudiantes.

---

**HU-07 — Crear rúbrica de evaluación**
**Actor:** Docente

*Como docente, quiero crear rúbricas de evaluación con criterios y escalas para tener un instrumento estructurado con el que calificar a mis estudiantes.*

Criterios de aceptación:
1. Una rúbrica tiene nombre, descripción y está asociada a una asignatura.
2. El docente puede agregar múltiples criterios a la rúbrica.
3. Cada criterio tiene nombre, descripción y peso porcentual.
4. Los pesos de todos los criterios deben sumar exactamente 100%.
5. Se puede guardar la rúbrica como borrador antes de publicarla.
6. Una rúbrica publicada no puede eliminarse, solo archivarse.

---

**HU-08 — Definir criterios y escalas**
**Actor:** Docente

*Como docente, quiero definir escalas de calificación para cada criterio de la rúbrica para que los niveles de desempeño sean claros y medibles.*

Criterios de aceptación:
1. Cada criterio tiene entre 2 y 5 niveles de escala (ej. Insuficiente, Básico, Satisfactorio, Excelente).
2. Cada nivel tiene etiqueta, descripción y valor numérico.
3. Los valores numéricos deben ser únicos dentro del mismo criterio.
4. Se puede reutilizar una escala definida previamente en otros criterios.

---

**HU-09 — Asociar rúbrica a evaluación**
**Actor:** Docente

*Como docente, quiero asociar una rúbrica a una evaluación concreta para que quede claro qué instrumento se usará en cada actividad evaluativa.*

Criterios de aceptación:
1. Una evaluación puede tener asociada una sola rúbrica.
2. Solo se pueden asociar rúbricas publicadas.
3. Una rúbrica puede estar asociada a múltiples evaluaciones.
4. El docente puede cambiar la rúbrica asociada antes de iniciar la calificación.

---

**HU-10 — Calificar estudiante con rúbrica**
**Actor:** Docente

*Como docente, quiero calificar a cada estudiante usando la rúbrica asociada a la evaluación para registrar su desempeño por criterio de forma objetiva.*

Criterios de aceptación:
1. El docente selecciona el nivel de escala para cada criterio por cada estudiante.
2. La nota se calcula automáticamente ponderando los criterios.
3. Se puede guardar la calificación parcialmente y completarla después.
4. Una vez enviada la calificación, el estudiante recibe una notificación.
5. El docente puede agregar comentarios por criterio.

---

**HU-11 — Registrar nota final**
**Actor:** Docente

*Como docente, quiero registrar la nota final de cada estudiante para que quede como registro oficial en el semestre.*

Criterios de aceptación:
1. La nota final se calcula como suma ponderada de todas las evaluaciones del grupo.
2. El docente puede revisar y confirmar la nota antes de registrarla oficialmente.
3. Una nota registrada oficialmente no puede modificarse sin aprobación del administrador.
4. El sistema genera un reporte de notas del grupo en formato descargable.

---

## Estudiante

---

**HU-12 — Consultar rúbrica de evaluación**
**Actor:** Estudiante

*Como estudiante, quiero consultar la rúbrica de una actividad antes de realizarla para saber con qué criterios seré calificado.*

Criterios de aceptación:
1. El estudiante puede ver las rúbricas de las evaluaciones de sus asignaturas activas.
2. Se muestran todos los criterios con su peso y los niveles de escala con descripción.
3. La rúbrica es de solo lectura para el estudiante.
4. Se muestra la fecha de publicación de la rúbrica.

---

**HU-13 — Ver calificaciones detalladas**
**Actor:** Estudiante

*Como estudiante, quiero ver mis calificaciones detalladas por criterio en cada evaluación para entender en qué aspectos debo mejorar.*

Criterios de aceptación:
1. El estudiante puede ver el nivel obtenido y el puntaje en cada criterio.
2. Se muestra la nota final calculada junto con el desglose por evaluación.
3. Se visualizan los comentarios del docente por criterio si los hay.
4. El estudiante puede descargar un reporte de su desempeño.

---
---

# Especificación de casos de uso

---

## CU-01 — Gestionar usuarios

| Campo | Detalle |
|---|---|
| **Caso de uso** | CU-01 – Gestionar usuarios |
| **Actor(es)** | Administrador |
| **Descripción** | Permite al administrador crear, consultar, editar y desactivar cuentas de usuario en el sistema. |
| **Precondiciones** | El administrador ha iniciado sesión. El correo institucional del nuevo usuario está disponible. |
| **Postcondiciones** | El usuario queda registrado, editado o desactivado. Se genera un log de auditoría. |
| **Flujo principal** | 1. El administrador accede al módulo de usuarios. 2. Selecciona la acción: Crear / Editar / Desactivar. 3. Ingresa o modifica los datos (nombre, correo, rol, carrera). 4. El sistema valida y confirma la operación. 5. El sistema envía notificación al usuario afectado. |
| **Flujos alternativos** | 2a. Si selecciona Buscar, puede filtrar por rol, carrera o estado antes de editar. |
| **Excepciones** | E1: Correo duplicado → el sistema notifica y solicita uno diferente. E2: Campos obligatorios vacíos → el sistema resalta los campos faltantes. |
| **Incluye** | — |
| **Extiende** | — |

---

## CU-02 — Gestionar carreras y semestres

| Campo | Detalle |
|---|---|
| **Caso de uso** | CU-02 – Gestionar carreras y semestres |
| **Actor(es)** | Administrador |
| **Descripción** | Permite crear y administrar las carreras académicas y sus semestres correspondientes. |
| **Precondiciones** | El administrador ha iniciado sesión. |
| **Postcondiciones** | La carrera o semestre queda creado, actualizado o archivado. |
| **Flujo principal** | 1. El administrador accede al módulo académico. 2. Selecciona Carreras o Semestres. 3. Crea o edita el registro. 4. El sistema valida unicidad de código y coherencia de fechas. 5. Confirma y guarda el registro. |
| **Flujos alternativos** | 3a. Si archiva una carrera, el sistema verifica que no tenga semestre activo antes de proceder. |
| **Excepciones** | E1: Código de carrera duplicado → operación rechazada. E2: Fecha de inicio posterior a la de fin → el sistema lo indica. |
| **Incluye** | — |
| **Extiende** | — |

---

## CU-03 — Gestionar plan de estudios

| Campo | Detalle |
|---|---|
| **Caso de uso** | CU-03 – Gestionar plan de estudios |
| **Actor(es)** | Administrador |
| **Descripción** | Permite definir y mantener las asignaturas que conforman el plan de estudios de cada carrera. |
| **Precondiciones** | Existe al menos una carrera registrada. El administrador ha iniciado sesión. |
| **Postcondiciones** | El plan queda actualizado. Se conserva el historial de versiones. |
| **Flujo principal** | 1. El administrador selecciona una carrera. 2. Accede al plan de estudios activo. 3. Agrega, edita o elimina asignaturas. 4. Asigna semestre sugerido y créditos. 5. Publica la nueva versión del plan. |
| **Flujos alternativos** | 5a. Si guarda como borrador, el plan anterior sigue vigente hasta que se publique la nueva versión. |
| **Excepciones** | E1: Intento de eliminar una asignatura con estudiantes matriculados → operación bloqueada. |
| **Incluye** | — |
| **Extiende** | — |

---

## CU-04 — Asignar docente a grupo

| Campo | Detalle |
|---|---|
| **Caso de uso** | CU-04 – Asignar docente a grupo |
| **Actor(es)** | Administrador |
| **Descripción** | Permite asignar uno o más docentes a un grupo de clase dentro de un semestre activo. |
| **Precondiciones** | Existen grupos creados en el semestre activo. El docente tiene cuenta activa. |
| **Postcondiciones** | El docente queda vinculado al grupo y puede gestionar sus evaluaciones. |
| **Flujo principal** | 1. El administrador selecciona el semestre activo. 2. Busca y selecciona el grupo. 3. Busca y selecciona el docente. 4. Confirma la asignación. 5. El sistema notifica al docente por correo. |
| **Flujos alternativos** | 4a. El administrador puede reasignar el grupo a otro docente si el anterior aún no ha registrado calificaciones. |
| **Excepciones** | E1: Docente ya asignado al mismo grupo → operación rechazada. |
| **Incluye** | — |
| **Extiende** | — |

---

## CU-05 — Matricular estudiante

| Campo | Detalle |
|---|---|
| **Caso de uso** | CU-05 – Matricular estudiante |
| **Actor(es)** | Administrador |
| **Descripción** | Permite inscribir a un estudiante en las asignaturas del semestre activo dentro de su carrera. |
| **Precondiciones** | El estudiante tiene cuenta activa. Existe un semestre activo con grupos disponibles. |
| **Postcondiciones** | Se genera un registro de matrícula. El estudiante puede acceder a las asignaturas inscritas. |
| **Flujo principal** | 1. El administrador busca y selecciona al estudiante. 2. Selecciona las asignaturas del semestre activo. 3. El sistema valida el límite de créditos. 4. El administrador confirma la matrícula. 5. El sistema genera el registro y notifica al estudiante. |
| **Flujos alternativos** | 4a. El administrador puede cancelar la matrícula de una asignatura específica antes del cierre del semestre. |
| **Excepciones** | E1: Límite de créditos excedido → el sistema rechaza y muestra el límite. E2: Asignatura sin cupo → el sistema notifica la indisponibilidad. |
| **Incluye** | — |
| **Extiende** | — |

---

## CU-06 — Inscribir grupo a asignatura

| Campo | Detalle |
|---|---|
| **Caso de uso** | CU-06 – Inscribir grupo a asignatura |
| **Actor(es)** | Docente |
| **Descripción** | Permite al docente asociar su grupo a una asignatura del semestre activo. |
| **Precondiciones** | El docente tiene al menos un grupo asignado. Existe un semestre activo. |
| **Postcondiciones** | El grupo queda vinculado a la asignatura y los estudiantes pueden verla. |
| **Flujo principal** | 1. El docente accede a sus grupos asignados. 2. Selecciona el grupo y la asignatura. 3. Confirma la inscripción. 4. El sistema registra la vinculación y muestra el listado de estudiantes. |
| **Flujos alternativos** | — |
| **Excepciones** | E1: Grupo ya inscrito en la misma asignatura y semestre → operación rechazada. |
| **Incluye** | — |
| **Extiende** | — |

---

## CU-07 — Crear rúbrica de evaluación

| Campo | Detalle |
|---|---|
| **Caso de uso** | CU-07 – Crear rúbrica de evaluación |
| **Actor(es)** | Docente |
| **Descripción** | Permite al docente diseñar una rúbrica con criterios ponderados y escalas de desempeño para una asignatura. |
| **Precondiciones** | El docente tiene al menos un grupo inscrito en una asignatura. |
| **Postcondiciones** | La rúbrica queda guardada (borrador o publicada) y disponible para asociar a evaluaciones. |
| **Flujo principal** | 1. El docente accede al módulo de rúbricas. 2. Crea una nueva rúbrica con nombre y descripción. 3. Agrega criterios con nombre, descripción y peso. 4. Verifica que los pesos sumen 100%. 5. Publica la rúbrica o la guarda como borrador. |
| **Flujos alternativos** | 5a. Si guarda como borrador, puede editar y publicar en otro momento. |
| **Excepciones** | E1: Pesos no suman 100% → se bloquea la publicación e indica la diferencia. E2: Rúbrica sin criterios → no se permite publicar. |
| **Incluye** | CU-08 Definir criterios y escalas |
| **Extiende** | — |

---

## CU-08 — Definir criterios y escalas

| Campo | Detalle |
|---|---|
| **Caso de uso** | CU-08 – Definir criterios y escalas |
| **Actor(es)** | Docente |
| **Descripción** | Permite al docente definir los niveles de desempeño de cada criterio dentro de una rúbrica. |
| **Precondiciones** | Existe una rúbrica en estado borrador con al menos un criterio. |
| **Postcondiciones** | Cada criterio tiene entre 2 y 5 niveles de escala con etiqueta, descripción y valor numérico. |
| **Flujo principal** | 1. El docente selecciona un criterio de la rúbrica. 2. Agrega niveles de escala (etiqueta, descripción, valor). 3. Verifica que los valores sean únicos dentro del criterio. 4. Guarda los cambios. 5. Repite para cada criterio. |
| **Flujos alternativos** | 2a. El docente puede seleccionar una escala preexistente para reutilizarla en el criterio actual. |
| **Excepciones** | E1: Valores de escala duplicados en el mismo criterio → nivel rechazado. E2: Menos de 2 niveles en un criterio → no se puede publicar la rúbrica. |
| **Incluye** | — |
| **Extiende** | — |

---

## CU-09 — Asociar rúbrica a evaluación

| Campo | Detalle |
|---|---|
| **Caso de uso** | CU-09 – Asociar rúbrica a evaluación |
| **Actor(es)** | Docente |
| **Descripción** | Permite al docente vincular una rúbrica publicada a una evaluación específica de su grupo. |
| **Precondiciones** | El docente tiene evaluaciones creadas en el grupo. Existen rúbricas publicadas para la asignatura. |
| **Postcondiciones** | La evaluación queda vinculada a la rúbrica. Los estudiantes pueden consultarla. |
| **Flujo principal** | 1. El docente accede a la evaluación. 2. Selecciona la opción de asociar rúbrica. 3. El sistema muestra las rúbricas publicadas disponibles. 4. El docente selecciona la rúbrica. 5. El sistema confirma la asociación. |
| **Flujos alternativos** | 4a. El docente puede cambiar la rúbrica asociada si aún no ha iniciado calificaciones. |
| **Excepciones** | E1: No existen rúbricas publicadas para la asignatura → el sistema sugiere crear una. E2: La evaluación ya tiene calificaciones registradas → no se permite cambiar la rúbrica. |
| **Incluye** | — |
| **Extiende** | — |

---

## CU-10 — Calificar estudiante con rúbrica

| Campo | Detalle |
|---|---|
| **Caso de uso** | CU-10 – Calificar estudiante con rúbrica |
| **Actor(es)** | Docente |
| **Descripción** | Permite al docente registrar el desempeño de cada estudiante seleccionando el nivel de escala por criterio en una evaluación. |
| **Precondiciones** | La evaluación tiene una rúbrica asociada. El grupo tiene estudiantes matriculados. |
| **Postcondiciones** | La calificación del estudiante queda registrada por criterio. La nota se calcula automáticamente. |
| **Flujo principal** | 1. El docente accede al listado de estudiantes de la evaluación. 2. Selecciona un estudiante. 3. Para cada criterio, selecciona el nivel de escala obtenido. 4. Opcionalmente agrega comentarios por criterio. 5. Guarda o envía la calificación. 6. El sistema calcula la nota ponderada y notifica al estudiante. |
| **Flujos alternativos** | 5a. Si guarda sin enviar, la calificación queda en estado borrador y puede editarse. |
| **Excepciones** | E1: Criterio sin nivel seleccionado al intentar enviar → el sistema bloquea el envío e indica los criterios pendientes. |
| **Incluye** | CU-11 Registrar nota final |
| **Extiende** | CU-12 Consultar rúbrica de evaluación |

---

## CU-11 — Registrar nota final

| Campo | Detalle |
|---|---|
| **Caso de uso** | CU-11 – Registrar nota final |
| **Actor(es)** | Docente |
| **Descripción** | Permite al docente consolidar y registrar oficialmente la nota final de cada estudiante en el semestre. |
| **Precondiciones** | Todas las evaluaciones del grupo tienen calificaciones enviadas. El semestre sigue activo. |
| **Postcondiciones** | La nota final queda registrada de forma oficial e inmutable (salvo aprobación del administrador). |
| **Flujo principal** | 1. El docente accede al módulo de notas finales del grupo. 2. El sistema muestra la nota calculada por estudiante (suma ponderada de evaluaciones). 3. El docente revisa el consolidado. 4. Confirma el registro oficial de notas. 5. El sistema cierra la edición y genera el reporte del grupo. |
| **Flujos alternativos** | 3a. El docente puede volver a cualquier evaluación para corregir antes de confirmar. |
| **Excepciones** | E1: Algún estudiante sin todas las evaluaciones calificadas → el sistema advierte pero permite continuar con nota parcial. E2: Semestre ya cerrado → el sistema bloquea el registro y redirige al administrador. |
| **Incluye** | — |
| **Extiende** | — |

---

## CU-12 — Consultar rúbrica de evaluación

| Campo | Detalle |
|---|---|
| **Caso de uso** | CU-12 – Consultar rúbrica de evaluación |
| **Actor(es)** | Estudiante, Docente |
| **Descripción** | Permite al estudiante (y al docente) consultar los criterios y escalas de la rúbrica asociada a una evaluación. |
| **Precondiciones** | El estudiante está matriculado en la asignatura. La evaluación tiene una rúbrica publicada asociada. |
| **Postcondiciones** | El estudiante visualiza la rúbrica. No se realiza ningún cambio en el sistema. |
| **Flujo principal** | 1. El estudiante accede a su listado de evaluaciones. 2. Selecciona una evaluación. 3. El sistema muestra la rúbrica con criterios, pesos y niveles de escala. 4. El estudiante consulta los detalles en modo lectura. |
| **Flujos alternativos** | — |
| **Excepciones** | E1: La evaluación no tiene rúbrica asociada aún → el sistema muestra un mensaje informativo. |
| **Incluye** | — |
| **Extiende** | — |

---

## CU-13 — Ver calificaciones detalladas

| Campo | Detalle |
|---|---|
| **Caso de uso** | CU-13 – Ver calificaciones detalladas |
| **Actor(es)** | Estudiante |
| **Descripción** | Permite al estudiante consultar su desempeño desglosado por criterio en cada evaluación calificada. |
| **Precondiciones** | El docente ha enviado la calificación de la evaluación para ese estudiante. |
| **Postcondiciones** | El estudiante visualiza su nota y retroalimentación. No se modifica ningún dato. |
| **Flujo principal** | 1. El estudiante accede a sus calificaciones. 2. Selecciona una asignatura y una evaluación. 3. El sistema muestra el nivel obtenido por criterio, el puntaje parcial y la nota final. 4. Se muestran los comentarios del docente por criterio si los hay. 5. El estudiante puede descargar el reporte de desempeño. |
| **Flujos alternativos** | — |
| **Excepciones** | E1: La calificación aún está en borrador → el sistema no la muestra hasta que el docente la envíe. |
| **Incluye** | — |
| **Extiende** | — |