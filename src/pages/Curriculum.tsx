import PageHero from '../components/PageHero'
import { CheckCircle2, Code2, Terminal, Database, Server, ArrowRight } from '../components/Icons'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import './Curriculum.css'

const timeline = [
  {
    yearPt: '2026 - Presente',
    yearEn: '2026 - Present',
    titlePt: 'Desenvolvedor Full-stack',
    titleEn: 'Full-stack Developer',
    companyPt: 'Residere Imóveis (Freelancer)',
    companyEn: 'Residere Imóveis (Freelance)',
    descPt: 'Atuo como desenvolvedor full-stack no sistema web da imobiliária, com Java e Spring Boot no back-end, React no front-end e infraestrutura na AWS.',
    descEn: "I work as a full-stack developer on the real-estate agency's web system, with Java and Spring Boot on the back-end, React on the front-end and infrastructure on AWS.",
    hlPt: [
      'Desenvolvo o back-end em Java com Spring Boot e o front-end em React',
      'Cuido do CI/CD, da infraestrutura na AWS e do kanban do projeto'
    ],
    hlEn: [
      'I build the back-end in Java with Spring Boot and the front-end in React',
      'I handle CI/CD, the AWS infrastructure and the project kanban'
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
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    categoryPt: 'DevOps & Ferramentas',
    categoryEn: 'DevOps & Tools',
    icon: Server,
    skills: ['Docker', 'Git & GitHub Workflows', 'CI/CD Pipelines', 'AWS (EC2, S3)', 'Jest / Testing Library', 'Linux / Bash'],
  },
]

export default function Curriculum() {
  const { lang, t } = useLanguage()

  return (
    <div className="home" id="curriculum-page">
      <div className="hm-wrap">
        <PageHero
          lead={t('Currículo', 'Resume')}
          title={t('Trajetória', 'My path')}
          text={t(
              'Apresento aqui o meu percurso profissional, os projetos reais em que atuei e as competências técnicas que aprimorei ao longo do meu aprendizado contínuo.',
              'Here I present my professional path, real-world projects I have worked on, and the technical skills I have honed throughout my continuous learning journey.'
            )}
        >
          <div className="pg-actions">
            <Link to="/contato" className="hm-btn">
              {t('Entrar em contato', 'Get in touch')}
              <ArrowRight size={16} />
            </Link>
            <a href="https://github.com/Bruninnhoo" target="_blank" rel="noopener noreferrer" className="hm-btn hm-btn--line">
              {t('Meu GitHub', 'My GitHub')}
            </a>
          </div>
        </PageHero>

        {/* Experience must come first, skills second */}
        <section className="hm-section" id="curriculum-timeline">
          <h2 className="hm-h">{t('Onde ', "Where I've ")}<em>{t('trabalhei', 'worked')}</em></h2>
          <ol className="cv-line">
            {timeline.map((item) => {
              const [from, to] = (lang === 'en' ? item.yearEn : item.yearPt).split(' - ')
              return (
                <li key={item.yearPt}>
                  <p className="cv-year"><strong>{from}</strong> – {to}</p>
                  <div className="cv-job">
                    <h3>{lang === 'en' ? item.titleEn : item.titlePt}</h3>
                    <p className="cv-company">{lang === 'en' ? item.companyEn : item.companyPt}</p>
                    <p>{lang === 'en' ? item.descEn : item.descPt}</p>
                    <ul className="hm-points">
                      {(lang === 'en' ? item.hlEn : item.hlPt).map((hl) => (
                        <li key={hl}><CheckCircle2 size={16} />{hl}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              )
            })}
          </ol>
        </section>

        <section className="hm-section" id="curriculum-skills">
          <h2 className="hm-h">{t('Minhas ', 'My ')}<em>{t('habilidades', 'skills')}</em></h2>
          <p className="hm-pipe__lead">{t('Ferramentas, linguagens e frameworks que domino para construir software moderno e eficiente.', 'Tools, languages, and frameworks I master to build modern, efficient software.')}</p>
          <div className="cv-skills">
            {skillCategories.map((cat) => (
              <div key={cat.categoryPt}>
                <h3><cat.icon size={22} />{lang === 'en' ? cat.categoryEn : cat.categoryPt}</h3>
                <ul>
                  {cat.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
