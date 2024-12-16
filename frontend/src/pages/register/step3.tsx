import Template from "./template";
import Input from "../../components/common/input";
import InputRadio from "../../components/common/inputRadio";
import Button from "../../components/common/button";
import { captcha } from "../../assets";
import { useState } from "react";
import { registerSteps } from "../../data/register";
import { useRegister } from "../../context/registerContext";
import Modal from "../../components/common/modal";



export default function RegisterStep3() {
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState<string | any[]>("");
  const { form, setForm, submitForm } = useRegister();
  const isValid = 
    form.roles &&
    form.country &&
    form.zipCode &&
    form.name &&
    form.lastName &&
    form.email &&
    form.phoneNumber &&
    form.dni &&
    form.gender &&
    form.dateOfBirth && 
    form.citizenship &&
    form.address &&
    form.numbering &&
    form.depositMethod &&
    form.password &&
    confirmPassword;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let passwordValid = form.password.length >= 8;


    if (!passwordValid) {
      setModalMessage("La contraseña debe tener al menos 8 caracteres.");
      setModalIsOpen(true);
      return;
    }
    else if (form.password !== confirmPassword) {
      setModalMessage("Las contraseña no coinciden.");
      setModalIsOpen(true);
      return;
    }
    
    submitForm();
  }

  return (
    <Template data={registerSteps[1]}>
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-9">
        <div className="grid grid-cols-[5fr_2fr] gap-2">
          <Input
            name="address"
            label="Domicilio"
            placeholder="Dirección"
            value={form.address}
            onChange={handleChange}
          />
          <Input
            name="numbering"
            type="number"
            label="Numeración"
            placeholder="1234"
            value={form.numbering}
            onChange={handleChange}
          />
        </div>
        <div>
          <h3 className="mb-6">¿Cómo harías tus depósitos y retiros en Financia.ai?</h3>
          <div className="flex flex-col gap-2">
            <InputRadio
              label="Transferencia electronica"
              name="depositMethod"
              value="TRANSFERENCIA_ELECTRONICA"
              onChange={handleChange}
              valueSelected={form.depositMethod}
            />
            <InputRadio
              label="Efectivo"
              name="depositMethod"
              value="EFECTIVO"
              onChange={handleChange}
              valueSelected={form.depositMethod}
            />
            <InputRadio
              label="Transferencia electronica"
              name="depositMethod"
              value="CHEQUE"
              onChange={handleChange}
              valueSelected={form.depositMethod}
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
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <div className="mx-auto">
          <ul className="text-xs flex flex-col gap-1">
            <li className="flex gap-3">
              <span className="bg-[#D9D9D9] rounded-full size-4 text-[8px] flex items-center justify-center">?</span>
              <p>Utiliza al menos 8 carácteres</p>
            </li>
            <li className="flex gap-3">
              <span className="bg-[#D9D9D9] rounded-full size-4 text-[8px] flex items-center justify-center">?</span>
              <p>Utiliza al menos una minúscula y una mayúscula</p>
            </li>
            <li className="flex gap-3">
              <span className="bg-[#D9D9D9] rounded-full size-4 text-[8px] flex items-center justify-center">?</span>
              <p>Usa al menos un número</p>
            </li>
            <li className="flex gap-3">
              <span className="bg-[#D9D9D9] rounded-full size-4 text-[8px] flex items-center justify-center">?</span>
              <p>No uses 3 o más caracteres consecutivos ni repetidos</p></li>
            <li className="flex gap-3">
              <span className="bg-[#D9D9D9] rounded-full size-4 text-[8px] flex items-center justify-center">?</span>
              <p>Usa al menos una vocal y una consonante</p></li>
          </ul>
        </div>

        <img src={captcha} alt="captcha" width={296} className="mx-auto" />

        <Button disabled={!isValid} variant="primary" onClick={() => { }}>CREAR CUENTA</Button>
      </form>
      {modalIsOpen && (
        <Modal onClose={() => setModalIsOpen(false)}>
          <div className="flex flex-col gap-3 items-center">
            <p className="text-red-500">{modalMessage}</p>
            <Button variant="primary" onClick={() => setModalIsOpen(false)}>Volver a intentar</Button>
          </div>
        </Modal>
      )}
    </Template>
  );
}
