import ArrowButton from "../common/arrowButton";
import Button from "../common/button";
import { bell_highicon, card_highicon, ok_highicon, simulator_image } from "../../assets";



export default function FinancingExample() {
  return (
    <section className={`py-12 px-16 relative pb-28 last:pb-12 pt-20 shadow-section bg-[#F3F3F3]`}>
      <div className={`max-w-screen-2xl mx-auto grid grid-cols-2 gap-12 items-center rounded-2xl mb-32 overflow-hidden`}>
        <div className="flex flex-col gap-5 items-start">
          <h2 className="font-bold font-Exo2 text-5xl">SIMULADOR DE <span className="text-primary-500">PRESTAMOS</span></h2>
          <h3 className="font-bold font-Exo2 text-2xl">INTUITIVO Y PRÁCTICO</h3>
          <p className="text-body">
            Nuestro Simulador te permite calcular de forma rápida y sencilla el monto y las cuotas de tu préstamo. <strong>Personaliza tu simulación según tus necesidades</strong> y obtén una estimación clara para tomar decisiones informadas
          </p>
          <Button onClick={() => {}} variant="primary">INGRESAR AL SIMULADOR</Button>
        </div>
        <img src={simulator_image} alt="simulador de prestamos" className="min-w-[650px]" />
      </div>

      <div className="max-w-screen-2xl relative">
        <div className="bg-white px-12 py-16 rounded-2xl inline-block shadow-[0px_4px_15px_0px_#00000040] absolute -top-52 left-1/2 -translate-x-1/2">
          <h4 className="font-bold text-4xl font-Exo2 text-nowrap">
            EJEMPLO DE <span className="text-primary-500">CUOTA</span>: 15.000 USD A <span className="text-primary-500">120 MESES</span>
          </h4>
        </div>

        <div className="grid grid-cols-3">
          <div className="flex flex-col items-center justify-start gap-3 px-6 border-r-[1px] border-[#8C8C8C]">
            <img src={ok_highicon} alt="" />
            <div className="bg-[#D9D9D9] py-2 px-3 rounded-2xl text-center w-full max-w-[300px]">
              <span className="text-primary-500 font-bold text-5xl">288 USD</span>
            </div>
            <h5 className="font-bold text-2xl text-center max-w-[300px]">Cuota inicial</h5>
          </div>

          <div className="flex flex-col items-center justify-start gap-3 px-6 border-r-[1px] border-[#8C8C8C]">
            <img src={card_highicon} alt="" />
            <div className="bg-[#D9D9D9] py-2 px-3 rounded-2xl text-center w-full max-w-[300px]">
              <span className="text-primary-500 font-bold text-5xl">863 USD</span>
            </div>
            <h5 className="font-bold text-2xl text-center max-w-[300px]">Ingreso = 3 cuotas</h5>
          </div>

          <div className="flex flex-col items-center justify-start gap-3 px-6 border-r-[1px] border-[#8C8C8C]">
            <img src={bell_highicon} alt="" />
            <div className="bg-[#D9D9D9] py-2 px-3 rounded-2xl text-center w-full max-w-[300px]">
              <span className="text-primary-500 font-bold text-5xl">15 USD</span>
            </div>
            <h5 className="font-bold text-2xl text-center max-w-[300px]">Actualizacion del indice precio del consumidor del INDEC</h5>
          </div>
        </div>
      </div>
      <ArrowButton className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"/>
    </section>
  );
}
