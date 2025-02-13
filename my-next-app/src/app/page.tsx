"use client";

import { useState, useEffect } from "react";
import Input from "./components/input";
import Tasks from "./components/tasks";

export default function Home() {
  const [taskText, setTaskText] = useState("");
  console.log(taskText);
  const [tasks, setTasks] = useState<string[]>([]);
  console.log("tasks", tasks);

  // -- Add task --

  // Function to update input value
  const handleInputChange = (newText: string) => {
    setTaskText(newText);
  };

  // Function to handle task submission
  const handleAddTask = () => {
    if (taskText.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, taskText]);
      setTaskText("");
    }
  };

  // -- Update Task --

  // -- Delete Task --
  const handleDeleteTask = (indexToRemove: number) => {
    setTasks((prevTasks) =>
      prevTasks.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div className="flex flex-col gap-6 items-center justify-center w-full">
      <h1 className="text-xl">To Do App</h1>
      <Input
        text="Add task"
        value={taskText}
        onInputChange={handleInputChange}
        onSubmit={handleAddTask}
      />
      <Tasks tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}
