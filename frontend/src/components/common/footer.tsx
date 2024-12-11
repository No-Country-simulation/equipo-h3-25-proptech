import { instagram_icon, whatsapp_icon, youtube_icon, facebook_icon, logo } from "../../assets";
import data from "../../data/footer";



export default function Footer() {
  return (
    <footer className="bg-black text-[#C6C6C8] text-xs px-9 py-7 relative">
      <div className="h-1.5 w-full absolute top-0 left-0 bg-gradient-yellow"></div>
      <div className="border-b-2 border-white grida agrid-cols-4 flex justify-between gap-10">
        {data.map((item) => (
          <Sections key={item.id} title={item.title}>
            {item.description}
          </Sections>
        ))}
      </div>
  
      <div className="py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <img src={logo} alt="" />
          <p className="inline-block">@2024 Financia.ai. Todos los derechos reservados</p>
        </div>
        <div className="flex gap-5">
          <SocialIcon href="#" icon={whatsapp_icon} />
          <SocialIcon href="#" icon={facebook_icon} />
          <SocialIcon href="#" icon={youtube_icon} />
          <SocialIcon href="#" icon={instagram_icon} />
        </div>
      </div>
    </footer>
  );
}



interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function Sections ({ title, children }: SectionProps) {
  return (
    <div className="pb-6 max-w-[320px]">
      <h5 className="text-lg text-white mb-3">{title}</h5>
      {children}
    </div>
  );
}



interface SocialIconProps {
  icon: string; 
  href: string
}

function SocialIcon ({ icon, href }: SocialIconProps) {
  return (
    <a href={href} className="bg-white inline-block size-10 p-3 rounded-lg ">
      <img src={icon} alt="" className="w-full h-full" />
    </a>
  );
}
