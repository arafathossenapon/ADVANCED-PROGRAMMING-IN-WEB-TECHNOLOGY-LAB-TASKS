# Product Management API — Lab Task 1

## Student Information

- **Name:** MD. ARAFAT HOSSEN APON
- **Student ID:** 23-50127-1
- **Section:** B
- **Assignment:** Lab Task 1

## Project Overview

Product Management API is a RESTful API built with NestJS and TypeScript. It uses PostgreSQL as its database and TypeORM for database operations.

The application provides CRUD (Create, Read, Update, Delete) operations for products and employees.

## Technologies Used

- NestJS
- TypeScript
- PostgreSQL
- TypeORM
- pnpm
- Postman

## Prerequisites

Install the following software before running the project:

- Node.js
- pnpm
- PostgreSQL
- Git (optional, for cloning the repository)

## Installation

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/arafathossenapon/ADVANCED-PROGRAMMING-IN-WEB-TECHNOLOGY-LAB-TASKS.git
cd "ADVANCED-PROGRAMMING-IN-WEB-TECHNOLOGY-LAB-TASKS/Mid/Lab task 1/product-management-api"
```

Install dependencies:

```bash
pnpm install
```

## Database Setup

1. Install and start PostgreSQL.
2. Create a database named `product_management`.
3. Copy `.env.example` to `.env`.
4. Update the database configuration in `.env` with your local PostgreSQL credentials.

Example PowerShell command:

```powershell
Copy-Item .env.example .env
```

**Important:** Never commit the `.env` file or expose your database password.

## Run Database Migrations

Run the project's migration command:

```bash
pnpm run migration:run
```

If this command is not available in `package.json`, check the scripts section for the exact migration command configured in the project.

## Run the Application

Start the development server:

```bash
pnpm run start:dev
```

The API runs at:

`http://localhost:5001`

Use the port configured in the project if it differs from this value.

## API Endpoints

### Products

| Method | Endpoint        | Description              |
| ------ | --------------- | ------------------------ |
| POST   | `/products`     | Create a product         |
| GET    | `/products`     | Retrieve all products    |
| GET    | `/products/:id` | Retrieve a product by ID |
| PATCH  | `/products/:id` | Update a product         |
| DELETE | `/products/:id` | Delete a product         |

### Employees

| Method | Endpoint         | Description                |
| ------ | ---------------- | -------------------------- |
| POST   | `/employees`     | Create an employee         |
| GET    | `/employees`     | Retrieve all employees     |
| GET    | `/employees/:id` | Retrieve an employee by ID |
| PATCH  | `/employees/:id` | Update an employee         |
| DELETE | `/employees/:id` | Delete an employee         |

## API Testing

The API endpoints can be tested using Postman. Screenshots of the product API tests are included in the `screenshots` directory.

## Repository

[GitHub Repository](https://github.com/arafathossenapon/ADVANCED-PROGRAMMING-IN-WEB-TECHNOLOGY-LAB-TASKS)
