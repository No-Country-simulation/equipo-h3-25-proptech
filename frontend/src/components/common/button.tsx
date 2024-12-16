interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant: "primary" | "secondary";
}

export default function Button({ children, disabled, onClick, variant } : ButtonProps) {
  const disabledStyles = "disabled:bg-[#BFBFBF] disabled:text-black";
  const variantStyle =
    variant === "primary"
      ? "bg-primary-500 hover:bg-primary-600"
      : "bg-secondary-500 hover:bg-secondary-600";


  return (
    <button 
      className={`relative py-4 px-6 rounded-md font-Exo2 font-semibold text-xs text-white transition-colors overflow-hidden ease-in duration-100 ${variantStyle} ${disabledStyles}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
