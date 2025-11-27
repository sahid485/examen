# Sistema de Administración con Control de Roles

Sistema de login y administración con control de versiones y diferentes roles de usuario.

## Características

- **Sistema de Login**: Pantalla de login con diseño dividido elegante
- **Control de Roles**: 3 niveles de acceso (Superusuario, Administrador, Usuario)
- **Base de Datos Trickle**: Autenticación de usuarios conectada a base de datos
- **Dashboard**: Panel de control con estadísticas y actividad reciente
- **Sidebar**: Barra lateral con logo y navegación
- **Topbar**: Barra superior con campana de notificaciones
- **Control de Versiones**: Sistema versionado para seguimiento

## Roles de Usuario

### Superusuario
- super1@admin.com / super123
- super2@admin.com / super123

### Administrador
- admin1@admin.com / admin123
- admin2@admin.com / admin123

### Usuario
- user1@admin.com / user123
- user2@admin.com / user123

## Estructura

- `index.html`: Página de login
- `dashboard.html`: Panel principal del sistema
- `components/`: Componentes reutilizables
- `utils/`: Utilidades de autenticación

## Versión Actual

1.1 - Integración con base de datos Trickle para autenticación de usuarios
