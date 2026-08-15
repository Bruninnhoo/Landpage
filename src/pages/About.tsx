import { User, Briefcase, Award, GraduationCap, CheckCircle2, Code2, Sparkles, Terminal } from '../components/Icons'
import { useLanguage } from '../context/LanguageContext'
import './About.css'

const skillCategories = [
  {
    categoryPt: 'Front-end',
    categoryEn: 'Front-end',
    icon: Code2,
    skills: ['React / Next.js', 'TypeScript', 'HTML5 / CSS3', 'Tailwind CSS'],
  },
  {
    categoryPt: 'Back-end',
    categoryEn: 'Back-end',
    icon: Terminal,
    skills: ['Node.js / Express', 'Python / Django', 'RESTful APIs', 'WebSocket / Socket.io', 'Microsserviços / Microservices', 'Clean Architecture'],
  },
  {
    categoryPt: 'Banco de Dados',
    categoryEn: 'Databases',
    icon: Award,
    skills: ['PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    categoryPt: 'DevOps & Outros',
    categoryEn: 'DevOps & Tools',
    icon: Briefcase,
    skills: ['Docker', 'Git & GitHub Workflows', 'CI/CD Pipelines', 'AWS', 'Vite', 'Jest / Testing Library'],
  },
]

const timeline = [
  {
    yearPt: '2026 - Presente',
    yearEn: '2026 - Present',
    titlePt: 'Desenvolvedor Front-end',
    titleEn: 'Front-end Developer',
    companyPt: 'Residere Imóveis (Freelancer)',
    companyEn: 'Residere Imóveis (Freelance)',
    descPt: 'Desenvolvimento e otimização de interfaces web modernas para o setor imobiliário, focando em experiência do usuário e alta conversão.',
    descEn: 'Development and optimization of modern web interfaces for the real estate sector, focusing on user experience and high conversion rates.',
    hlPt: ['Criação de componentes reusáveis e responsivos em React', 'Otimização de SEO e tempo de carregamento de páginas'],
    hlEn: ['Creation of reusable and responsive React components', 'SEO and page speed optimization'],
  },
  {
    yearPt: '2025 - 2026',
    yearEn: '2025 - 2026',
    titlePt: 'Desenvolvedor Full-stack',
    titleEn: 'Full-stack Developer',
    companyPt: 'CadenaLocações (Freelancer)',
    companyEn: 'CadenaLocações (Freelance)',
    descPt: 'Construção completa de sistemas e plataformas web para gerenciamento de locações, englobando front-end, APIs e banco de dados.',
    descEn: 'End-to-end development of web platforms for rental management, covering front-end, APIs, and databases.',
    hlPt: ['Desenvolvimento de painéis administrativos e dashboards', 'Integração de serviços e gestão de dados em tempo real'],
    hlEn: ['Development of admin panels and real-time dashboards', 'Integration of cloud services and real-time data management'],
  },
  {
    yearPt: '2024 - 2025',
    yearEn: '2024 - 2025',
    titlePt: 'Desenvolvedor de Scripts FiveM',
    titleEn: 'FiveM Script Developer',
    companyPt: 'Freelancer',
    companyEn: 'Freelance',
    descPt: 'Criação e programação de scripts customizados NUI (React/JS + Lua) e sistemas interativos para servidores de FiveM.',
    descEn: 'Development and programming of custom NUI scripts (React/JS + Lua) and interactive systems for FiveM servers.',
    hlPt: ['Interfaces NUI fluidas com comunicação eficiente via WebSockets/Events', 'Código altamente otimizado para baixo consumo de memória (0.00ms resmon)'],
    hlEn: ['Fluid NUI interfaces with efficient WebSockets/Events communication', 'Highly optimized code for low memory usage (0.00ms resmon)'],
  },
]

const coreValues = [
  {
    titlePt: 'Simplicidade & Clareza',
    titleEn: 'Simplicity & Clarity',
    descPt: 'Remover o excesso para destacar a essência do produto.',
    descEn: 'Remove clutter to emphasize the core essence of the product.',
  },
  {
    titlePt: 'Performance Extrema',
    titleEn: 'Extreme Performance',
    descPt: 'Código otimizado para carregamentos velozes e respostas instantâneas.',
    descEn: 'Optimized code for lightning-fast loads and instant responses.',
  },
  {
    titlePt: 'Qualidade sem Atalhos',
    titleEn: 'Quality without Shortcuts',
    descPt: 'Testes automatizados, tipagem forte em TypeScript e documentação limpa.',
    descEn: 'Automated tests, strong TypeScript typing, and clean documentation.',
  },
  {
    titlePt: 'Design Centrado no Usuário',
    titleEn: 'User-Centered Design',
    descPt: 'Interfaces intuitivas com micro-interações dinâmicas e acessibilidade.',
    descEn: 'Intuitive interfaces with dynamic micro-interactions and accessibility.',
  },
]

const personalInterests = [
  {
    icon: '🎮',
    titlePt: 'Jogar',
    titleEn: 'Gaming',
    descPt: 'Entusiasta de games, explorando diferentes gêneros e narrativas interativas nos momentos de descanso.',
    descEn: 'Gaming enthusiast, exploring different genres and interactive stories during downtime.',
  },
  {
    icon: '🎧',
    titlePt: 'Ouvir Música',
    titleEn: 'Listening to Music',
    descPt: 'Sempre acompanhado de uma boa trilha sonora para focar no código, relaxar e buscar inspiração.',
    descEn: 'Always paired with a great soundtrack for deep coding focus, relaxation, and inspiration.',
  },
  {
    icon: '🖥️',
    titlePt: 'Customização & Setup',
    titleEn: 'Customization & Setup',
    descPt: 'Paixão por otimizar a estação de trabalho, atalhos de teclado, rotinas no terminal e estética de software.',
    descEn: 'Passionate about tuning workstation setups, keyboard shortcuts, CLI routines, and software aesthetics.',
  },
  {
    icon: '🎸',
    titlePt: 'Tocar Instrumentos',
    titleEn: 'Playing Instruments',
    descPt: 'Expressão criativa através da música, desenvolvendo foco, ritmo e disciplina fora do ambiente de desenvolvimento.',
    descEn: 'Creative expression through music, developing focus, rhythm, and discipline beyond code.',
  },
]

export default function About() {
  const { lang, t } = useLanguage()

  return (
    <div className="about" id="about-page">

      {/* Background Lights */}
      <div className="about__glow about__glow--cyan" />
      <div className="about__glow about__glow--violet" />

      {/* Header */}
      <section className="about-header" id="about-header">
        <div className="about-header__container">
          <span className="section-tag animate-fade-in-up">
            <User size={14} /> {t('Minha História', 'My Story')}
          </span>
          <h1 className="about-header__title animate-fade-in-up delay-1">
            {t('Trajetória, paixão por tecnologia &', 'Career path, passion for tech &')}<br />
            <span className="gradient-amber-text">{t('engenharia de produto', 'product engineering')}</span>.
          </h1>
          <p className="about-header__text animate-fade-in-up delay-2">
            {t('Desenvolvedor comprometido em criar soluções de software elegantes, combinando rigor técnico com excelente experiência de uso.', 'Software developer committed to crafting elegant software solutions, combining technical rigor with outstanding user experience.')}
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
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="about-bio__content animate-fade-in-up delay-2">
            <h2 className="about-bio__title">
              {t('Engenharia robusta alimentada por', 'Robust engineering driven by')} <span className="gradient-amber-text">{t('design intencional', 'intentional design')}</span>.
            </h2>
            <p className="about-bio__paragraph">
              {t('Meu nome é ', 'My name is ')}<strong>Bruno Heyden</strong>{t('. Minha jornada na programação começou pela curiosidade em entender como as aplicações web funcionam nos bastidores. Desde então, transformei essa paixão em profissão.', '. My programming journey started out of curiosity to understand how web applications work behind the scenes. Ever since, I\'ve turned that passion into my profession.')}
            </p>
            <p className="about-bio__paragraph">
              {t('Para mim, escrever código vai além de fazer telas funcionarem: trata-se de criar soluções previsíveis, limpas e que realmente ajudem pessoas e empresas a atingirem seus objetivos. Gosto de dominar todo o ciclo de desenvolvimento — da arquitetura da API no backend até as micro-interações do front-end.', 'For me, writing code is about more than making screens work: it\'s about creating clean, predictable solutions that truly help people and businesses reach their goals. I enjoy mastering the full development lifecycle — from backend API architecture down to front-end micro-interactions.')}
            </p>
          </div>

        </div>
      </section>

      {/* Core Values Section */}
      <section className="about-values" id="values-section">
        <div className="about-values__container">
          <div className="section-header text-center">
            <span className="section-tag">
              <GraduationCap size={14} /> {t('Filosofia Pessoal', 'Personal Philosophy')}
            </span>
            <h2 className="section-title">
              {t('Princípios que', 'Principles that')} <span className="gradient-amber-text">{t('Orientam Meu Trabalho', 'Guide My Work')}</span>
            </h2>
          </div>

          <div className="values-grid">
            {coreValues.map((val, index) => {
              const title = lang === 'en' ? val.titleEn : val.titlePt
              const desc = lang === 'en' ? val.descEn : val.descPt
              return (
                <div key={val.titlePt} className={`value-card glass-card animate-fade-in-up delay-${index + 1}`}>
                  <div className="value-card__header">
                    <CheckCircle2 size={20} className="text-cyan" />
                    <h3>{title}</h3>
                  </div>
                  <p>{desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Personal Interests / Lado Pessoal Section */}
      <section className="about-personal" id="personal-interests">
        <div className="about-personal__container">
          <div className="section-header text-center">
            <span className="section-tag">
              <Sparkles size={14} /> {t('Além do Código', 'Beyond the Code')}
            </span>
            <h2 className="section-title">
              {t('Lado Pessoal &', 'Personal Side &')} <span className="gradient-amber-text">{t('Interesses', 'Interests')}</span>
            </h2>
            <p className="section-subtitle">
              {t('O que me inspira e me mantém motivado fora do terminal de desenvolvimento.', 'What inspires and keeps me motivated outside the code terminal.')}
            </p>
          </div>

          <div className="personal-interests-grid">
            {personalInterests.map((interest, i) => {
              const title = lang === 'en' ? interest.titleEn : interest.titlePt
              const desc = lang === 'en' ? interest.descEn : interest.descPt
              return (
                <div key={interest.titlePt} className={`personal-interest-card glass-card animate-fade-in-up delay-${i + 1}`}>
                  <div className="personal-interest-icon">{interest.icon}</div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills-section">
        <div className="skills__container">
          <div className="section-header text-center">
            <span className="section-tag">{t('Competências', 'Competencies')}</span>
            <h2 className="section-title">{t('Tecnologias & Habilidades', 'Technologies & Skills')}</h2>
            <p className="section-subtitle">
              {t('Ferramentas e frameworks que utilizo no dia a dia para construir aplicações completas.', 'Tools and frameworks I use daily to build complete applications.')}
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

      {/* Timeline Section */}
      <section className="timeline" id="timeline-section">
        <div className="timeline__container">
          <div className="section-header text-center">
            <span className="section-tag">
              <Briefcase size={14} /> {t('Carreira', 'Career')}
            </span>
            <h2 className="section-title">{t('Minha Trajetória Profissional', 'My Career Path')}</h2>
          </div>

          <div className="timeline__list">
            {timeline.map((item, i) => {
              const year = lang === 'en' ? item.yearEn : item.yearPt
              const title = lang === 'en' ? item.titleEn : item.titlePt
              const company = lang === 'en' ? item.companyEn : item.companyPt
              const desc = lang === 'en' ? item.descEn : item.descPt
              const highlights = lang === 'en' ? item.hlEn : item.hlPt
              return (
                <div key={item.yearPt} className={`timeline__item glass-card animate-fade-in-up delay-${i + 1}`}>
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
                </div>
              )
            })}
          </div>
        </div>
      </section>

    </div>
  )
}
