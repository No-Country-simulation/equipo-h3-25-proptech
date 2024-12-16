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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState({
    address: "",
    numbering: "",
    depositMethod: "",
    password: "",
    confirmPassword: ""
  });

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'address':
        return value.length < 4 ? "La dirección debe tener al menos 4 caracteres" :
          value.length > 64 ? "La dirección no debe superar los 64 caracteres" : "";
      case 'numbering':
        return value.length === 0 ? "La numeración es obligatoria" : "";
      case 'depositMethod':
        return !value ? "Debe seleccionar un método de depósito" : "";
      case 'password':
        const passwordErrors = [];
        if (value.length < 8) passwordErrors.push("Debe tener al menos 8 caracteres");
        if (value.length > 24) passwordErrors.push("No debe superar los 24 caracteres");
        if (!/(?=.*[a-z])(?=.*[A-Z])/.test(value)) passwordErrors.push("Debe tener al menos una minúscula y una mayúscula");
        if (!/(?=.*\d)/.test(value)) passwordErrors.push("Debe incluir al menos un número");
        if (/(.)\1{2,}/.test(value)) passwordErrors.push("No debe tener 3 o más caracteres consecutivos o repetidos");
        return passwordErrors.length > 0 ? passwordErrors.join(". ") : "";
      case 'confirmPassword':
        return value !== form.password ? "Las contraseñas no coinciden" : "";
      default:
        return "";
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  }

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setErrors(prev => ({
      ...prev,
      confirmPassword: validateField('confirmPassword', value)
    }));
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = {
      address: validateField('address', form.address),
      numbering: validateField('numbering', form.numbering),
      depositMethod: validateField('depositMethod', form.depositMethod),
      password: validateField('password', form.password),
      confirmPassword: validateField('confirmPassword', confirmPassword)
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(error => error !== "");
    if (!hasErrors) {
      setIsLoading(true);
      submitForm();
    }
  }

  return (
    <Template data={registerSteps[1]}>
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-9">
        <div className="grid grid-cols-[5fr_2fr] gap-2">
          <div>
            <Input
              name="address"
              label="Domicilio"
              placeholder="Dirección"
              value={form.address}
              onChange={handleChange}
            />
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
          </div>
          <div>
            <Input
              name="numbering"
              type="number"
              label="Numeración"
              placeholder="1234"
              value={form.numbering}
              onChange={handleChange}
            />
            {errors.numbering && <p className="text-red-500 text-sm mt-1">{errors.numbering}</p>}
          </div>
        </div>
        <div>
          <h3 className="mb-6">¿Cómo harías tus depósitos y retiros en Financia.ai?</h3>
          <div className="flex flex-col gap-2">
            {["TRANSFERENCIA_ELECTRONICA", "EFECTIVO", "CHEQUE"].map((method) => (
              <div key={method}>
                <InputRadio
                  label={method === "TRANSFERENCIA_ELECTRONICA" ? "Transferencia electronica" :
                    method === "EFECTIVO" ? "Efectivo" : "Cheque"}
                  name="depositMethod"
                  value={method}
                  onChange={handleChange}
                  valueSelected={form.depositMethod}
                />
              </div>
            ))}
          </div>
          {errors.depositMethod && <p className="text-red-500 text-sm mt-1">{errors.depositMethod}</p>}
        </div>
        <div>
          <Input
            name="password"
            type="password"
            label="Contraseña"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>
        <div>
          <Input
            name="confirmPassword"
            type="password"
            label="Confirmar contraseña"
            placeholder="Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
        </div>

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
              <p>No uses 3 o más caracteres consecutivos ni repetidos</p>
            </li>
            <li className="flex gap-3">
              <span className="bg-[#D9D9D9] rounded-full size-4 text-[8px] flex items-center justify-center">?</span>
              <p>Usa al menos una vocal y una consonante</p>
            </li>
          </ul>
        </div>

        <img src={captcha} alt="captcha" width={296} className="mx-auto" />

        <Button
          disabled={
            !form.address ||
            !form.numbering ||
            !form.depositMethod ||
            !form.password ||
            !confirmPassword ||
            Object.values(errors).some(error => error !== "")
          }
          variant="primary"
          onClick={() => { }}
        >
          {isLoading
            ? (<>
              <div className={`absolute top-0 left-0 ${isLoading && 'animate-load'}  w-full h-full`}></div>
              'ENVIANDO DATOS...'
            </>)
            : 'CREAR CUENTA'}
        </Button>
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