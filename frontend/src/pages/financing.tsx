import FinancingHeroHeader from "../components/financing/heroHeader";
import FinancingExample from "../components/financing/Example";
import FinancingRequirements from "../components/financing/requirements";
import FinancingSteps from "../components/financing/steps";
import PreFooter from "../components/preFooter";


export default function Finance() {
  return (
    <>
      <FinancingHeroHeader />
      <FinancingExample />
      <div className="shadow-section">
        <FinancingRequirements />
        <FinancingSteps />
        <div className="mt-16">
          <PreFooter />
        </div>
      </div>
    </>
  );
}
