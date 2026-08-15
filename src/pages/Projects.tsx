import { useState } from 'react'
import { FolderGit2, Github, Sparkles, Filter, ArrowUpRight } from '../components/Icons'
import { useLanguage } from '../context/LanguageContext'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'Cadena Locações - Plataforma Web',
    descPt: 'Modernização completa da plataforma web para a Cadena Locações, com novas funcionalidades de negócios, UI/UX otimizada e facilitação de cotações para eventos.',
    descEn: 'Complete web platform modernization for Cadena Locações, featuring new business capabilities, optimized UI/UX, and streamlined quote requests for event infrastructure.',
    image: './Cadena.png',
    tags: ['Java', 'Spring Boot', 'AWS', 'React', 'TypeScript'],
    category: 'fullstack',
    featured: true,
    link: 'https://cadenalocacoes.com.br/',
    github: 'https://github.com/Bruninnhoo/cadena',
    chalPt: 'Modernização completa da interface e construção de infraestrutura resiliente na nuvem para solicitações de orçamento.',
    chalEn: 'Complete UI modernization and building resilient cloud infrastructure for high-volume quote requests.',
    solPt: 'Arquitetura com backend robusto em Java Spring Boot hospedado na AWS e frontend em React e TypeScript.',
    solEn: 'Architecture leveraging a robust Java Spring Boot backend hosted on AWS paired with a responsive React & TypeScript frontend.',
  },
]

const filters = [
  { key: 'all', labelPt: 'Todos os Projetos', labelEn: 'All Projects' },
  { key: 'fullstack', labelPt: 'Full-stack', labelEn: 'Full-stack' },
  { key: 'frontend', labelPt: 'Front-end', labelEn: 'Front-end' },
  { key: 'backend', labelPt: 'Back-end', labelEn: 'Back-end' },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const { lang, t } = useLanguage()

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
            <FolderGit2 size={14} /> {t('Meus Projetos & Estudos de Caso', 'My Projects & Case Studies')}
          </span>
          <h1 className="projects-header__title animate-fade-in-up delay-1">
            {t('Soluções digitais', 'Digital solutions')}<br />
            <span className="gradient-amber-text">{t('construídas por mim', 'crafted by me')}</span>.
          </h1>
          <p className="projects-header__text animate-fade-in-up delay-2">
            {t('Aqui você encontra uma seleção de projetos que desenvolvi. Clique em qualquer projeto para ver detalhes sobre o desafio técnico e a solução adotada.', 'Here you will find a curated selection of projects I\'ve developed. Click any project to inspect technical challenges and solutions.')}
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="projects-filters" id="projects-filters">
        <div className="projects-filters__container">
          <div className="filter-pill-container glass-panel">
            <Filter size={16} className="filter-icon" />
            {filters.map((filter) => {
              const label = lang === 'en' ? filter.labelEn : filter.labelPt
              return (
                <button
                  key={filter.key}
                  className={`filter-btn ${activeFilter === filter.key ? 'filter-btn--active' : ''}`}
                  onClick={() => setActiveFilter(filter.key)}
                  id={`filter-${filter.key}`}
                >
                  {label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid" id="projects-grid">
        <div className="projects-grid__container">
          {filteredProjects.map((project, i) => {
            const description = lang === 'en' ? project.descEn : project.descPt
            return (
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
                        <span>{t('Detalhes Técnicos', 'Technical Details')}</span>
                      </button>
                    </div>
                  </div>
                  {project.featured && (
                    <span className="project-card__featured-badge">
                      <Sparkles size={12} /> {t('Destaque', 'Featured')}
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
                      title={t('Ver detalhes do projeto', 'View project details')}
                    >
                      <ArrowUpRight size={18} />
                    </button>
                  </div>

                  <p className="project-card__description">{description}</p>

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
            )
          })}
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
              <p className="project-modal__desc">{lang === 'en' ? selectedProject.descEn : selectedProject.descPt}</p>

              <div className="project-modal__section">
                <h4>🎯 {t('O Desafio Técnico:', 'The Technical Challenge:')}</h4>
                <p>{lang === 'en' ? selectedProject.chalEn : selectedProject.chalPt}</p>
              </div>

              <div className="project-modal__section">
                <h4>⚡ {t('A Solução Aplicada:', 'The Solution Applied:')}</h4>
                <p>{lang === 'en' ? selectedProject.solEn : selectedProject.solPt}</p>
              </div>

              <div className="project-modal__tags">
                {selectedProject.tags.map(t => (
                  <span key={t} className="tech-pill tech-pill--sm">{t}</span>
                ))}
              </div>

              <div className="project-modal__actions">
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                  <Github size={16} />
                  <span>{t('Ver Repositório no GitHub', 'View Repository on GitHub')}</span>
                </a>
                <button onClick={() => setSelectedProject(null)} className="btn btn--outline">
                  <span>{t('Fechar', 'Close')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
