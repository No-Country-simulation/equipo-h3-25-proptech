import Button from "../../components/common/button";
import Input from "../../components/common/input";
import InputRadio from "../../components/common/inputRadio";
import Select from "../../components/common/select";
import Template from "./template";
import { useNavigate } from "react-router-dom";
import { registerSteps } from "../../data/register";
import { getDateValues } from "../../helpers/dates";
import { useState } from "react";



interface FormValues {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  dni: string;
  gender: string;
  dateOfBirth: {
    day: string;
    month: string;
    year: string;
  };
  citizenship: string;
}

const FormDefaultValues: FormValues = {
  name: "",
  lastname: "",
  email: "",
  phone: "",
  dni: "",
  gender: "famale",
  dateOfBirth: {
    day: (new Date().getDay() + 1).toString(),
    month: (new Date().getMonth() + 1).toString(),
    year: (new Date().getFullYear()).toString(),
  },
  citizenship: "",
}



export default function RegisterStep2() {
  const [form, setForm] = useState<FormValues>(FormDefaultValues);
  const navigate = useNavigate();
  const isValid = form.name && form.lastname && form.email && form.phone && form.dni && form.citizenship;
  const { days, months, years } = getDateValues(form.dateOfBirth.month, form.dateOfBirth.year);


  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({
      ...form, dateOfBirth: {
        ...form.dateOfBirth,
        [e.target.name]: e.target.value
      }
    });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/register/paso3");
  }



  return (
    <Template data={registerSteps[1]}>
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-9">
        <div className="grid grid-cols-2 gap-4">
          <Input
            name="name"
            label="Nombre"
            placeholder="Nombre"
            value={form.name}
            onChange={handleChange}
          />
          <Input
            name="lastname"
            label="Apellido"
            placeholder="Apellido"
            value={form.lastname}
            onChange={handleChange}
          />
        </div>
        <Input
          type="email"
          name="email"
          label="Mail"
          placeholder="Usuario"
          value={form.email}
          onChange={handleChange}
        />
        <Input
          type="tel"
          name="phone"
          label="Telefono"
          placeholder="Celular"
          value={form.phone}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="dni"
          label="DNI"
          placeholder="Numero"
          value={form.dni}
          onChange={handleChange}
        />
        <div className="">
          <h3 className="mb-6">Género</h3>
          <div className="flex gap-6">
            <InputRadio
              name="gender"
              label="Mujer"
              value="famale"
              valueSelected={form.gender}
              onChange={handleChange}
            />
            <InputRadio
              name="gender"
              label="Hombre"
              value="male"
              valueSelected={form.gender}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <h3 className="mb-6">Fecha de nacimiento</h3>
          <div className="grid grid-cols-3 gap-4">
            <Select name="day" options={days} value={form.dateOfBirth.day} onChange={handleSelectChange} />
            <Select name="month" options={months} value={form.dateOfBirth.month} onChange={handleSelectChange} />
            <Select name="year" options={years} value={form.dateOfBirth.year} onChange={handleSelectChange} />
          </div>
        </div>
        <Input
          name="citizenship"
          label="Ciudadanía"
          placeholder="Argentina"
          value={form.citizenship}
          onChange={handleChange}
        />

        <Button disabled={!isValid} variant="primary" onClick={() => {}}>CONTINUAR</Button>

      </form>
    </Template>
  );
}
