"use client";

import Footer from "@components/Footer";
import Header from "@components/Header";
import Task from "@components/Task";
import TaskInput from "@components/TaskInput";

import { nanoid } from "nanoid";
import { useState } from "react";

// Define the interface of task-item object outside the component
interface TaskItem {
  id: string;
  title: string;
  completed: boolean;
}

export default function Home() {
  // useState hook for an array of task-item objects
  const [tasks, setTasks] = useState<TaskItem[]>([]);

  // Function to add a new task
  const addTask = (newTaskTitle: string) => {
    const newTask: TaskItem = { id: nanoid(), title: newTaskTitle, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Function to delete a task
  const deleteTask = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  // Function to toggle the completion status of a task
  const toggleDoneTask = (taskId: string) => {
    setTasks((prevTasks) => {
      const newTasks = structuredClone(prevTasks);
      const task = newTasks.find((x) => x.id === taskId);
      if (task) task.completed = !task.completed;
      return newTasks;
    });
  };

  return (
    // Main container
    <div className="container mx-auto">
      {/* Header section */}
      <Header />
      {/* Tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* Task summary */}
        <p className="text-center text-secondary fst-italic">
          All ({tasks.length}) Done ({tasks.filter((x) => x.completed).length})
        </p>
        {/* Task input */}
        <TaskInput addTaskFunc={addTask} />

        {/* Tasks mapping */}
        {tasks.map((task) => (
          <Task
            id={task.id}
            title={task.title}
            deleteTaskFunc={deleteTask}
            toggleDoneTaskFunc={toggleDoneTask}
            completed={task.completed}
            key={task.id}
          />
        ))}
      </div>

      {/* Footer section */}
      <Footer year={2024} fullName="Sirapob Yongmarnwong" studentId="660610801" />

    </div>
  );
}



