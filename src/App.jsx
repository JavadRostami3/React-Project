import Header from "./components/header/Header"
import About from "./components/main/About"
import Home from "./components/main/Home"
import Support from "./components/main/Support"
import Services from "./components/main/Services"
import Application from "./components/main/Application"
import Contact from "./components/main/Contact"
import Footer from "./components/footer/Footer"
import Navigation from "./components/scripts/Navigation"
import ScrollEffects from "./components/scripts/ScrollEffect"

function App() {
  return (
    <>
    <Header />
    <Navigation />
    <ScrollEffects />
    <Home />
    <About />
    <Support />
    <Services />
    <Application />
    <Contact  />
    <Footer />
    </>
  )
}

export default App
