import Template from "./template";
import Input from "../../components/common/input";
import Button from "../../components/common/button";
import InputCheck from "../../components/common/inputCheck";
import { captcha } from "../../assets";
import { useState } from "react";
import { registerSteps } from "../../data/register";
import {useNavigate} from "react-router-dom";



type depositMethod = "electronicTransfer" | "cash" | "check"

interface FormValues {
  home: string;
  number: string;
  depositMethod: {
    [key in depositMethod]: boolean;
  };
  password: string;
  confirmPassword: string;
}

const formDefaultValues: FormValues = {
  home: "",
  number: "",
  depositMethod: {
    electronicTransfer: false,
    cash: false,
    check: false
  },
  password: "",
  confirmPassword: "",
}


export default function RegisterStep3() {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormValues>(formDefaultValues);
  const isValid = form.home && form.number && form.password && form.confirmPassword;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    if (type === "checkbox") {
      setForm({
        ...form, depositMethod: {
          ...form.depositMethod,
          [name]: checked
        }
      })
    } else {
      setForm({ ...form, [name]: value });
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const inputChecked = Object.values(form.depositMethod).filter((value) => value);
    if (inputChecked.length === 0) {
      return console.log("Tienes que seleccionar un metodo de depósito.");
    }
    if (form.password !== form.confirmPassword) {
      return console.log("Las contraseña no coinciden.");
    }
    navigate("/register/exito");
  }



  return (
    <Template data={registerSteps[1]}>
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-9">
        <div className="grid grid-cols-[5fr_2fr] gap-2">
          <Input
            name="home"
            label="Domicilio"
            placeholder="Dirección"
            value={form.home}
            onChange={handleChange}
          />
          <Input
            name="number"
            type="number"
            label="Numeración"
            placeholder="1234"
            value={form.number}
            onChange={handleChange}
          />
        </div>
        <div>
          <h3 className="mb-6">¿Cómo harías tus depósitos y retiros en Financia.ai?</h3>
          <div className="flex flex-col gap-2">
            <InputCheck
              label="Transferencia electrónica"
              name="electronicTransfer"
              checked={form.depositMethod.electronicTransfer}
              onChange={handleChange}
            />
            <InputCheck
              label="Efectivo"
              name="cash"
              checked={form.depositMethod.cash}
              onChange={handleChange}
            />
            <InputCheck
              label="check"
              name="check"
              checked={form.depositMethod.check}
              onChange={handleChange}
            />
          </div>
        </div>
        <Input
          name="password"
          type="password"
          label="Contraseña"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <Input
          name="confirmPassword"
          type="password"
          label="Confirmar contraseña"
          placeholder="Password"
          value={form.confirmPassword}
          onChange={handleChange}
        />

        <div className="mx-auto">
          <ul className="text-xs flex flex-col gap-1">
            <li className="flex gap-3">
              <span className="bg-[#D9D9D9] inline-block rounded-full size-4 text-[8px] flex items-center justify-center">?</span>
              <p>Utiliza al menos 8 carácteres</p>
            </li>
            <li className="flex gap-3">
              <span className="bg-[#D9D9D9] inline-block rounded-full size-4 text-[8px] flex items-center justify-center">?</span>
              <p>Utiliza al menos una minúscula y una mayúscula</p>
            </li>
            <li className="flex gap-3">
              <span className="bg-[#D9D9D9] inline-block rounded-full size-4 text-[8px] flex items-center justify-center">?</span>
              <p>Usa al menos un número</p>
            </li>
            <li className="flex gap-3">
              <span className="bg-[#D9D9D9] inline-block rounded-full size-4 text-[8px] flex items-center justify-center">?</span>
              <p>No uses 3 o más caracteres consecutivos ni repetidos</p></li>
            <li className="flex gap-3">
              <span className="bg-[#D9D9D9] inline-block rounded-full size-4 text-[8px] flex items-center justify-center">?</span>
              <p>Usa al menos una vocal y una consonante</p></li>
          </ul>
        </div>

        <img src={captcha} alt="captcha" width={296} className="mx-auto" />
        
        <Button disabled={!isValid} variant="primary" onClick={() => {}}>CREAR CUENTA</Button>
      </form>
    </Template>
  );
}
