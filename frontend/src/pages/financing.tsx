import FinancingHeroHeader from "../components/financing/financingHeroHeader";
import FinancingExample from "../components/financing/Example";
import FinancingRequirements from "../components/financing/financingRequirements";
import FinancingSteps from "../components/financing/steps";
import PreFooter from "../components/common/preFooter";


export default function Financing() {
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
