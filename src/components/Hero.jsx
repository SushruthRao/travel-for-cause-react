import { motion } from 'framer-motion'
import './Hero.css'

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: 'easeOut', delay },
})

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content container">
        <motion.p className="hero-label" {...fadeIn(0.15)}>
          Community Events
        </motion.p>

        <motion.h1 className="hero-title" {...fadeIn(0.3)}>
          Explore with Purpose.<br />
          Serve with Joy.<br />
          Return Transformed.
        </motion.h1>

        <motion.p className="hero-subtitle" {...fadeIn(0.5)}>
          Travel for a Cause curates immersive community experiences where youth engage
          with nature, culture, and heritage — not as tourists, but as co-creators of
          positive change.
        </motion.p>

        <motion.div className="hero-actions" {...fadeIn(0.65)}>
          <motion.a
            href="#events"
            className="btn-hero-primary"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            View Upcoming Events
          </motion.a>
          <motion.a
            href="#participate"
            className="btn-hero-secondary"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            How to Participate
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
