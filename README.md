# WWZ - Isometric Strategy Game

A large-scale isometric strategy game built with **NestJS** (Backend) and **Phaser 3 + Vite** (Frontend).

## Project Structure

- `/server`: NestJS backend with Sequelize (SQLite).
- `/client`: Phaser 3 + Vite frontend with Tailwind CSS v4.
- `/docs`: API and Model documentation.

## Getting Started (Development Mode)

Follow these steps to run the project locally.

### 1. Backend Setup (Server)
1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file (already provided in the project) and ensure variables are set.
4. Start the server in watch mode:
   ```bash
   npm run start:dev
   ```
   The server will be available at `http://localhost:3000`.

### 2. Frontend Setup (Client)
1. Open a new terminal and navigate to the client directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Ensure the `.env` file has the correct `VITE_API_URL`.
4. Start the development server:
   ```bash
   npm run dev
   ```
   The game will be available at `http://localhost:5173`.

## Authentication
The project includes a built-in Authentication system (Login/Signup).
- Tokens are stored in `LocalStorage`.
- Protected routes (Phase 5+) will require the `access_token`.

## Tech Stack
- **Backend:** NestJS, TypeScript, Sequelize, SQLite, Passport, JWT, Bcrypt.
- **Frontend:** Phaser 3, Vite, TypeScript, Tailwind CSS v4.