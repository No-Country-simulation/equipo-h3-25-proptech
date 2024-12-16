import Button from "../../components/common/button";
import Input from "../../components/common/input";
import InputRadio from "../../components/common/inputRadio";
import Select from "../../components/common/select";
import Template from "./template";
import { useNavigate } from "react-router-dom";
import { citizenshipOptions, registerSteps } from "../../data/register";
import { getDateValues } from "../../helpers/dates";
import {useRegister} from "../../context/registerContext";
import { useState } from "react";

export default function RegisterStep2() {
  const navigate = useNavigate();
  const { form, setForm } = useRegister();
  const { days, months, years } = getDateValues(form.dateOfBirth.split("-")[1], form.dateOfBirth.split("-")[0]);
  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    dni: "",
    gender: "",
    dateOfBirth: "",
    citizenship: ""
  });

  const validateField = (name: string, value: string) => {
    switch(name) {
      case 'name':
        return value.length < 4 ? "El nombre debe tener al menos 4 caracteres" : 
               value.length > 24 ? "El nombre no debe superar los 24 caracteres" : "";
      case 'lastName':
        return value.length < 4 ? "El apellido debe tener al menos 4 caracteres" : 
               value.length > 24 ? "El apellido no debe superar los 24 caracteres" : "";
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? "Ingrese un email válido" : "";
      case 'phoneNumber':
        const phoneRegex = /^\+?(\d{1,3})?\s?-?\(?\d{1,4}\)?\s?-?\d{1,4}\s?-?\d{1,4}\s?-?\d{1,9}$/;
        return !phoneRegex.test(value) ? "Ingrese un número de teléfono válido" : "";
      case 'dni':
        return value.length === 0 ? "El DNI es obligatorio" : "";
      case 'gender':
        return !value ? "Debe seleccionar un género" : "";
      case 'dateOfBirth':
        const today = new Date();
        const birthDate = new Date(value);
        const age = today.getFullYear() - birthDate.getFullYear();
        return age < 18 ? "Debes ser mayor de 18 años" : "";
      case 'citizenship':
        return !value ? "Debe seleccionar una ciudadanía" : "";
      default:
        return "";
    }
  }

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
    setErrors(prev => ({
      ...prev,
      dateOfBirth: validateField('dateOfBirth', dateParsed)
    }));
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  }
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = {
      name: validateField('name', form.name),
      lastName: validateField('lastName', form.lastName),
      email: validateField('email', form.email),
      phoneNumber: validateField('phoneNumber', form.phoneNumber),
      dni: validateField('dni', form.dni),
      gender: validateField('gender', form.gender),
      dateOfBirth: validateField('dateOfBirth', form.dateOfBirth),
      citizenship: validateField('citizenship', form.citizenship)
    };
    
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(error => error !== "");
    if (!hasErrors) {
      navigate("/register/paso3");
    }
  }

  return (
    <Template data={registerSteps[1]}>
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-9">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Input
              name="name"
              label="Nombre"
              placeholder="Nombre"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <Input
              name="lastName"
              label="Apellido"
              placeholder="Apellido"
              value={form.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
          </div>
        </div>
        <div>
          <Input
            type="email"
            name="email"
            label="Mail"
            placeholder="Usuario"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <Input
            type="number"
            name="phoneNumber"
            label="Telefono"
            placeholder="Celular"
            value={form.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
        </div>
        <div>
          <Input
            type="number"
            name="dni"
            label="DNI"
            placeholder="Numero"
            value={form.dni}
            onChange={handleChange}
          />
          {errors.dni && <p className="text-red-500 text-sm mt-1">{errors.dni}</p>}
        </div>
        <div>
          <h3 className="mb-6">Género</h3>
          <div className="flex gap-6">
            {["MASCULINO", "FEMENINO"].map((gender) => (
              <div key={gender}>
                <InputRadio
                  name="gender"
                  label={gender === "MASCULINO" ? "Hombre" : "Mujer"}
                  value={gender}
                  valueSelected={form.gender}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>
          {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
        </div>
        <div>
          <h3 className="mb-6">Fecha de nacimiento</h3>
          <div className="grid grid-cols-3 gap-4">
            <Select name="day" options={days} value={form.dateOfBirth.split("-")[2]} onChange={handleDateChange} />
            <Select name="month" options={months} value={form.dateOfBirth.split("-")[1]} onChange={handleDateChange} />
            <Select name="year" options={years} value={form.dateOfBirth.split("-")[0]} onChange={handleDateChange} />
          </div>
          {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
        </div>
        <div>
          <Select
            name="citizenship"
            label="Ciudadanía"
            value={form.citizenship}
            options={citizenshipOptions}
            onChange={handleChange}
          />
          {errors.citizenship && <p className="text-red-500 text-sm mt-1">{errors.citizenship}</p>}
        </div>

        <Button variant="primary" onClick={()=>{}}>CONTINUAR</Button>
      </form>
    </Template>
  );
}