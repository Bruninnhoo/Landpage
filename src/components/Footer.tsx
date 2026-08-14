import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, ArrowUp, Sparkles } from './Icons'
import './Footer.css'

export default function Footer() {
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
              Desenvolvedor de software especializado em criar soluções de alta performance e interfaces elegantes.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer__links-col">
            <h4 className="footer__col-title">Navegação</h4>
            <ul className="footer__link-list">
              <li><Link to="/">Início</Link></li>
              <li><Link to="/sobre">Sobre Mim</Link></li>
              <li><Link to="/projetos">Projetos Selecionados</Link></li>
              <li><Link to="/contato">Contato & Propostas</Link></li>
            </ul>
          </div>

          {/* Col 3: Tech Stack Highlights */}
          <div className="footer__tech-col">
            <h4 className="footer__col-title">Especialidades</h4>
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
            <h4 className="footer__col-title">Conectar</h4>
            <div className="footer__social-links">
              <a
                href="https://github.com/brunoheyden"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-btn"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com"
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
              <Sparkles size={14} />
              <span>Falar com o Bruno</span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Bruno Heyden. Todos os direitos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="footer__back-to-top"
            aria-label="Voltar ao topo"
            title="Voltar ao topo"
          >
            <span>Voltar ao topo</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
