import InvestmentHeroSlider from "../components/investment/investmentHeroSlider"
import InvestmentRequirements from "../components/investment/investmentRequirements"
import InvestmentSteps from "../components/investment/investmentSteps"
import PreFooter from "../components/common/preFooter"

const Investment: React.FC = () => {
  return (
    <>
      <main className="p-10 min-h-screen max-w-screen-2xl mx-auto">
        <InvestmentHeroSlider />
        <InvestmentRequirements/>
        <InvestmentSteps/>
      </main>
      <PreFooter />
    </>
  )
}

export default Investment
