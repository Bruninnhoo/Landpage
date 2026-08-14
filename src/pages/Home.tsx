import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Sparkles,
  Copy,
  Check,
  Layers,
  Cpu,
  Database,
  Server,
  Globe,
  ExternalLink,
} from '../components/Icons'
import TechMarquee from '../components/TechMarquee'
import {
  ReactLogo,
  NextjsLogo,
  TypescriptLogo,
  NodejsLogo,
  PythonLogo,
  DjangoLogo,
  PostgresLogo,
  DockerLogo,
  TailwindLogo,
  RedisLogo,
  AWSLogo,
  MongoLogo,
  ViteLogo,
  GitLogo
} from '../components/TechLogos'
import './Home.css'

const techCategories = [
  {
    name: 'Front-end & UI',
    icon: Globe,
    items: [
      { name: 'React 19', logo: ReactLogo },
      { name: 'Next.js', logo: NextjsLogo },
      { name: 'TypeScript', logo: TypescriptLogo },
      { name: 'Tailwind CSS', logo: TailwindLogo },
      { name: 'Vite', logo: ViteLogo },
    ]
  },
  {
    name: 'Back-end & APIs',
    icon: Server,
    items: [
      { name: 'Node.js', logo: NodejsLogo },
      { name: 'Python', logo: PythonLogo },
      { name: 'Django', logo: DjangoLogo },
      { name: 'Express', logo: NodejsLogo },
    ]
  },
  {
    name: 'Banco de Dados',
    icon: Database,
    items: [
      { name: 'PostgreSQL', logo: PostgresLogo },
      { name: 'MongoDB', logo: MongoLogo },
      { name: 'Redis', logo: RedisLogo },
    ]
  },
  {
    name: 'DevOps & Outros',
    icon: Cpu,
    items: [
      { name: 'Docker', logo: DockerLogo },
      { name: 'AWS', logo: AWSLogo },
      { name: 'Git Workflows', logo: GitLogo },
    ]
  },
]

const featuredProjects = [
  {
    id: 1,
    title: 'Cadena Locações - Plataforma Web',
    category: 'Full-stack & Cloud',
    description: 'Modernização completa da plataforma web para a Cadena Locações, com novas funcionalidades de negócios, UI/UX intuitiva e otimização de orçamentos.',
    tags: ['Java', 'Spring Boot', 'AWS', 'React', 'TypeScript'],
    image: './Cadena.png',
  },
]

export default function Home() {
  const [copied, setCopied] = useState(false)
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit' }))
    }
    updateTime()
    const timer = setInterval(updateTime, 10000)
    return () => clearInterval(timer)
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText('brunoheyden@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <div className="home" id="home-page">

      {/* Hero Section */}
      <section className="hero" id="hero-section">
        <div className="hero__container">

          {/* Left Column: Personal Hero Intro */}
          <div className="hero__content">

            <div className="hero__author-greeting animate-fade-in-up delay-1">
              <div className="hero__author-text">
                <span className="hero__author-name">Bruno Heyden</span>
                <span className="hero__greeting-tag">Desenvolvedor Full-Stack & UI Specialist</span>
              </div>
            </div>

            <h1 className="hero__title animate-fade-in-up delay-2">
              Transformando conceitos em<br />
              <span className="gradient-text">produtos digitais</span>.
            </h1>

            <p className="hero__description animate-fade-in-up delay-3">
              Olá, sou <strong>Bruno Heyden</strong>, um desenvolvedor que ama criar produtos digitais. Combino engenharia de software rigorosa com sensibilidade de design para criar
              aplicações web velozes, escaláveis e intuitivas. Focado em ecossistemas
              <strong> React, Next.js, Node.js e TypeScript</strong>.
            </p>
            {/* Actions & Quick Contact */}
            <div className="hero__actions animate-fade-in-up delay-4">
              <Link to="/projetos" className="btn btn--primary" id="hero-cta-projects">
                <span>Ver Portfólio</span>
                <ArrowRight size={18} />
              </Link>

              <Link to="/contato" className="btn btn--outline" id="hero-cta-contact">
                <span>Falar Comigo</span>
              </Link>

              <button
                onClick={copyEmail}
                className="hero__copy-btn"
                title="Copiar e-mail"
                id="hero-copy-email"
              >
                {copied ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                <span>{copied ? 'E-mail copiado!' : 'brunoheyden@gmail.com'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Sleek Personal Developer Showcase */}
          <div className="hero__visual animate-fade-in-up delay-3">
            <div className="hero__portrait-card glass-card">
              <div className="hero__portrait-frame">
                <img src="/bruno-avatar.jpg" alt="Bruno Heyden" className="hero__portrait-img" />
                <div className="hero__portrait-overlay-glow" />
              </div>

              {/* Floating Badges */}
              <div className="floating-badge floating-badge--top-right animate-bounce-subtle">
                <Sparkles size={16} className="text-accent" />
                <span>Full-Stack Developer</span>
              </div>

              <div className="floating-badge floating-badge--bottom-left">
                <span className="hero__status-pulse" />
                <span>São Paulo, BR • {currentTime || 'Disponível'}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Infinite Continuous Scrolling Tech Marquee Ribbon */}
      <TechMarquee />

      {/* Interactive Tech Categories Grid with Real Brand Logos */}
      <section className="tech-section" id="tech-section">
        <div className="tech-section__container">
          <div className="section-header text-center">
            <span className="section-tag">
              <Cpu size={14} /> Ecossistema & Habilidades
            </span>
            <h2 className="section-title">
              Minha Stack <span className="gradient-text">de Trabalho</span>
            </h2>
            <p className="section-subtitle">
              Tecnologias e ferramentas que utilizo no dia a dia para dar vida a projetos de alto nível.
            </p>
          </div>

          <div className="tech-categories-grid">
            {techCategories.map((cat, i) => {
              const CatIcon = cat.icon
              return (
                <div key={cat.name} className={`tech-category-card glass-card animate-fade-in-up delay-${i + 1}`}>
                  <div className="tech-category-card__header">
                    <div className="tech-category-card__icon">
                      <CatIcon size={20} />
                    </div>
                    <h3>{cat.name}</h3>
                  </div>
                  <div className="tech-category-card__tags">
                    {cat.items.map((tech) => {
                      const TechLogoIcon = tech.logo
                      return (
                        <div key={tech.name} className="tech-logo-chip">
                          <TechLogoIcon size={18} />
                          <span>{tech.name}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects Highlight */}
      <section className="featured-section" id="featured-section">
        <div className="featured-section__container">
          <div className="section-header section-header--flex">
            <div>
              <span className="section-tag">
                <Layers size={14} /> Meus Trabalhos
              </span>
              <h2 className="section-title">
                Projetos em <span className="gradient-text">Destaque</span>
              </h2>
            </div>
            <Link to="/projetos" className="btn btn--outline">
              <span>Ver Todos os Projetos</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="featured-grid">
            {featuredProjects.map((project, i) => (
              <article key={project.id} className={`featured-card glass-card animate-fade-in-up delay-${i + 1}`}>
                <div className="featured-card__image-container">
                  <img src={project.image} alt={project.title} className="featured-card__image" />
                  <div className="featured-card__overlay">
                    <Link to="/projetos" className="featured-card__action-btn">
                      <ExternalLink size={18} />
                      <span>Ver Detalhes do Projeto</span>
                    </Link>
                  </div>
                </div>
                <div className="featured-card__content">
                  <span className="featured-card__category">{project.category}</span>
                  <h3 className="featured-card__title">{project.title}</h3>
                  <p className="featured-card__description">{project.description}</p>
                  <div className="featured-card__tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-pill tech-pill--sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta" id="home-cta-section">
        <div className="home-cta__container">
          <div className="home-cta__panel glass-panel">
            <span className="section-tag">
              <Sparkles size={14} /> Contato Pessoal
            </span>
            <h2 className="home-cta__title">
              Quer tirar uma ideia do papel ou reforçar <br />
              <span className="gradient-text">a sua equipe de desenvolvimento?</span>
            </h2>
            <p className="home-cta__text">
              Estou disponível para projetos, desenvolvimento full-stack freelance ou oportunidades de longo prazo.
            </p>
            <div className="home-cta__buttons">
              <Link to="/contato" className="btn btn--primary" id="home-cta-final">
                <span>Iniciar Conversa</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/sobre" className="btn btn--outline">
                <span>Ver Minha Trajetória</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
