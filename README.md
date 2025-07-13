# Theme Factory

A NestJS-based API for creating and managing customizable themes. Theme Factory provides a complete backend solution for theme management systems with user authentication, theme creation, and comprehensive CRUD operations.

## Features

- **User Management**: User registration, authentication, and profile management
- **Theme System**: Create, read, update, and delete themes with rich configuration options
- **Authentication**: JWT-based authentication with Passport.js
- **Database Integration**: PostgreSQL with TypeORM
- **API Documentation**: Swagger/OpenAPI documentation
- **Validation**: Input validation with class-validator
- **Type Safety**: Full TypeScript support

## Tech Stack

- **Framework**: NestJS
- **Database**: PostgreSQL
- **ORM**: TypeORM
- **Authentication**: JWT, Passport.js
- **Validation**: class-validator, class-transformer
- **Documentation**: Swagger/OpenAPI
- **Testing**: Jest

## Project Structure

```
src/
├── auth/           # Authentication module (JWT, strategies)
├── users/          # User management (CRUD, DTOs, entities)
├── themes/         # Theme management (CRUD, entities, DTOs)
├── common/         # Shared utilities and DTOs
├── config/         # Configuration files
└── types/          # TypeScript type definitions
```

## Prerequisites

- Node.js (version 18 or higher)
- Yarn package manager
- PostgreSQL database
- Docker (optional, for database)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd theme-factory
```

2. Install dependencies:
```bash
yarn install
```

3. Set up environment variables:
```bash
cp .env.template .env
```

Configure your `.env` file with:
- Database connection details
- JWT secrets
- Other application settings

4. Start the database (if using Docker):
```bash
docker-compose up -d
```

## Development

```bash
# Start in development mode with hot reload
yarn run start:dev

# Start in production mode
yarn run start:prod

# Build the application
yarn run build
```

## Testing

```bash
# Run unit tests
yarn run test

# Run end-to-end tests
yarn run test:e2e

# Run tests with coverage
yarn run test:cov

# Run tests in watch mode
yarn run test:watch
```

## Code Quality

```bash
# Lint and fix code
yarn run lint

# Format code
yarn run format
```

## API Documentation

Once the application is running, access the Swagger documentation at:
```
http://localhost:3000/api/docs
```

## Database Schema

### Users
- User authentication and profile management
- Relationships with created and updated themes

### Themes
- Theme configuration stored as JSONB
- Support for tags, preview images, and metadata
- Audit trail with created/updated by tracking

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Application environment | `development` |
| `PORT` | Server port | `3000` |
| `DB_HOST` | Database host | `localhost` |
| `DB_PORT` | Database port | `5432` |
| `DB_USERNAME` | Database username | - |
| `POSTGRES_PASSWORD` | Database password | - |
| `POSTGRES_DB` | Database name | - |
| `JWT_SECRET` | JWT signing secret | - |

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Themes
- `GET /api/themes` - Get all themes
- `GET /api/themes/:id` - Get theme by ID
- `POST /api/themes` - Create new theme
- `PUT /api/themes/:id` - Update theme
- `DELETE /api/themes/:id` - Delete theme

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## License

This project is licensed under the UNLICENSED license.