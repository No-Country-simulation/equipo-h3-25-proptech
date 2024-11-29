import { useState } from "react";
import { visibilityOff, visibilityOn } from "../assets";


interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  disabled?: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export default function Input ({
  name,
  label,
  placeholder,
  type = "text",
  disabled,
  value,
  onChange,
  error
} : InputProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const changeVisibility = () => setIsVisible(!isVisible);


  return (
    <div>
      {label && 
        <label htmlFor={name} className="text-gray-700 font-medium block mb-3 inline-block">
          {label}
        </label>
      }
      <div className="flex items-center gap-5 rounded-md outline outline-1 outline-gray-300 py-2.5 px-5 has-[input:focus]:outline-2 has-[input:focus]:outline-[#00FFA0] has-[:disabled]:bg-gray-300">
        <input
          name={name}
          id={name}
          type={type === "password" ? (isVisible ? "text" : "password") : type}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={onChange}
          className="w-full bg-white text-gray-700 outline-none disabled:bg-gray-300"
        />
        {type === "password" &&
          <img
            src={isVisible ? visibilityOff : visibilityOn}
            alt="mostrar contraseña"
            className="w-6 h-6 cursor-pointer"
            onClick={changeVisibility}
          />
        }
      </div>

      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}
