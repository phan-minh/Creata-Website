import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Values from './components/Values.jsx'
import Stats from './components/Stats.jsx'
import Services from './components/Services.jsx'
import Industries from './components/Industries.jsx'
import Products from './components/Products.jsx'
import Process from './components/Process.jsx'
import Projects from './components/Projects.jsx'
import Clients from './components/Clients.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Values />
        <Stats />
        <Services />
        <Industries />
        <Products />
        <Process />
        <Projects />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
