import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Highlights from './components/Highlights'
import Tickets from './components/Tickets'
import Sponsor from './components/Sponsor'
import Team from './components/Team'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Highlights />
        <Tickets />
        <Sponsor />
        <Team />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

export default App
