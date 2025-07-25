import React from "react";
import { useState } from "react";

const Task = ({ task, deleteTask, updateTask }) => {
  const [showTaskTitle, setTask] = useState(task.title);
  const [showTaskStatus, setTaskStatus] = useState(task.status);

  const toggleTask = async (e) => {
    setTaskStatus(e);
    await updateTask(task.id, { status: { e } });
  };

  const callDeleteTask = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this task ?"
    );

    if (!confirm) return;

    deleteTask(id);
  };

  const callUpdateTask = (id) => {
    const newTitle = prompt("Enter new title", showTaskTitle);
    if (newTitle !== null && newTitle !== showTaskTitle) {
      setTask(newTitle);
      updateTask(id, { title: newTitle });
    }
  };

  return (
    <>
      <div className="list-item">
        <input
          type="checkbox"
          checked={showTaskStatus}
          onChange={(e) => toggleTask(e.target.checked)}
        />
        <div className="list-title">{showTaskTitle}</div>
        <button
          className="btn"
          onClick={() => {
            callUpdateTask(task.id);
          }}
        >
          Edit
        </button>
        <button
          className="btn"
          onClick={() => {
            callDeleteTask(task.id);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Task;
