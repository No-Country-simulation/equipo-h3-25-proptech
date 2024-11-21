import Layout from "../components/layout"

const Home = () => {
  return (
    <Layout>
      <main className="p-10 min-h-screen max-w-screen-2xl mx-auto">
        
        <div className="w-10 aspect-square bg-brand"></div>
        <div className="w-10 aspect-square bg-brand-light"></div>
        <div className="w-10 aspect-square bg-brand-dark"></div>
        
        <div>HeroSlider</div>
        <div>ServicesList</div>
        <div>InvestmentSteps</div>
        <div>FAQHighlights</div>        
      </main>
    </Layout>
  )
}

export default Home