import { useState } from 'react'
import { FolderGit2, ExternalLink, Github, Sparkles, Filter, ArrowUpRight } from '../components/Icons'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'Dashboard Analytics Pro',
    description: 'Plataforma de inteligência de dados em tempo real com visualizações interativas, relatórios em PDF e métricas preditivas de alta performance.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    tags: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind'],
    category: 'fullstack',
    featured: true,
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    id: 2,
    title: 'E-Commerce Mobile & Web',
    description: 'Ecossistema completo de vendas online com catálogo responsivo, gateway de pagamento Stripe, gestão de estoque e notificações PWA.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    tags: ['Next.js', 'React Native', 'Stripe', 'MongoDB', 'Redis'],
    category: 'fullstack',
    featured: true,
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    id: 3,
    title: 'Rede Social & Comunidade Dev',
    description: 'Plataforma social com feed interativo em tempo real, sistema de mensagens instantâneas via WebSockets e cache de performance com Redis.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
    tags: ['Next.js', 'GraphQL', 'WebSocket', 'Redis', 'Tailwind'],
    category: 'frontend',
    featured: false,
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    id: 4,
    title: 'API Gateway & Auth Service',
    description: 'Microsserviço de autenticação e API Gateway com suporte a OAuth2, rate limiting inteligente, monitoramento de latência e contêineres Docker.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
    tags: ['Node.js', 'Express', 'Docker', 'AWS ECS', 'Jest'],
    category: 'backend',
    featured: false,
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    id: 5,
    title: 'SaaS Task Management Platform',
    description: 'Gerenciador de tarefas e projetos com quadros Kanban interativos, automação de fluxos de trabalho e relatórios de produtividade em tempo real.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80',
    tags: ['React', 'TypeScript', 'Supabase', 'Tailwind', 'Zustand'],
    category: 'fullstack',
    featured: false,
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    id: 6,
    title: 'Fintech AI Dashboard',
    description: 'Interface de gestão financeira pessoal com integração de inteligência artificial para previsão de custos e categorização automática.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
    tags: ['Python', 'FastAPI', 'React', 'Chart.js', 'PostgreSQL'],
    category: 'frontend',
    featured: false,
    link: 'https://example.com',
    github: 'https://github.com',
  },
]

const filters = [
  { key: 'all', label: 'Todos os Projetos' },
  { key: 'fullstack', label: 'Full-stack' },
  { key: 'frontend', label: 'Front-end' },
  { key: 'backend', label: 'Back-end' },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <div className="projects" id="projects-page">
      
      {/* Ambient Lights */}
      <div className="projects__glow projects__glow--cyan" />
      <div className="projects__glow projects__glow--violet" />

      {/* Header */}
      <section className="projects-header" id="projects-header">
        <div className="projects-header__container">
          <span className="section-tag animate-fade-in-up">
            <FolderGit2 size={14} /> Portfólio & Trabalhos
          </span>
          <h1 className="projects-header__title animate-fade-in-up delay-1">
            Soluções digitais <br />
            <span className="gradient-amber-text">construídas com precisão</span>.
          </h1>
          <p className="projects-header__text animate-fade-in-up delay-2">
            Galeria de projetos reais demonstrando domínio em arquitetura web, 
            design de interface e otimização de performance.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="projects-filters" id="projects-filters">
        <div className="projects-filters__container">
          <div className="filter-pill-container glass-panel">
            <Filter size={16} className="filter-icon" />
            {filters.map((filter) => (
              <button
                key={filter.key}
                className={`filter-btn ${activeFilter === filter.key ? 'filter-btn--active' : ''}`}
                onClick={() => setActiveFilter(filter.key)}
                id={`filter-${filter.key}`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid" id="projects-grid">
        <div className="projects-grid__container">
          {filteredProjects.map((project, i) => (
            <article 
              key={project.id} 
              className={`project-card glass-card animate-fade-in-up delay-${(i % 4) + 1}`}
              id={`project-${project.id}`}
            >
              {/* Image Preview */}
              <div className="project-card__image-wrapper">
                <img src={project.image} alt={project.title} className="project-card__image" />
                <div className="project-card__overlay">
                  <div className="project-card__actions">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn--primary project-card__btn"
                    >
                      <ExternalLink size={16} />
                      <span>Ver Demo</span>
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn--outline project-card__btn"
                    >
                      <Github size={16} />
                      <span>Código</span>
                    </a>
                  </div>
                </div>
                {project.featured && (
                  <span className="project-card__featured-badge">
                    <Sparkles size={12} /> Destaque
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="project-card__content">
                <div className="project-card__header">
                  <h3 className="project-card__title">{project.title}</h3>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-card__icon-link"
                    title="Ver projeto"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>

                <p className="project-card__description">{project.description}</p>

                {/* Tech Tags */}
                <div className="project-card__tags">
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
      </section>

    </div>
  )
}
