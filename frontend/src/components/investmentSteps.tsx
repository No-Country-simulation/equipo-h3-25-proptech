interface Steps {
  id: number;
  title: string;
  description: string;
  image: string;
}

const steps: Steps[] = [
  {
    id: 0,
    title: "VALIDACION DE IDENTIDAD",
    description: "Facilitamos el acceso a terrenos en Latinoamérica con financiamiento accesible",
    image: "",
  }, {
    id: 1,
    title: "PASO 2",
    description: "Facilitamos el acceso a terrenos en Latinoamérica con financiamiento accesible",
    image: "",
  }, {
    id: 2,
    title: "PASO 3",
    description: "Facilitamos el acceso a terrenos en Latinoamérica con financiamiento accesible",
    image: "",
  }, {
    id: 3,
    title: "PASO 4",
    description: "Facilitamos el acceso a terrenos en Latinoamérica con financiamiento accesible",
    image: "",
  }
];



export default function InvestementSteps() {
  return (
    <section className="bg-white text-black flex flex-col items-center gap-8 py-16 px-6">
      <div className="text-center">
        <h4 className="font-bold">COMO INVERTIR</h4>
        <h2 className="font-bold text-3xl">COMO INVERTIR</h2>
      </div>
      <div className="flex gap-6">
        {steps.map((step) => (
          <div key={step.id} className="border-[1px] border-black rounded-2xl p-6 flex flex-col items-center gap-3">
            <img src={step.image} height={100} width={100} className="border-[1px] border-black rounded-full"/>
            <h3 className="font-semibold text-center">{step.title}</h3>
            <p className="text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
