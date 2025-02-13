"use client";

import { useState, useEffect } from "react";
import Input from "./components/input";

export default function Home() {
  const [taskText, setTaskText] = useState("");
  console.log(taskText);

  const handleInputChange = (newText: string) => {
    setTaskText(newText);
  };
  return (
    <div className="flex flex-col gap-6 items-center justify-center">
      <h1 className="text-xl">To Do App</h1>
      <Input
        text="Add task"
        value={taskText}
        onInputChange={handleInputChange}
      />
    </div>
  );
}
