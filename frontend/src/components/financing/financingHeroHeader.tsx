import Button from "../common/button";
import { finance_hero_header } from "../../assets";
import { useNavigate } from "react-router-dom";



export default function FinancingHeroHeader() {
  const navigate = useNavigate()
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
            <Button onClick={() => { navigate('/calculadora-financiamiento') }} variant="secondary">CALCULA TU FINANCIAMIENTO</Button>
            <Button onClick={() => { navigate('/register/paso1') }} variant="primary">SOLICITAR AHORA</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
