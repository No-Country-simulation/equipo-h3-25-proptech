import { useState } from "react";
import { visibilityOff_icon, visibilityOn_icon } from "../assets";


interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  disabled?: boolean;
  readOnly?: boolean;
  value: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export default function Input({
  name,
  label,
  placeholder,
  type = "text",
  disabled,
  readOnly,
  value,
  onChange,
  error
}: InputProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const changeVisibility = () => setIsVisible(!isVisible);


  return (
    <div>
      {label &&
        <label htmlFor={name} className="font-Roboto text-lg text-body block mb-4 inline-block">
          {label}
        </label>
      }
      <div className={`bg-white flex items-center gap-5 rounded-md outline outline-1 outline-[#B4B4B4] py-4 px-5  ${!readOnly && 'has-[input:focus]:outline-2 has-[input:focus]:outline-primary-500'} has-[:disabled]:bg-[#BFBFBF]`}>
        <input
          name={name}
          id={name}
          type={type === "password" ? (isVisible ? "text" : "password") : type}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          value={value}
          onChange={onChange}
          className="w-full bg-white font-Roboto text-sm text-[#616161] placeholder:text-[#616161] outline-none disabled:bg-[#BFBFBF]"
        />
        {type === "password" &&
          <img
            src={isVisible ? visibilityOff_icon : visibilityOn_icon}
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
