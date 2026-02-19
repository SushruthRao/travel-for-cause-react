import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content container">
        <p className="hero-label">Community Events</p>
        <h1 className="hero-title">
          Explore with Purpose.<br />
          Serve with Joy.<br />
          Return Transformed.
        </h1>
        <p className="hero-subtitle">
          Travel for a Cause curates immersive community experiences where youth engage
          with nature, culture, and heritage — not as tourists, but as co-creators of
          positive change.
        </p>
        <div className="hero-actions">
          <a href="#events" className="btn-hero-primary">View Upcoming Events</a>
          <a href="#participate" className="btn-hero-secondary">How to Participate</a>
        </div>
      </div>
    </section>
  )
}
