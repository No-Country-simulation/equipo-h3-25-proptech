import { arrow_down } from "../assets";



interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  name: string;
  label?: string;
  options: Option[];
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

export default function Select({ label, name, options, disabled, onChange, value}: SelectProps) {
  return (
    <div>
      {label && 
        <label htmlFor={name} className="inline-block text-lg text-body mb-4">
          {label}
        </label>
      }
      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          disabled={disabled}
          id={name}
          name={name}
          className="py-4 pl-5 pr-10 w-full appearance-none rounded-md outline outline-1 outline-[#B4B4B4] focus:outline-2 focus:outline-primary-500 text-sm disabled:bg-[#BFBFBF]"
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </select>
        <img src={arrow_down} alt="arrow down" className="w-4 absolute right-3 top-1/2 translate-y-[-50%] pointer-events-none" />
      </div>
    </div>
  );
}
