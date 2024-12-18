import { useState } from "react";
import { login_image } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/common/button";
import Select from "../components/common/select";
import Input from "../components/common/input";
import InputCheck from "../components/common/inputCheck";
import Modal from "../components/common/modal";
import { countriesOptions } from "../data/register";
import useAuthStore from "../store/authStore";
import axios from "axios";

interface FormValues {
  email: string;
  country: string;
  dni: string;
  password: string;
  remember: boolean;
}

const defaultValues: FormValues = {
  email: "",
  country: "",
  dni: "",
  password: "",
  remember: false
}

export default function Login() {
  const [form, setForm] = useState(defaultValues);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState<string>("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState({
    email: "",
    country: "",
    dni: "",
    password: "",
  });

  // Validation function
  const validateForm = (): boolean => {
    const newErrors = {
      email: "",
      country: "",
      dni: "",
      password: "",
    };
    let isValid = true;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = "El correo electrónico es requerido";
      isValid = false;
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Por favor ingrese un correo electrónico válido";
      isValid = false;
    }

    // Country validation
    if (!form.country.trim()) {
      newErrors.country = "Por favor seleccione un país";
      isValid = false;
    }

    // DNI validation
    const dniRegex = /^\d{7,8}$/; // Assumes 7-8 digit DNI
    if (!form.dni.trim()) {
      newErrors.dni = "El DNI es requerido";
      isValid = false;
    } else if (!dniRegex.test(form.dni)) {
      newErrors.dni = "Por favor ingrese un DNI válido (7-8 dígitos)";
      isValid = false;
    }

    // Password validation
    if (!form.password.trim()) {
      newErrors.password = "La contraseña es requerida";
      isValid = false;
    } else if (form.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLElement>) => {
    const { type, value, name, checked } = e.target as HTMLInputElement;
    
    // Clear specific error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }

    if (type === "checkbox")
      setForm({ ...form, [name]: checked });
    else
      setForm({ ...form, [name]: value });
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const { country, remember, ...rest } = form;
    const { login } = useAuthStore.getState();

    try {
      const loginRes = await axios.post("https://api-deploy-lastest.onrender.com/iniciarsesion", rest);
      console.log("RESPUESTA LOGIN: ",loginRes);
      login({ name: "" });
      navigate("/dashboard/perfil");

    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        setModalMessage(error.response?.data);
        setModalIsOpen(true);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="py-12 px-10 flex items-start justify-center gap-14 text-body max-w-screen-2xl mx-auto">
      <img src={login_image} alt="login banner" className="w-full min-w-[500px] max-w-[800px]" />
      <div className="shrink-0a">
        <h3 className="font-Exo2 font-bold text-2xl text-black">FINANCIA.AI</h3>
        <h1 className="font-Exo2 font-bold text-5xl text-primary-500">LOGIN</h1>
        <p className="mt-8 mb-5">¡Bienvenido de nuevo! Por favor, inicia sesión en tu cuenta.</p>
        <form action="" onSubmit={onSubmit} className="flex flex-col gap-5 mb-6">
          <div>
            <Input
              value={form.email}
              onChange={handleChange}
              name="email"
              type="email"
              label="Mail"
              placeholder="Mail"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <Select
              name="country"
              label="País"
              options={countriesOptions}
              onChange={handleChange}
              value={form.country}
            />
            {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
          </div>
          <div>
            <Input
              value={form.dni}
              onChange={handleChange}
              name="dni"
              type="number"
              label="DNI"
              placeholder="DNI"
            />
            {errors.dni && <p className="text-red-500 text-sm mt-1">{errors.dni}</p>}
          </div>
          <div>
            <Input
              value={form.password}
              onChange={handleChange}
              name="password"
              type="password"
              label="Contraseña"
              placeholder="contraseña"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          <div className="flex justify-between my-4">
            <InputCheck name="remember" label="Recordar" onChange={handleChange} checked={form.remember} />
            <Link to="/reset-password">¿Olvidaste la contraseña?</Link>
          </div>
          <Button  variant="primary" >
            {isLoading
              ? 'INICIANDO SESIÓN...'
              : 'INICIAR SESIÓN'}
          </Button>
        </form>
        <p>¿Nuevo usuario? <Link to="/register/paso1" className="text-primary-500 font-bold">Registrate</Link></p>
      </div>
      {modalIsOpen && <Modal onClose={() => setModalIsOpen(false)}>
        <div className="flex flex-col items-center gap-3">
          <h4 className="font-Exo2 font-bold text-2xl text-center">Error al iniciar sesión</h4>
          <p className="text-red-500">{modalMessage}</p>
          <Button variant="primary" onClick={() => setModalIsOpen(false)}>Volver a intentar</Button>
        </div>
      </Modal>}
    </div>
  );
}