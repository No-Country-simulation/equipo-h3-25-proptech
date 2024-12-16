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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { type, value, name, checked } = e.target;
    if (type === "checkbox")
      setForm({ ...form, [name]: checked });
    else 
      setForm({ ...form, [name]: value });
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true)
    const { country, remember, ...rest } = form;
    const { login } = useAuthStore.getState();

    try {
      const loginRes = await axios.post("https://api-deploy-lastest.onrender.com/iniciarsesion", rest);
      console.log(loginRes);
      login({name: ""});
      navigate("/dashboard/perfil")

    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        setModalMessage(error.response?.data);
        setModalIsOpen(true);
      }
    }
  }


  return (
    <div className="py-12 px-10 flex items-start justify-center gap-14 text-body max-w-screen-2xl mx-auto">
      <img src={login_image} alt="login banner" className="w-full min-w-[500px] max-w-[800px]"  />
      <div className="shrink-0a">
        <h3 className="font-Exo2 font-bold text-2xl text-black">FINANCIA.AI</h3>
        <h1 className="font-Exo2 font-bold text-5xl text-primary-500">LOGIN</h1>
        <p className="mt-8 mb-5">¡Bienvenido de nuevo! Por favor, inicia sesión en tu cuenta.</p>
        <form action="" onSubmit={onSubmit} className="flex flex-col gap-5 mb-6">
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
          <div className="flex justify-between my-4">
            <InputCheck name="remember" label="Recordar" onChange={handleChange} checked={form.remember}/>
            <Link to="/reset-password">¿Olvidaste la contraseña?</Link>
          </div>
          <Button onClick={() => {}} variant="primary">
          {isLoading
            ? (<>
              <div className={`absolute top-0 left-0 ${isLoading && 'animate-load'}  w-full h-full`}></div>
              'INICIANDO SESIÓN...'
            </>)
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
