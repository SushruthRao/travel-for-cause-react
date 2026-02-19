import './ImpactSection.css'

const stats = [
  { value: '1,000+', label: 'Youth Participants Annually' },
  { value: '50+', label: 'Community Partnerships' },
  { value: '100+', label: 'Conservation Activities' },
  { value: '20+', label: 'Heritage Sites Engaged' },
  { value: '500+', label: 'Trees & Corals Restored' },
  { value: '200+', label: 'Local Guides Empowered' },
]

const approach = [
  'No lectures — only conversations',
  'No sightseeing — only seeing deeply',
  'No charity — only collaboration',
  'No pressure — only purpose',
]

const badges = [
  { icon: '🏆', label: 'Youth Leadership\nExcellence Award' },
  { icon: '🌿', label: 'Responsible Tourism\nCertified' },
  { icon: '🤝', label: 'Community Impact\nRecognition' },
  { icon: '🎓', label: 'NSS Accredited\nProgram' },
]

export default function ImpactSection() {
  return (
    <section className="impact-section" id="impact">
      <div className="container">
        <div className="impact-header">
          <p className="section-label">Our Impact</p>
          <h2 className="section-title">
            Transforming Journeys,<br />Building Communities
          </h2>
          <p className="section-desc">
            Travel for a Cause doesn't aim to change the world in a week. It changes how
            we see the world — and our place in it.
          </p>
        </div>

        <div className="impact-stats">
          {stats.map(stat => (
            <div key={stat.label} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="impact-approach">
          <h3 className="approach-title">Our Distinctive Approach</h3>
          <div className="approach-grid">
            {approach.map(line => (
              <div key={line} className="approach-item">
                <span className="approach-dot" />
                <span>{line}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="impact-badges">
          {badges.map(badge => (
            <div key={badge.label} className="badge-card">
              <span className="badge-icon">{badge.icon}</span>
              <span className="badge-label">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
