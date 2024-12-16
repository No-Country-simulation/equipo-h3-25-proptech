import investmentData from "../../data/investment";
import Button from "../common/button";
import Card from "../common/card";
// import { finance_image } from "../../assets";

export default function FinancingSteps() {
  return (
    <section>
      <div className="p-6 max-w-screen-2xl mx-auto">
          <h3 className="font-bold text-3xl font-Exo2">COMO INVERTIR</h3>
          <div className="grid grid-cols-4 gap-6 mt-4">
            {investmentData.steps.map(step => (
              <Card 
                key={step.step}
                title={step.title}
                icon={step.icon}
                step={step.step}
                bgColor="bg-[#F3F3F3]"
              >
                {step.description}
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl my-6 mx-auto grid grid-cols-2 gap-16 items-center shadow-2xl p-10">
          {/* <img src={finance_image} alt="banner" className="min-w-[400px] w-[655px]" /> */}
          <div className="max-w-[620px]">
            <h3 className="font-bold font-Exo2 text-2xl">FACIL ACCESO PARA</h3>
            <h2 className="font-bold font-Exo2 text-5xl mb-6">
              TU INVERSIÓN <span className="text-primary-500">EN UN CLICK</span>
            </h2>
            <p className="text-body mb-6">
              Disfruta de una solución rápida y accesible para invertir. 
            </p>
            <Button onClick={() => {}} variant="primary">QUIERO INVERTIR</Button>
          </div>
        </div>
    </section>
  );
}
