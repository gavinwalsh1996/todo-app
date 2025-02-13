"use client";
import { Pencil, Trash2 } from "lucide-react";
import Button from "./button";

interface TaskProps {
  tasks: string[];
  onDeleteTask: (index: number) => void;
}

export default function Tasks({ tasks, onDeleteTask }: TaskProps) {
  return (
    <div className="bg-gray-100 flex flex-col gap-6 w-full">
      {tasks.map((task, index) => (
        <div className="flex justify-between items-center p-2 bg-blue-200">
          <div>{task}</div>
          <div className="flex gap-2">
            <Button icon={Pencil} />
            <Button icon={Trash2} onClick={() => onDeleteTask(index)} />
          </div>
        </div>
      ))}
    </div>
  );
}
