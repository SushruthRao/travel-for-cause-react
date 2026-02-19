import { useState } from 'react'
import './PastEvents.css'

const pastEvents = [
  {
    id: 1,
    title: 'Coastal Conservation Camp',
    date: 'December 10, 2025',
    location: 'Gokarna, Karnataka',
    description:
      'Hands-on coastal cleanup, mangrove restoration, and fishing community interaction along the Karnataka coast.',
  },
  {
    id: 2,
    title: 'River Ecology Trek',
    date: 'November 22, 2025',
    location: 'Srirangapatna, Karnataka',
    description:
      'Kaveri river health studies, wetland restoration activities, and heritage walks along the historic riverbanks.',
  },
  {
    id: 3,
    title: 'Cultural Immersion Retreat',
    date: 'October 15, 2025',
    location: 'Majuli, Assam',
    description:
      'Satra cultural immersion, traditional arts workshops, and community storytelling on the Brahmaputra river island.',
  },
  {
    id: 4,
    title: 'Heritage Documentation Walk',
    date: 'September 8, 2025',
    location: 'Lepakshi, Andhra Pradesh',
    description:
      'Temple architecture exploration, artisan interaction, and knowledge documentation workshops with local craftspeople.',
  },
]

export default function PastEvents() {
  const [open, setOpen] = useState(false)

  return (
    <section className="past-events-section" id="past-events">
      <div className="container">
        <button
          className={`past-toggle${open ? ' open' : ''}`}
          onClick={() => setOpen(!open)}
        >
          <span>Past Experiences</span>
          <svg
            className={`chevron${open ? ' rotated' : ''}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {open && (
          <div className="past-events-grid">
            {pastEvents.map(event => (
              <article key={event.id} className="past-event-card">
                <div className="past-event-thumb" />
                <div className="past-event-body">
                  <h3 className="past-event-title">{event.title}</h3>
                  <p className="past-event-desc">{event.description}</p>
                  <div className="past-event-meta">
                    <span>{event.date}</span>
                    <span>{event.location}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
