import { useState } from "react";
import { login_image } from "../assets";
import { Link } from "react-router-dom";
import Button from "../components/common/button";
import Input from "../components/common/input";
import InputCheck from "../components/common/inputCheck";


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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { type, value, name, checked } = e.target;
    if (type === "checkbox")
      setForm({ ...form, [name]: checked });
    else 
      setForm({ ...form, [name]: value });
  }


  return (
    <div className="py-12 px-10 flex items-start justify-center gap-14 text-body max-w-screen-2xl mx-auto">
      <img src={login_image} alt="login banner" className="w-full min-w-[500px] max-w-[800px]"  />
      <div className="shrink-0a">
        <h3 className="font-Exo2 font-bold text-2xl text-black">FINANCIA.AI</h3>
        <h1 className="font-Exo2 font-bold text-5xl text-primary-500">LOGIN</h1>
        <p className="mt-8 mb-5">¡Bienvenido de nuevo! Por favor, inicia sesión en tu cuenta.</p>
        <form action="" className="flex flex-col gap-5 mb-6">
          <Input
            value={form.email}
            onChange={handleChange}
            name="email"
            type="email"
            label="Mail"
            placeholder="Mail"
          />
          <Input
            value={form.country}
            onChange={handleChange}
            name="country"
            label="País"
            placeholder="País"
          />
          <Input
            value={form.dni}
            onChange={handleChange}
            name="dni"
            type="number"
            label="DNI"
            placeholder="DNI"
          />
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
          <Button onClick={() => {}} variant="primary">LOGIN</Button>
        </form>
        <p>¿Nuevo usuario? <Link to="/register/paso1" className="text-primary-500 font-bold">Registrate</Link></p>
      </div>
    </div>
  );
}
