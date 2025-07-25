import React from "react";
import { useState } from "react";

const AddTasks = ({ addTask }) => {
  const [TaskTitle, setTaskTitle] = useState("");

  const createTask = (title) => {
    setTaskTitle(title);
  };

  const callAddTask = () => {
    const newTask = {
      status: false,
      title: TaskTitle,
    };

    if (newTask.title) console.log(addTask(newTask));
  };

  return (
    <div className="header">
      <input
        type="text"
        className="task-input"
        placeholder="Enter task name..."
        value={TaskTitle}
        onChange={(e) => {
          createTask(e.target.value);
        }}
      />
      <button
        className="add-btn"
        onClick={() => {
          callAddTask();
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTasks;
