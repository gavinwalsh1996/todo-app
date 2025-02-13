import { Plus } from "lucide-react";
import Button from "./button";

interface InputProps {
  text: string | number;
  value: string | number;
  onInputChange: (newText: string) => void;
  onSubmit: () => void;
}

export default function Input({ value, onInputChange, onSubmit }: InputProps) {
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
  };

  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">Add New Task</h3>
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Enter task..."
          className="w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={value}
          onChange={handleTextChange}
        />
        <Button text="Submit" icon={Plus} onClick={onSubmit} />
      </div>
    </div>
  );
}
