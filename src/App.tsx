import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.tsx'
import Home from './pages/Home.tsx'
import Services from './pages/Services.tsx'
import Portfolio from './pages/Portfolio.tsx'
import HowItWorks from './pages/HowItWorks.tsx'
import Pricing from './pages/Pricing.tsx'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import Calculator from './pages/Calculator.tsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/calculator" element={<Calculator />} />
      </Route>
    </Routes>
  )
}

export default App
