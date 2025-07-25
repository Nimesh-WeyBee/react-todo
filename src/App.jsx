import React from "react";

import AddTasks from "./components/AddTasks";
import TaskList from "./components/TaskList";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const req = await fetch("https://react-todo-yv01.onrender.com/tasks");
    const data = await req.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    await fetch("https://react-todo-yv01.onrender.com/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    fetchTasks();
    return;
  };

  const updateTask = async (id, updatedField) => {
    await fetch(`https://react-todo-yv01.onrender.com/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedField),
    });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`https://react-todo-yv01.onrender.com/tasks/${id}`, {
      method: "DELETE",
    });
    fetchTasks();
    return;
  };

  return (
    <>
      <AddTasks addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </>
  );
};

export default App;
