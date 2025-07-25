import React from "react";

import AddTasks from "./components/AddTasks";
import TaskList from "./components/TaskList";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const req = await fetch("http://localhost:3000/tasks");
    const data = await req.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    await fetch("http://localhost:3000/tasks", {
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
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedField),
    });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:3000/tasks/${id}`, {
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
