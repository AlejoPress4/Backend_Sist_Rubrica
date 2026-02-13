# Sistema de Gestión de Rúbricas Académicas (Backend) - Documentación Técnica

Este proyecto es el Backend de un **Sistema de Gestión de Rúbricas Académicas**, desarrollado con **NestJS** y **TypeScript**. Su objetivo es permitir la creación, gestión y evaluación de rúbricas para asignaturas y proyectos académicos.

## 🏛️ Arquitectura del Proyecto

El proyecto sigue una arquitectura de **Monolito Modular** (Modular Monolith) combinada con principios de **Clean Architecture** (Arquitectura Limpia). Esto garantiza que el código sea escalable, mantenible y fácil de probar.

### Principios Clave
1.  **Separación de Responsabilidades**: Cada módulo tiene una responsabilidad única y clara.
2.  **Inversión de Dependencias (DIP)**: Los módulos de alto nivel (Application) no dependen de los de bajo nivel (Infrastructure), sino de abstracciones (Interfaces en Domain).
3.  **Flujo de Datos Unidireccional Controlado**:
    *   **External Request** -> **Controller (Infrastructure)** -> **Service (Application)** -> **Repository (Infrastructure via Domain Interface)** -> **Database**.

### Capas de la Aplicación
Dentro de cada módulo (por ejemplo, `RubricsModule`), el código se organiza en tres capas principales:

1.  **Domain (Dominio)**:
    *   Es el núcleo de la lógica de negocio.
    *   Contiene las **Entidades** (`.entity.ts`) que modelan los datos.
    *   Define las **Interfaces** (`.interface.ts`) que deben cumplir los servicios y repositorios.
    *   *No depende de ningún framework externo (en teoría).*

2.  **Application (Aplicación)**:
    *   Contiene la lógica de aplicación y casos de uso.
    *   **Services (`.service.ts`)**: Orquestan la lógica de negocio utilizando las entidades y repositorios abstractos.
    *   **DTOs (Data Transfer Objects)**: Definen la estructura de los datos que entran y salen de la API, asegurando validación (`class-validator`).

3.  **Infrastructure (Infraestructura)**:
    *   Implementa los detalles técnicos.
    *   **Controllers (`.controller.ts`)**: Manejan las peticiones HTTP y responden al cliente.
    *   **Repositories**: La implementación concreta del acceso a datos (usando TypeORM).
    *   **Guards & Strategies**: Implementación de seguridad (JWT, Roles).

---

## 📦 Descripción de Módulos

El sistema se divide en los siguientes módulos funcionales:

*   **Auth Module**: Manejo de autenticación (Login, Registro) y autorización (Roles, JWT Guards).
*   **Users Module**: Gestión de usuarios (Docentes, Estudiantes, Administradores).
*   **Academic Module**: Gestión de la estructura académica (Facultades, Carreras, Asignaturas, Periodos).
*   **Courses Module**: Gestión de cursos (Instancias de asignaturas en un periodo, con estudiantes inscritos).
*   **Rubrics Module**: Core del negocio. Gestión de Rúbricas, Criterios y Niveles de Desempeño.
*   **Scores Module**: Registro de calificaciones y evaluaciones basadas en las rúbricas.
*   **Common**: Utilidades compartidas, constantes, filtros de excepción globales y decoradores.

---

## 📂 Estructura de Carpetas

A continuación, se detalla la estructura típica de un módulo (ej. `src/rubrics/`):

```bash
src/
├── rubrics/
│   ├── rubrics.module.ts       # Definición del módulo y sus dependencias
│   ├── domain/                 # CAPA DE DOMINIO
│   │   ├── entities/           # Modelos de base de datos (TypeORM)
│   │   │   ├── rubrica.entity.ts
│   │   │   └── criterio.entity.ts
│   │   └── interfaces/         # Contratos para inversión de dependencias
│   │       └── rubrics-service.interface.ts
│   ├── application/            # CAPA DE APLICACIÓN
│   │   ├── services/           # Lógica de negocio
│   │   │   └── rubrics.service.ts
│   │   └── dtos/               # Objetos de Transferencia de Datos
│   │       ├── create-rubrica.dto.ts
│   │       └── update-rubrica.dto.ts
│   └── infrastructure/         # CAPA DE INFRAESTRUCTURA
│       └── controllers/        # Endpoints de la API
│           └── rubrics.controller.ts
```

### Elementos Clave
*   **DTOs (`.dto.ts`)**: Se usan para validar datos de entrada en los Controllers (ej. `CreateRubricaDto`). Usan decoradores como `@IsString()`, `@IsNotEmpty()`.
*   **Entities (`.entity.ts`)**: Mapean las tablas de la base de datos. Usan decoradores de TypeORM como `@Entity()`, `@Column()`, `@OneToMany()`.
*   **Guards (`.guard.ts`)**: Interceptan peticiones para verificar permisos (ej. `JwtAuthGuard`, `RolesGuard`).
*   **Decorators (`.decorator.ts`)**: Personalizaciones para obtener datos del usuario o metadata (ej. `@Roles()`, `@GetUser()`).

---

## 🧪 Guía de Pruebas (CRUD Rúbricas)

Para probar la API, puedes usar **Insomnia**, **Postman** o `curl`.
**NOTA IMPORTANTE**: Todas las rutas tienen el prefijo global `/api/v1`.

### 1. Crear Rúbrica (POST)
Crea una nueva rúbrica en el sistema.

*   **URL**: `http://localhost:3000/api/v1/rubrics`
*   **Método**: `POST`
*   **Body (JSON)**:
    ```json
    {
      "titulo": "Rúbrica de Proyecto Final",
      "descripcion": "Evaluación del proyecto integrador de fin de curso",
      "es_publica": true
    }
    ```

### 2. Listar Rúbricas (GET)
Obtiene todas las rúbricas registradas.

*   **URL**: `http://localhost:3000/api/v1/rubrics`
*   **Método**: `GET`

### 3. Obtener Rúbrica por ID (GET)
Trae el detalle de una rúbrica específica.

*   **URL**: `http://localhost:3000/api/v1/rubrics/{UUID}`
    *   *Ejemplo*: `http://localhost:3000/api/v1/rubrics/a1b2c3d4-e5f6...`
*   **Método**: `GET`

### 4. Actualizar Rúbrica (PUT)
Modifica los datos de una rúbrica existente.

*   **URL**: `http://localhost:3000/api/v1/rubrics/{UUID}`
*   **Método**: `PUT`
*   **Body (JSON)**:
    ```json
    {
      "titulo": "Rúbrica de Proyecto Final - Corregida",
      "es_publica": false
    }
    ```

### 5. Eliminar Rúbrica (DELETE)
Elimina una rúbrica del sistema.

*   **URL**: `http://localhost:3000/api/v1/rubrics/{UUID}`
*   **Método**: `DELETE`

---

## 🚀 Ejecución del Proyecto

```bash
# Instalación de dependencias
npm install

# Modo desarrollo (con hot-reload)
npm run start:dev

# Compilación para producción
npm run build
npm run start:prod
```
