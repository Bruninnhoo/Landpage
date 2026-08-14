import { useState } from 'react'
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
    year: '2026 - Presente',
    title: 'Desenvolvedor Front-end',
    company: 'Residere Imóveis (Freelancer)',
    description: 'Desenvolvimento e otimização de interfaces web modernas para o setor imobiliário, focando em experiência do usuário e alta conversão.',
    highlights: ['Criação de componentes reusáveis e responsivos em React', 'Otimização de SEO e tempo de carregamento de páginas'],
  },
  {
    year: '2025 - 2026',
    title: 'Desenvolvedor Full-stack',
    company: 'CadenaLocações (Freelancer)',
    description: 'Construção completa de sistemas e plataformas web para gerenciamento de locações, englobando front-end, APIs e banco de dados.',
    highlights: ['Desenvolvimento de painéis administrativos e dashboards', 'Integração de serviços e gestão de dados em tempo real'],
  },
  {
    year: '2024 - 2025',
    title: 'Desenvolvedor de Scripts FiveM',
    company: 'Freelancer',
    description: 'Criação e programação de scripts customizados NUI (React/JS + Lua) e sistemas interativos para servidores de FiveM.',
    highlights: ['Interfaces NUI fluidas com comunicação eficiente via WebSockets/Events', 'Código altamente otimizado para baixo consumo de memória (0.00ms resmon)'],
  },
]

const coreValues = [
  { title: 'Simplicidade & Clareza', desc: 'Remover o excesso para destacar a essência do produto.' },
  { title: 'Performance Extrema', desc: 'Código otimizado para carregamentos velozes e respostas instantâneas.' },
  { title: 'Qualidade sem Atalhos', desc: 'Testes automatizados, tipagem forte em TypeScript e documentação limpa.' },
  { title: 'Design Centrado no Usuário', desc: 'Interfaces intuitivas com micro-interações dinâmicas e acessibilidade.' },
]

const personalInterests = [
  { icon: '🎮', title: 'Jogar', desc: 'Entusiasta de games, explorando diferentes gêneros e narrativas interativas nos momentos de descanso.' },
  { icon: '🎧', title: 'Ouvir Música', desc: 'Sempre acompanhado de uma boa trilha sonora para focar no código, relaxar e buscar inspiração.' },
  { icon: '🖥️', title: 'Customização & Setup', desc: 'Paixão por otimizar a estação de trabalho, atalhos de teclado, rotinas no terminal e estética de software.' },
  { icon: '🎸', title: 'Tocar Instrumentos', desc: 'Expressão criativa através da música, desenvolvendo foco, ritmo e disciplina fora do ambiente de desenvolvimento.' },
]

export default function About() {
  const [downloadedCV, setDownloadedCV] = useState(false)

  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault()
    setDownloadedCV(true)
    setTimeout(() => setDownloadedCV(false), 3000)

    // Trigger synthetic download or alert
    const link = document.createElement('a')
    link.href = '/bruno-avatar.jpg'
    link.download = 'Bruno_Heyden_Desenvolvedor_CV.jpg'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="about" id="about-page">

      {/* Background Lights */}
      <div className="about__glow about__glow--cyan" />
      <div className="about__glow about__glow--violet" />

      {/* Header */}
      <section className="about-header" id="about-header">
        <div className="about-header__container">
          <span className="section-tag animate-fade-in-up">
            <User size={14} /> Minha História
          </span>
          <h1 className="about-header__title animate-fade-in-up delay-1">
            Trajetória, paixão por tecnologia & <br />
            <span className="gradient-amber-text">engenharia de produto</span>.
          </h1>
          <p className="about-header__text animate-fade-in-up delay-2">
            Desenvolvedor comprometido em criar soluções de software elegantes,
            combinando rigor técnico com excelente experiência de uso.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="about-bio" id="about-bio">
        <div className="about-bio__container">

          {/* Avatar / Visual Frame */}
          <div className="about-bio__visual animate-fade-in-up delay-1">
            <div className="about-bio__image-frame glass-panel">
              <div className="about-bio__avatar-wrapper">
                <img src="/bruno-avatar.jpg" alt="Bruno Heyden" className="about-bio__avatar-img" />
                <div className="avatar-badge">
                  <Sparkles size={16} />
                  <span>Full-Stack Engineer</span>
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
              Meu nome é <strong>Bruno Heyden</strong>. Minha jornada na programação começou pela curiosidade em
              entender como as aplicações web funcionam nos bastidores. Desde então, transformei essa paixão em profissão.
            </p>
            <p className="about-bio__paragraph">
              Para mim, escrever código vai além de fazer telas funcionarem: trata-se de criar soluções
              previsíveis, limpas e que realmente ajudem pessoas e empresas a atingirem seus objetivos.
              Gosto de dominar todo o ciclo de desenvolvimento — da arquitetura da API no backend até
              as micro-interações do front-end.
            </p>

            {/* Action CV */}
            <div className="about-bio__actions">
              <button
                onClick={handleDownloadCV}
                className="btn btn--primary"
                id="about-download-cv"
              >
                <Download size={18} />
                <span>{downloadedCV ? 'Baixando CV...' : 'Baixar Currículo (CV)'}</span>
              </button>

              <a href="mailto:brunoheyden@gmail.com" className="btn btn--outline">
                <span>Falar Diretamente</span>
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
              <GraduationCap size={14} /> Filosofia Pessoal
            </span>
            <h2 className="section-title">
              Princípios que <span className="gradient-amber-text">Orientam Meu Trabalho</span>
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

      {/* Personal Interests / Lado Pessoal Section */}
      <section className="about-personal" id="personal-interests">
        <div className="about-personal__container">
          <div className="section-header text-center">
            <span className="section-tag">
              <Sparkles size={14} /> Além do Código
            </span>
            <h2 className="section-title">
              Lado Pessoal & <span className="gradient-amber-text">Interesses</span>
            </h2>
            <p className="section-subtitle">
              O que me inspira e me mantém motivado fora do terminal de desenvolvimento.
            </p>
          </div>

          <div className="personal-interests-grid">
            {personalInterests.map((interest, i) => (
              <div key={interest.title} className={`personal-interest-card glass-card animate-fade-in-up delay-${i + 1}`}>
                <div className="personal-interest-icon">{interest.icon}</div>
                <h3>{interest.title}</h3>
                <p>{interest.desc}</p>
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
            <h2 className="section-title">Minha Trajetória Profissional</h2>
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
