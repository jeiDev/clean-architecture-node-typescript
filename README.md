# Ethereum Core API

Una API robusta y escalable construida con **Node.js** y **TypeScript**, implementando patrones de **Arquitectura Limpia** y siguiendo las mejores prácticas de desarrollo.

## 📋 Descripción del Proyecto

Ethereum Core API es un backend profesional diseñado para gestionar operaciones relacionadas con la blockchain de Ethereum, con un enfoque especial en la gestión de billeteras (wallets) y autenticación segura. El proyecto utiliza una arquitectura moderna con separación clara de responsabilidades, validación de datos robusta y documentación automática mediante Swagger.

### Características Principales

- ✅ **Arquitectura Limpia**: Separación clara entre capas (Domain, Infrastructure, Services)
- ✅ **API REST completa** con Express.js
- ✅ **Documentación automática** con Swagger/OpenAPI
- ✅ **Base de datos robusta** con TypeORM (soporte PostgreSQL y SQLite)
- ✅ **Validación de datos** con class-validator
- ✅ **Autenticación Digest** integrada
- ✅ **Seguridad mejorada** con Helmet
- ✅ **Gestión de sesiones** y cookies
- ✅ **Migraciones de BD** automáticas
- ✅ **TypeScript** 100%
- ✅ **Hot reload** en desarrollo con Nodemon

---

## 🔧 Requisitos del Sistema

### Node.js y npm
- **Node.js**: v14.x o superior (recomendado v18.x+)
- **npm**: v6.x o superior (incluido con Node.js)

### Base de Datos
- **PostgreSQL**: v12+ (recomendado para producción)
- **SQLite**: v3+ (opcional, para desarrollo)

### Otros
- **Git**: para clonar el repositorio
- **Editor de código**: Visual Studio Code (recomendado)

---

## 📦 Dependencias Principales

### Runtime
```json
{
  "axios": "^0.27.2",
  "class-transformer": "^0.5.1",
  "class-validator": "^0.13.2",
  "cookie-parser": "^1.4.6",
  "dotenv": "^16.0.2",
  "express": "^4.18.1",
  "express-session": "^1.17.3",
  "helmet": "^6.0.0",
  "pg": "^8.8.0",
  "reflect-metadata": "^0.1.13",
  "sqlite3": "^5.1.1",
  "swagger-jsdoc": "^6.2.5",
  "swagger-ui-express": "^4.5.0",
  "typeorm": "^0.3.7"
}
```

### Development
- **TypeScript**: ^4.8.3
- **ts-node**: ^10.x
- **nodemon**: ^2.0.20
- **concurrently**: ^7.4.0

---

## 🚀 Guía de Instalación

### Paso 1: Clonar el repositorio

```bash
git clone https://github.com/jeiDev/clean-architecture-node-typescript.git
cd clean-architecture-node-typescript
```

### Paso 2: Instalar dependencias

```bash
npm install
```

### Paso 3: Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```bash
cp .env.example .env
```

O copia manualmente la siguiente plantilla:

```env
# === CONFIGURACIÓN DEL SERVIDOR ===
NODE_ENV=development
APP_NAME=Ethereum Core API
APP_URL=http://localhost:3000
PORT=3000

# === CONFIGURACIÓN DE COOKIES ===
COOKIE_SECRET=tu_clave_secreta_segura
COOKIE_DOMAIN=localhost
COOKIE_NAME=session_id
COOKIE_EXPIRATION=86400

# === CONFIGURACIÓN DE SWAGGER/DOCUMENTACIÓN ===
SWAGGER_AUTH_USER=admin
SWAGGER_AUTH_PASSWORD=password123
SWAGGER_AUTH_REALM=API Documentation

# === CONFIGURACIÓN DE BASE DE DATOS ===
# Tipo de BD: postgres o sqlite
APP_DB_PROVIDER=postgres
APP_DB_TYPE=postgres
APP_DB_HOST=localhost
APP_DB_PORT=5432
APP_DB_USERNAME=postgres
APP_DB_PASSWORD=postgres
APP_DB_DATABASE=ethereum_core
APP_DB_NAME=ethereum_core
APP_DB_URL=postgres://postgres:postgres@localhost:5432/ethereum_core

# Configuraciones opcionales
APP_DB_SCHEMA=public
APP_DB_SYNCHRONIZE=false
APP_DB_LOGGING=false
APP_DB_AUTO_RECONNECT=true
APP_DB_AUTO_RECONNECT_TRIES=5
APP_DB_AUTO_RECONNECT_INTERVAL=1000
APP_DB_EXTRA_SSL=false
APP_DB_EXTRA_SSL_REJECT_UNAUTHORIZED=false
```

### Paso 4: Crear la base de datos

Para **PostgreSQL**:
```bash
# Inicia psql
psql -U postgres

# Crea la base de datos
CREATE DATABASE ethereum_core;
\q
```

Para **SQLite** (automático):
```bash
# SQLite se crea automáticamente en el primer intento de conexión
# Actualiza tu .env con: APP_DB_TYPE=sqlite
```

### Paso 5: Ejecutar migraciones

```bash
npm run typeorm:migration
```

### Paso 6: (Opcional) Seedear la base de datos

```bash
npm run typeorm:db:seed
```

---

## 🏃 Ejecución

### Desarrollo (con hot reload)

```bash
npm run dev
```

Esto ejecutará:
- TypeScript compiler en modo watch
- Nodemon para reiniciar el servidor en cambios

La aplicación estará disponible en: `http://localhost:3000`

### Producción (compilar y ejecutar)

```bash
# Compilar TypeScript
npm run build

# Ejecutar la aplicación compilada
npm start
```

---

## 📚 Comandos Disponibles

```bash
# Desarrollo
npm run dev                    # Inicia servidor con hot reload (TS watch + Nodemon)
npm run build                  # Compila TypeScript a JavaScript
npm start                      # Ejecuta la versión compilada

# Base de Datos - TypeORM
npm run typeorm                # Ejecuta CLI de TypeORM directamente
npm run typeorm:migration      # Ejecuta todas las migraciones pendientes
npm run typeorm:migration:generate  # Genera una nueva migración
npm run typeorm:migration:create    # Crea un archivo de migración vacío
npm run typeorm:migration:show      # Muestra el estado de migraciones
npm run typeorm:migration:revert    # Revierte la última migración
npm run typeorm:model:create   # Crea una nueva entidad de TypeORM
npm run typeorm:subscriber:create   # Crea un subscriber de eventos
npm run typeorm:db:seed        # Ejecuta seeders para cargar datos iniciales
```

---

## 📂 Estructura del Proyecto

```
src/
├── index.ts                           # Punto de entrada principal
├── app/                               # Configuración de Express
│   ├── index.ts                      # Configuración de middleware
│   ├── cookie.ts                     # Configuración de cookies
│   └── docs/                         # Configuración de documentación
│       ├── index.ts
│       ├── auth.ts                   # Rutas de autenticación (docs)
│       └── core/                     # Swagger/OpenAPI
│
├── config/                            # Configuraciones globales
│   ├── index.ts                      # Exporta todas las configs
│   └── database/
│       └── typeorm/
│           ├── index.ts              # Configuración de TypeORM
│           └── cli.ts                # CLI para migraciones
│
├── core/                              # Inicialización de dependencias
│   ├── index.ts                      # Inicia el core
│   └── database/
│       ├── index.ts
│       └── connections.ts            # Conecta a la base de datos
│
├── database/                          # Gestión de datos
│   ├── __migrations/                 # Archivos de migración de BD
│   ├── __seeds/                      # Seeders para datos iniciales
│   ├── __subscribers/                # Eventos de BD (life cycle)
│   ├── __utils/
│   │   ├── connections/
│   │   ├── extends/                  # Clases base
│   │   └── interfaces/               # Interfaces compartidas
│   └── wallet/                        # Módulo de wallet (ejemplo)
│       ├── domain/                   # Lógica de negocio
│       │   └── wallet.repository.ts
│       └── infrastructure/           # Implementación técnica
│           └── typeorm/
│               ├── wallet.entity.ts
│               ├── create.repository.ts
│               └── index.ts
│
├── controllers/                       # Controladores (API handlers)
│   ├── index.ts
│   └── api/
│       └── user/
│           └── index.ts
│
├── routers/                           # Definición de rutas
│   ├── index.ts                      # Agrupa todas las rutas
│   └── api/
│       └── index.ts                  # Rutas API
│
├── services/                          # Lógica de negocio
│   └── wallet/
│       └── createWallet.service.ts
│
├── middleware/                        # Middleware customizado
│   ├── auth/
│   │   └── digest-auth.middleware.ts # Autenticación Digest
│   └── common/
│       ├── unless.middleware.ts      # Exluir rutas de middleware
│       └── validator.middleware.ts   # Validación global
│
├── helpers/                           # Funciones auxiliares
│   └── digest-auth.helper.ts
│
├── interfaces/                        # Interfaces TypeScript globales
│   ├── general/
│   ├── middleware/
│   └── providers/
│
├── providers/                         # Proveedores/inyección de dependencias
│   └── base.ts
│
├── prototypes/                        # Extensiones de prototipos
└── types/                             # Tipos y definiciones globales
    └── global.d.ts
```

---

## 🔐 Configuración de Seguridad

### Variables de Entorno Críticas

```env
# Cambiar en PRODUCCIÓN
COOKIE_SECRET=cambiar_valor_en_produccion
SWAGGER_AUTH_PASSWORD=cambiar_contraseña_swagger
```

### Medidas de Seguridad Implementadas

- **Helmet.js**: Protección de headers HTTP
- **Cookie Parser**: Manejo seguro de cookies
- **Validación**: class-validator para validar datos de entrada
- **CORS**: Configurado en producción (cuando sea apropiado)
- **Session Storage**: SQLite para sesiones

---

## 📖 API Documentation

Accede a la documentación interactiva en:

```
http://localhost:3000/docs
```

La documentación está protegida con autenticación Digest utilizando las credenciales:
- **Usuario**: valor de `SWAGGER_AUTH_USER`
- **Contraseña**: valor de `SWAGGER_AUTH_PASSWORD`

---

## 🗄️ Gestión de Base de Datos

### Crear una nueva migración

```bash
npm run typeorm:migration:generate --name=CreateUserTable
```

### Crear una nueva entidad

```bash
npm run typeorm:model:create -- -n User
```

### Revertir cambios

```bash
npm run typeorm:migration:revert
```

### Ver estado de migraciones

```bash
npm run typeorm:migration:show
```

---

## 🔄 Arquitectura Limpia

El proyecto sigue el patrón de **Arquitectura Limpia**:

### Capas

1. **Domain**: Lógica de negocio pura (interfaces de repositorios)
2. **Infrastructure**: Implementación técnica (TypeORM, bases de datos)
3. **Services**: Casos de uso y orquestación
4. **Controllers/Routers**: Capa de presentación (API endpoints)

### Flujo de una Solicitud

```
Request HTTP
    ↓
Middleware (Validación, Autenticación)
    ↓
Router (Mapeo de rutas)
    ↓
Controller (Procesa entrada)
    ↓
Service (Lógica de negocio)
    ↓
Repository (Acceso a datos)
    ↓
Database (Ejecución)
    ↓
Response JSON
```

---

## 🚨 Troubleshooting

### Error: "Cannot find module '@config'"

Asegúrate de que `ts-node` está instalado y que `tsconfig.json` tiene la configuración correcta de `baseUrl` y `paths`.

```bash
npm install ts-node -D
```

### Error: "Cannot connect to database"

1. Verifica que PostgreSQL está corriendo (o SQLite está disponible)
2. Revisa las credenciales en `.env`
3. Asegúrate de que la base de datos existe

```bash
# Para PostgreSQL
psql -U postgres -l  # Ver bases de datos existentes
```

### Error: "Module not found: dotenv"

```bash
npm install dotenv
```

### Puerto ya está en uso

Puedes cambiar el puerto en el `.env`:

```env
PORT=3001  # Cambiar a otro puerto disponible
```

---

## 📝 Variables de Entorno Detalladas

| Variable | Descripción | Ejemplo | Requerida |
|----------|-------------|---------|-----------|
| `NODE_ENV` | Ambiente (development, production, staging) | `development` | ✅ |
| `APP_NAME` | Nombre de la aplicación | `Ethereum Core API` | ✅ |
| `APP_URL` | URL base de la aplicación | `http://localhost:3000` | ✅ |
| `PORT` | Puerto en el que escucha el servidor | `3000` | ✅ |
| `COOKIE_SECRET` | Clave secreta para cookies | `tu_clave_segura` | ✅ |
| `COOKIE_DOMAIN` | Dominio para cookies | `localhost` | ✅ |
| `COOKIE_NAME` | Nombre de la cookie de sesión | `session_id` | ✅ |
| `COOKIE_EXPIRATION` | Expiración en segundos | `86400` | ✅ |
| `SWAGGER_AUTH_USER` | Usuario para Swagger | `admin` | ✅ |
| `SWAGGER_AUTH_PASSWORD` | Contraseña para Swagger | `password123` | ✅ |
| `SWAGGER_AUTH_REALM` | Realm para autenticación | `API Documentation` | ⚠️ |
| `APP_DB_PROVIDER` | Proveedor de BD | `postgres` | ✅ |
| `APP_DB_TYPE` | Tipo de BD en TypeORM | `postgres` | ✅ |
| `APP_DB_HOST` | Host de la BD | `localhost` | ✅ |
| `APP_DB_PORT` | Puerto de la BD | `5432` | ✅ |
| `APP_DB_USERNAME` | Usuario de BD | `postgres` | ✅ |
| `APP_DB_PASSWORD` | Contraseña de BD | `postgres` | ✅ |
| `APP_DB_DATABASE` | Nombre de la BD | `ethereum_core` | ✅ |
| `APP_DB_SYNCHRONIZE` | Sincronizar esquema automáticamente | `false` | ⚠️ |
| `APP_DB_LOGGING` | Logging de queries | `false` | ⚠️ |
| `APP_DB_AUTO_RECONNECT` | Reconexión automática | `true` | ⚠️ |

---

## 🤝 Contribuir

Si deseas contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m "Add some AmazingFeature"`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la licencia **ISC**. Ver el archivo `package.json` para más detalles.

---

## ✍️ Autor

**JeiDevp** - Desarrollo inicial

---

## 📧 Soporte

Para soporte y preguntas:
- Abre un issue en el repositorio
- Contacta al autor

---

## 🎯 Roadmap Futuro

- [ ] Autenticación JWT
- [ ] Rate limiting
- [ ] Caching con Redis
- [ ] Tests unitarios y de integración
- [ ] Docker support
- [ ] CI/CD pipeline
- [ ] Logs centralizados
- [ ] Monitoring y alertas

---

## 📚 Recursos Útiles

- [Express.js Documentation](https://expressjs.com/)
- [TypeORM Docs](https://typeorm.io/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Swagger/OpenAPI](https://swagger.io/)
- [Arquitectura Limpia](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

---

**Última actualización**: Febrero 2026
