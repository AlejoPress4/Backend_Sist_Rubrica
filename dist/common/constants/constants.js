"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROLES_KEY = exports.EstadoMatricula = exports.EstadoInscripcion = exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["DOCENTE"] = "docente";
    UserRole["ESTUDIANTE"] = "estudiante";
})(UserRole || (exports.UserRole = UserRole = {}));
var EstadoInscripcion;
(function (EstadoInscripcion) {
    EstadoInscripcion["ACTIVO"] = "activo";
    EstadoInscripcion["INACTIVO"] = "inactivo";
    EstadoInscripcion["RETIRADO"] = "retirado";
})(EstadoInscripcion || (exports.EstadoInscripcion = EstadoInscripcion = {}));
var EstadoMatricula;
(function (EstadoMatricula) {
    EstadoMatricula["ACTIVO"] = "activo";
    EstadoMatricula["GRADUADO"] = "graduado";
    EstadoMatricula["RETIRADO"] = "retirado";
    EstadoMatricula["SUSPENDIDO"] = "suspendido";
})(EstadoMatricula || (exports.EstadoMatricula = EstadoMatricula = {}));
exports.ROLES_KEY = 'roles';
//# sourceMappingURL=constants.js.map