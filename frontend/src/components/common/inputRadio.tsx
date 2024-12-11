interface InputRadioProps {
  name: string;
  label: string;
  value: string;
  valueSelected: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "small";
}

export default function InputRadio({ name, label, value, valueSelected, onChange, disabled, size}: InputRadioProps) {
  return (
    <div className="flex items-center gap-3">
      <input
        disabled={disabled}
        onChange={onChange}
        type="radio"
        id={value}
        name={name}
        value={value}
        checked={value === valueSelected}
        className={`${size == 'small' ? 'size-5 border-[2px]' : 'size-9 border-[5px]' } shrink-0 appearance-none rounded-full border-[#D9D9D9] bg-[#D9D9D9] cursor-pointer checked:bg-primary-500 focus-visible:outline-none disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-500`}
      />
      <label htmlFor={value} className="text-sm">{label}</label>
    </div>
  );
}
