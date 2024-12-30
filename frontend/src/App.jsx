import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const API_URL = "http://localhost:5000/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Fetch tasks from API
  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      toast.error("Failed to fetch tasks!");
    }
  };

  // Add a new task
  const addTask = async () => {
    if (!newTask.trim()) {
      toast.warn("Task title cannot be empty!");
      return;
    }

    try {
      const response = await axios.post(API_URL, { title: newTask });
      setTasks([...tasks, response.data]);
      setNewTask("");
      toast.success("Task added successfully!");
    } catch (error) {
      console.error("Error adding task:", error);
      toast.error("Failed to add task!");
    }
  };

  // Update task completion status
  const toggleTaskCompletion = async (id, currentStatus) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, {
        completed: !currentStatus,
      });
      setTasks(tasks.map((task) => (task.id === id ? response.data : task)));
      toast.success(
        `Task marked as ${!currentStatus ? "completed" : "incomplete"}!`
      );
    } catch (error) {
      console.error("Error updating task:", error);
      toast.error("Failed to update task!");
    }
  };

  // Delete a task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter((task) => task.id !== id));
      toast.success("Task deleted successfully!");
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error("Failed to delete task!");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="App">
      <ToastContainer />
      <h1>To-Do List</h1>
      <div className="task-form">
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={task.completed ? "completed" : "pending"}
          >
            <span className="task-title">{task.title}</span>
            <div className="task-buttons">
              {task.completed ? (
                <button className="completed-btn" disabled>
                  Completed
                </button>
              ) : (
                <button
                  className="mark-completed-btn"
                  onClick={() => toggleTaskCompletion(task.id, task.completed)}
                >
                  Mark as Completed
                </button>
              )}
              <button
                className="delete-btn"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
