interface ButtonProps {
  text?: string;
  icon?: React.ElementType;
  onClick?: () => void;
}

export default function Button({ text, icon: Icon, onClick }: ButtonProps) {
  return (
    <button
      className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-200"
      onClick={onClick}
    >
      {Icon && <Icon size={18} />}
      {text && <span className="font-medium">{text}</span>}
    </button>
  );
}
