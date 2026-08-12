import { User, Briefcase, Award, GraduationCap, Download, CheckCircle2, Code2, Sparkles, Terminal } from '../components/Icons'
import './About.css'

const skillCategories = [
  {
    category: 'Front-end',
    icon: Code2,
    skills: ['React / Next.js', 'TypeScript', 'HTML5 / CSS3', 'Tailwind CSS', 'Vue.js', 'State Management (Zustand/Redux)'],
  },
  {
    category: 'Back-end',
    icon: Terminal,
    skills: ['Node.js / Express', 'Python / Django', 'RESTful APIs', 'GraphQL', 'Microsserviços', 'Clean Architecture'],
  },
  {
    category: 'Banco de Dados',
    icon: Award,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase / Firebase', 'Prisma ORM'],
  },
  {
    category: 'DevOps & Outros',
    icon: Briefcase,
    skills: ['Docker', 'Git & GitHub Workflows', 'CI/CD Pipelines', 'AWS / GCP', 'Vite / Webpack', 'Jest / Testing Library'],
  },
]

const timeline = [
  {
    year: '2024 - Presente',
    title: 'Desenvolvedor Full-stack Sênior',
    company: 'Consultoria / Freelance',
    description: 'Arquitetura e desenvolvimento de aplicações SaaS modernas de alta escala. Foco em código limpo, otimização de performance e interfaces intuitivas.',
    highlights: ['Liderou a migration de monolito para microsserviços', 'Otimizou tempo de carregamento em 65%'],
  },
  {
    year: '2023 - 2024',
    title: 'Desenvolvedor Full-stack',
    company: 'Tech Solutions Inc.',
    description: 'Construção de APIs escaláveis em Node.js e dashboards analíticos em tempo real com React e TypeScript.',
    highlights: ['Integração de gateway de pagamento Stripe', 'Implementação de autenticação JWT/OAuth2'],
  },
  {
    year: '2022 - 2023',
    title: 'Desenvolvedor Front-end',
    company: 'Agência Digital Innovate',
    description: 'Criação de landing pages e plataformas web responsivas focadas em experiência do usuário e otimização SEO.',
    highlights: ['Desenvolvimento de mais de 20 sites responsivos', 'Pontuação 98+ no Google Lighthouse'],
  },
]

const coreValues = [
  { title: 'Simplicidade & Clareza', desc: 'Remover o excesso para destacar a essência do produto.' },
  { title: 'Performance Extrema', desc: 'Código otimizado para carregamentos velozes e respostas instantâneas.' },
  { title: 'Qualidade sem Atalhos', desc: 'Testes automatizados, tipagem forte em TypeScript e documentação limpa.' },
  { title: 'Design Centrado no Usuário', desc: 'Interfaces intuitivas com micro-interações dinâmicas e acessibilidade.' },
]

export default function About() {
  return (
    <div className="about" id="about-page">
      
      {/* Background Lights */}
      <div className="about__glow about__glow--cyan" />
      <div className="about__glow about__glow--violet" />

      {/* Header */}
      <section className="about-header" id="about-header">
        <div className="about-header__container">
          <span className="section-tag animate-fade-in-up">
            <User size={14} /> Sobre Mim
          </span>
          <h1 className="about-header__title animate-fade-in-up delay-1">
            Trajetória, princípios & <br />
            <span className="gradient-amber-text">engenharia de produto</span>.
          </h1>
          <p className="about-header__text animate-fade-in-up delay-2">
            Desenvolvedor comprometido em criar soluções de software elegantes, 
            combinando rigor técnico no código com refinamento estético na interface.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="about-bio" id="about-bio">
        <div className="about-bio__container">
          
          {/* Avatar / Visual Frame */}
          <div className="about-bio__visual animate-fade-in-up delay-1">
            <div className="about-bio__image-frame glass-panel">
              <div className="about-bio__avatar-placeholder">
                <div className="avatar-icon-wrapper">
                  <User size={64} className="avatar-icon" />
                </div>
                <div className="avatar-badge">
                  <Sparkles size={16} />
                  <span>Senior Developer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="about-bio__content animate-fade-in-up delay-2">
            <h2 className="about-bio__title">
              Engenharia robusta alimentada por <span className="gradient-amber-text">design intencional</span>.
            </h2>
            <p className="about-bio__paragraph">
              Com mais de 5 anos criando produtos para a web, minha abordagem une o desenvolvimento 
              full-stack à paixão pela experiência do usuário. Acredito que um software excelente 
              deve ser invisível na sua complexidade e evidente em sua facilidade de uso.
            </p>
            <p className="about-bio__paragraph">
              Trabalho do planejamento de arquitetura de banco de dados e APIs REST/GraphQL 
              até a construção de componentes de interface altamente responsivos e animados.
            </p>

            {/* Action CV */}
            <div className="about-bio__actions">
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); alert('Download de currículo iniciado!') }} 
                className="btn btn--primary" 
                id="about-download-cv"
              >
                <Download size={18} />
                <span>Baixar Currículo (PDF)</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Core Values Section */}
      <section className="about-values" id="values-section">
        <div className="about-values__container">
          <div className="section-header text-center">
            <span className="section-tag">
              <GraduationCap size={14} /> Filosofia de Trabalho
            </span>
            <h2 className="section-title">
              Princípios de <span className="gradient-amber-text">Desenvolvimento</span>
            </h2>
          </div>

          <div className="values-grid">
            {coreValues.map((val, index) => (
              <div key={val.title} className={`value-card glass-card animate-fade-in-up delay-${index + 1}`}>
                <div className="value-card__header">
                  <CheckCircle2 size={20} className="text-cyan" />
                  <h3>{val.title}</h3>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills-section">
        <div className="skills__container">
          <div className="section-header text-center">
            <span className="section-tag">Competências</span>
            <h2 className="section-title">Tecnologias & Habilidades</h2>
            <p className="section-subtitle">
              Ferramentas e frameworks que utilizo no dia a dia para construir aplicações completas.
            </p>
          </div>

          <div className="skills__grid">
            {skillCategories.map((cat, i) => {
              const Icon = cat.icon
              return (
                <div key={cat.category} className={`skills__category glass-card animate-fade-in-up delay-${i + 1}`}>
                  <div className="skills__category-header">
                    <div className="skills__category-icon">
                      <Icon size={20} />
                    </div>
                    <h3 className="skills__category-title">{cat.category}</h3>
                  </div>
                  <ul className="skills__list">
                    {cat.skills.map((skill) => (
                      <li key={skill} className="skills__item">
                        <span className="skills__bullet" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline" id="timeline-section">
        <div className="timeline__container">
          <div className="section-header text-center">
            <span className="section-tag">
              <Briefcase size={14} /> Carreira
            </span>
            <h2 className="section-title">Experiência Profissional</h2>
          </div>

          <div className="timeline__list">
            {timeline.map((item, i) => (
              <div key={item.year} className={`timeline__item glass-card animate-fade-in-up delay-${i + 1}`}>
                <div className="timeline__header">
                  <span className="timeline__year">{item.year}</span>
                  <span className="timeline__company">{item.company}</span>
                </div>
                <h3 className="timeline__job-title">{item.title}</h3>
                <p className="timeline__desc">{item.description}</p>
                <div className="timeline__highlights">
                  {item.highlights.map((hl) => (
                    <div key={hl} className="timeline__highlight-item">
                      <CheckCircle2 size={14} className="text-emerald" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
