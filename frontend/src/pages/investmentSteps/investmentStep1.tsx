import { useEffect, useState } from "react";
import { arrowDown_icon } from "../../assets";
import Select from "../../components/common/select";
import Input from "../../components/common/input";
import Button from "../../components/common/button";
import dashboardInversion from "../../data/dashboardInversion";



const pages = [
  { title: <>DATOS <span className="text-primary-500">PERSONALES</span></> },
  { title: <>INFORMACIÓN <span className="text-primary-500">LABORAL</span></> },
  { title: <>INFORMACIÓN <span className="text-primary-500">FINANCIERA</span></> },
  { title: <>INFORMACIÓN <span className="text-primary-500">TRIBUTARIA</span></> },
  { title: <>ACUERDO <span className="text-primary-500">LEGAL</span></> },
]


interface City {
  value: string;
  label: string;
}

export default function Investment() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [cities, setCities] = useState<City[]>([]);
  const [form, setForm] = useState({
    cityOfBirth: "",
    cityOfResidence: "",
    address: "",
    documents: "",
    occupation: "",
    antique: "",
    company: "",
    incomes: "",
    expenses: "",
    actives: "",
    cuit_cuil: "",
    financingDocuments: "",
    tributaryDocuments: "",
  });


  const getCities = async () => {
    const response = await fetch("https://apis.datos.gob.ar/georef/api/localidades?provincia=Buenos Aires&max=20");
    const data = await response.json();
    const cities = data.localidades.map((province: any) => ({ value: province.nombre, label: province.nombre }));
    setCities(cities);
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }


  const changePage = (type: number) => {
    if (type === -1) {
      if (currentPage === 0) return;
      return setCurrentPage(currentPage - 1);
    } else {
      if (currentPage === pages.length - 1) return;
      return setCurrentPage(currentPage + 1);
    }
  }


  useEffect(() => {
    getCities();
  }, []);


  return (
    <div className="p-10 max-w-screen-xl mx-auto">
      <div className="flex justify-between">
        <img src={arrowDown_icon} alt="" className="size-8 rotate-90" />
        <div className="flex flex-col items-center text-center">
          <h4 className="font-Exo2 font-bold text-2xl">FINANCIA.AI</h4>
          <h3 className="font-Exo2 font-bold text-5xl">{pages[currentPage].title}</h3>
          <p className="text-body mt-4 max-w-[500px]">Precisamos algunos datos para completar tu perfil de cliente para poder realizar inversiones</p>
        </div>
        <div className="flex items-center">
          {currentPage + 1} / {pages.length}
        </div>
      </div>

      <ul className="mt-10 flex text-center">
        <li className={`py-2 px-5 text-lg grow border-b-8 ${currentPage >= 0 ? "border-green-500" : "border-[#B4B4B4]"} ${currentPage === 0 && "font-bold text-primary-500"}`}>Datos personales</li>
        <li className={`py-2 px-5 text-lg grow border-b-8 ${currentPage >= 1 ? "border-green-500" : "border-[#B4B4B4]"} ${currentPage === 1 && "font-bold text-primary-500"}`}>Información laboral</li>
        <li className={`py-2 px-5 text-lg grow border-b-8 ${currentPage >= 2 ? "border-green-500" : "border-[#B4B4B4]"} ${currentPage === 2 && "font-bold text-primary-500"}`}>Información financiera</li>
        <li className={`py-2 px-5 text-lg grow border-b-8 ${currentPage >= 3 ? "border-green-500" : "border-[#B4B4B4]"} ${currentPage === 3 && "font-bold text-primary-500"}`}>Información tributaria</li>
        <li className={`py-2 px-5 text-lg grow border-b-8 ${currentPage >= 4 ? "border-green-500" : "border-[#B4B4B4]"} ${currentPage === 4 && "font-bold text-primary-500"}`}>Legales</li>
      </ul>
      
      {currentPage === 0 && (
        <div className="mt-8 grid grid-cols-3 gap-8">
          <Select name="cityOfBirth" label="Ciudad de nacimiento" onChange={handleChange} value={form.cityOfBirth} options={cities} />
          <Select name="cityOfResidence" label="Ciudad de residencia" onChange={handleChange} value={form.cityOfResidence} options={cities} />
          <Input name="address" label="Dirección de residencia" onChange={handleChange} value={form.address}/>
          <div className="col-start-2">
            <Input name="documents" label="Documentación (formato PDF / JPG)" onChange={handleChange} value={form.documents} type="file"/>
          </div>
        </div>
      )}

      {currentPage === 1 && (
        <div className="mt-8 grid grid-cols-3 gap-8">
          <Select name="occupation" label="Ocupación" onChange={handleChange} value={form.occupation} options={dashboardInversion.occupations} />
          <Select name="antique" label="Antiguedad" onChange={handleChange} value={form.cityOfResidence} options={dashboardInversion.antiques} />
          <Input name="company" label="Empresa" placeholder="Financiera" onChange={handleChange} value={form.company}/>
        </div>
      )}

      {currentPage === 2 && (
        <div className="mt-8 grid grid-cols-3 gap-8">
          <Select name="incomes" label="Ingresos mensuales" onChange={handleChange} value={form.incomes} options={dashboardInversion.incomes} />
          <Select name="expenses" label="Gastos mensuales" onChange={handleChange} value={form.expenses} options={dashboardInversion.expenses} />
          <Input type="number" name="actives" label="Tus activos" placeholder="500.000" onChange={handleChange} value={form.actives}/>
          <div className="col-start-2">
            <Input name="financingDocuments" label="Ultimos 3 recibos de sueldo (formato PDF / JPG)" onChange={handleChange} value={form.financingDocuments} type="file"/>
          </div>
        </div>
      )}

      {currentPage === 3 && (
        <div className="mt-8 grid grid-cols-3 items-end gap-8">
          <Input name="cuit_cuil" label="CUIT / CUIL" placeholder="11-11111111-1" onChange={handleChange} value={form.cuit_cuil}/>
          <Input name="tributaryDocuments" label="Documentación tributaria (formato PDF / JPG)" onChange={handleChange} value={form.tributaryDocuments} type="file"/>
        </div>
      )}

      {currentPage === 4 && (
        <div className="mt-8 text-body max-w-[500px] mx-auto">
          <h5 className="font-bold text-2xl">Acuerdo Legal</h5>
          <ul className="flex flex-col gap-3">
            {dashboardInversion.legales.map((legal, index) => (
              <li key={index}>
                <strong>{legal.title}</strong>
                <p>{legal.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className={`w-full mx-auto mt-10 grid ${currentPage === 0 ? "grid-cols-1 max-w-[300px]" : "grid-cols-2 max-w-[500px]"} gap-4`}>
        {currentPage !== 0 && (
          <Button onClick={() => changePage(-1)} variant="secondary">REGRESAR</Button>
        )}
        <Button disabled={currentPage === pages.length - 1} onClick={() => changePage(1)} variant="primary">GUARDAR Y CONTINUAR</Button>
      </div>

    </div>
  )
}
