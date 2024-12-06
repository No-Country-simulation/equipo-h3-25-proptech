import { plus_icon } from "../assets";



interface PurposeCardProps {
  children: React.ReactNode;
  title: string;
  icon: string;
  step?: number;
  bgColor?: string;
}

export default function Card({ children, title, icon, step, bgColor = "bg-white" }: PurposeCardProps) {
  return (
    <div className={`rounded-2xl p-10 pb-16 pe-12 flex flex-col items-start gap-5 relative ${bgColor}`}>
      {step && 
        <span className="absolute top-2 right-4 text-2xl text-primary-500 font-bold">{step}</span>
      }
      <div className="bg-[#F6F6F6] rounded-full p-4">
        <img src={icon} alt={title} className="size-8" />
      </div>
      <h5 className="font-Exo2 font-bold text-lg">{title}</h5>
      {children}
      <div className="bg-primary-500 p-4 rounded-full ms-auto mt-auto absolute bottom-6 right-6">
        <img src={plus_icon} alt="" width={12} />
      </div> 
    </div>
  );
}
