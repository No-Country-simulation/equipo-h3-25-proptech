import { RegisterStep } from "../../data/register";


interface TemplateProps {
  children: React.ReactNode;
  data: RegisterStep;
}

export default function Template ({ children, data }: TemplateProps) {
  return (
    <div className="w-full flex max-w-screen-2xl mx-auto">
      <div className="w-6/12 lg:w-1/2 py-20 px-10 lg:px-28 text-body">
        <h3 className="text-black font-bold text-2xl font-Exo2">FINANCIA.AI</h3>
        <h1 className="text-primary-500 font-bold text-5xl font-Exo2 text-secondary">{data.title}</h1>
        <p className="mt-8 mb-7">{}</p>
        {children}
      </div>
      <div className={`w-6/12 lg:w-1/2 bg-[#D9D9D9]a px-8 lg:px-20 bg-[url('/src/assets/register_info.webp')] bg-cover`}>
        {data.info.title &&
          <h4 className="mt-28 text-3xl font-bold text-white">{data.info.title}</h4>
        }
        {data.info.sections.map((section, index) => (
          <div key={index} className="border-b-[1px] border-[#E8E8E8] py-16 flex items-center gap-4">
            <img src={section.image} alt="user icon" className="inline-block w-[130px] h-[130px] shrink-0"/>
            <div>
              {section.title &&
                <h5 className="text-2xl font-Exo2 font-bold text-white">{section.title}</h5>
              }
              <p className="text-body text-sm text-white my-2">{section.description}</p>
              {section.link && 
                <a href={section.link} className="text-primary-500 font-bold">Leer más</a>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
