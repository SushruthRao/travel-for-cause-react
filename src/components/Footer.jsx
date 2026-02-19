import { motion } from 'framer-motion'
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

const colVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const colItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <motion.div
        className="footer-top container"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="footer-brand">
          <div className="footer-logo">Travel for a Cause</div>
          <p className="footer-tagline">
            A youth-centric experiential travel initiative that transforms journeys into
            meaningful action — building empathy, skills, friendships, and a lifelong sense
            of responsibility.
          </p>
          <div className="footer-social">
            {['Facebook', 'Instagram', 'YouTube', 'LinkedIn'].map(name => (
              <motion.a
                key={name}
                href="#"
                className="social-link"
                aria-label={name}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
              >
                {name[0]}
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          className="footer-links"
          variants={colVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {Object.entries(footerColumns).map(([group, links]) => (
            <motion.div key={group} className="footer-col" variants={colItem}>
              <h4 className="footer-col-title">{group}</h4>
              <ul>
                {links.map(link => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

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
