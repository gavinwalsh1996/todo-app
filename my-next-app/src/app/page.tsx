"use client";

import { useState } from "react";
import Input from "./components/input";
import Tasks from "./components/tasks";

export default function Home() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  // -- Add Task --
  const handleInputChange = (newText: string) => {
    setTaskText(newText);
  };

  const handleAddTask = () => {
    if (taskText.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, taskText]);
      setTaskText("");
    }
  };

  // -- Delete Task --
  const handleDeleteTask = (indexToRemove: number) => {
    setTasks((prevTasks) =>
      prevTasks.filter((_, index) => index !== indexToRemove)
    );
  };

  // -- Edit Task --
  const handleEditTask = () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          To-Do App
        </h1>
        <Input
          text="Add task"
          value={taskText}
          onInputChange={handleInputChange}
          onSubmit={handleAddTask}
        />
        <Tasks tasks={tasks} onDeleteTask={handleDeleteTask} />
      </div>
    </div>
  );
}
