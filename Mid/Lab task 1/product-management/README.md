# Product Management API (NestJS Lab Task 1)

A small shop API built with NestJS, TypeORM and PostgreSQL. It manages **products** and **employees** with full CRUD.

## Student details

| SL | Name | ID | Section |
|----|------|----|---------|
| __ | Arafat (full name) | __________ | ____ |

## Tech stack
NestJS 11, TypeORM, PostgreSQL, class-validator.

## Setup

### 1. Prerequisites
Node.js 22+, pnpm (or npm), PostgreSQL.

### 2. Install dependencies
```bash
pnpm install
```

### 3. Environment variables
```bash
cp .env.example .env
```
Open `.env` and put your own PostgreSQL password in `DB_PASSWORD`.

### 4. Create the database
```sql
CREATE DATABASE product_management;
```

### 5. Run migrations (creates `products` and `employees` tables)
```bash
pnpm run migration:run
```

### 6. Start the app
```bash
pnpm run start:dev
```
The API runs on `http://localhost:5001` (change `PORT` in `.env`).

## Endpoints

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/products` | Create a product |
| GET | `/products` | List all products |
| GET | `/products/:id` | Get a product by ID |
| PATCH | `/products/:id` | Update a product |
| DELETE | `/products/:id` | Delete a product |

Product body: `{ "name": "Laptop", "category": "Electronics", "price": 899.99, "quantity": 10 }`

### Employees
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/employees` | Create an employee |
| GET | `/employees` | List all employees |
| GET | `/employees/:id` | Get an employee by ID |
| PATCH | `/employees/:id` | Update an employee |
| DELETE | `/employees/:id` | Delete an employee |

Employee body: `{ "name": "Rahim Uddin", "email": "rahim@example.com", "phone": "01712345678", "password": "dummy123", "age": 30, "yearsOfWorking": 5 }`

## Project structure
```
src/modules/product      -> controller, service, module, entity, dto
src/modules/employee     -> controller, service, module, entity, dto
src/database/migrations  -> table migrations
screenshots/             -> Postman screenshots
```

## Screenshots
Postman screenshots are in the `screenshots/` folder (`01-create.png` ... `07-confirm-delete.png`).
