import LandingPage from "./pages/landing"
import Countdown from "./pages/countdown"
import Prize from "./pages/prize"
import Footer from "./pages/Footer"

function App() {
  return (
    <div className="flex flex-col bg-custom-black">
    <LandingPage/>
    <Countdown/>
    <Prize/>
    <Footer/>
    </div>

  )
}

export default App
