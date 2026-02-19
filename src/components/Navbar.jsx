import { useState } from 'react'
import { motion } from 'framer-motion'
import './Navbar.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Vision', href: '#vision' },
  { label: 'Community Events', href: '#events' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Participate', href: '#participate' },
  { label: 'Impact', href: '#impact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="navbar-inner container">
        <a href="/" className="navbar-logo">
          Travel for a Cause
        </a>

        <nav className={`navbar-nav${open ? ' open' : ''}`}>
          {navLinks.map(link => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-cta">
          <motion.a
            href="#contact"
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.a>
        </div>

        <button
          className={`hamburger${open ? ' active' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </motion.header>
  )
}
