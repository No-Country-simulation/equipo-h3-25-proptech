import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import {
  rolesValues,
  Roles,
  countriesValues,
  Countries,
  genderValues,
  Gender,
  citizenshipValues,
  Citizenship,
  depositMethodValues,
  DepositMethod,
} from "../data/register";
import api from "../api/axiosConfig";
import Modal from "../components/common/modal";
import Button from "../components/common/button";



const phoneNumberRegex = /^\+?(\d{1,3})?\s?-?\(?\d{1,4}\)?\s?-?\d{1,4}\s?-?\d{1,4}\s?-?\d{1,9}$/;


const register1Schema = z.object({
  roles: z.enum(rolesValues as [Roles, ...Roles[]]),
  country: z.enum(countriesValues as [Countries, ...Countries[]]),
  postalCode: z.string()
});

const register2Schema = z.object({
  name: z.string().trim().min(4, "El nombre debe tener al menos 4 caracteres").max(24, "El nombre no debe superar los 24 caracteres"),
  lastName: z.string().trim().min(4, "El apellido debe tener al menos 4 caracteres").max(24, "El apellido no debe superar los 24 caracteres"),
  email: z.string().email(),
  phoneNumber: z.string().regex(phoneNumberRegex),
  dni: z.string(),
  gender: z.enum(genderValues as [Gender, ...Gender[]]),
  dateOfBirth: z.string().date(),
  citizenship: z.enum(citizenshipValues as [Citizenship, ...Citizenship[]])
})

const register3Schema = z.object({
  address: z.string().trim().min(4, "La dirección debe tener al menos 4 caracteres").max(64, "La dirección no debe superar los 64 caracteres"),
  numbering: z.string(),
  depositMethod: z.enum(depositMethodValues as [DepositMethod, ...DepositMethod[]]),
  password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres").max(24, "La contraseña no debe superar los 24 caracteres")
})

const registerSchema = register1Schema.merge(register2Schema).merge(register3Schema);

interface RegisterFormValues {
  roles: Roles;
  country: Countries;
  postalCode: string;
  name: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dni: string;
  gender: Gender;
  dateOfBirth: string;
  citizenship: Citizenship;
  address: string;
  numbering: string;
  depositMethod: DepositMethod;
  password: string;
  active:boolean;
}


const registerFormDefaultValues: RegisterFormValues = {
  country: "Argentina",
  phoneNumber: "",
  gender: "MASCULINO",
  citizenship: "Argentino",
  address: "",
  postalCode: "",
  numbering: "",
  depositMethod: "TRANSFERENCIA_ELECTRONICA",
  name: "",
  lastName: "",
  dni: "",
  email: "",
  password: "",
  active: true,
  roles: "INVERSOR",
  dateOfBirth: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
}

interface RegisterFormContext {
  form: RegisterFormValues;
  setForm: React.Dispatch<React.SetStateAction<RegisterFormValues>>;
  submitForm: () => void;
}


const RegisterContext = createContext<RegisterFormContext | undefined>(undefined);

export const useRegister = (): RegisterFormContext => {
  const context = useContext(RegisterContext);
  if (!context) {
    throw new Error("useRegister must be used within a RegisterProvider");
  }
  return context;
}



export function RegisterProvider({ children }: { children: React.ReactNode }) {
  const [form, setForm] = useState<RegisterFormValues>(registerFormDefaultValues);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState<string | any[]>("");
  const navigate = useNavigate();
  
  const submitForm = async () => {
    const isFormValid = registerSchema.safeParse(form);
    if (!isFormValid.success) {
      console.error(isFormValid.error);
      setModalMessage(isFormValid.error.issues, );
      setModalIsOpen(true);
      return;
    }

    try {
      const res = await api.post("/api/user", form);
      console.log(res);
      navigate("/register/exito");
    } catch (error) {
      console.log(error);
      setModalMessage("Error al crear el usuario");
      setModalIsOpen(true);
    }
  }

  return (
    <RegisterContext.Provider value={{ form, setForm, submitForm }}>
      {children}
      {modalIsOpen && (
        <Modal onClose={() => setModalIsOpen(false)}>
          <div className="flex flex-col gap-3 items-center">
            {Array.isArray(modalMessage) ? modalMessage.map((error, index) => <p key={index} className="text-red-500">{error.message}</p>) : <p>{modalMessage}</p>}
            <Button variant="primary" onClick={() => setModalIsOpen(false)}>Volver a intentar</Button>
          </div>
        </Modal>
      )}
    </RegisterContext.Provider>
  );
}
