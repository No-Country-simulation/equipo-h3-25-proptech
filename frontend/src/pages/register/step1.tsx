import Input from "../../components/input";
import Button from "../../components/button";
import Select from "../../components/select";
import Template from "./template";
import InputRadio from "../../components/inputRadio";
import { CountryValue, TypeOfUserValue, typeOfUsers, countries, registerSteps} from "../../data/register";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



interface FormValues {
  typeOfUsers: TypeOfUserValue;
  country: CountryValue;
  postalCode: string;
}

const formDefaultValues: FormValues = {
  typeOfUsers: "inversor",
  country: "argentina",
  postalCode: "",
}



export default function RegisterStep1() {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormValues>(formDefaultValues);
  const isValid = form.typeOfUsers && form.country && form.postalCode;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/register/step2");
  }


  return (
    <Template data={registerSteps[0]}>
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div>
          <h3 className="font-lg">¿Qué tipo de usuario eres?</h3>
          <div className="flex flex-col gap-3 mt-4">
            {typeOfUsers.map((user, index) => (
              <InputRadio
                key={index}
                name="typeOfUsers"
                label={user.label}
                value={user.value}
                valueSelected={form.typeOfUsers}
                onChange={handleChange}
              />
            ))}
          </div>
        </div>
        <Select
          name="country"
          label="País"
          options={countries}
          onChange={handleChange}
          value={form.country}
        />
        <Input
          name="postalCode"
          label="Código postal"
          placeholder="Número"
          value={form.postalCode} 
          onChange={handleChange}
        />

        <Button disabled={!isValid} variant="primary" onClick={() => {}}>CONTINUAR</Button>
      </form>
    </Template>
  )
}
