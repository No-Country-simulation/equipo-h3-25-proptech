import Button from "../../components/common/button";
import Input from "../../components/common/input";
import InputRadio from "../../components/common/inputRadio";
import Select from "../../components/common/select";
import Template from "./template";
import { useNavigate } from "react-router-dom";
import { citizenshipOptions, registerSteps } from "../../data/register";
import { getDateValues } from "../../helpers/dates";
import {useRegister} from "../../context/registerContext";





export default function RegisterStep2() {
  const navigate = useNavigate();
  const { form, setForm } = useRegister();
  const { days, months, years } = getDateValues(form.dateOfBirth.split("-")[1], form.dateOfBirth.split("-")[0]);
  const isValid = form.name && form.lastName && form.email && form.phoneNumber && form.dni && form.gender && form.dateOfBirth && form.citizenship;



  const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    let dateParsed = "";

    if (name === "year") {
      dateParsed = `${value}-${form.dateOfBirth.split("-")[1]}-${form.dateOfBirth.split("-")[2]}`;
    }
    else if (name === "month") {
      dateParsed = `${form.dateOfBirth.split("-")[0]}-${value}-${form.dateOfBirth.split("-")[2]}`;
    }
    else if (name === "day") {
      dateParsed = `${form.dateOfBirth.split("-")[0]}-${form.dateOfBirth.split("-")[1]}-${value}`;
    }

    setForm({ ...form, dateOfBirth: dateParsed });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
            name="lastName"
            label="Apellido"
            placeholder="Apellido"
            value={form.lastName}
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
          type="number"
          name="phoneNumber"
          label="Telefono"
          placeholder="Celular"
          value={form.phoneNumber}
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
              value="FEMENINO"
              valueSelected={form.gender}
              onChange={handleChange}
            />
            <InputRadio
              name="gender"
              label="Hombre"
              value="MASCULINO"
              valueSelected={form.gender}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <h3 className="mb-6">Fecha de nacimiento</h3>
          <div className="grid grid-cols-3 gap-4">
            <Select name="day" options={days} value={form.dateOfBirth.split("-")[2]} onChange={handleDateChange} />
            <Select name="month" options={months} value={form.dateOfBirth.split("-")[1]} onChange={handleDateChange} />
            <Select name="year" options={years} value={form.dateOfBirth.split("-")[0]} onChange={handleDateChange} />
          </div>
        </div>
        <Select
          name="citizenship"
          label="Ciudadanía"
          value={form.citizenship}
          options={citizenshipOptions}
          onChange={handleChange}
        />

        <Button disabled={!isValid} variant="primary" onClick={() => {}}>CONTINUAR</Button>

      </form>
    </Template>
  );
}
