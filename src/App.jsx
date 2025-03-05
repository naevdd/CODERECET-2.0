import LandingPage from "./pages/landing"
import Countdown from "./pages/countdown"
import AboutUs from "./pages/aboutus"
import Prize from "./pages/prize"
import Footer from "./pages/Footer"
import Sponsorship from "./pages/sponsorship"
import Gallery from "./pages/gallery"
import PerksSection from "./pages/perks"
import RefreshReboot from "./pages/refreshreboot"
import FAQ from "./pages/faq"


function App() {
  return (
    <div className="flex flex-col bg-custom-black">
    <LandingPage/>
    <Countdown/>
    <RefreshReboot/>
    <AboutUs/>
    <PerksSection/>
    <Prize/>
    <Sponsorship/>
    <Gallery/>
    <FAQ/>
    <Footer/>
    </div>

  )
}

export default App
