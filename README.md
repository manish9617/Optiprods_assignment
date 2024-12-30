**To-Do List Application**
A simple and responsive To-Do List application built with Vite React for the frontend and Node.js (Express) for the backend.

**Features**
Frontend (Vite React):
Display all tasks with their statuses (completed or pending).
Add a new task.
Mark a task as completed.
Delete a task.
Toast notifications for actions like adding, updating, and deleting tasks.
Backend (Node.js):
API endpoints for managing tasks (CRUD operations).
In-memory storage for tasks.

**Run Backend**

1. Navigate to the backend folder (cd backend)
2. Install dependencies (npm install)
3. Start the backend server (npx nodemon server.js)

**Run Frontend**

1. Navigate to the frontend folder
2. Install dependencies (npm install)
3. Start the frontend development server (npm run dev)

**Testing the Application**

1. Add a Task:
   Enter a task in the input box on the frontend and click "Add Task".
   The task should appear in the list below.
2. Mark as Completed:
   Click the "Mark as Completed" button next to a pending task.
   The task should update with a "Completed" button (non-clickable).

3. Delete a Task:
   Click the "Delete" button next to any task.
   The task should be removed from the list.
