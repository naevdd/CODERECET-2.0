import LandingPage from "./pages/landing"
import Countdown from "./pages/countdown"
import Prize from "./pages/prize"

function App() {
  return (
    <div className="flex flex-col bg-custom-black">
    <LandingPage/>
    <Countdown/>
    <Prize/>
    </div>

  )
}

export default App
