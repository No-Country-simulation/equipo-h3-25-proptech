import Button from "../../components/button";
import Input from "../../components/input";
import { letter_highicon } from "../../assets";


export default function Success() {
  return (
    <div className="w-full max-w-[800px] mx-auto px-10 flex flex-col items-center py-20">
      <h3 className="font-bold text-2xl font-Exo2">FINANCIA.AI</h3>
      <h2 className="font-bold text-5xl font-Exo2 text-center">REGISTRO <span className="text-primary-500">EXITOSO</span></h2>
      <p className="my-6 text-body text-center">
        Hemos enviado un correo electrónico a tu dirección registrada. Por favor, revisa tu bandeja de entrada (y la carpeta de spam, si no lo encuentras) para confirmar tu registro y activar tu cuenta.
      </p>
      
      <img src={letter_highicon} alt="" className="size-[120px]" />
      
      <div className="w-full flex flex-col items-center gap-6 mt-10">
        <h5 className="font-bold font-Exo2 text-2xl text-center">DIRECCIÓN DE MAIL</h5>
        <div className="w-full max-w-[400px]">
          <Input name="email" value="mail@hotmail.com" onChange={() => {}}/>
        </div>
        <div className="w-full grid grid-cols-2 gap-4">
          <Button variant="secondary" onClick={() => {}}>REENVIAR</Button>
          <Button variant="primary" onClick={() => {}}>CONTINUAR</Button>
        </div>
      </div>

    </div>
  );
}
