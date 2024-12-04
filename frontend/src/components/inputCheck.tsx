interface InputCheckProps {
  name: string;
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputCheck({ name, label, onChange, checked}: InputCheckProps) {
  return (
    <div className="w-max flex items-center gap-3">
      <div className="group relative flex items-center">
        <input
          id={name}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="size-4 appearance-none rounded border border-body bg-white focus-visible:outline-none disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100"

        />

        <svg
          width="14"
          height="12"
          viewBox="0 0 14 12"
          fill="none"
          className="absolute top-[3px] left-[1px] pointer-events-none stroke-black group-has-[:disabled]:stroke-gray-500/50"
        >
          <path d="M2 5.22222L5.20755 9L12 1" strokeWidth="3" className="opacity-0 group-has-[:checked]:opacity-100" />
        </svg>
      </div>
      <label htmlFor={name} className="text-sm text-[#616161]">{label}</label>
    </div>
  );
}
