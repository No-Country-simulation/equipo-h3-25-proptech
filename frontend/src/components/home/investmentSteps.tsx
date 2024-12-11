import investmentData from "../../data/investment";
import Card from "../common/card";
import investment_steps_img from "../../assets/home/investment_steps.webp";
import { MaterialSymbol } from 'react-material-symbols';



export default function investmentSteps() {
  return (
    <section>
     
      <div className="max-w-screen-2xl my-6 mx-auto grid grid-cols-1 gap-5 xl:grid-cols-2">
        <img src={investment_steps_img} alt="banner" className="min-w-[400px] w-[655px] m-auto" />
        <div className="p-6 max-w-screen-2xl mx-auto">
          <h3 className="font-bold text-3xl font-Exo2 uppercase">Como invertir</h3>
          <div className="grid grid-cols-1 gap-5 mt-4 md:grid-cols-2">
            {investmentData.investmentSteps.map(step => (
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
      </div>
    </section>
  );
}
