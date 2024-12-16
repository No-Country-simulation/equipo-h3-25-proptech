import Input from "../../components/common/input";
import Button from "../../components/common/button";
import Select from "../../components/common/select";
import Template from "./template";
import InputRadio from "../../components/common/inputRadio";
import { countriesOptions, registerSteps, rolesOptions} from "../../data/register";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../../context/registerContext";




export default function RegisterStep1() {
  const navigate = useNavigate();
  const { form, setForm } = useRegister();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/register/paso2");
  }


  return (
    <Template data={registerSteps[0]}>
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div>
          <h3 className="font-lg">¿Qué tipo de usuario eres?</h3>
          <div className="flex flex-col gap-3 mt-4">
            {rolesOptions.map((user, index) => (
              <InputRadio
                key={index}
                name="roles"
                label={user.label}
                value={user.value}
                valueSelected={form.roles}
                onChange={handleChange}
              />
            ))}
          </div>
        </div>
        <Select
          name="country"
          label="País"
          options={countriesOptions}
          onChange={handleChange}
          value={form.country}
          
        />
        <Input
          type="number"
          name="zipCode"
          label="Código postal"
          placeholder="Número"
          value={form.zipCode} 
          onChange={handleChange}
        />

        <Button variant="primary" onClick={() => {}}>CONTINUAR</Button>
      </form>
    </Template>
  )
}
