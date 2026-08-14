import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, User, FolderGit2, Mail, Sparkles, Menu, X } from './Icons'
import './Navbar.css'

const navLinks = [
  { path: '/', label: 'Início', icon: Home },
  { path: '/sobre', label: 'Sobre', icon: User },
  { path: '/projetos', label: 'Projetos', icon: FolderGit2 },
  { path: '/contato', label: 'Contato', icon: Mail },
]

export default function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <header className={`navbar-wrapper ${scrolled ? 'navbar-wrapper--scrolled' : ''}`}>
      <nav className="navbar" id="main-nav">
        <div className="navbar__container">
          {/* Brand Logo */}
          <Link to="/" className="navbar__logo" id="nav-logo">
            <div className="navbar__logo-avatar-wrap">
              <img src="/bruno-avatar.jpg" alt="Bruno Heyden" className="navbar__logo-img" />
              <span className="navbar__status-dot" title="Disponível para projetos" />
            </div>
            <span className="navbar__logo-text">
              bruno<span className="navbar__logo-dot">.dev</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <ul className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`} id="nav-links">
            {navLinks.map((link) => {
              const Icon = link.icon
              const isActive = location.pathname === link.path
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                    id={`nav-link-${link.label.toLowerCase()}`}
                  >
                    <Icon size={16} className="navbar__link-icon" />
                    <span>{link.label}</span>
                    {isActive && <span className="navbar__link-indicator" />}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Action CTA Badge & Mobile Toggle */}
          <div className="navbar__actions">
            <Link to="/contato" className="navbar__cta-btn btn btn--primary">
              <Sparkles size={14} />
              <span>Contratar</span>
            </Link>

            <button
              className={`navbar__toggle ${mobileOpen ? 'navbar__toggle--open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu de Navegação"
              id="nav-toggle"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
