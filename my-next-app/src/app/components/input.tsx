import { Plus } from "lucide-react";
import Button from "./button";

interface InputProps {
  text: string | number;
  value: string | number;
  onInputChange: (newText: string) => void;
}

export default function Input({ value, onInputChange }: InputProps) {
  const handletextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
  };
  return (
    <div>
      <h3>Add new task</h3>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="enter text"
          className="border"
          value={value}
          onChange={handletextChange}
        ></input>
        <Button text="submit" icon={Plus} />
      </div>
    </div>
  );
}
