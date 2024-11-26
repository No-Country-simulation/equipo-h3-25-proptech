import Layout from "../components/layout"
import HeroSlider from "../components/hero-slider"

const Home = () => {
  return (
    <Layout>
      <main className="p-10 min-h-screen max-w-screen-2xl mx-auto">
        <HeroSlider/>
        <div>ServicesList</div>
        <div>InvestmentSteps</div>
        <div>FAQHighlights</div>        
      </main>
    </Layout>
  )
}

export default Home