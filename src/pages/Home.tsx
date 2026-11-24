import { useEffect, useRef, useState, type ComponentType } from 'react'
import { Link } from 'react-router-dom'
import { FaJava } from 'react-icons/fa'
import { SiSpringboot } from 'react-icons/si'
import BackgroundLines from '../components/BackgroundLines'
import { Sparkle } from '../components/PageHero'
import { Globe, CheckCircle2, MessageSquare, LayoutGrid, Terminal, Send } from '../components/Icons'
import {
  ReactLogo, TypescriptLogo, NextjsLogo, ViteLogo, NodejsLogo, PostgresLogo,
  MongoLogo, RedisLogo, PythonLogo, DjangoLogo, AWSLogo, DockerLogo, GitLogo,
} from '../components/TechLogos'
import { useLanguage } from '../context/LanguageContext'
import { useHeroIntro } from './useHeroIntro'
import './Home.css'

const EMAIL = 'brunoheyden@gmail.com'

type Pair = readonly [string, string]
type Logo = ComponentType<{ size?: number | string }>

const steps: { icon: Logo; title: Pair; text: Pair; out: Pair }[] = [
  {
    icon: MessageSquare,
    title: ['Entender', 'Understand'],
    text: ['Converso com o cliente para saber o que o sistema precisa fazer e quem vai usar.', 'I talk to the client to learn what the system needs to do and who will use it.'],
    out: ['Lista do que entra no projeto', 'List of what goes into the project'],
  },
  {
    icon: LayoutGrid,
    title: ['Planejar', 'Plan'],
    text: ['Defino as telas, os dados e as rotas da API antes de começar a programar.', 'I define the screens, the data and the API routes before I start coding.'],
    out: ['Desenho das telas e do banco', 'Screen and database design'],
  },
  {
    icon: Terminal,
    title: ['Programar', 'Code'],
    text: ['Entrego uma parte de cada vez e mostro para o cliente testar.', 'I deliver one part at a time and show it to the client for testing.'],
    out: ['Versão de teste a cada etapa', 'A test version at each stage'],
  },
  {
    icon: Send,
    title: ['Publicar', 'Ship'],
    text: ['Publico na AWS e continuo corrigindo e melhorando depois do lançamento.', 'I deploy on AWS and keep fixing and improving after launch.'],
    out: ['Sistema no ar', 'System live'],
  },
]

const experience: { year: Pair; role: Pair; company: string; stack: string }[] = [
  { year: ['2026 — presente', '2026 — present'], role: ['Desenvolvedor Full-stack', 'Full-stack Developer'], company: 'Residere Imóveis', stack: 'Java · Spring Boot · AWS · React · CI/CD' },
  { year: ['2025 — 2026', '2025 — 2026'], role: ['Desenvolvedor Full-stack', 'Full-stack Developer'], company: 'Cadena Locações', stack: 'Java · Spring · AWS · React' },
  { year: ['2024 — 2025', '2024 — 2025'], role: ['Desenvolvedor de Scripts FiveM', 'FiveM Script Developer'], company: 'Freelancer', stack: 'React/JS NUI · Lua' },
]

const stack: { name: Pair; text: Pair; items: [string, Logo][] }[] = [
  {
    name: ['Dados', 'Data'],
    text: ['Modelagem, consultas e cache.', 'Modeling, queries and caching.'],
    items: [['PostgreSQL', PostgresLogo], ['MongoDB', MongoLogo], ['Redis', RedisLogo]],
  },
  {
    name: ['Back-end', 'Back-end'],
    text: ['APIs REST, regras de negócio e integrações.', 'REST APIs, business rules and integrations.'],
    items: [['Java', FaJava], ['Spring Boot', SiSpringboot], ['Python', PythonLogo], ['Django', DjangoLogo], ['Node.js', NodejsLogo]],
  },
  {
    name: ['Cloud', 'Cloud'],
    text: ['Deploy, CI/CD e containers.', 'Deploys, CI/CD and containers.'],
    items: [['AWS', AWSLogo], ['Docker', DockerLogo], ['Git', GitLogo]],
  },
  {
    name: ['Front-end', 'Front-end'],
    text: ['Telas, componentes e responsividade.', 'Screens, components and responsiveness.'],
    items: [['React', ReactLogo], ['TypeScript', TypescriptLogo], ['Next.js', NextjsLogo], ['Vite', ViteLogo]],
  },
]

const projectPoints: Pair[] = [
  ['Novas funcionalidades de negócio', 'New business features'],
  ['Interface redesenhada', 'Redesigned interface'],
  ['Pedido de orçamento otimizado', 'Streamlined quote request'],
]

export default function Home() {
  const hero = useRef<HTMLElement>(null)
  useHeroIntro(hero)
  const [copied, setCopied] = useState(false)
  const [step, setStep] = useState(0)
  const [auto, setAuto] = useState(true)

  // The highlighted step advances on its own until the visitor picks one.
  useEffect(() => {
    if (!auto || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setStep((n) => (n + 1) % steps.length), 3500)
    return () => clearInterval(id)
  }, [auto])
  const { t } = useLanguage()
  const tp = (p: Pair) => t(p[0], p[1])

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <div className="home" id="home-page">
      <div className="hm-wrap">
        <header className="hm-hero" id="hero-section" ref={hero}>
          <BackgroundLines />
          <Sparkle className="hm-star--a" />
          <Sparkle className="hm-star--b" />
          <h1 className="hm-title">
            <img className="hm-portrait" src="/bruno-avatar.jpg" alt="" />
            Bruno
            <br />
            <em>Heyden<i className="hm-sel" aria-hidden="true" /></em>
            <span className="hm-frame hm-shot"><i /><b className="hm-load" /><img src="/Cadena.png" alt="" /></span>
            <span className="hm-cur hm-cur--react">React</span>
            <span className="hm-cur hm-cur--spring">Spring Boot</span>
            <span className="hm-cur hm-cur--aws">AWS</span>
            <span className="hm-cur hm-cur--next">Next.js</span>
            <span className="hm-cur hm-cur--django">Python/Django</span>
          </h1>
          <p className="hm-role">{t('Desenvolvedor Full-Stack & UI Specialist', 'Full-Stack Developer & UI Specialist')}</p>
          <p className="hm-sub">{t('Java/Spring Boot, Python/Django, React/Next.js/TypeScript e AWS.', 'Java/Spring Boot, Python/Django, React/Next.js/TypeScript and AWS.')}</p>
          <div className="hm-mail">
            <span>{EMAIL}</span>
            <button onClick={copyEmail} id="hero-copy-email">
              {copied ? t('Copiado!', 'Copied!') : t('Copiar', 'Copy')}
            </button>
          </div>
          <span className="hm-scroll" aria-hidden="true">{t('role', 'scroll')} ↓</span>
        </header>

        <section className="hm-section">
          <span className="hm-eyebrow">01 — {t('Sobre', 'About')}</span>
          <div className="hm-split">
            <h2>{t('Um pouco ', 'A bit ')}<em>{t('sobre', 'about')}</em>{t(' mim...', ' me...')}</h2>
            <div>
              <p>{t('Sou desenvolvedor full-stack e trabalho como freelancer desde 2024. Comecei programando scripts para servidores de FiveM, com interfaces em React e lógica em Lua. Depois passei a desenvolver sistemas web para empresas: a plataforma da Cadena Locações e, hoje, o sistema da Residere Imóveis, onde também cuido do CI/CD e do kanban do projeto.', "I'm a full-stack developer and have been freelancing since 2024. I started out writing scripts for FiveM servers, with React interfaces and Lua logic. Then I moved on to web systems for businesses: the Cadena Locações platform and, today, the Residere Imóveis system, where I also handle CI/CD and the project kanban.")}</p>
              <p>
                {t('Minha base é ', 'My core stack is ')}
                <b>Java/Spring Boot</b>
                {t(' no servidor e ', ' on the server and ')}
                <b>React/TypeScript</b>
                {t(' na interface, com publicação na ', ' on the interface, deployed on ')}
                <b>AWS</b>
                {t('. Em cada projeto eu cuido destas três partes:', '. On each project I handle these three parts:')}
              </p>
            </div>
          </div>

          <div className="hm-deck">
            <div className="hm-pol">
              <div className="hm-scene" aria-hidden="true">
                <div className="hm-ui"><i /><i /><i /><i /></div>
              </div>
              <span className="hm-tag">Front-end</span>
              <h3>{t('Interface', 'Interface')}</h3>
              <p>{t('Telas em React e TypeScript que funcionam bem no celular e no computador.', 'React and TypeScript screens that work well on phone and desktop.')}</p>
            </div>
            <div className="hm-pol">
              <div className="hm-scene" aria-hidden="true">
                <div className="hm-term">
                  <code>GET /orcamentos</code>
                  <code>200 OK</code>
                </div>
              </div>
              <span className="hm-tag">Back-end</span>
              <h3>{t('API e dados', 'API and data')}</h3>
              <p>{t('Regras de negócio em Java com Spring Boot e banco de dados PostgreSQL.', 'Business rules in Java with Spring Boot and a PostgreSQL database.')}</p>
            </div>
            <div className="hm-pol">
              <div className="hm-scene" aria-hidden="true">
                <Globe size={44} />
                <div className="hm-bar"><i /></div>
              </div>
              <span className="hm-tag">Deploy</span>
              <h3>{t('Publicação', 'Deployment')}</h3>
              <p>{t('Coloco o sistema no ar na AWS, com CI/CD, e acompanho depois do lançamento.', 'I put the system live on AWS, with CI/CD, and keep an eye on it after launch.')}</p>
            </div>
          </div>

          <div className="hm-how">
            <h3 className="hm-how__title">{t('Como eu ', 'How I ')}<em>{t('trabalho', 'work')}</em></h3>
            <ol className="hm-flow">
              {steps.map((st, i) => (
                <li key={st.title[0]} className={i === step ? 'on' : ''}>
                  <span className="hm-flow__n">0{i + 1}</span>
                  <button onClick={() => { setStep(i); setAuto(false) }} aria-pressed={i === step}>
                    <st.icon size={24} />
                    <strong>{tp(st.title)}</strong>
                    <span>{tp(st.text)}</span>
                    <small>→ {tp(st.out)}</small>
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="hm-section">
          <span className="hm-eyebrow">02 — {t('Experiência', 'Experience')}</span>
          <h2 className="hm-h">{t('Onde ', "Where I've ")}<em>{t('trabalhei', 'worked')}</em></h2>
          {experience.map((e, i) => (
            <div className="hm-row" key={e.company}>
              <span className="hm-n">0{i + 1}</span>
              <div><small>{tp(e.year)}</small>{tp(e.role)}</div>
              <div><small>{t('Empresa', 'Company')}</small>{e.company}</div>
              <div><small>Stack</small>{e.stack}</div>
            </div>
          ))}
        </section>

        <section className="hm-section" id="featured-section">
          <span className="hm-eyebrow">03 — {t('Projeto', 'Project')}</span>
          <h2 className="hm-h">{t('Projeto em ', 'Featured ')}<em>{t('destaque', 'project')}</em></h2>
          <div className="hm-proj">
            <figure className="hm-frame">
              <i />
              <img src="/Cadena.png" alt={t('Site da Cadena Locações', 'Cadena Locações website')} />
            </figure>
            <div>
              <span className="hm-tag">{t('No ar · 2025–26', 'Live · 2025–26')}</span>
              <h3>Cadena Locações</h3>
              <p>{t('Trabalhei na modernização da plataforma web da locadora, no front-end e no back-end.', "I worked on modernizing the rental company's web platform, on both front-end and back-end.")}</p>
              <ul className="hm-points">
                {projectPoints.map((p) => (
                  <li key={p[0]}><CheckCircle2 size={16} />{tp(p)}</li>
                ))}
              </ul>
              <div className="hm-chips">
                {['Java', 'Spring Boot', 'AWS', 'React', 'TypeScript'].map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <a className="hm-btn" href="https://cadenalocacoes.com.br/" target="_blank" rel="noopener noreferrer">
                {t('Ver no ar ↗', 'See it live ↗')}
              </a>
            </div>
          </div>
        </section>

        <section className="hm-section" id="tech-section">
          <span className="hm-eyebrow">04 — Stack</span>
          <h2 className="hm-h">{t('Tecnologias que ', 'Technologies I ')}<em>{t('uso', 'use')}</em></h2>
          <p className="hm-pipe__lead">{t('Separadas pela parte do sistema em que cada uma entra.', 'Grouped by the part of the system each one is used in.')}</p>
          <div className="hm-pipe">
            <i className="hm-packet" aria-hidden="true" />
            {stack.map((s) => (
              <div className="hm-node" key={s.name[0]}>
                <h3>{tp(s.name)}</h3>
                <p>{tp(s.text)}</p>
                <ul className="hm-techs">
                  {s.items.map(([name, Icon]) => (
                    <li key={name}><Icon size={18} />{name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="hm-section hm-cta">
          <span className="hm-eyebrow">05 — {t('Contato', 'Contact')}</span>
          <Link to="/contato" className="hm-badge" aria-label={t('Ir para contato', 'Go to contact')}>
            <svg viewBox="0 0 200 200" aria-hidden="true">
              <path id="hm-badge-path" d="M100 100m-78 0a78 78 0 1 1 156 0a78 78 0 1 1-156 0" fill="none" />
              <text>
                <textPath href="#hm-badge-path" textLength="484">
                  {t('VAMOS CONVERSAR ✦ VAMOS CONVERSAR ✦ ', "LET'S TALK ✦ LET'S TALK ✦ LET'S TALK ✦ ")}
                </textPath>
              </text>
            </svg>
            <span>↗</span>
          </Link>
          <h2>{t('Vamos ', "Let's ")}<em>{t('conversar', 'talk')}</em>?</h2>
          <div className="hm-links">
            <a href={`mailto:${EMAIL}`}>E-mail</a>
            <a href="https://wa.me/5512996671945" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="https://linkedin.com/in/bruno-heyden-13311a25a" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/Bruninnhoo" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </section>
      </div>
    </div>
  )
}
