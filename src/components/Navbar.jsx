import { useState } from 'react'
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
    <header className="navbar">
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
          <a href="#contact" className="btn-primary">Contact Us</a>
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
    </header>
  )
}
