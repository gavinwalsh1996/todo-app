interface ButtonProps {
  text?: string;
  icon?: React.ElementType;
  onClick?: () => void;
}

export default function Button({ text, icon: Icon, onClick }: ButtonProps) {
  return (
    <button
      className=" p-2 bg-gray-400 rounded cursor-pointer hover:bg-gray-200 flex items-center gap-2"
      onClick={onClick}
    >
      {text}
      {Icon && <Icon size={15} className="cursor-pointer" />}{" "}
      {/* Only render icon if it's available */}
    </button>
  );
}
