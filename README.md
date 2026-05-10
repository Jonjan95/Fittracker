# Fittracker

Fitness-tracker app: Spring Boot (Java) backend + Next.js frontend + MySQL.

> **Note:** README is a work in progress — a full project overview is coming soon.

## Project structure

```
fittracker/
├── backend/             # Spring Boot REST API (Java 21, Maven)
├── frontend/            # Next.js + React UI
└── docker-compose.yaml  # MySQL container for local dev
```

## Local setup

### Prerequisites

- Docker Desktop
- Java 21 (or use the bundled `mvnw`)
- Node.js 18+ and `pnpm` (or `npm`)

### 1. Start the database

From the repo root:

```bash
docker compose up -d
```

MySQL is exposed on port `3308`.

### 2. Start the backend

```bash
cd backend
./mvnw spring-boot:run
```

The API runs on `http://localhost:8080`.

### 3. Start the frontend

```bash
cd frontend
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Useful commands

```bash
docker compose logs -f db   # tail database logs
docker compose down         # stop the database
docker compose down -v      # stop and wipe the database volume
```
