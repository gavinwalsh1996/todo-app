interface ButtonProps {
  text: string;
  icon?: React.ElementType;
}

export default function Button({ text, icon: Icon }: ButtonProps) {
  return (
    <button className=" p-2 bg-gray-400 rounded cursor-pointer hover:bg-gray-200 flex items-center gap-2">
      {text}
      {Icon && <Icon size={15} />} {/* Only render icon if it's available */}
    </button>
  );
}