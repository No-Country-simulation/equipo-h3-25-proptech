import Button from "../button";
import { finance_hero_header } from "../../assets";



export default function FinancingHeroHeader() {
  return (
    <section className="shadow-sectio p-12 relative">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-2 gap-16 items-center">
        <img src={finance_hero_header} alt="banner" className="min-w-[400px] w-[655px]" />
        <div className="max-w-[620px]">
          <h3 className="font-bold font-Exo2 text-2xl">FINANCIA.AI</h3>
          <h2 className="font-bold font-Exo2 text-5xl mb-6">
            CONSIGUE FINANCIAR TU <span className="text-primary-500">TERRENO</span> FÁCIL Y RÁPIDO
          </h2>
          <p className="text-body">
            Ofrecemos plazos flexibles, tasas competitivas y un proceso completamente digital, diseñado para ajustarse a tus necesidades y <strong>garantizarte una experiencia sin complicaciones.</strong>
          </p>
          <div className="mt-6 grid grid-cols-2 gap-6">
            <Button onClick={() => {}} variant="secondary">CALCULA TU FINANCIAMIENTO</Button>
            <Button onClick={() => {}} variant="primary">SOLICITAR AHORA</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
