import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, ArrowUp, Sparkles } from './Icons'
import { useLanguage } from '../context/LanguageContext'
import './Footer.css'

export default function Footer() {
  const { t } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer" id="main-footer">
      <div className="footer__glow-bg" />
      <div className="footer__container">

        {/* Main Grid */}
        <div className="footer__top">
          {/* Col 1: Brand & Info */}
          <div className="footer__brand-col">
            <Link to="/" className="footer__logo">
              <div className="navbar__logo-avatar-wrap" style={{ width: 36, height: 36 }}>
                <img src="/bruno-avatar.jpg" alt="Bruno Heyden" className="navbar__logo-img" />
              </div>
              <span className="footer__logo-text">
                bruno<span className="footer__logo-dot">.dev</span>
              </span>
            </Link>
            <p className="footer__tagline">
              {t('Desenvolvedor de software especializado em criar soluções de alta performance e interfaces elegantes.', 'Software engineer specialized in building high-performance solutions and elegant interfaces.')}
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer__links-col">
            <h4 className="footer__col-title">{t('Navegação', 'Navigation')}</h4>
            <ul className="footer__link-list">
              <li><Link to="/">{t('Início', 'Home')}</Link></li>
              <li><Link to="/sobre">{t('Sobre Mim', 'About Me')}</Link></li>
              <li><Link to="/curriculum">{t('Currículo', 'Resume')}</Link></li>
              <li><a href="https://github.com/Bruninnhoo" target="_blank" rel="noopener noreferrer">{t('GitHub & Projetos', 'GitHub & Projects')}</a></li>
              <li><Link to="/contato">{t('Contato & Propostas', 'Contact & Inquiries')}</Link></li>
            </ul>
          </div>

          {/* Col 3: Tech Stack Highlights */}
          <div className="footer__tech-col">
            <h4 className="footer__col-title">{t('Especialidades', 'Specialties')}</h4>
            <div className="footer__tech-tags">
              <span>React 19</span>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>Node.js</span>
              <span>Python</span>
              <span>Django</span>
              <span>PostgreSQL</span>
              <span>Docker</span>
            </div>
          </div>

          {/* Col 4: Social Links & Contact */}
          <div className="footer__social-col">
            <h4 className="footer__col-title">{t('Conectar', 'Connect')}</h4>
            <div className="footer__social-links">
              <a
                href="https://github.com/Bruninnhoo"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-btn"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/bruno-heyden-13311a25a/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-btn"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:brunoheyden@gmail.com"
                className="footer__social-btn"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
            <Link to="/contato" className="footer__cta-link">
              <span>{t('Falar com o Bruno', 'Talk to Bruno')}</span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Bruno Heyden. {t('Todos os direitos reservados.', 'All rights reserved.')}
          </p>
          <button
            onClick={scrollToTop}
            className="footer__back-to-top"
            aria-label={t('Voltar ao topo', 'Back to top')}
            title={t('Voltar ao topo', 'Back to top')}
          >
            <span>{t('Voltar ao topo', 'Back to top')}</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
