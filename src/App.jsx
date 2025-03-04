import LandingPage from "./pages/landing"
import Countdown from "./pages/countdown"
import AboutUs from "./pages/aboutus"
import Prize from "./pages/prize"
import Footer from "./pages/Footer"
import Sponsorship from "./pages/sponsorship"
import Gallery from "./pages/gallery"

function App() {
  return (
    <div className="flex flex-col bg-custom-black">
    <LandingPage/>
    <Countdown/>
    <AboutUs/>
    <Prize/>
    <Sponsorship/>
    <Gallery/>
    <Footer/>
    </div>

  )
}

export default App
