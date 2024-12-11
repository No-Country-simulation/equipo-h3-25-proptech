import { faqs_highicon, requirements_highicon, bullseyeArrow_highicon } from "../../assets";

export default function PreFooter() {
  return (
    <div className="relative">
      
      <div className="mb-12 text-center relative
        before:w-full before:h-[1px] before:bg-[#8C8C8C] before:absolute before:left-0 before:bottom-[23px]
        ">
        <span className="block font-Exo2 text-2xl font-bold">CONECTATE Y</span>
        <span className="relative px-5 bg-white font-Exo2 text-5xl font-bold">CONSULTANOS</span>
      </div>


      <div className="w-full grid grid-cols-3">
        <div className="text-white bg-primary-600 px-7 py-20 flex items-center">
          <div className="max-w-[350px] mx-auto">
            <h5 className="font-Exo2 font-bold text-3xl mb-3">TERMINOS Y CONDICIONES</h5>
            <p>Aquí se explican las condiciones legales que rigen el uso de nuestros servicios.</p>
          </div>
          <img src={bullseyeArrow_highicon} alt="" width={130}/>
        </div>

        <div className="text-white bg-primary-500 px-7 py-20 flex items-center">
          <div className="max-w-[350px] mx-auto">
            <h5 className="font-Exo2 font-bold text-3xl mb-3">REQUISITOS</h5>
            <p>Aquí encontrarás los requisitos necesarios para acceder a nuestros servicios de financiación e inversión.</p>
          </div>
          <img src={requirements_highicon} alt="" width={130}/>
        </div>

        <div className="text-white bg-primary-400 px-7 py-20 flex items-center">
          <div className="max-w-[350px] mx-auto">
            <h5 className="font-Exo2 font-bold text-3xl mb-3">FAQS</h5>
            <p>Aquí encontrarás respuestas a las dudas más comunes sobre nuestros servicios.</p>
          </div>
          <img src={faqs_highicon} alt="" width={130} />
        </div>
      </div>
    </div>
  );
}
