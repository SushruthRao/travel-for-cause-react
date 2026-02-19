import './Footer.css'

const footerColumns = {
  Programs: [
    'Coastal Conservation',
    'Cultural Immersion',
    'Heritage Walks',
    'Farm Experiences',
    'River Ecology',
  ],
  Destinations: ['Gokarna', 'Majuli', 'Lepakshi', 'Srirangapatna'],
  Participate: [
    'School Students',
    'Youth Groups',
    'Corporates',
    'Educators',
    'Gap-Year Explorers',
  ],
  Company: ['About Us', 'Vision & Mission', 'Our Impact', 'Contact'],
}

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-top container">
        <div className="footer-brand">
          <div className="footer-logo">Travel for a Cause</div>
          <p className="footer-tagline">
            A youth-centric experiential travel initiative that transforms journeys into
            meaningful action — building empathy, skills, friendships, and a lifelong sense
            of responsibility.
          </p>
          <div className="footer-social">
            {['Facebook', 'Instagram', 'YouTube', 'LinkedIn'].map(name => (
              <a key={name} href="#" className="social-link" aria-label={name}>
                {name[0]}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-links">
          {Object.entries(footerColumns).map(([group, links]) => (
            <div key={group} className="footer-col">
              <h4 className="footer-col-title">{group}</h4>
              <ul>
                {links.map(link => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2025 Travel for a Cause | Transforming Journeys, Building Communities</p>
          <div className="footer-legal">
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cancellation Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
