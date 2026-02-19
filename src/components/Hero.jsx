import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Hero.css'

const INTERVAL = 5000

const slides = [
  {
    id: 0,
    label: 'Gokarna · Coastal Conservation',
    title: 'Explore with Purpose.\nServe with Joy.\nReturn Transformed.',
    subtitle:
      'Travel for a Cause curates immersive community experiences where youth engage with nature, culture, and heritage — not as tourists, but as co-creators of positive change.',
    gradient: 'linear-gradient(135deg, #1b4332 0%, #2d6a4f 55%, #40916c 100%)',
  },
  {
    id: 1,
    label: 'Majuli · Culture & Ecology',
    title: 'Where Culture,\nEcology & Spirituality\nSustain Communities.',
    subtitle:
      "Immerse yourself in Brahmaputra river systems, Satra cultural traditions, and the flood-resilient wisdom of the world's largest river island.",
    gradient: 'linear-gradient(135deg, #03045e 0%, #0077b6 55%, #00b4d8 100%)',
  },
  {
    id: 2,
    label: 'Lepakshi · Heritage & Crafts',
    title: 'Heritage is Not\nJust History — It is\na Living Economy.',
    subtitle:
      'Walk through ancient temple architecture, engage with master artisans, and document the crafts that sustain communities across generations.',
    gradient: 'linear-gradient(135deg, #7f4f24 0%, #b5823a 55%, #dda15e 100%)',
  },
  {
    id: 3,
    label: 'Srirangapatna · Rivers & History',
    title: 'How Water Shapes\nCivilizations and\nOur Collective Future.',
    subtitle:
      'Study the health of the Kaveri river, restore wetlands, and trace the history of a heritage town where nature and civilisation have coexisted for centuries.',
    gradient: 'linear-gradient(135deg, #184e77 0%, #1e6091 55%, #1a759f 100%)',
  },
]

const contentVariants = {
  enter: { opacity: 0, y: 28 },
  center: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
}

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const goTo = (i) => setCurrent(i)
  const goPrev = () => setCurrent(i => (i - 1 + slides.length) % slides.length)
  const goNext = () => setCurrent(i => (i + 1) % slides.length)

  useEffect(() => {
    if (paused) return
    const t = setTimeout(() => setCurrent(i => (i + 1) % slides.length), INTERVAL)
    return () => clearTimeout(t)
  }, [current, paused])

  return (
    <section
      className="hero"
      id="home"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Crossfading backgrounds — swap gradient for backgroundImage when images are ready */}
      <div className="hero-bg-track">
        <AnimatePresence>
          <motion.div
            key={current}
            className="hero-bg"
            style={{ background: slides[current].gradient }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
          />
        </AnimatePresence>
      </div>
      <div className="hero-overlay" />

      {/* Slide content */}
      <div className="hero-content container">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="hero-slide"
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <p className="hero-label">{slides[current].label}</p>
            <h1 className="hero-title">{slides[current].title}</h1>
            <p className="hero-subtitle">{slides[current].subtitle}</p>
            <div className="hero-actions">
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
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Prev arrow */}
      <div className="hero-arrow-wrap hero-arrow-prev">
        <motion.button
          className="hero-arrow"
          onClick={goPrev}
          whileHover={{ scale: 1.12, backgroundColor: 'rgba(255,255,255,0.22)' }}
          whileTap={{ scale: 0.9 }}
          aria-label="Previous slide"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </motion.button>
      </div>

      {/* Next arrow */}
      <div className="hero-arrow-wrap hero-arrow-next">
        <motion.button
          className="hero-arrow"
          onClick={goNext}
          whileHover={{ scale: 1.12, backgroundColor: 'rgba(255,255,255,0.22)' }}
          whileTap={{ scale: 0.9 }}
          aria-label="Next slide"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </motion.button>
      </div>

      {/* Bottom bar: dots + counter + progress */}
      <div className="hero-footer">
        <div className="hero-dots">
          {slides.map((_, i) => (
            <motion.button
              key={i}
              className={`hero-dot${i === current ? ' active' : ''}`}
              onClick={() => goTo(i)}
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.85 }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <span className="hero-counter">
          {String(current + 1).padStart(2, '0')}&nbsp;/&nbsp;{String(slides.length).padStart(2, '0')}
        </span>

        <div className="hero-progress-track">
          <motion.div
            key={current}
            className="hero-progress-fill"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
            style={{ transformOrigin: 'left' }}
          />
        </div>
      </div>
    </section>
  )
}
