# Theme Factory 🎨

A comprehensive NestJS-based REST API designed specifically for creating and managing **Material-UI themes**. Theme Factory provides a complete backend solution for theme management systems with robust user authentication, advanced theme configuration, and comprehensive CRUD operations.

## 🚀 What is Theme Factory?

Theme Factory is a specialized API that allows developers and designers to:
- Create, store, and manage Material-UI theme configurations
- Validate theme structures against MUI specifications
- Support Google Fonts integration for custom typography
- Provide comprehensive theme categorization with tags
- Maintain audit trails for theme creation and updates
- Export themes for use in React/MUI applications

## ✨ Key Features

### 🔐 User Management
- User registration and authentication system
- Secure password hashing with bcrypt
- JWT-based session management
- User profile management with audit trails

### 🎨 Advanced Theme System
- **Material-UI Compatibility**: Full support for MUI theme structure
- **Rich Configuration**: Palette, typography, spacing, shadows, breakpoints
- **Typography Variants**: Complete support for all MUI typography variants (h1-h6, body1/2, button, caption, overline)
- **Google Fonts Integration**: Load and configure custom fonts from Google Fonts
- **Component Overrides**: Support for MUI component customization
- **Theme Validation**: Comprehensive validation using class-validator
- **JSONB Storage**: Flexible theme configuration storage in PostgreSQL

### 🔍 Theme Management
- **Advanced Filtering**: Search by name, creator, tags, and more
- **Pagination**: Efficient data retrieval with customizable page sizes
- **Sorting**: Multiple sorting options (date, name, popularity)
- **Tagging System**: Categorize themes with multiple tags
- **Preview Images**: Optional theme preview image support
- **Active/Inactive States**: Control theme visibility and availability

### 🛡️ Security & Quality
- **JWT Authentication**: Secure API access with Bearer tokens
- **Input Validation**: Comprehensive validation with class-validator
- **Type Safety**: Full TypeScript support throughout the application
- **CORS Configuration**: Proper cross-origin resource sharing setup
- **Error Handling**: Consistent error responses and logging

### 📚 Documentation & Testing
- **Swagger/OpenAPI**: Interactive API documentation with examples
- **Comprehensive Testing**: Unit and E2E tests with Jest
- **Code Quality**: ESLint and Prettier configuration
- **Database Migrations**: TypeORM synchronization and schema management

## 🛠️ Tech Stack

### Backend Framework
- **NestJS** - Progressive Node.js framework with TypeScript support
- **Express.js** - Underlying HTTP server platform

### Database & ORM
- **PostgreSQL 14.3** - Robust relational database with JSONB support
- **TypeORM** - Advanced ORM with TypeScript support
- **Docker Compose** - Containerized database setup

### Authentication & Security
- **JWT (JSON Web Tokens)** - Stateless authentication
- **Passport.js** - Authentication middleware
- **bcrypt** - Password hashing and security

### Validation & Transformation
- **class-validator** - Decorator-based validation
- **class-transformer** - Object transformation and serialization

### Documentation & API
- **Swagger/OpenAPI 3.0** - Interactive API documentation
- **Nest Swagger** - Automatic documentation generation

### Development & Testing
- **TypeScript 5.7** - Static type checking and modern JavaScript features
- **Jest** - Testing framework for unit and E2E tests
- **ESLint + Prettier** - Code quality and formatting
- **Supertest** - HTTP assertion testing

### DevOps & Deployment
- **Docker** - Containerization support
- **Node.js 18+** - Runtime environment

## 📁 Project Structure

```
theme-factory/
├── src/
│   ├── auth/                    # 🔐 Authentication Module
│   │   ├── auth.controller.ts   # Login/register endpoints
│   │   ├── auth.service.ts      # Authentication business logic
│   │   ├── auth.module.ts       # Module configuration
│   │   ├── decorators/          # Custom decorators (GetUser)
│   │   └── strategies/          # JWT Passport strategy
│   │
│   ├── users/                   # 👥 User Management Module
│   │   ├── dto/                 # Data Transfer Objects
│   │   │   ├── create-user.dto.ts
│   │   │   ├── login-user.dto.ts
│   │   │   └── update-user.dto.ts
│   │   ├── entities/            # Database entities
│   │   │   └── user.entity.ts   # User database model
│   │   ├── users.controller.ts  # User CRUD endpoints
│   │   ├── users.service.ts     # User business logic
│   │   └── users.module.ts      # Module configuration
│   │
│   ├── themes/                  # 🎨 Theme Management Module
│   │   ├── dto/                 # Theme Data Transfer Objects
│   │   │   ├── create-theme.dto.ts     # Comprehensive MUI theme validation
│   │   │   ├── theme-query.dto.ts      # Search and filtering options
│   │   │   └── update-theme.dto.ts     # Theme update validation
│   │   ├── entities/
│   │   │   └── theme.entity.ts         # Theme database model with JSONB
│   │   ├── themes.controller.ts        # Theme CRUD endpoints
│   │   ├── themes.service.ts           # Theme business logic
│   │   └── themes.module.ts            # Module configuration
│   │
│   ├── common/                  # 🔧 Shared Utilities
│   │   ├── dto/
│   │   │   └── pagination.dto.ts       # Pagination utilities
│   │   └── common.module.ts            # Shared module configuration
│   │
│   ├── types/                   # 📝 TypeScript Definitions
│   │   ├── auth-response.ts            # Authentication response types
│   │   └── index.ts                    # Type exports
│   │
│   ├── config/                  # ⚙️ Configuration Files
│   ├── app.module.ts            # Root application module
│   └── main.ts                  # Application bootstrap
│
├── test/                        # 🧪 Test Files
│   ├── app.e2e-spec.ts         # End-to-end tests
│   └── jest-e2e.json           # E2E test configuration
│
├── docker-compose.yml           # 🐳 Database containerization
├── .env.template               # Environment variables template
├── package.json                # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── eslint.config.mjs          # ESLint configuration
└── README.md                  # Project documentation
```

## 📋 Prerequisites

Before running Theme Factory, ensure you have the following installed:

### Required
- **Node.js** (version 18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Package manager (npm comes with Node.js)
- **PostgreSQL** (version 14+) - [Download](https://www.postgresql.org/download/)

### Optional but Recommended
- **Docker & Docker Compose** - For easy database setup
- **Git** - For version control
- **VS Code** - Recommended IDE with TypeScript support

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd theme-factory
```

### 2. Install Dependencies
```bash
# Using npm
npm install

# Or using yarn
yarn install
```

### 3. Environment Configuration
```bash
# Copy the environment template
cp .env.template .env
```

Configure your `.env` file with the following variables:

```env
# Database Configuration
POSTGRES_PASSWORD=your_secure_password
POSTGRES_DB=theme_factory_db
POSTGRES_CONTAINER_NAME=theme_factory_postgres
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres

# Application Configuration
PORT=3000
HOST_API=http://localhost:3000
NODE_ENV=development

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRES_IN=7d
```

### 4. Database Setup

#### Option A: Using Docker (Recommended)
```bash
# Start PostgreSQL container
docker-compose up -d

# Verify database is running
docker ps
```

#### Option B: Local PostgreSQL Installation
1. Install PostgreSQL on your system
2. Create a database named `theme_factory_db`
3. Update the `.env` file with your local database credentials

### 5. Database Migration
```bash
# The application will automatically sync the database schema on first run
npm run start:dev
```

## 💻 Development

### Starting the Development Server
```bash
# Development mode with hot reload
npm run start:dev

# Development mode with debugging
npm run start:debug

# Production mode
npm run start:prod

# Build the application
npm run build
```

### Development Workflow
1. **Start the database**: `docker-compose up -d`
2. **Install dependencies**: `npm install`
3. **Configure environment**: Update `.env` file
4. **Start development server**: `npm run start:dev`
5. **Access API documentation**: http://localhost:3000/api/docs

### Hot Reload
The development server supports hot reload, automatically restarting when you make changes to:
- TypeScript files (`.ts`)
- Environment variables
- Configuration files

### Debugging
- Use `npm run start:debug` to enable debugging
- Attach your debugger to port 9229
- VS Code debugging configuration is recommended

## 🧪 Testing

### Running Tests
```bash
# Run all unit tests
npm run test

# Run tests in watch mode (development)
npm run test:watch

# Run tests with coverage report
npm run test:cov

# Run end-to-end tests
npm run test:e2e

# Debug tests
npm run test:debug
```

### Test Structure
- **Unit Tests**: Located alongside source files (`.spec.ts`)
- **E2E Tests**: Located in `/test` directory
- **Coverage Reports**: Generated in `/coverage` directory

### Test Categories
- **Controllers**: API endpoint testing
- **Services**: Business logic testing
- **DTOs**: Validation testing
- **Authentication**: JWT and security testing
- **Database**: Repository and entity testing

### Best Practices
- Write tests for all new features
- Maintain test coverage above 80%
- Use descriptive test names
- Mock external dependencies
- Test both success and error scenarios

## 🔍 Code Quality

### Linting and Formatting
```bash
# Run ESLint with auto-fix
npm run lint

# Format code with Prettier
npm run format

# Check TypeScript compilation
npm run build
```

### Code Quality Tools
- **ESLint**: TypeScript-first linting with recommended rules
- **Prettier**: Code formatting for consistent style
- **TypeScript**: Static type checking
- **Husky**: Git hooks for pre-commit quality checks (if configured)

### Quality Standards
- **TypeScript strict mode**: Enabled for type safety
- **No explicit any**: Minimized use of `any` type
- **Consistent formatting**: Prettier configuration enforced
- **Import organization**: Automatic import sorting
- **Error handling**: Comprehensive error handling patterns

### IDE Integration
For the best development experience:
- Install ESLint and Prettier extensions
- Enable format-on-save in your IDE
- Use TypeScript language server
- Configure auto-import suggestions

## 📖 API Documentation

Theme Factory provides **comprehensive Swagger/OpenAPI documentation** that serves as both documentation and testing interface.

### 🌐 Access Documentation
Once the application is running, visit:
```
http://localhost:3000/api/docs
```

### 📋 Documentation Features
- **Interactive API Explorer**: Test endpoints directly from the browser
- **Complete Schema Documentation**: Detailed request/response models
- **Authentication Integration**: JWT Bearer token testing
- **Real-time Validation**: See validation rules and examples
- **Error Response Guide**: Comprehensive error handling documentation
- **Code Examples**: Sample requests and responses for all endpoints

### 🔐 Authentication in Docs
1. Register a user via `/api/auth/register`
2. Login via `/api/auth/login` to get JWT token
3. Click **"Authorize"** button in Swagger UI
4. Enter `Bearer YOUR_JWT_TOKEN`
5. Test protected endpoints

### 📊 API Endpoint Categories

#### Authentication Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

#### User Management 🔒
- `POST /api/users/register` - Create new user (admin)
- `GET /api/users` - List all users
- `GET /api/users/:id` - Get user details
- `PATCH /api/users/:id` - Update user

#### Theme Management 🔒
- `POST /api/themes/create` - Create new theme
- `GET /api/themes` - List themes (with filtering)
- `GET /api/themes/:id` - Get theme details
- `PATCH /api/themes/:id` - Update theme
- `DELETE /api/themes/:id` - Delete theme

> 🔒 = Requires JWT Bearer token authentication

## 🗄️ Database Schema

### Entity Relationship Overview
```
┌─────────────┐         ┌──────────────┐
│    User     │         │    Theme     │
├─────────────┤         ├──────────────┤
│ id (UUID)   │◄────────┤ createdById  │
│ email       │         │ updatedById  │◄┐
│ password    │         │              │ │
│ firstName   │         │ id (UUID)    │ │
│ lastName    │         │ name         │ │
│ isActive    │         │ description  │ │
│ createdAt   │         │ googleFonts  │ │
│ updatedAt   │         │ themeConfig  │ │
└─────────────┘         │ previewImage │ │
       │                │ tags         │ │
       │                │ isActive     │ │
       │                │ createdAt    │ │
       └────────────────┤ updatedAt    │ │
                        └──────────────┘ │
                               └─────────┘
```

### 👤 User Entity
```typescript
interface User {
  id: string;              // UUID primary key
  email: string;           // Unique email address
  password: string;        // bcrypt hashed password (excluded from responses)
  firstName: string;       // User's first name
  lastName: string;        // User's last name
  isActive: boolean;       // Account status (default: true)
  createdAt: Date;         // Account creation timestamp
  updatedAt: Date;         // Last update timestamp
}
```

### 🎨 Theme Entity
```typescript
interface Theme {
  id: string;              // UUID primary key
  name: string;            // Unique theme name
  description?: string;    // Optional theme description
  googleFonts?: string[];  // Array of Google Font names
  themeConfig: object;     // JSONB - MUI theme configuration
  previewImage?: string;   // Optional preview image URL
  tags?: string[];         // Array of categorization tags
  isActive: boolean;       // Theme visibility (default: true)
  createdById: string;     // Foreign key to User
  updatedById: string;     // Foreign key to User (for audit trail)
  createdBy: User;         // Relation to creator
  updatedBy: User;         // Relation to last updater
  createdAt: Date;         // Creation timestamp
  updatedAt: Date;         // Last update timestamp
}
```

### 🎛️ Theme Configuration Structure
The `themeConfig` JSONB field stores complete Material-UI theme options:
```typescript
interface MuiThemeConfig {
  palette?: {
    mode?: 'light' | 'dark';
    primary?: { main: string; dark?: string; light?: string; };
    secondary?: { main: string; dark?: string; light?: string; };
    error?: { main: string; };
    warning?: { main: string; };
    info?: { main: string; };
    success?: { main: string; };
  };
  typography?: {
    fontFamily?: string;
    fontSize?: number;
    h1?: TypographyVariant;
    h2?: TypographyVariant;
    // ... all MUI typography variants
  };
  shape?: {
    borderRadius?: number;
  };
  spacing?: number;
  shadows?: string[];
  transitions?: object;
  zIndex?: object;
  breakpoints?: object;
  components?: object; // MUI component overrides
}
```

### 🔗 Relationships
- **User → Themes**: One-to-many (user can create multiple themes)
- **Theme → User (Creator)**: Many-to-one (theme has one creator)
- **Theme → User (Updater)**: Many-to-one (theme has one last updater)
- **Audit Trail**: All theme modifications track who made the changes

## ⚙️ Environment Variables

### Database Configuration
| Variable | Description | Example | Required |
|----------|-------------|---------|----------|
| `POSTGRES_PASSWORD` | PostgreSQL password | `mySecurePassword123` | ✅ |
| `POSTGRES_DB` | Database name | `theme_factory_db` | ✅ |
| `POSTGRES_CONTAINER_NAME` | Docker container name | `theme_factory_postgres` | ✅ |
| `DB_HOST` | Database host | `localhost` | ✅ |
| `DB_PORT` | Database port | `5432` | ✅ |
| `DB_USERNAME` | Database username | `postgres` | ✅ |

### Application Configuration
| Variable | Description | Example | Required |
|----------|-------------|---------|----------|
| `NODE_ENV` | Application environment | `development` / `production` | ✅ |
| `PORT` | Server port | `3000` | ✅ |
| `HOST_API` | API host URL | `http://localhost:3000` | ✅ |

### Security Configuration
| Variable | Description | Example | Required |
|----------|-------------|---------|----------|
| `JWT_SECRET` | JWT signing secret | `your-256-bit-secret` | ✅ |
| `JWT_EXPIRES_IN` | JWT token expiration | `7d` / `24h` / `3600s` | ✅ |

### Environment-Specific Settings

#### Development (`.env.development`)
```env
NODE_ENV=development
PORT=3000
DB_HOST=localhost
# Enable database logging and synchronization
```

#### Production (`.env.production`)
```env
NODE_ENV=production
PORT=3000
DB_HOST=your-production-db-host
# Disable database synchronization for safety
```

### Security Best Practices
- **Never commit `.env` files** to version control
- **Use strong JWT secrets** (256-bit minimum)
- **Use complex database passwords**
- **Set appropriate JWT expiration times**
- **Use environment-specific configurations**

## 🛣️ API Endpoints Reference

### Base URL
```
http://localhost:3000/api
```

### Authentication Endpoints

#### Register New User
```http
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePassword123",
  "firstName": "John",
  "lastName": "Doe"
}
```

#### User Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe"
  }
}
```

### User Management Endpoints 🔒

#### Create User (Admin)
```http
POST /api/users/register
Authorization: Bearer <jwt_token>
Content-Type: application/json
```

#### Get All Users
```http
GET /api/users?page=1&limit=10
Authorization: Bearer <jwt_token>
```

#### Get User by ID
```http
GET /api/users/:id
Authorization: Bearer <jwt_token>
```

#### Update User
```http
PATCH /api/users/:id
Authorization: Bearer <jwt_token>
Content-Type: application/json
```

### Theme Management Endpoints 🔒

#### Create New Theme
```http
POST /api/themes/create
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "name": "Dark Purple Theme",
  "description": "A dark theme with purple accents",
  "googleFonts": ["Inter", "Roboto"],
  "themeConfig": {
    "palette": {
      "mode": "dark",
      "primary": { "main": "#9c27b0" },
      "secondary": { "main": "#ff5722" }
    },
    "typography": {
      "fontFamily": "Inter, sans-serif"
    }
  },
  "tags": ["dark", "purple", "modern"]
}
```

#### Get All Themes (with filtering)
```http
GET /api/themes?page=1&limit=10&search=dark&tags=modern&sortBy=createdAt&sortOrder=DESC
Authorization: Bearer <jwt_token>
```

**Query Parameters:**
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10)
- `search`: Search in theme name and description
- `tags`: Filter by tags (comma-separated)
- `createdBy`: Filter by creator user ID
- `sortBy`: Sort field (createdAt, name, updatedAt)
- `sortOrder`: ASC or DESC

#### Get Theme by ID
```http
GET /api/themes/:id
Authorization: Bearer <jwt_token>
```

#### Update Theme
```http
PATCH /api/themes/:id
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "name": "Updated Theme Name",
  "description": "Updated description",
  "themeConfig": {
    // Updated MUI theme configuration
  }
}
```

#### Delete Theme
```http
DELETE /api/themes/:id
Authorization: Bearer <jwt_token>
```

### Error Responses

All endpoints return consistent error responses:

```json
{
  "statusCode": 400,
  "message": "Validation failed",
  "error": "Bad Request",
  "details": [
    {
      "property": "email",
      "constraints": {
        "isEmail": "email must be an email"
      }
    }
  ]
}
```

**Common HTTP Status Codes:**
- `200` - Success
- `201` - Created
- `400` - Bad Request (validation errors)
- `401` - Unauthorized (missing/invalid JWT)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found
- `409` - Conflict (duplicate resource)
- `500` - Internal Server Error

> 🔒 = Requires JWT Bearer token authentication
> 
> **Complete Documentation**: Visit `/api/docs` for interactive Swagger documentation with request/response examples

## 🤝 Contributing

We welcome contributions to Theme Factory! Here's how to get started:

### Development Process

1. **Fork & Clone**
   ```bash
   git fork theme-factory
   git clone https://github.com/your-username/theme-factory.git
   cd theme-factory
   ```

2. **Set Up Development Environment**
   ```bash
   npm install
   cp .env.template .env
   # Configure your .env file
   docker-compose up -d
   npm run start:dev
   ```

3. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

4. **Make Your Changes**
   - Follow the existing code style
   - Add/update tests for new functionality
   - Update documentation if needed
   - Ensure TypeScript types are properly defined

5. **Quality Checks**
   ```bash
   # Run tests
   npm run test
   npm run test:e2e
   
   # Check code quality
   npm run lint
   npm run format
   
   # Build to check for errors
   npm run build
   ```

6. **Commit & Push**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   git push origin feature/your-feature-name
   ```

7. **Submit Pull Request**
   - Create PR against the `main` branch
   - Provide clear description of changes
   - Include screenshots for UI changes
   - Reference any related issues

### Contribution Guidelines

#### Code Style
- Use TypeScript for all new code
- Follow existing naming conventions
- Add JSDoc comments for public APIs
- Use meaningful variable and function names
- Keep functions small and focused

#### Testing Requirements
- Write unit tests for new services and utilities
- Add integration tests for new endpoints
- Maintain test coverage above 80%
- Test both success and error scenarios

#### Documentation
- Update Swagger/OpenAPI annotations
- Add code comments for complex logic
- Update README for new features
- Include examples in API documentation

#### Commit Messages
Use conventional commit format:
- `feat:` new features
- `fix:` bug fixes
- `docs:` documentation updates
- `style:` formatting changes
- `refactor:` code refactoring
- `test:` adding tests
- `chore:` maintenance tasks

### Areas for Contribution

- 🎨 **Theme Features**: New MUI theme configuration options
- 🔐 **Security**: Authentication and authorization improvements
- 📊 **Analytics**: Theme usage tracking and statistics
- 🌐 **API**: New endpoints and functionality
- 🧪 **Testing**: Improved test coverage and quality
- 📚 **Documentation**: Better examples and guides
- 🐛 **Bug Fixes**: Issue resolution and stability improvements

### Getting Help

- 💬 **Discussions**: Use GitHub Discussions for questions
- 🐛 **Issues**: Report bugs via GitHub Issues
- 📧 **Email**: Contact maintainers for security issues
- 📖 **Documentation**: Check `/api/docs` for API reference

## 📄 License

This project is licensed under the **UNLICENSED** license.

---

## 🎯 Quick Start Summary

1. **Install dependencies**: `npm install`
2. **Configure environment**: `cp .env.template .env` and update values
3. **Start database**: `docker-compose up -d`
4. **Start development server**: `npm run start:dev`
5. **Access API docs**: http://localhost:3000/api/docs
6. **Create a user**: POST to `/api/auth/register`
7. **Login**: POST to `/api/auth/login`
8. **Create themes**: POST to `/api/themes/create` with JWT token

## 🆘 Troubleshooting

### Common Issues

**Database Connection Error**
```bash
# Check if PostgreSQL is running
docker ps

# Restart database container
docker-compose down
docker-compose up -d
```

**Port Already in Use**
```bash
# Change PORT in .env file or kill process
lsof -ti:3000 | xargs kill -9
```

**JWT Token Invalid**
- Check JWT_SECRET in .env
- Ensure token is passed as Bearer token
- Check token expiration (JWT_EXPIRES_IN)

**Theme Validation Errors**
- Refer to MUI theme specification
- Check Swagger docs for exact schema requirements
- Validate color formats (hex values)

### Support

For additional help:
- 📖 Check the API documentation at `/api/docs`
- 🐛 Report issues on GitHub
- 💬 Join community discussions

---

**Happy Theme Building! 🎨✨**