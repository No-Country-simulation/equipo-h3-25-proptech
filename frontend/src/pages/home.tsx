import HeroSlider from "../components/home/heroSlider"
import LinksMarquee from "../components/home/linksMarquee"
import InvestmentSteps from "../components/home/investmentSteps"
import PreFooter from "../components/common/preFooter"

const Home = () => {
  return (
    <>
      <main className="p-10 min-h-screen max-w-screen-2xl mx-auto">
        <HeroSlider />
        <LinksMarquee />
        <InvestmentSteps />
      </main>
      <PreFooter />
    </>
  )
}

export default Home
