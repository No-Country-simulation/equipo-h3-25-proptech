import { useState } from "react";
import { login_image } from "../assets";
import { Link } from "react-router-dom";
import Button from "../components/button";
import Input from "../components/input";


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
    <div className="bg-white w-full">
      <div className="flex justify-between gap-10 py-10 ps-8 pe-28 text-body max-w-[1200px] mx-auto font-Roboto text-body">
        <div className="w-1/2 rounded-3xl flex justify-center items-center relative">
          <img src={login_image} alt="login banner" />
        </div>
        <div className="w-1/2 max-w-[420px]">
          <h3 className="text-black font-bold text-2xl font-Exo2">FINANCIA.AI</h3>
          <h1 className="text-primary-500 font-bold text-5xl font-Exo2 text-secondary">LOGIN</h1>
          <p className="mt-8 mb-5">¡Bienvenido de nuevo! Por favor, inicia sesión en tu cuenta.</p>
          <form action="" className="flex flex-col gap-5 mb-6">
            <Input
              value={form.email}
              onChange={handleChange}
              name="email"
              type="email"
              label="Mail"
              placeholder="LosChristian@gmail.com"
            />
            <Input
              value={form.country}
              onChange={handleChange}
              name="country"
              label="País"
              placeholder="Argentina"
            />
            <Input
              value={form.dni}
              onChange={handleChange}
              name="dni"
              type="number"
              label="DNI"
              placeholder="12345678"
            />
            <Input
              value={form.password}
              onChange={handleChange}
              name="password"
              type="password"
              label="Password"
              placeholder="123456"
            />
            <div className="flex justify-between my-4">
              <div className="flex items-center gap-x-3">
                <input type="checkbox" id="remember" name="remember" onChange={handleChange}/>
                <label htmlFor="remember" className="block text-sm/6 font-medium">Recordar</label>
              </div>
              <a href="">¿Olvidaste la contraseña?</a>
            </div>
            <Button onClick={() => {}} variant="primary">LOGIN</Button>
          </form>
          <p>¿Nuevo usuario? <Link to="/register" className="text-[#01FFA4]">Registrate</Link></p>
        </div>
      </div>
    </div>
  );
}
