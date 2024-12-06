import { arrowDown_icon } from "../assets";


interface ArrowButtonProps {
  className?: string;
  to?: string;
}

export default function ArrowButton({ className, to }: ArrowButtonProps) {
  return (
    <a href={to} className={`inline-block bg-white rounded-full p-6 shadow-[0px_0px_15px_3px_rgba(0,0,0,0.25)] w-max shrink-0 ${className}`}>
      <img src={arrowDown_icon} alt="arrow down" width={50} height={50} className="w-[50px] h-[50px] translate-y-1" />
    </a>
  );
}
