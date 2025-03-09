import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import PricingPlans from './components/PricingPlans'
import IdeaToProduction from './components/IdeaToProduction'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
    <Navbar/>
    <Hero/>
    <Services/>
    <PricingPlans/>
    <IdeaToProduction/>
    <Footer/>
    </div>
  )
}

export default App
