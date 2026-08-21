import { User, GraduationCap, CheckCircle2, Sparkles, Gamepad2, Headphones, Monitor, Music } from '../components/Icons'
import { useLanguage } from '../context/LanguageContext'
import './About.css'

const coreValues = [
  {
    titlePt: 'Simplicidade & Clareza',
    titleEn: 'Simplicity & Clarity',
    descPt: 'Busco sempre remover o excesso para focar na essência do produto e entregar interfaces intuitivas.',
    descEn: 'I always strive to remove clutter, focusing on product essence to deliver intuitive interfaces.',
  },
  {
    titlePt: 'Performance Extrema',
    titleEn: 'Extreme Performance',
    descPt: 'Escrevo código otimizado para garantir carregamentos velozes e respostas instantâneas.',
    descEn: 'I write optimized code to guarantee fast load times and instant user feedback.',
  },
  {
    titlePt: 'Qualidade sem Atalhos',
    titleEn: 'Quality without Shortcuts',
    descPt: 'Priorizo testes automatizados, tipagem forte com TypeScript e código limpo que facilita a manutenção.',
    descEn: 'I prioritize automated tests, strong TypeScript types, and maintainable clean code.',
  },
  {
    titlePt: 'Design Centrado no Usuário',
    titleEn: 'User-Centered Design',
    descPt: 'Crio experiências pensadas para o usuário final, com micro-interações fluidas e acessibilidade.',
    descEn: 'I design experiences around end-users, with fluid micro-interactions and accessibility.',
  },
]

const personalInterests = [
  {
    icon: Gamepad2,
    accentClass: 'interest-icon--cyan',
    titlePt: 'Videogames & Jogos',
    titleEn: 'Gaming & Video Games',
    descPt: 'Eu amo jogar videogames nas minhas horas vagas! Sou apaixonado pelo gênero soulslike por conta do alto nível de desafio e superação que proporcionam, além de explorar RPGs e narrativas interativas. É onde recarrego minhas energias criativas.',
    descEn: 'I love playing video games in my free time! I am a huge fan of soulslike games for the intense challenge and sense of accomplishment they provide, as well as exploring RPGs and interactive stories to recharge my creative energy.',
  },
  {
    icon: Headphones,
    accentClass: 'interest-icon--violet',
    titlePt: 'Meu Gênero de Música Favorito',
    titleEn: 'My Favorite Music Genre',
    descPt: 'Meu gênero de música favorito é bastante eclético — curto demais rock, lofi e eletrônica. Programar ouvindo uma boa trilha sonora é essencial para o meu estado de flow.',
    descEn: 'My favorite music genre is quite eclectic — I really enjoy rock, lofi, and electronic tracks. Coding with a great soundtrack is key to keeping me in flow.',
  },
  {
    icon: Monitor,
    accentClass: 'interest-icon--amber',
    titlePt: 'Meu PC & Setup',
    titleEn: 'My PC & Workstation Setup',
    descPt: 'Tenho grande paixão por cuidar, montar e otimizar o meu próprio PC e estação de trabalho. Adoro ajustar atalhos de teclado, scripts no terminal e deixar a estética do meu ambiente perfeita.',
    descEn: 'I have a huge passion for building and optimizing my PC setup and workstation. I love tuning keyboard shortcuts, CLI scripts, and creating a pristine workspace.',
  },
  {
    icon: Music,
    accentClass: 'interest-icon--emerald',
    titlePt: 'Tocar Instrumentos',
    titleEn: 'Playing Instruments',
    descPt: 'Eu toco instrumentos musicais (como violão e guitarra). É a minha forma favorita de expressão artística fora do mundo da programação, exercitando foco e sensibilidade.',
    descEn: 'I play musical instruments (like acoustic and electric guitar). It is my favorite creative outlet outside coding, developing focus and rhythm.',
  },
]

export default function About() {
  const { lang, t } = useLanguage()

  return (
    <div className="about" id="about-page">

      {/* Ambient Glows */}
      <div className="about__glow about__glow--cyan" />
      <div className="about__glow about__glow--violet" />

      {/* Header */}
      <section className="about-header" id="about-header">
        <div className="about-header__container">
          <span className="section-tag animate-fade-in-up">
            <User size={14} /> {t('Sobre Mim', 'About Me')}
          </span>
          <h1 className="about-header__title animate-fade-in-up delay-1">
            {t('Prazer, eu sou o ', 'Hi, I\'m ')}
            <span className="gradient-amber-text">{t('Bruno Heyden', 'Bruno Heyden')}</span>.
          </h1>
          <p className="about-header__text animate-fade-in-up delay-2">
            {t(
              'Desenvolvedor Full-Stack focado em transformar ideias e necessidades em produtos digitais velozes, elegantes e eficientes.',
              'Full-Stack Developer focused on turning ideas and business needs into fast, elegant, and efficient digital products.'
            )}
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

          {/* Text Content in First Person */}
          <div className="about-bio__content animate-fade-in-up delay-2">
            <h2 className="about-bio__title">
              {t('Minha paixão por ', 'My passion for ')}
              <span className="gradient-amber-text">{t('tecnologia & código', 'tech & code')}</span>.
            </h2>
            <p className="about-bio__paragraph">
              {t(
                'A minha história com a programação começou pela curiosidade em entender o que acontecia por trás das telas dos jogos e sistemas que eu mais gostava. Essa vontade de descobrir como as coisas funcionam me fez mergulhar de cabeça na engenharia de software e transformar essa paixão na minha profissão.',
                'My programming journey started out of curiosity to understand what went on behind the scenes of the games and systems I loved. That drive to discover how things work led me to dive deep into software engineering and turn that passion into my career.'
              )}
            </p>
            <p className="about-bio__paragraph">
              {t(
                'Hoje, atuo desenvolvendo aplicações completas do início ao fim — unindo APIs robustas e arquitetura limpa no back-end com interfaces dinâmicas, responsivas e intuitivas no front-end.',
                'Today, I build end-to-end applications — combining robust APIs and clean backend architecture with dynamic, responsive, and intuitive frontend interfaces.'
              )}
            </p>
          </div>

        </div>
      </section>

      {/* Core Values Section */}
      <section className="about-values" id="values-section">
        <div className="about-values__container">
          <div className="section-header text-center">
            <span className="section-tag">
              <GraduationCap size={14} /> {t('Meus Valores', 'My Core Values')}
            </span>
            <h2 className="section-title">
              {t('Princípios que Orientam o', 'Principles that Guide')} <span className="gradient-amber-text">{t('Meu Trabalho', 'My Work')}</span>
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
              {t('Meu Lado Pessoal &', 'My Personal Side &')} <span className="gradient-amber-text">{t('Interesses', 'Interests')}</span>
            </h2>
            <p className="section-subtitle">
              {t('Um pouco mais sobre o que eu gosto de fazer nas minhas horas vagas e o que me inspira.', 'A bit more about what I enjoy doing in my free time and what inspires me.')}
            </p>
          </div>

          <div className="personal-interests-grid">
            {personalInterests.map((interest, i) => {
              const IconComponent = interest.icon
              const title = lang === 'en' ? interest.titleEn : interest.titlePt
              const desc = lang === 'en' ? interest.descEn : interest.descPt
              return (
                <div key={interest.titlePt} className={`personal-interest-card glass-card animate-fade-in-up delay-${i + 1}`}>
                  <div className={`personal-interest-icon ${interest.accentClass}`}>
                    <IconComponent size={22} />
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

    </div>
  )
}
