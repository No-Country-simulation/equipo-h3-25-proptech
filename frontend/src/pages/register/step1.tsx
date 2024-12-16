import Input from "../../components/common/input";
import Button from "../../components/common/button";
import Select from "../../components/common/select";
import Template from "./template";
import InputRadio from "../../components/common/inputRadio";
import { countriesOptions, registerSteps, rolesOptions} from "../../data/register";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../../context/registerContext";
import { useState } from "react";

export default function RegisterStep1() {
  const navigate = useNavigate();
  const { form, setForm } = useRegister();
  const [errors, setErrors] = useState({
    roles: "",
    country: "",
    postalCode: ""
  });

  const validateField = (name: string, value: string) => {
    switch(name) {
      case 'postalCode':
        return value.length === 0 ? "El código postal es obligatorio" : "";
      case 'country':
        return !value ? "Debe seleccionar un país" : "";
      case 'roles':
        return !value ? "Debe seleccionar un tipo de usuario" : "";
      default:
        return "";
    }
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
      roles: validateField('roles', form.roles),
      country: validateField('country', form.country),
      postalCode: validateField('postalCode', form.postalCode)
    };
    
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(error => error !== "");
    if (!hasErrors) {
      navigate("/register/paso2");
    }
  }

  return (
    <Template data={registerSteps[0]}>
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div>
          <h3 className="font-lg">¿Qué tipo de usuario eres?</h3>
          <div className="flex flex-col gap-3 mt-4">
            {rolesOptions.map((user, index) => (
              <div key={index}>
                <InputRadio
                  name="roles"
                  label={user.label}
                  value={user.value}
                  valueSelected={form.roles}
                  onChange={handleChange}
                />
                {errors.roles && <p className="text-red-500 text-sm mt-1">{errors.roles}</p>}
              </div>
            ))}
          </div>
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
            type="number"
            name="postalCode"
            label="Código postal"
            placeholder="Número"
            value={form.postalCode} 
            onChange={handleChange}
          />
          {errors.postalCode && <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>}
        </div>

        <Button variant="primary" onClick={()=>{}} >CONTINUAR</Button>
      </form>
    </Template>
  )
}