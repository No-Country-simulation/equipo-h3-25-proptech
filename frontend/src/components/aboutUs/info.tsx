import { tablet_image } from "../../assets";

export default function Info() {
  return (
    <section className="ps-28 pt-12 pe-20 bg-white relative flex items-center justify-center gap-20" id="info">
      <div className="w-1/2a max-w-[500px]">
        <h2 className="font-Exo2 text-2xl font-bold">FINANCIA.AI</h2>
        <h1 className="font-Exo2 text-5xl font-bold mb-6">CREACIÓN <span className="text-primary-500">FINTECH</span></h1>
        <p className="text-lg text-body mb-6">
          Financia.ai surge de la visión de un grupo de expertos en tecnología y finanzas que buscaban resolver un problema crítico: <strong>el acceso limitado a opciones de financiamiento accesible para adquirir terrenos en Latinoamérica.</strong>
        </p>
        <p className="text-lg text-body">
          Desde sus inicios, la fintech ha tenido como objetivo democratizar el acceso a soluciones financieras, promoviendo el crecimiento económico y el desarrollo habitacional.
        </p>
      </div>

      <div className="w-[400px] shrink-0 grow max-w-[600px]">
        <img src={tablet_image} alt="" />
      </div>
    </section>
  );
}
