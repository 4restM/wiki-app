# Wiki Search App

A simple web application that allows users to search Wikipedia pages, with a search history feature stored in a MySQL database. The app is built with React for the frontend and Node.js with Express for the backend, using Docker for containerization.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Environment Variables](#environment-variables)
3. [Installation](#installation)
4. [Running the Application](#running-the-application)
5. [Project Structure](#project-structure)
6. [Technologies Used](#technologies-used)

## Prerequisites

- **Node.js** v14 or higher
- **MySQL** database server
- **Docker & Docker Compose** for containerization (optional)

## Environment Variables

To configure the backend API URL and MySQL database, set up environment variables in `.env` files in both `frontend` and `backend` folders:

### Backend `.env`

```plaintext

DB_HOST=db
DB_USER=
DB_PASS=
DB_NAME=
DB_PORT=3306

FRONTEND_URL=http://localhost:5173
```

Replace `DB_USER`,`DB_PASSWORD` and `DB_NAME` with your MySQL database credentials.

### Frontend `.env`

```plaintext
VITE_API_BASE_URL=http://localhost:5000
```

## Installation

Clone the repository and install dependencies for both the frontend and backend. This step isn't necessary if you are wanting to compose the app with docker.

```bash
# Clone the repository
git clone https://github.com/yourusername/wikipedia-search-app.git
cd wikipedia-search-app

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

## Running the Application

### Using Docker

1. **Ensure Docker and Docker Compose are installed.**
2. **Run the following command in the root directory to start all services:**

   ```bash
   docker-compose up --build
   ```

   This will spin up the frontend, backend, and MySQL database as Docker containers.

   Access the application at `http://localhost:5173/`

### Without Docker

1. **Start the MySQL database** and ensure it’s running on the configured `DB_HOST`, `DB_USER`, and `DB_PASSWORD`.
2. **Start the Backend:**

   ```bash
   cd backend
   npm start
   ```

3. **Start the Frontend:**

   ```bash
   cd ../frontend
   npm run dev
   ```

Access the frontend at `http://localhost:3000` and the backend at `http://localhost:5000`.

## Project Structure

- `frontend/`: Contains the React code for the user interface.
- `backend/`: Holds the Express server code and MySQL database interaction.
- `docker-compose.yml`: Configures Docker to run frontend, backend, and database services.

## Technologies Used

- **Frontend:** React, Vite, Bootstrap
- **Backend:** Node.js, Express, Sequelize, MySQL
- **Containerization:** Docker, Docker Compose
