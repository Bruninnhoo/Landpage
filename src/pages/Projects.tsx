import { useState } from 'react'
import { FolderGit2, Github, Sparkles, Filter, ArrowUpRight } from '../components/Icons'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'Cadena Locações - Plataforma Web',
    description: 'Modernização completa da plataforma web para a Cadena Locações, com novas funcionalidades de negócios, UI/UX otimizada e facilitação de cotações para eventos.',
    image: './Cadena.png',
    tags: ['Java', 'Spring Boot', 'AWS', 'React', 'TypeScript'],
    category: 'fullstack',
    featured: true,
    link: 'https://cadenalocacoes.com.br/',
    github: 'https://github.com/Bruninnhoo/cadena',
    challenge: 'Modernização completa da interface e construção de infraestrutura resiliente na nuvem para solicitações de orçamento.',
    solution: 'Arquitetura com backend robusto em Java Spring Boot hospedado na AWS e frontend em React e TypeScript.',
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
