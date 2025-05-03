// components/Button.jsx
const Button = ({ label, fill = false, onClick, className }) => {
  const baseClasses = "w-full py-2 rounded cursor-pointer transition-colors duration-300 text-center";
  const fillClass = fill
    ? "bg-bgYellow text-primary hover:bg-white"
    : "bg-white text-primary hover:bg-bgYellow hover:text-white";

  return (
    <div onClick={onClick} className={`${baseClasses} ${fillClass} ${className}`}>{label}</div>
  );
};

export default Button;
