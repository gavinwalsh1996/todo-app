"use client";
import { Pencil, Trash2 } from "lucide-react";
import Button from "./button";

interface TaskProps {
  tasks: string[];
  onDeleteTask: (index: number) => void;
}

export default function Tasks({ tasks, onDeleteTask }: TaskProps) {
  return (
    <div className="flex flex-col gap-4 w-full mt-4">
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center italic">No tasks added yet.</p>
      ) : (
        tasks.map((task, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white shadow-md rounded-lg p-4"
          >
            <span className="text-gray-800 font-medium">{task}</span>
            <div className="flex gap-3">
              <Button icon={Pencil} />
              <Button icon={Trash2} onClick={() => onDeleteTask(index)} />
            </div>
          </div>
        ))
      )}
    </div>
  );
}
