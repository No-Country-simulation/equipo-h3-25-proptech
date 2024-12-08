import { list_icon, distintive_image } from "../../assets";

export default function Distinctive() {
  return (
    <section className="p-10 flex items-center justify-center gap-20 max-w-screen-2xl mx-auto">
      <img src={distintive_image} alt="distintive image" className="max-w-[650px] min-w-[450px] shrink-0a relative"/>

      <div className="max-w-[550px]">
        <h2 className="font-Exo2 font-bold text-5xl">LO QUE NOS <span className="text-primary-500">DISTINGUE</span></h2>
        <h3 className="font-Exo2 font-bold text-2xl my-6">FINANCIA.AI</h3>
        <ul className="text-body text-lg mt-6 flex flex-col gap-4">
          <li className="flex items-start gap-4">
            <img src={list_icon} alt=""  className="mt-1"/>
            <p><strong>Innovación tecnológica:</strong> Utilizamos herramientas digitales avanzadas para ofrecer financiamiento rápido y eficiente.</p>
          </li>
          <li className="flex items-start gap-4">
            <img src={list_icon} alt="" className="mt-1"/>
            <p><strong>Enfoque inclusivo:</strong> Nuestra plataforma está diseñada para adaptarse a las necesidades de cada cliente.</p>
          </li>
          <li className="flex items-start gap-4">
            <img src={list_icon} alt="" className="mt-1"/>
            <p><strong>Impacto social:</strong> Apoyamos el desarrollo de comunidades mediante la revalorización de terrenos y proyectos habitacionales.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
