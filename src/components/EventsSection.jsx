import EventCard from './EventCard'
import './EventsSection.css'

const events = [
  {
    id: 1,
    title: 'Beach Clean-Up Drive',
    date: 'January 15, 2026',
    location: 'Gokarna, Karnataka',
    duration: '1 Day',
    time: '9:00 AM – 1:00 PM',
    price: '₹500',
    description:
      'Join us for a coastal cleanup and ocean protection drive. Learn about marine ecosystems and make a real difference on the shoreline alongside the local fishing community.',
  },
  {
    id: 2,
    title: 'Heritage & Cultural Workshop',
    date: 'February 5, 2026',
    location: 'Lepakshi, Andhra Pradesh',
    duration: '2 Days',
    time: '10:00 AM onwards',
    price: '₹1,200',
    description:
      'Engage with local artisans, explore ancient temple architecture, and discover the living heritage and crafts of Lepakshi. Document knowledge, walk through history.',
  },
  {
    id: 3,
    title: 'Farm-to-Table Festival',
    date: 'March 20, 2026',
    location: 'Srirangapatna, Karnataka',
    duration: '1 Day',
    time: '11:00 AM – 5:00 PM',
    price: '₹800',
    description:
      'Discover local cuisine and organic farming practices along the scenic banks of the Kaveri river. Connect with farmers and understand water, food, and community stewardship.',
  },
  {
    id: 4,
    title: 'Kite Festival',
    date: 'January 25, 2026',
    location: 'Majuli, Assam',
    duration: '1 Day',
    time: '8:00 AM – 6:00 PM',
    price: '₹600',
    description:
      "Celebrate cultural heritage and outdoor joy at this vibrant kite festival on the world's largest river island. Immerse yourself in Satra traditions and community storytelling.",
  },
]

export default function EventsSection() {
  return (
    <section className="events-section" id="events">
      <div className="container">
        <div className="events-header">
          <p className="section-label">Community Events</p>
          <h2 className="section-title">Upcoming Experiences</h2>
          <p className="section-desc">
            Immersive, hands-on programs rooted in community needs — integrating
            conservation, culture, and service into transformative youth learning.
          </p>
        </div>

        <div className="events-grid">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  )
}
