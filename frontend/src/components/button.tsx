interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  variant: "primary" | "secondary";
}

export default function Button({ children, disabled, onClick, variant } : ButtonProps) {
  const disabledStyles = "disabled:bg-gray-400 disabled:text-white";
  const variantStyle =
    variant === "primary"
      ? "bg-[#00FFA0] text-black hover:bg-[#00C27A]"
      : "bg-black text-white hover:bg-black/90";


  return (
    <button
      className={`py-2 px-6 rounded-md font-semibold text-base transition-colors ease-in duration-100 ${variantStyle} ${disabledStyles}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
