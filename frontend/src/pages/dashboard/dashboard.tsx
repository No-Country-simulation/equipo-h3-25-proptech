import { arrowDown_icon, arrowWhite_icon, camera_icon, config_icon, profile } from "../../assets";
import Button from "../../components/common/button";
import Input from "../../components/common/input";



export default function Dashboard() {
  const date = new Date().getDay();

  return (
    <div className="flex">
      <EditProfileSection />

      <div className="w-full p-6 flex flex-col gap-6">
        {/* financiamiento solicitado */}
        <div>
          <h5 className="font-Exo2 font-bold text-2xl">FINANCIAMIENTO SOLICITADO</h5>
          <div className="w-full grid grid-cols-3 pt-4 pb-8 border-b-[1px] border-body">
            <div className="text-center">
              <p className="inline-block text-center font-bold text-lg py-1 mb-2 border-b-[3px] border-primary-500">Pagos</p>
              <span className="inline-block text-center font-bold w-full border-r-[1px] border-body py-2">$0</span>
            </div>
            <div className="text-center">
              <p className="inline-block text-center text-lg py-1 mb-2">Cuota</p>
              <span className="inline-block text-center font-bold w-full border-r-[1px] border-body py-2">$0</span>
            </div>
            <div className="text-center">
              <p className="inline-block text-center text-lg py-1 mb-2">Interes</p>
              <span className="inline-block text-center font-bold w-full py-2">0</span>
            </div>
           </div>
        </div>
        
        {/* inversiones realizadas */}
        <div>
          <h5 className="font-Exo2 font-bold text-2xl">INVERSIONES REALIZADAS</h5>
          <div className="w-full grid grid-cols-3 pt-4 pb-8 border-b-[1px] border-body">
            <div className="text-center">
              <p className="inline-block text-center font-bold text-lg py-1 mb-2 border-b-[3px] border-primary-500">Pagos</p>
              <span className="inline-block text-center font-bold w-full border-r-[1px] border-body py-2">$0</span>
            </div>
            <div className="text-center">
              <p className="inline-block text-center text-lg py-1 mb-2">Día</p>
              <span className="inline-block text-center font-bold w-full border-r-[1px] border-body py-2">9/7/2024</span>
            </div>
            <div className="text-center">
              <p className="inline-block text-center text-lg py-1 mb-2">Monto total a la fecha</p>
              <span className="inline-block text-center font-bold w-full py-2">0</span>
            </div>
           </div>
        </div>

        {/* estadisticas de inversion */}
        <div>
          <h5 className="font-Exo2 font-bold text-2xl">ESTADÍSTICAS DE INVERSIÓN</h5>
          <div className="w-full grid grid-cols-2 gap-6 mt-4">

            {/* card 1 */}
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

            {/* card 2 */}
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

            {/* card 3 */}
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
      </div>
    </div>
  );
}



function EditProfileSection() {
  return (
    <div className="bg-[#F6F6F6] w-full max-w-[450px] py-14 px-9 shrink-0">
      <div className="mb-8 flex items-center gap-5">
        <div className="size-28 relative shrink-0">
          <img
            src={profile}
            alt="foto de perfil"
            className="rounded-full"
          />
          <div className="absolute bottom-0 right-0 bg-[#A7A7A7] size-[30px] flex items-center justify-center rounded-full">
            <img src={camera_icon} alt="" className="w-4"/>
          </div>
        </div>
        <div>
          <h4 className="font-Exo2 font-bold text-2xl">LUCAS GÓMEZ</h4>
          <p className="text-lg">Inversor</p>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <Input label="Email" value="mail@hotmail.com" onChange={() => {}} name="email" type="email" />
        <Input label="Telefono" value="112341234" onChange={() => {}} name="phone" type="tel" />
        <Input label="Dirección" value="Calle 123" onChange={() => {}} name="address" />
        <Input label="Código postal" value="1234" onChange={() => {}} name="postalCode" />
        <Input label="Medio de pago" value="transferencia" onChange={() => {}} name="paymentMethod" />

        <Button variant="primary" onClick={() => {}}>EDITAR PERFIL</Button>
      </div>
    </div>
  );
}
