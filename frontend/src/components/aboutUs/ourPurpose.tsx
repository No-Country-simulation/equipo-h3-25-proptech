import { mision_icon, valores_icon, vision_icon } from "../../assets";
import Card from "../card";



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
          <Card icon={mision_icon} title="MISIÓN">
            <p className="w-full overflow-hidden line-clamp-6">
              Brindar una plataforma fintech de impacto social, <strong>que facilite el acceso a terrenos en Latinoamérica</strong> mediante financiamiento accesible, promoviendo así una solución habitacional viable para familias y ofreciendo a los inversores oportunidades de crecimiento económico en activos sólidos y de revalorización a mediano plazo.
            </p>
          </Card>

          <Card icon={vision_icon} title="VISIÓN">
            <p className="w-full overflow-hidden line-clamp-6">
              Convertirnos en la plataforma líder en financiación de terrenos en Latinoamérica, <strong>logrando un impacto social</strong> significativo al crear un mercado inclusivo y accesible que permita a más personas cumplir su sueño de adquirir un terreno mientras atraemos a inversores que buscan opciones de inversión con rendimientos sostenibles y de bajo riesgo.
            </p>
          </Card>

          <Card icon={valores_icon} title="VALORES">
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
          </Card>
        </div>
      </div>
    </section>
  );
}
