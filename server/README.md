# Server (Node.js + MongoDB)

Express + MongoDB backend for RCK Educational.

## Tech
- Node.js
- Express
- MongoDB (Mongoose)

## Run Locally
1. Start MongoDB locally (or use Atlas URI).
2. Install deps:
   ```bash
   npm install
   ```
3. Start server:
   ```bash
   npm run dev
   ```

Server runs on `http://localhost:5000` by default.

## Environment
`.env` file:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017
MONGO_DB_NAME=rck_educational
NODE_ENV=development
```

## API Endpoints
- `GET /` : basic welcome
- `GET /api/health` : health check
- `GET /api/students` : list students
- `GET /api/students/:id` : get one student
- `POST /api/students` : create student
- `PUT /api/students/:id` : update student
- `DELETE /api/students/:id` : delete student

## Sample POST Body
```json
{
  "name": "Yuvraj Singh",
  "email": "yuvraj@example.com",
  "course": "Full Stack Development"
}
```
