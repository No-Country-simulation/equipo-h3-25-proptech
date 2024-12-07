import FinancingHeroHeader from "../components/financing/heroHeader";
import FinancingExample from "../components/financing/Example";
import FinancingRequirements from "../components/financing/requirements";
import FinancingSteps from "../components/financing/steps";


export default function Finance() {
  return (
    <>
      <FinancingHeroHeader />
      <FinancingExample />
      <div className="shadow-section">
        <FinancingRequirements />
        <FinancingSteps />
      </div>
    </>
  );
}
