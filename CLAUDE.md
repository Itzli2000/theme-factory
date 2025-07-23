# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Development Server:**
```bash
npm run start:dev          # Start with hot reload
npm run start:debug        # Start with debugging enabled
npm run start:prod         # Start production build
```

**Build & Quality:**
```bash
npm run build              # Build the application
npm run lint               # Lint and auto-fix TypeScript files
npm run format             # Format code with Prettier
```

**Testing:**
```bash
npm test                   # Run unit tests
npm run test:watch         # Run tests in watch mode
npm run test:cov           # Run tests with coverage report
npm run test:e2e           # Run end-to-end tests
npm run test:debug         # Run tests with debugging
```

**Database:**
```bash
docker-compose up -d       # Start PostgreSQL database
```

## Architecture Overview

This is a **NestJS backend API** for managing Material-UI themes with the following structure:

### Core Modules
- **AuthModule** (`src/auth/`): JWT-based authentication with Passport.js strategies
- **UsersModule** (`src/users/`): User management with bcrypt password hashing
- **ThemesModule** (`src/themes/`): Core theme CRUD operations with rich MUI theme configuration
- **CommonModule** (`src/common/`): Shared utilities including pagination DTOs

### Database Architecture
- **PostgreSQL** with TypeORM as the ORM
- **User Entity**: Basic user profile with authentication
- **Theme Entity**: Stores MUI theme configurations as JSONB with audit trail (createdBy/updatedBy relationships)
- **Relationships**: Many-to-one between themes and users for creation/update tracking

### Key Technical Patterns
- **DTO Validation**: Comprehensive class-validator rules for theme configuration validation
- **Swagger Documentation**: Full API documentation with examples at `/api/docs`
- **Module Architecture**: Each feature follows NestJS module pattern (controller → service → entity)
- **JWT Guards**: Authentication required for all theme and user operations
- **CORS**: Enabled for cross-origin requests with specific headers

## Theme Configuration System

The application specializes in **Material-UI theme management** with:

### MUI Theme Support
- **Comprehensive DTOs**: Nested validation for palette, typography, shape, spacing, shadows
- **Typography Variants**: Support for all MUI typography variants (h1-h6, body1/2, button, etc.)
- **Google Fonts**: Integration for loading custom fonts via `googleFonts` array
- **Component Overrides**: Support for MUI component customization
- **Full MUI Spec**: Covers breakpoints, transitions, z-index configuration

### Theme Features
- **JSONB Storage**: Theme configurations stored as flexible JSON in PostgreSQL
- **Tagging System**: Categorization with string array tags
- **Preview Images**: Optional preview image URLs
- **Audit Trail**: Track who created/updated each theme with user relationships

## Environment Configuration

Required environment variables (see `.env.template`):
- **Database**: `DB_HOST`, `DB_PORT`, `DB_USERNAME`, `POSTGRES_PASSWORD`, `POSTGRES_DB`
- **Application**: `NODE_ENV`, `PORT`, `HOST_API`
- **Security**: `JWT_SECRET`, `JWT_EXPIRES_IN`
- **Docker**: `POSTGRES_CONTAINER_NAME`

## Development Guidelines

### Code Quality
- **ESLint Configuration**: TypeScript-first with Prettier integration
- **Type Safety**: Full TypeScript with strict null checks enabled
- **Validation**: Use class-validator decorators for all DTOs
- **Documentation**: Swagger decorators required for all API endpoints

### Database Patterns
- Use TypeORM decorators for entity relationships
- JSONB columns for flexible theme configuration storage
- UUID primary keys for all entities
- Audit timestamps with `@CreateDateColumn` and `@UpdateDateColumn`

### Authentication Flow
- JWT tokens required for all protected routes (marked with 🔒 in documentation)
- Use `@GetUser()` decorator to access authenticated user in controllers
- Password hashing handled automatically by user service

### API Structure
- Global `/api` prefix configured
- Swagger documentation available at `/api/docs`
- Validation pipes configured globally with whitelist and forbid non-whitelisted
- CORS enabled for development