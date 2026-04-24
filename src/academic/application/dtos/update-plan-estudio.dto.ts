// El plan de estudios no se edita directamente. Se modifica a través de:
// - POST /academic/planes/:id/asignaturas (agregar asignatura)
// - DELETE /academic/planes/:id/asignaturas/:asignaturaId (remover asignatura)
// - PATCH /academic/planes/:id/publicar (publicar nueva versión)
export class UpdatePlanEstudioDto { }
