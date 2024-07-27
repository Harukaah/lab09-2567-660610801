import React from "react";

// define TaskItem interface to use as props type
interface TaskItemProps {
  id: string; // Change to string
  title: string;
  completed: boolean;
  deleteTaskFunc: (taskId: string) => void; // Update to string
  toggleDoneTaskFunc: (taskId: string) => void; // Update to string
}

export default function Task({
  id,
  title,
  deleteTaskFunc,
  toggleDoneTaskFunc,
  completed,
}: TaskItemProps) {
  // callback function when delete button is clicked
  const deleteButtonOnClick = () => {
    deleteTaskFunc(id);
  };

  // callback function when done button is clicked
  const doneButtonOnClick = () => {
    toggleDoneTaskFunc(id);
  };

  return (
    <div className="d-flex p-3 gap-2 align-items-center border-bottom">
      <span className={completed ? "text-decoration-line-through" : ""}>{title}</span>
      <button className="btn btn-success" onClick={doneButtonOnClick}>Done</button>
      <button className="btn btn-danger" onClick={deleteButtonOnClick}>
        Delete
      </button>
    </div>
  );
}


