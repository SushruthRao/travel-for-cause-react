import { motion } from 'framer-motion'
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

const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const staggerContainer = (staggerTime = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: staggerTime } },
})

export default function ImpactSection() {
  return (
    <section className="impact-section" id="impact">
      <div className="container">
        <motion.div
          className="impact-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p className="section-label">Our Impact</p>
          <h2 className="section-title">
            Transforming Journeys,<br />Building Communities
          </h2>
          <p className="section-desc">
            Travel for a Cause doesn't aim to change the world in a week. It changes how
            we see the world — and our place in it.
          </p>
        </motion.div>

        <motion.div
          className="impact-stats"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map(stat => (
            <motion.div key={stat.label} className="stat-item" variants={fadeUpItem}>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="impact-approach"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <h3 className="approach-title">Our Distinctive Approach</h3>
          <motion.div
            className="approach-grid"
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {approach.map(line => (
              <motion.div key={line} className="approach-item" variants={fadeUpItem}>
                <span className="approach-dot" />
                <span>{line}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="impact-badges"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {badges.map(badge => (
            <motion.div
              key={badge.label}
              className="badge-card"
              variants={fadeUpItem}
              whileHover={{ y: -5, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
            >
              <span className="badge-icon">{badge.icon}</span>
              <span className="badge-label">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
