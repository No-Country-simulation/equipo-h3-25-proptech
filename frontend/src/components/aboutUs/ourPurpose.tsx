import { mision_icon, plus_icon, valores_icon, vision_icon } from "../../assets";



export default function OurPurpose() {
  return (
    <section className="relative mt-28 shadow-[0px_10px_15px_0px_#00000040]">
      <div className="bg-white px-24 py-16 rounded-2xl absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-50%] shadow-[0px_4px_15px_0px_#00000040]">
        <h2 className="font-Exo2 text-5xl font-bold text-nowrap">
          NUESTRO <span className="text-primary-500">PROPÓSITO</span>
        </h2>
      </div>
      <div className="px-16 pt-36 pb-20 bg-gradient-to-b from-primary-400 to-primary-600">
        <div className="max-w-screen-2xl grid grid-cols-3 gap-10 mx-auto">
          <PurposeCard icon={mision_icon} title="MISIÓN">
            <p className="w-full overflow-hidden line-clamp-6">
              Brindar una plataforma fintech de impacto social, <strong>que facilite el acceso a terrenos en Latinoamérica</strong> mediante financiamiento accesible, promoviendo así una solución habitacional viable para familias y ofreciendo a los inversores oportunidades de crecimiento económico en activos sólidos y de revalorización a mediano plazo.
            </p>
          </PurposeCard>

          <PurposeCard icon={vision_icon} title="VISIÓN">
            <p className="w-full overflow-hidden line-clamp-6">
              Convertirnos en la plataforma líder en financiación de terrenos en Latinoamérica, <strong>logrando un impacto social</strong> significativo al crear un mercado inclusivo y accesible que permita a más personas cumplir su sueño de adquirir un terreno mientras atraemos a inversores que buscan opciones de inversión con rendimientos sostenibles y de bajo riesgo.
            </p>
          </PurposeCard>

          <PurposeCard icon={valores_icon} title="VALORES">
            <ul className="list-disc ams-7">
              <li className="line-clamp-2 ps-5 relative before:size-1 before:bg-black before:rounded-full before:absolute before:top-2.5 before:left-2">
                <strong>Transparencia:</strong> Claridad y confianza en procesos y datos.
              </li>
              <li className="line-clamp-2 ps-5 relative before:size-1 before:bg-black before:rounded-full before:absolute before:top-2.5 before:left-2">
                <strong>Impacto Social:</strong> Soluciones habitacionales.
              </li>
              <li className="line-clamp-2 ps-5 relative before:size-1 before:bg-black before:rounded-full before:absolute before:top-2.5 before:left-2">
                <strong>Seguridad:</strong> Protección y confiabilidad en usuarios y transacciones.
              </li>
            </ul>
          </PurposeCard>
        </div>
      </div>
    </section>
  );
}



interface PurposeCardProps {
  children: React.ReactNode;
  title: string;
  icon: string;
}

function PurposeCard({ children, title, icon}: PurposeCardProps) {
  return (
    <div className="bg-white rounded-2xl p-10 pb-16 pe-12 flex flex-col items-start gap-5 relative">
      <div className="bg-[#F6F6F6] rounded-full p-4">
        <img src={icon} alt={title} />
      </div>
      <h5 className="font-Exo2 font-bold text-lg">{title}</h5>
      {children}
      <div className="bg-primary-500 p-4 rounded-full ms-auto mt-auto absolute bottom-6 right-6">
        <img src={plus_icon} alt="" width={12} />
      </div> 
    </div>
  );
}
