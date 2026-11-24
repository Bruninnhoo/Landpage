import type { ReactNode } from 'react'
import PageHero from '../components/PageHero'
import { Gamepad2, Music } from '../components/Icons'
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

// Small drawings on the interest cards, in the same style as the home cards
const bars = (n: number) => Array.from({ length: n }, (_, i) => <i key={i} />)

const personalInterests: { scene: ReactNode; titlePt: string; titleEn: string; descPt: string; descEn: string }[] = [
  {
    scene: <><Gamepad2 size={44} /><div className="ab-life">{bars(2)}</div></>,
    titlePt: 'Videogames & Jogos',
    titleEn: 'Gaming & Video Games',
    descPt: 'Eu amo jogar videogames nas minhas horas vagas! Sou apaixonado pelo gênero soulslike por conta do alto nível de desafio e superação que proporcionam, além de explorar RPGs e narrativas interativas. É onde recarrego minhas energias criativas.',
    descEn: 'I love playing video games in my free time! I am a huge fan of soulslike games for the intense challenge and sense of accomplishment they provide, as well as exploring RPGs and interactive stories to recharge my creative energy.',
  },
  {
    scene: <div className="ab-eq">{bars(9)}</div>,
    titlePt: 'Meu Gênero de Música Favorito',
    titleEn: 'My Favorite Music Genre',
    descPt: 'Meu gênero de música favorito é bastante eclético — curto demais rock, lofi e eletrônica. Programar ouvindo uma boa trilha sonora é essencial para o meu estado de flow.',
    descEn: 'My favorite music genre is quite eclectic — I really enjoy rock, lofi, and electronic tracks. Coding with a great soundtrack is key to keeping me in flow.',
  },
  {
    scene: <div className="ab-keys"><kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>T</kbd></div>,
    titlePt: 'Meu PC & Setup',
    titleEn: 'My PC & Workstation Setup',
    descPt: 'Tenho grande paixão por cuidar, montar e otimizar o meu próprio PC e estação de trabalho. Adoro ajustar atalhos de teclado, scripts no terminal e deixar a estética do meu ambiente perfeita.',
    descEn: 'I have a huge passion for building and optimizing my PC setup and workstation. I love tuning keyboard shortcuts, CLI scripts, and creating a pristine workspace.',
  },
  {
    scene: <><Music size={36} /><div className="ab-strings">{bars(6)}</div></>,
    titlePt: 'Tocar Instrumentos',
    titleEn: 'Playing Instruments',
    descPt: 'Eu toco instrumentos musicais (como violão e guitarra). É a minha forma favorita de expressão artística fora do mundo da programação, exercitando foco e sensibilidade.',
    descEn: 'I play musical instruments (like acoustic and electric guitar). It is my favorite creative outlet outside coding, developing focus and rhythm.',
  },
]

export default function About() {
  const { lang, t } = useLanguage()

  return (
    <div className="home" id="about-page">
      <div className="hm-wrap">
        <PageHero
          lead={t('Prazer, eu sou o', "Hi, I'm")}
          title="Bruno Heyden"
          text={t(
              'Desenvolvedor Full-Stack focado em transformar ideias e necessidades em produtos digitais velozes, elegantes e eficientes.',
              'Full-Stack Developer focused on turning ideas and business needs into fast, elegant, and efficient digital products.'
            )}
        />

        <section className="hm-section ab-bio" id="about-bio">
          <div className="ab-photo">
            <img src="/bruno-avatar.jpg" alt="Bruno Heyden" />
            <span className="hm-cur ab-cur--1" aria-hidden="true">Soulslike</span>
            <span className="hm-cur ab-cur--2" aria-hidden="true">{t('Guitarra', 'Guitar')}</span>
            <span className="hm-cur ab-cur--3" aria-hidden="true">Lofi</span>
          </div>
          <div>
            <h2>{t('Minha paixão por ', 'My passion for ')}<em>{t('tecnologia', 'tech')}</em></h2>
            <p>
              {t(
                'A minha história com a programação começou pela curiosidade em entender o que acontecia por trás das telas dos jogos e sistemas que eu mais gostava. Essa vontade de descobrir como as coisas funcionam me fez mergulhar de cabeça na engenharia de software e transformar essa paixão na minha profissão.',
                'My programming journey started out of curiosity to understand what went on behind the scenes of the games and systems I loved. That drive to discover how things work led me to dive deep into software engineering and turn that passion into my career.'
              )}
            </p>
            <p>
              {t(
                'Hoje, atuo desenvolvendo aplicações completas do início ao fim — unindo APIs robustas e arquitetura limpa no back-end com interfaces dinâmicas, responsivas e intuitivas no front-end.',
                'Today, I build end-to-end applications — combining robust APIs and clean backend architecture with dynamic, responsive, and intuitive frontend interfaces.'
              )}
            </p>
          </div>
        </section>

        <section className="hm-section" id="values-section">
          <h2 className="hm-h">{t('Como eu ', 'How I ')}<em>{t('penso', 'think')}</em></h2>
          <dl className="ab-values">
            {coreValues.map((val) => (
              <div key={val.titlePt}>
                <dt>{lang === 'en' ? val.titleEn : val.titlePt}</dt>
                <dd>{lang === 'en' ? val.descEn : val.descPt}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="hm-section" id="personal-interests">
          <h2 className="hm-h">{t('Meu lado ', 'My personal ')}<em>{t('pessoal', 'side')}</em></h2>
          <p className="hm-pipe__lead">{t('Um pouco mais sobre o que eu gosto de fazer nas minhas horas vagas e o que me inspira.', 'A bit more about what I enjoy doing in my free time and what inspires me.')}</p>
          <div className="hm-deck ab-deck">
            {personalInterests.map((interest) => (
              <div className="hm-pol" key={interest.titlePt}>
                <div className="hm-scene" aria-hidden="true">{interest.scene}</div>
                <h3>{lang === 'en' ? interest.titleEn : interest.titlePt}</h3>
                <p>{lang === 'en' ? interest.descEn : interest.descPt}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
