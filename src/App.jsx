import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import EventsSection from './components/EventsSection'
import PastEvents from './components/PastEvents'
import ImpactSection from './components/ImpactSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EventsSection />
        <PastEvents />
        <ImpactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
