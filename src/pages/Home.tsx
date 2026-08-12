import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Sparkles,
  Terminal,
  CheckCircle2,
  Copy,
  Check,
  Layers,
  Cpu,
  Database,
  Server,
  Globe,
  Zap,
  Star,
  ExternalLink,
  ShieldCheck,
  Activity,
  Clock,
  MapPin,
  Flame,
  LayoutGrid
} from '../components/Icons'
import TechMarquee from '../components/TechMarquee'
import {
  ReactLogo,
  NextjsLogo,
  TypescriptLogo,
  NodejsLogo,
  PythonLogo,
  PostgresLogo,
  DockerLogo,
  TailwindLogo,
  SupabaseLogo,
  RedisLogo,
  AWSLogo,
  MongoLogo,
  GraphQLLogo,
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
      { name: 'GraphQL', logo: GraphQLLogo },
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
      { name: 'Supabase', logo: SupabaseLogo },
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
    title: 'Dashboard Analytics Pro',
    category: 'Full-stack & AI',
    description: 'Plataforma de inteligência de dados em tempo real com gráficos dinâmicos, relatórios instantâneos e métricas preditivas.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'SaaS E-Commerce Ecosystem',
    category: 'Full-stack & Mobile',
    description: 'Ecossistema completo de vendas online com suporte a pagamentos globais Stripe, checkout ultrarrápido e gestão de catálogo.',
    tags: ['Next.js', 'Stripe', 'Tailwind', 'Redis'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
]

export default function Home() {
  const [copied, setCopied] = useState(false)
  const [activeConsoleTab, setActiveConsoleTab] = useState<'stack' | 'arch' | 'perf'>('stack')
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

          {/* Left Column: Hero Copy */}
          <div className="hero__content">

            <h1 className="hero__title animate-fade-in-up delay-2">
              Engenharia de Software de Alta Precisão & <br />
              <span className="gradient-text">Interfaces Limpas</span>.
            </h1>

            <p className="hero__description animate-fade-in-up delay-3">
              Olá, me chamo <strong>Bruno</strong>. Sou desenvolvedor Full-stack focado em construir
              produtos digitais velozes, escaláveis e com design elegante.
            </p>

            {/* Actions & Quick Contact */}
            <div className="hero__actions animate-fade-in-up delay-4">
              <Link to="/projetos" className="btn btn--primary" id="hero-cta-projects">
                <span>Explorar Projetos</span>
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

          {/* Right Column: Interactive Engineering Craft Console */}
          <div className="hero__visual animate-fade-in-up delay-3">
            <div className="craft-console glass-panel">

              {/* Console Header Tabs */}
              <div className="craft-console__header">
                <div className="craft-console__tabs">
                  <button
                    className={`craft-console__tab ${activeConsoleTab === 'stack' ? 'craft-console__tab--active' : ''}`}
                    onClick={() => setActiveConsoleTab('stack')}
                  >
                    <Cpu size={14} />
                    <span>Stack Matrix</span>
                  </button>
                  <button
                    className={`craft-console__tab ${activeConsoleTab === 'arch' ? 'craft-console__tab--active' : ''}`}
                    onClick={() => setActiveConsoleTab('arch')}
                  >
                    <ShieldCheck size={14} />
                    <span>Arquitetura</span>
                  </button>
                  <button
                    className={`craft-console__tab ${activeConsoleTab === 'perf' ? 'craft-console__tab--active' : ''}`}
                    onClick={() => setActiveConsoleTab('perf')}
                  >
                    <Activity size={14} />
                    <span>Performance</span>
                  </button>
                </div>
              </div>

              {/* Console Content Body */}
              <div className="craft-console__body">
                {activeConsoleTab === 'stack' && (
                  <div className="console-panel animate-fade-in-up">
                    <div className="console-panel__title-row">
                      <Terminal size={16} className="text-accent" />
                      <span className="console-panel__label">Tecnologias Primárias & Logos</span>
                    </div>
                    <div className="console-stack-list">
                      <div className="console-stack-item">
                        <div className="console-stack-item__header">
                          <div className="console-stack-brand">
                            <ReactLogo size={20} />
                            <span className="console-stack-item__name">React 19 & TypeScript</span>
                          </div>
                          <span className="console-stack-pill">UI Core</span>
                        </div>
                        <p className="console-stack-item__desc">Componentes modulares com tipagem estrita e state management previsível.</p>
                      </div>
                      <div className="console-stack-item">
                        <div className="console-stack-item__header">
                          <div className="console-stack-brand">
                            <NodejsLogo size={20} />
                            <span className="console-stack-item__name">Node.js & PostgreSQL</span>
                          </div>
                          <span className="console-stack-pill">Backend</span>
                        </div>
                        <p className="console-stack-item__desc">APIs RESTful resilientes, microsserviços e modelagem relacional otimizada.</p>
                      </div>
                      <div className="console-stack-item">
                        <div className="console-stack-item__header">
                          <div className="console-stack-brand">
                            <DockerLogo size={20} />
                            <span className="console-stack-item__name">Docker & CI/CD Pipelines</span>
                          </div>
                          <span className="console-stack-pill">Infra</span>
                        </div>
                        <p className="console-stack-item__desc">Deploy automatizado, contêineres e infraestrutura escalável.</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeConsoleTab === 'arch' && (
                  <div className="console-panel animate-fade-in-up">
                    <div className="console-panel__title-row">
                      <ShieldCheck size={16} className="text-emerald" />
                      <span className="console-panel__label">Pilares de Engenharia</span>
                    </div>
                    <div className="console-arch-grid">
                      <div className="console-arch-card">
                        <h4>Clean Code</h4>
                        <p>Separação rigorosa de responsabilidades e alta legibilidade.</p>
                      </div>
                      <div className="console-arch-card">
                        <h4>Zero Latency</h4>
                        <p>Renderização otimizada e requisições ultrarrápidas.</p>
                      </div>
                      <div className="console-arch-card">
                        <h4>Test-Driven</h4>
                        <p>Validação automatizada para estabilidade em produção.</p>
                      </div>
                      <div className="console-arch-card">
                        <h4>Acessibilidade</h4>
                        <p>Semântica HTML5 rigorosa e conformidade WCAG.</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeConsoleTab === 'perf' && (
                  <div className="console-panel animate-fade-in-up">
                    <div className="console-panel__title-row">
                      <Activity size={16} className="text-accent" />
                      <span className="console-panel__label">Auditoria de Desempenho (Lighthouse)</span>
                    </div>
                    <div className="console-perf-scores">
                      <div className="console-perf-circle">
                        <span className="score">100</span>
                        <span className="label">Performance</span>
                      </div>
                      <div className="console-perf-circle">
                        <span className="score">100</span>
                        <span className="label">Acessibilidade</span>
                      </div>
                      <div className="console-perf-circle">
                        <span className="score">100</span>
                        <span className="label">SEO</span>
                      </div>
                    </div>
                    <div className="console-perf-metrics">
                      <div className="metric-row">
                        <span>First Contentful Paint (FCP)</span>
                        <span className="val text-emerald">0.4s</span>
                      </div>
                      <div className="metric-row">
                        <span>Time to Interactive (TTI)</span>
                        <span className="val text-emerald">0.6s</span>
                      </div>
                      <div className="metric-row">
                        <span>Bundle Size (Gzipped)</span>
                        <span className="val text-accent">42 kB</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Console Footer */}
              <div className="craft-console__footer">
                <div className="craft-console__stat">
                  <CheckCircle2 size={15} className="text-emerald" />
                  <span>Código Auditado</span>
                </div>
                <div className="craft-console__stat">
                  <Flame size={15} className="text-accent" />
                  <span>Sub-100ms API Latency</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Infinite Continuous Scrolling Tech Marquee Ribbon */}
      <TechMarquee />

      {/* Asymmetric Bento Showcase Grid Section */}
      <section className="bento-section" id="bento-section">
        <div className="bento-section__container">

          <div className="section-header text-center">
            <span className="section-tag">
              <LayoutGrid size={14} /> Panorama Geral
            </span>
            <h2 className="section-title">
              Engenharia, <span className="gradient-text">Métricas & Presença</span>
            </h2>
          </div>

          <div className="bento-grid">

            {/* Bento Box 1: Core Engineering Value */}
            <div className="bento-card bento-card--large glass-card">
              <div className="bento-card__icon-badge">
                <Zap size={22} className="text-accent" />
              </div>
              <h3 className="bento-card__title">Abordagem de Desenvolvimento</h3>
              <p className="bento-card__desc">
                Combino rigor técnico no código com foco em simplicidade na interface. Cada componente é desenvolvido com responsividade nativa, tipagem TypeScript estrita e navegação leve.
              </p>
              <div className="bento-card__highlights">
                <span className="bento-pill">
                  <CheckCircle2 size={14} className="text-emerald" /> Componentes Reutilizáveis
                </span>
                <span className="bento-pill">
                  <CheckCircle2 size={14} className="text-emerald" /> APIs RESTful & GraphQL
                </span>
                <span className="bento-pill">
                  <CheckCircle2 size={14} className="text-emerald" /> Design System Intencional
                </span>
              </div>
            </div>

            {/* Bento Box 2: Timezone & Status */}
            <div className="bento-card glass-card">
              <div className="bento-card__icon-badge">
                <Clock size={20} className="text-emerald" />
              </div>
              <span className="bento-card__label">Fuso Horário & Local</span>
              <div className="bento-card__time-display">
                <span className="time-val">{currentTime || '14:08'}</span>
                <span className="time-tz">BRT (UTC-3)</span>
              </div>
              <p className="bento-card__location-text">
                <MapPin size={14} className="text-accent" /> São Paulo, Brasil — Remoto & Presencial
              </p>
            </div>

            {/* Bento Box 3: Stats Grid inside Bento */}
            <div className="bento-card glass-card">
              <div className="bento-stats-grid">
                <div className="bento-stat">
                  <span className="bento-stat__value">5+</span>
                  <span className="bento-stat__label">Anos de Experiência</span>
                </div>
                <div className="bento-stat">
                  <span className="bento-stat__value">35+</span>
                  <span className="bento-stat__label">Projetos Entregues</span>
                </div>
                <div className="bento-stat">
                  <span className="bento-stat__value">100%</span>
                  <span className="bento-stat__label">Satisfação Clientes</span>
                </div>
              </div>
            </div>

            {/* Bento Box 4: Philosophy Statement */}
            <div className="bento-card bento-card--quote glass-card">
              <Star size={20} className="text-accent" />
              <blockquote className="bento-quote">
                "A simplicidade é o último grau de sofisticação em um software."
              </blockquote>
              <span className="bento-author">— Princípio de Engenharia</span>
            </div>

          </div>

        </div>
      </section>

      {/* Interactive Tech Categories Grid with Real Brand Logos */}
      <section className="tech-section" id="tech-section">
        <div className="tech-section__container">
          <div className="section-header text-center">
            <span className="section-tag">
              <Cpu size={14} /> Ecossistema
            </span>
            <h2 className="section-title">
              Stack Tecnológica <span className="gradient-text">Com Logos Oficiais</span>
            </h2>
            <p className="section-subtitle">
              Ferramentas de produção utilizadas para construir aplicações resilientes, velozes e escaláveis.
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
                <Layers size={14} /> Portfólio
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
                      <span>Ver Detalhes</span>
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
              <Sparkles size={14} /> Parceria
            </span>
            <h2 className="home-cta__title">
              Pronto para construir o seu próximo <br />
              <span className="gradient-text">produto digital?</span>
            </h2>
            <p className="home-cta__text">
              Disponível para novos projetos sob medida, desenvolvimento de software e consultoria técnica.
            </p>
            <div className="home-cta__buttons">
              <Link to="/contato" className="btn btn--primary" id="home-cta-final">
                <span>Entrar em Contato</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/sobre" className="btn btn--outline">
                <span>Conhecer Trajetória</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
