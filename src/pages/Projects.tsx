import { useState } from 'react'
import { FolderGit2, Github, Sparkles, Filter, ArrowUpRight } from '../components/Icons'
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
    link: 'https://github.com/brunoheyden',
    github: 'https://github.com/brunoheyden',
    challenge: 'Processar milhares de eventos em tempo real sem travar a interface do usuário.',
    solution: 'Implementação de WebSockets com buffer no Redis e renderização otimizada no React 19.',
  },
  {
    id: 2,
    title: 'SaaS E-Commerce Ecosystem',
    description: 'Ecossistema completo de vendas online com catálogo responsivo, gateway de pagamento Stripe, gestão de estoque e notificações PWA.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    tags: ['Next.js', 'React Native', 'Stripe', 'MongoDB', 'Redis'],
    category: 'fullstack',
    featured: true,
    link: 'https://github.com/brunoheyden',
    github: 'https://github.com/brunoheyden',
    challenge: 'Manter latência de checkout abaixo de 200ms em conexões móveis lentas.',
    solution: 'Arquitetura Serverless no Next.js com caching de borda (Edge) e pré-carregamento estatístico de produtos.',
  },
  {
    id: 3,
    title: 'Rede Social & Comunidade Dev',
    description: 'Plataforma social com feed interativo em tempo real, sistema de mensagens instantâneas via WebSockets e cache de performance com Redis.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
    tags: ['Next.js', 'REST API', 'WebSocket', 'Redis', 'Tailwind'],
    category: 'frontend',
    featured: false,
    link: 'https://github.com/brunoheyden',
    github: 'https://github.com/brunoheyden',
    challenge: 'Sincronização de estado de presença de milhares de usuários em tempo real.',
    solution: 'Pub/Sub distribuído com Redis e conexões WebSockets eficientes.',
  },
  {
    id: 4,
    title: 'API Gateway & Auth Service',
    description: 'Microsserviço de autenticação e API Gateway com suporte a OAuth2, rate limiting inteligente, monitoramento de latência e contêineres Docker.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
    tags: ['Node.js', 'Express', 'Docker', 'AWS ECS', 'Jest'],
    category: 'backend',
    featured: false,
    link: 'https://github.com/brunoheyden',
    github: 'https://github.com/brunoheyden',
    challenge: 'Garantir resiliência contra ataques de força bruta e picos imprevisíveis de tráfego.',
    solution: 'Algoritmo Leaky Bucket para rate limiting e rotação automática de chaves JWT RSA-256.',
  },
  {
    id: 5,
    title: 'SaaS Task Management Platform',
    description: 'Gerenciador de tarefas e projetos com quadros Kanban interativos, automação de fluxos de trabalho e relatórios de produtividade em tempo real.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80',
    tags: ['React', 'TypeScript', 'PostgreSQL', 'Tailwind', 'Redux'],
    category: 'fullstack',
    featured: false,
    link: 'https://github.com/brunoheyden',
    github: 'https://github.com/brunoheyden',
    challenge: 'Arraste-e-solte (Drag & Drop) ultra fluido com atualização otimista de estado.',
    solution: 'Atualizações de estado otimistas com sincronização assíncrona em PostgreSQL.',
  },
  {
    id: 6,
    title: 'Fintech AI Dashboard',
    description: 'Interface de gestão financeira pessoal com integração de inteligência artificial para previsão de custos e categorização automática.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
    tags: ['Python', 'FastAPI', 'React', 'Chart.js', 'PostgreSQL'],
    category: 'frontend',
    featured: false,
    link: 'https://github.com/brunoheyden',
    github: 'https://github.com/brunoheyden',
    challenge: 'Categorizar milhares de extratos bancários com precisão utilizando modelos de ML.',
    solution: 'Serviço em FastAPI assíncrono consumindo embeddings via scikit-learn.',
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
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

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
            <FolderGit2 size={14} /> Meus Projetos & Estudos de Caso
          </span>
          <h1 className="projects-header__title animate-fade-in-up delay-1">
            Soluções digitais <br />
            <span className="gradient-amber-text">construídas por mim</span>.
          </h1>
          <p className="projects-header__text animate-fade-in-up delay-2">
            Aqui você encontra uma seleção de projetos que desenvolvi. Clique em qualquer projeto para 
            ver detalhes sobre o desafio técnico e a solução adotada.
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
              <div className="project-card__image-wrapper" onClick={() => setSelectedProject(project)}>
                <img src={project.image} alt={project.title} className="project-card__image" />
                <div className="project-card__overlay">
                  <div className="project-card__actions">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="btn btn--primary project-card__btn"
                    >
                      <Sparkles size={16} />
                      <span>Detalhes Técnicos</span>
                    </button>
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
                  <h3 className="project-card__title" onClick={() => setSelectedProject(project)} style={{ cursor: 'pointer' }}>
                    {project.title}
                  </h3>
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="project-card__icon-link"
                    title="Ver detalhes do projeto"
                  >
                    <ArrowUpRight size={18} />
                  </button>
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

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="project-modal glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="project-modal__close" onClick={() => setSelectedProject(null)}>×</button>
            <div className="project-modal__header">
              <span className="tech-pill">{selectedProject.category.toUpperCase()}</span>
              <h2>{selectedProject.title}</h2>
            </div>
            <img src={selectedProject.image} alt={selectedProject.title} className="project-modal__img" />
            <div className="project-modal__body">
              <p className="project-modal__desc">{selectedProject.description}</p>
              
              <div className="project-modal__section">
                <h4>🎯 O Desafio Técnico:</h4>
                <p>{selectedProject.challenge}</p>
              </div>

              <div className="project-modal__section">
                <h4>⚡ A Solução Aplicada:</h4>
                <p>{selectedProject.solution}</p>
              </div>

              <div className="project-modal__tags">
                {selectedProject.tags.map(t => (
                  <span key={t} className="tech-pill tech-pill--sm">{t}</span>
                ))}
              </div>

              <div className="project-modal__actions">
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                  <Github size={16} />
                  <span>Ver Repositório no GitHub</span>
                </a>
                <button onClick={() => setSelectedProject(null)} className="btn btn--outline">
                  <span>Fechar</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
