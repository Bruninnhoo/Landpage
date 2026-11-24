import { useState } from 'react'
import PageHero from '../components/PageHero'
import { Mail, Github, Linkedin, Copy, Check, WhatsApp, ArrowUpRight, Send } from '../components/Icons'
import { useLanguage } from '../context/LanguageContext'
import './Contact.css'

const EMAIL = 'brunoheyden@gmail.com'

export default function Contact() {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const facts = [
    [t('Localização', 'Location'), t('São Paulo, Brasil • Remoto / Híbrido', 'São Paulo, Brazil • Remote / Hybrid')],
    [t('Tempo de resposta', 'Response time'), t('Geralmente em poucas horas (máx 24h)', 'Usually within hours (max 24h)')],
    [t('Disponibilidade', 'Availability'), t('Projetos PJ, Freelance & Full-Time', 'PJ Contracts, Freelance & Full-Time')],
    [t('Especialidade', 'Core focus'), t('Full-Stack Web & Interfaces Modernas', 'Full-Stack Web & Modern Interfaces')],
  ]

  return (
    <div className="home" id="contact-page">
      <div className="hm-wrap ct">
        <PageHero
          lead={t('Vamos iniciar uma', "Let's start a")}
          title={t('Conversa', 'Conversation')}
          text={t(
            'Tem uma ideia de produto, precisa de um desenvolvedor full-stack sob medida ou deseja conversar sobre oportunidades? Escolha o canal abaixo que preferir para falar comigo diretamente.',
            'Have a product idea, need a tailored full-stack developer, or want to discuss opportunities? Choose your preferred direct channel below to connect with me.'
          )}
        />

        <ul className="ct-list">
          <li className="ct-row ct-row--main">
            <WhatsApp />
            <div>
              <h2>WhatsApp</h2>
              <p>{t('Ideal para um contato ágil, alinhamento de ideias e tirar dúvidas rapidamente.', 'Best for quick chats, aligning requirements, and instant Q&A.')}</p>
            </div>
            <div className="ct-value">
              <small>{t('Resposta mais rápida', 'Fastest reply')}</small>
              +55 (12) 99667-1945
            </div>
            <div className="ct-actions">
              <a className="hm-btn" href="https://wa.me/5512996671945" target="_blank" rel="noopener noreferrer">
                {t('Conversar', 'Chat')}
                <ArrowUpRight size={16} />
              </a>
            </div>
          </li>

          <li className="ct-row">
            <Mail />
            <div>
              <h2>E-mail</h2>
              <p>{t('Para envio de propostas de contratação, escopos de projetos e briefings técnicos.', 'For sending project scopes, formal proposals, and job opportunities.')}</p>
            </div>
            <div className="ct-value">
              <small>{t('Propostas e briefings', 'Proposals and inquiries')}</small>
              {EMAIL}
            </div>
            <div className="ct-actions">
              <button className="hm-btn hm-btn--line" onClick={copyEmail}>
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span role="status">{copied ? t('Copiado!', 'Copied!') : t('Copiar', 'Copy')}</span>
              </button>
              <a className="hm-btn" href={`mailto:${EMAIL}`}>
                <Send size={16} />
                {t('Enviar', 'Send')}
              </a>
            </div>
          </li>

          <li className="ct-row">
            <Linkedin />
            <div>
              <h2>LinkedIn</h2>
              <p>{t('Conecte-se comigo, confira recomendações e acompanhe minha trajetória profissional.', 'Connect with me, view endorsements, and follow my career trajectory.')}</p>
            </div>
            <div className="ct-value">
              <small>{t('Rede profissional', 'Professional network')}</small>
              in/bruno-heyden-13311a25a
            </div>
            <div className="ct-actions">
              <a className="hm-btn" href="https://www.linkedin.com/in/bruno-heyden-13311a25a/" target="_blank" rel="noopener noreferrer">
                {t('Conectar', 'Connect')}
                <ArrowUpRight size={16} />
              </a>
            </div>
          </li>

          <li className="ct-row">
            <Github />
            <div>
              <h2>GitHub</h2>
              <p>{t('Veja meus repositórios, commits recentes, arquitetura de projetos e contribuições.', 'Explore my repositories, recent commits, code architecture, and contributions.')}</p>
            </div>
            <div className="ct-value">
              <small>{t('Código aberto', 'Open source')}</small>
              github.com/Bruninnhoo
            </div>
            <div className="ct-actions">
              <a className="hm-btn" href="https://github.com/Bruninnhoo" target="_blank" rel="noopener noreferrer">
                {t('Ver repositórios', 'View repositories')}
                <ArrowUpRight size={16} />
              </a>
            </div>
          </li>
        </ul>

        <dl className="ct-facts">
          {facts.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
