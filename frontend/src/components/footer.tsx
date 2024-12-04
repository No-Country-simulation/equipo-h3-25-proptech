import { instagram_icon, whatsapp_icon, youtube_icon, facebook_icon, logo_footer } from "../assets";


const data = [
  {
    id: 0,
    title: "LINKS",
    description: <ul className="flex flex-col gap-1">
      <li>Quienes somos</li>
      <li>Preguntas frecuentes</li>
      <li>Politicas de protecciòn</li>
    </ul>
  }, {
    id: 1,
    title: "TE AYUDAMOS",
    description: <p>Facilitamos el acceso a terrenos en Latinoamérica con financiamiento accesible, conectando familias con su hogar ideal y ofreciendo a inversores oportunidades en activos de alto valor</p>
  }, {
    id: 2,
    title: "SUCURSALES",
    description: <p>Facilitamos el acceso a terrenos en Latinoamérica con financiamiento accesible, conectando familias con su hogar ideal y ofreciendo a inversores oportunidades en activos de alto valor</p>
  }, {
    id: 3,
    title: "CONTACTANOS",
    description: <p>Facilitamos el acceso a terrenos en Latinoamérica con financiamiento accesible, conectando familias con su hogar ideal y ofreciendo a inversores oportunidades en activos de alto valor</p>
  }
]



export default function Footer() {
  return (
    <footer className="bg-black text-[#C6C6C8] text-xs px-9 py-7">
      <div className="border-b-2 border-white grid grid-cols-4">
        {data.map((item) => (
          <Sections key={item.id} title={item.title}>
            {item.description}
          </Sections>
        ))}
      </div>
  
      <div className="py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <img src={logo_footer} alt="" />
          <p className="inline-block">@2024 Financia.ai. Todos los derechos reservados</p>
        </div>
        <div className="flex gap-5">
          <SocialIcon icon={whatsapp_icon} />
          <SocialIcon icon={facebook_icon} />
          <SocialIcon icon={youtube_icon} />
          <SocialIcon icon={instagram_icon} />
        </div>
      </div>
    </footer>
  );
}


function Sections ({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="pb-6 max-w-[220px]">
      <h5 className="text-lg text-white mb-3">{title}</h5>
      {children}
    </div>
  );
}


function SocialIcon ({ icon }: { icon: string}) {
  return (
    <div className="bg-white inline-block size-10 p-2 rounded-full">
      <img src={icon} alt="" className="w-full h-full" />
    </div>
  );
}
