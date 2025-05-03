// components/Button.jsx
const Button = ({ label, danger, fill = false, onClick, className }) => {
  const baseClasses =
    "w-full py-2 rounded cursor-pointer transition-colors duration-300 text-center";
  const fillClass = fill
    ? "bg-bgYellow text-primary hover:bg-white"
    : "bg-white !text-primary hover:bg-bgYellow hover:!text-white";
  const dangerClass = danger && "bg-red-600 hover:!bg-red-900 text-white";

  return (
    <div
      onClick={onClick}
      className={`${baseClasses} ${dangerClass} ${fillClass} ${className}`}
    >
      {label}
    </div>
  );
};

export default Button;
