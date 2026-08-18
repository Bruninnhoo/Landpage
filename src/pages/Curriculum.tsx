import { Briefcase, Award, GraduationCap, CheckCircle2, Code2, Terminal, Cpu, ArrowRight } from '../components/Icons'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import './Curriculum.css'

const timeline = [
  {
    yearPt: '2026 - Presente',
    yearEn: '2026 - Present',
    titlePt: 'Desenvolvedor Front-end',
    titleEn: 'Front-end Developer',
    companyPt: 'Residere Imóveis (Freelancer)',
    companyEn: 'Residere Imóveis (Freelance)',
    descPt: 'Atuo no desenvolvimento e na otimização de interfaces web modernas para o setor imobiliário, com foco total em entregar a melhor experiência do usuário e aumentar taxas de conversão.',
    descEn: 'I work on developing and optimizing modern web interfaces for the real estate sector, focusing on delivering outstanding UX and driving conversion rates.',
    hlPt: [
      'Desenvolvo componentes reusáveis e altamente responsivos em React e TypeScript',
      'Otimizo estratégias de SEO técnico e velocidade de carregamento das aplicações'
    ],
    hlEn: [
      'I build reusable, highly responsive React & TypeScript components',
      'I optimize technical SEO and web performance for maximum speed'
    ],
  },
  {
    yearPt: '2025 - 2026',
    yearEn: '2025 - 2026',
    titlePt: 'Desenvolvedor Full-stack',
    titleEn: 'Full-stack Developer',
    companyPt: 'CadenaLocações (Freelancer)',
    companyEn: 'CadenaLocações (Freelance)',
    descPt: 'Construí a plataforma web completa para gerenciamento de locações, desenvolvendo desde a interface do usuário até as APIs e a estrutura do banco de dados.',
    descEn: 'I built the complete web platform for rental management, developing everything from user interfaces to backend APIs and database infrastructure.',
    hlPt: [
      'Projetei painéis administrativos intuitivos e dashboards em tempo real',
      'Integrei serviços de nuvem e gerenciei o fluxo contínuo de cotações'
    ],
    hlEn: [
      'I designed intuitive admin panels and real-time dashboards',
      'I integrated cloud services and managed high-volume quote workflows'
    ],
  },
  {
    yearPt: '2024 - 2025',
    yearEn: '2024 - 2025',
    titlePt: 'Desenvolvedor de Scripts FiveM',
    titleEn: 'FiveM Script Developer',
    companyPt: 'Freelancer',
    companyEn: 'Freelance',
    descPt: 'Criei e programei scripts customizados NUI (integração de React/JS com Lua) e sistemas interativos sob medida para servidores de FiveM.',
    descEn: 'I created and programmed custom NUI scripts (React/JS + Lua integration) and bespoke interactive systems for FiveM servers.',
    hlPt: [
      'Desenvolvi interfaces NUI fluidas com comunicação em tempo real via WebSockets/Events',
      'Escrevi código de alta performance otimizado para baixo consumo de memória (0.00ms resmon)'
    ],
    hlEn: [
      'I developed fluid NUI interfaces with real-time WebSockets/Events communication',
      'I wrote high-performance code optimized for ultra-low memory consumption (0.00ms resmon)'
    ],
  },
]

const skillCategories = [
  {
    categoryPt: 'Front-end',
    categoryEn: 'Front-end',
    icon: Code2,
    skills: ['React / Next.js', 'TypeScript', 'HTML5 / CSS3', 'Tailwind CSS', 'Vite', 'State Management (Zustand/Redux)'],
  },
  {
    categoryPt: 'Back-end',
    categoryEn: 'Back-end',
    icon: Terminal,
    skills: ['Node.js / Express', 'Python / Django', 'Java / Spring Boot', 'RESTful APIs', 'WebSocket / Socket.io', 'Clean Architecture'],
  },
  {
    categoryPt: 'Banco de Dados',
    categoryEn: 'Databases',
    icon: Award,
    skills: ['PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    categoryPt: 'DevOps & Ferramentas',
    categoryEn: 'DevOps & Tools',
    icon: Briefcase,
    skills: ['Docker', 'Git & GitHub Workflows', 'CI/CD Pipelines', 'AWS (EC2, S3)', 'Jest / Testing Library', 'Linux / Bash'],
  },
]

export default function Curriculum() {
  const { lang, t } = useLanguage()

  return (
    <div className="curriculum" id="curriculum-page">

      {/* Background Ambient Lights */}
      <div className="curriculum__glow curriculum__glow--cyan" />
      <div className="curriculum__glow curriculum__glow--violet" />

      {/* Page Header */}
      <section className="curriculum-header" id="curriculum-header">
        <div className="curriculum-header__container">
          <span className="section-tag animate-fade-in-up">
            <GraduationCap size={14} /> {t('Currículo Profissional', 'Professional Resume')}
          </span>
          <h1 className="curriculum-header__title animate-fade-in-up delay-1">
            {t('Minha Trajetória &', 'My Path &')}<br />
            <span className="gradient-amber-text">{t('Competências Profissionais', 'Professional Skills')}</span>.
          </h1>
          <p className="curriculum-header__text animate-fade-in-up delay-2">
            {t(
              'Apresento aqui o meu percurso profissional, os projetos reais em que atuei e as competências técnicas que aprimorei ao longo do meu aprendizado contínuo.',
              'Here I present my professional path, real-world projects I have worked on, and the technical skills I have honed throughout my continuous learning journey.'
            )}
          </p>
          <div className="curriculum-header__actions animate-fade-in-up delay-3">
            <Link to="/contato" className="btn btn--primary">
              <span>{t('Entrar em Contato', 'Get in Touch')}</span>
              <ArrowRight size={16} />
            </Link>
            <a href="https://github.com/Bruninnhoo" target="_blank" rel="noopener noreferrer" className="btn btn--outline">
              <span>{t('Meu GitHub', 'My GitHub')}</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 1: Trajetória Profissional (MUST BE FIRST) */}
      <section className="curriculum-timeline" id="curriculum-timeline">
        <div className="curriculum-timeline__container">
          <div className="section-header text-center">
            <span className="section-tag">
              <Briefcase size={14} /> {t('Experiência Prática', 'Practical Experience')}
            </span>
            <h2 className="section-title">
              {t('Minha Trajetória', 'My Professional')} <span className="gradient-amber-text">{t('Profissional', 'Journey')}</span>
            </h2>
            <p className="section-subtitle">
              {t('Empresas, projetos freelancers e soluções reais que desenvolvi.', 'Companies, freelance projects, and real solutions I have built.')}
            </p>
          </div>

          <div className="timeline__list">
            {timeline.map((item, i) => {
              const year = lang === 'en' ? item.yearEn : item.yearPt
              const title = lang === 'en' ? item.titleEn : item.titlePt
              const company = lang === 'en' ? item.companyEn : item.companyPt
              const desc = lang === 'en' ? item.descEn : item.descPt
              const highlights = lang === 'en' ? item.hlEn : item.hlPt
              return (
                <article key={item.yearPt} className={`timeline__item glass-card animate-fade-in-up delay-${i + 1}`}>
                  <div className="timeline__header">
                    <span className="timeline__year">{year}</span>
                    <span className="timeline__company">{company}</span>
                  </div>
                  <h3 className="timeline__job-title">{title}</h3>
                  <p className="timeline__desc">{desc}</p>
                  <div className="timeline__highlights">
                    {highlights.map((hl) => (
                      <div key={hl} className="timeline__highlight-item">
                        <CheckCircle2 size={14} className="text-emerald" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2: Competências & Habilidades (MUST BE SECOND) */}
      <section className="curriculum-skills" id="curriculum-skills">
        <div className="curriculum-skills__container">
          <div className="section-header text-center">
            <span className="section-tag">
              <Cpu size={14} /> {t('Habilidades Técnicas', 'Technical Skills')}
            </span>
            <h2 className="section-title">
              {t('Minhas Competências &', 'My Competencies &')} <span className="gradient-amber-text">{t('Habilidades', 'Skills')}</span>
            </h2>
            <p className="section-subtitle">
              {t('Ferramentas, linguagens e frameworks que domino para construir software moderno e eficiente.', 'Tools, languages, and frameworks I master to build modern, efficient software.')}
            </p>
          </div>

          <div className="skills__grid">
            {skillCategories.map((cat, i) => {
              const Icon = cat.icon
              const catName = lang === 'en' ? cat.categoryEn : cat.categoryPt
              return (
                <div key={cat.categoryPt} className={`skills__category glass-card animate-fade-in-up delay-${i + 1}`}>
                  <div className="skills__category-header">
                    <div className="skills__category-icon">
                      <Icon size={20} />
                    </div>
                    <h3 className="skills__category-title">{catName}</h3>
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

    </div>
  )
}
