import financingData from "../../data/finance";
import Button from "../button";
import { listWhite_icon, requirements_image } from "../../assets";



export default function FinancingRequirements() {
  return (
    <section className="grid grid-cols-2">
      <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-br-2xl text-white">
        <div className="max-w-[450px] mx-auto my-32">
          <h3 className="font-Exo2 font-bold text-2xl">¿QUÉ NECESITO?</h3>
          <h2 className="font-Exo2 font-bold text-5xl">REQUISITOS PARA EL PRESTAMO</h2>

          <ul className="mt-6 max-w-[250px]">
            {financingData.requirements.map((requirement, index) => (
              <li key={index} className="flex items-start gap-3">
                <img src={listWhite_icon} alt="check" />
                {requirement}
              </li>
            ))}
          </ul>

          <div className="flex flex-col w-3/5 mt-6">
            <Button onClick={() => { }} variant="secondary">LEER MÁS</Button>
          </div>
        </div>
      </div>
      <div>
        <img src={requirements_image} alt="requisitos" className="w-full max-w-[630px] mx-auto" />
      </div>
    </section>

  );
}