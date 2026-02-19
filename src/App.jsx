import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import EventsSection from './components/EventsSection'
import PastEvents from './components/PastEvents'
import ImpactSection from './components/ImpactSection'
import Footer from './components/Footer'
import ContactFloat from './components/ContactFloat'

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
      <ContactFloat />
    </>
  )
}

export default App
