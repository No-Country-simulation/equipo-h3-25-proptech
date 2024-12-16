import { useNavigate } from "react-router-dom";
import { logo, ticket_icon } from "../../assets";
import Button from "../../components/common/button";
import { useState } from "react";
import Modal from "../../components/common/modal";

export default function FinancingDashboard() {
  // const date = new Date().getDay();
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);


  return (
    <div className="p-10">
      <div className="flex flex-col items-center text-center max-w-[650px] mx-auto">
        <h4 className="font-Exo2 font-bold text-2xl">FINANCIA.AI</h4>
        <h3 className="font-Exo2 font-bold text-5xl">TU <span className="text-primary-500">FINANCIAMIENTO</span></h3>
        <p className="text-body mt-4 max-w-[500px]">Rápido, accesible y adaptado a tus necesidades.</p>

        <div className="w-full flex flex-col items-center gap-5">
          <div className="size-16 border-[3px] border-black rounded-full flex justify-center items-center">
            <img src={ticket_icon} alt="" />
          </div>
          <p className="font-Exo2 font-bold text-lg">MI PRESTAMO</p>
          <div className="p-5 bg-gray-200 mb-5">Debe proporcionar la información de 2 garantes para poder acceder al financiamiento y los 3  deben justificar un ingreso en blanco de 3 veces el valor de la cuota cada uno</div>

        </div>
      </div>
      <div className="flex flex-row justify-arround gap-5 justify-center flex-wrap">

        <div className="font-Exo2 font-bold text-[52px] pb-3 border-b-[3px] border-primary-500 flex flex-col min-w-56 max-w-72">
          <p className="text-base capitalize mb-3">MONTO REQUERIDO</p>
          <div className="flex flex-row gap-2">
            <span className="outline outline-[1px] outline-[#B4B4B4] px-3 pb-1 rounded-xl ">$</span>
            <input type="number" placeholder="0" className="outline outline-[1px] outline-[#B4B4B4] px-3 pb-1 rounded-xl flex flex-row text-center  min-w-[100px]" />
          </div>
        </div>
        <div className="font-Exo2 font-bold text-[52px] pb-3 border-b-[3px] border-primary-500 flex flex-col min-w-56 max-w-72">
          <p className="text-base capitalize mb-3">CUOTAS</p>
          <div className="flex flex-row gap-2">
            <input type="number"  placeholder="0" className="outline outline-[1px] outline-[#B4B4B4] px-3 pb-1 rounded-xl flex flex-row text-center  min-w-[100px]" />
          </div>
        </div>
        <div className="font-Exo2 font-bold text-[52px] pb-3 border-b-[3px] border-primary-500 flex flex-col min-w-56 max-w-72">
          <p className="text-base capitalize mb-3">INTERESES</p>
          <div className="flex flex-row gap-2">
            <span className="outline outline-[1px] outline-[#B4B4B4] px-3 pb-1 rounded-xl ">%</span>
            <input type="number"  placeholder="0" className="outline outline-[1px] outline-[#B4B4B4] px-3 pb-1 rounded-xl flex flex-row text-center  min-w-[100px]" />
          </div>
        </div>
        <div className="font-Exo2 font-bold text-[52px] pb-3 border-b-[3px] border-primary-500 flex flex-col min-w-56 max-w-72">
          <p className="text-base capitalize mb-3">MONTO DE CUOTA</p>
          <div className="flex flex-row gap-2">
            <span className="outline outline-[1px] outline-[#B4B4B4] px-3 pb-1 rounded-xl ">$</span>
            <input type="number"  placeholder="0" className="outline outline-[1px] outline-[#B4B4B4] px-3 pb-1 rounded-xl flex flex-row text-center  min-w-[100px]" />
          </div>
        </div>


      </div>
      <div className="w-full flex justify-center gap-4 mt-5 bg-green-50 p-10 ">
        <Button variant="primary" onClick={() => setModalIsOpen(true)}>SOLICITAR FINANCIAMIENTO</Button>
      </div>

      {modalIsOpen && (
        <Modal onClose={() => setModalIsOpen(false)}>
          <div className="flex flex-col items-center gap-5 text-center">
            <img src={logo} width={170} alt="" />
            <h4 className="font-Exo2 font-bold text-2xl">PARA CONTINUAR</h4>
            <p className="max-w-[350px] text-body">Es preciso que complete una serie de datos personales para poder realizar su inversion.</p>

            <div className="flex justify-evenly gap-4">
              <button
                className="py-4 px-6 rounded-md font-Exo2 font-semibold text-xs transition-colors ease-in duration-100 bg-[#D9D9D9]"
                onClick={() => setModalIsOpen(false)}
              >REGRESAR</button>

              <Button variant="primary" onClick={() => navigate("/dashboard/inversion/requisitos")}>CONTINUAR</Button>
            </div>
          </div>
        </Modal>
      )}




      {/* <div className="border-t-[1px] border-body py-8 my-10 mx-10 flex items-center gap-3">
        <div className="size-16 border-2 border-[#5F6368] rounded-full flex justify-center items-center">
          <img src={moneyBillTrendUp_icon} alt="" className="" />
        </div>
        <div>
          <p className="font-Exo2 font-bold text-lg">RENDIMIENTOS OBTENIDOS</p>
          <p className="text-body">Por salod invertido el día 2/11/2024</p>
        </div>
        <p className="font-Exo2 font-bold text-3xl text-primary-500 grow text-end">+0</p>
      </div>
 */}






      {/* <div className="max-w-screen-2xl mx-auto">
        <h5 className="font-Exo2 font-bold text-2xl">ESTADÍSTICAS DE INVERSIÓN</h5>
        <div className="w-full grid grid-cols-2 gap-6 mt-4">

          <div className="bg-black rounded-2xl p-6 text-white">
            <div className="flex justify-between items-center gap-4">
              <p className="">Monto total invertido</p>
              <div className="bg-primary-500 rounded-full p-2">
                <img src={arrowWhite_icon} alt="" className="size-6" />
              </div>
            </div>
            <span className="inline-block font-Exo2 font-extrabold text-4xl mb-4">$0</span>
            <p><strong>Ganancias</strong> obtenidas</p>
          </div>

          <div className="bg-[#DEDEDE] rounded-2xl p-6 text-[#3D3D3D]">
            <div className="flex justify-between items-center gap-4">
              <p className="">Realizado en la semana</p>
              <div className="bg-white rounded-full p-2">
                <img src={arrowDown_icon} alt="" className="size-6 -rotate-90" />
              </div>
            </div>
            <span className="inline-block font-Exo2 font-extrabold text-4xl mb-4 text-black">$0</span>
            <p><strong className="text-black">Ganancias</strong> obtenidas</p>
          </div>

          <div className="bg-[#DEDEDE] rounded-2xl p-6 text-black col-span-2">
            <div className="flex justify-between items-center gap-4">
              <div>
                <h5 className="font-Exo2 font-bold text-2xl">MÉTRICAS DE LA SEMANA</h5>
                <p className="text-[#3D3D3D]">Cantidad total por día</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="bg-white rounded-full py-2 px-5 font-bold">Mes</button>
                <button className="bg-white rounded-full p-2">
                  <img src={config_icon} alt="configuracion" className="size-6" />
                </button>
              </div>
            </div>
            <div className="h-[180px] flex items-end">
              <div className="w-full grid grid-cols-6 gap-3 text-[#3D3D3D]">
                <div>
                  <div className={`rounded-full h-6 w-full text-center ${date === 1 ? "bg-primary-500" : "bg-white"}`}></div>
                  <p className="text-center mt-3">Lun</p>
                </div>
                <div>
                  <div className={`rounded-full h-6 w-full text-center ${date === 2 ? "bg-primary-500" : "bg-white"}`}></div>
                  <p className="text-center mt-3">Mar</p>
                </div>
                <div>
                  <div className={`rounded-full h-6 w-full text-center ${date === 3 ? "bg-primary-500" : "bg-white"}`}></div>
                  <p className="text-center mt-3">Mie</p>
                </div>
                <div>
                  <div className={`rounded-full h-6 w-full text-center ${date === 4 ? "bg-primary-500" : "bg-white"}`}></div>
                  <p className="text-center mt-3">Jue</p>
                </div>
                <div>
                  <div className={`rounded-full h-6 w-full text-center ${date === 5 ? "bg-primary-500" : "bg-white"}`}></div>
                  <p className="text-center mt-3">Vie</p>
                </div>
                <div>
                  <div className={`rounded-full h-6 w-full text-center ${date === 6 ? "bg-primary-500" : "bg-white"}`}></div>
                  <p className="text-center mt-3">Sab</p>
                </div>
              </div>
            </div>
          </div>
        </div> 

      </div>
          */}
    </div>
  );
}
