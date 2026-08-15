import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, User, FolderGit2, Mail, Sparkles, Menu, X } from './Icons'
import { useLanguage } from '../context/LanguageContext'
import './Navbar.css'

const navLinks = [
  { path: '/', labelPt: 'Início', labelEn: 'Home', icon: Home },
  { path: '/sobre', labelPt: 'Sobre', labelEn: 'About', icon: User },
  { path: '/projetos', labelPt: 'Projetos', labelEn: 'Projects', icon: FolderGit2 },
  { path: '/contato', labelPt: 'Contato', labelEn: 'Contact', icon: Mail },
]

export default function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang, toggleLang, t } = useLanguage()

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
            <span className="navbar__logo-text">
              bruno<span className="navbar__logo-dot">.dev</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <ul className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`} id="nav-links">
            {navLinks.map((link) => {
              const Icon = link.icon
              const isActive = location.pathname === link.path
              const label = lang === 'en' ? link.labelEn : link.labelPt
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                    id={`nav-link-${link.labelPt.toLowerCase()}`}
                  >
                    <Icon size={16} className="navbar__link-icon" />
                    <span>{label}</span>
                    {isActive && <span className="navbar__link-indicator" />}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Language Switcher & Action CTA */}
          <div className="navbar__actions">
            <button
              onClick={toggleLang}
              className="lang-switcher-btn"
              title={lang === 'pt' ? 'Mudar para Inglês' : 'Switch to Portuguese'}
              id="lang-toggle-btn"
            >
              <span className={`lang-flag ${lang === 'pt' ? 'lang-flag--active' : ''}`}>PT</span>
              <span className="lang-divider">/</span>
              <span className={`lang-flag ${lang === 'en' ? 'lang-flag--active' : ''}`}>EN</span>
            </button>

            <Link to="/contato" className="navbar__cta-btn btn btn--primary">
              <Sparkles size={14} />
              <span>{t('Contratar', 'Hire Me')}</span>
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
