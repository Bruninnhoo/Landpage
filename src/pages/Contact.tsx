import { useState } from 'react'
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Clock,
  Copy,
  Check,
  MessageSquare,
  WhatsApp,
  ArrowUpRight,
  Send,
  Briefcase,
  Zap,
} from '../components/Icons'
import { useLanguage } from '../context/LanguageContext'
import './Contact.css'

export default function Contact() {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('brunoheyden@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <div className="contact" id="contact-page">
      {/* Ambient Glows */}
      <div className="contact__glow contact__glow--cyan" />
      <div className="contact__glow contact__glow--violet" />

      {/* Header */}
      <section className="contact-header" id="contact-header">
        <div className="contact-header__container">
          <span className="section-tag animate-fade-in-up">
            <MessageSquare size={14} /> {t('Fale Comigo', 'Get in Touch')}
          </span>
          <h1 className="contact-header__title animate-fade-in-up delay-1">
            {t('Vamos iniciar uma conversa', 'Let\'s start a conversation')}<br />
            <span className="gradient-amber-text">{t('sobre o seu projeto', 'about your next project')}</span>.
          </h1>
          <p className="contact-header__text animate-fade-in-up delay-2">
            {t(
              'Tem uma ideia de produto, precisa de um desenvolvedor full-stack sob medida ou deseja conversar sobre oportunidades? Escolha o canal abaixo que preferir para falar comigo diretamente.',
              'Have a product idea, need a tailored full-stack developer, or want to discuss opportunities? Choose your preferred direct channel below to connect with me.'
            )}
          </p>
        </div>
      </section>

      {/* Main Direct Channels Grid */}
      <section className="contact-main" id="contact-main">
        <div className="contact-main__container">
          <div className="contact-channels-grid">

            {/* WhatsApp Card */}
            <div className="contact-hub-card contact-hub-card--whatsapp glass-card animate-fade-in-up delay-1">
              <div className="contact-hub-card__top">
                <div className="contact-hub-card__icon contact-hub-card__icon--whatsapp">
                  <WhatsApp size={24} />
                </div>
                <span className="contact-hub-badge contact-hub-badge--whatsapp">
                  <span className="live-dot live-dot--green" />
                  {t('Resposta Mais Rápida', 'Fastest Reply')}
                </span>
              </div>
              <div className="contact-hub-card__body">
                <h3 className="contact-hub-card__title">WhatsApp</h3>
                <p className="contact-hub-card__desc">
                  {t(
                    'Ideal para um contato ágil, alinhamento de ideias e tirar dúvidas rapidamente.',
                    'Best for quick chats, aligning requirements, and instant Q&A.'
                  )}
                </p>
                <div className="contact-hub-card__value">+55 (12) 99667-1945</div>
              </div>
              <div className="contact-hub-card__footer">
                <a
                  href="https://wa.me/5512996671945"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary contact-hub-btn contact-hub-btn--whatsapp"
                >
                  <span>{t('Conversar no WhatsApp', 'Chat on WhatsApp')}</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="contact-hub-card contact-hub-card--email glass-card animate-fade-in-up delay-2">
              <div className="contact-hub-card__top">
                <div className="contact-hub-card__icon contact-hub-card__icon--email">
                  <Mail size={24} />
                </div>
                <span className="contact-hub-badge contact-hub-badge--email">
                  {t('Propostas & Briefings', 'Proposals & Inquiries')}
                </span>
              </div>
              <div className="contact-hub-card__body">
                <h3 className="contact-hub-card__title">{t('E-mail Direto', 'Direct Email')}</h3>
                <p className="contact-hub-card__desc">
                  {t(
                    'Para envio de propostas de contratação, escopos de projetos e briefings técnicos.',
                    'For sending project scopes, formal proposals, and job opportunities.'
                  )}
                </p>
                <div className="contact-hub-card__value">brunoheyden@gmail.com</div>
              </div>
              <div className="contact-hub-card__footer contact-hub-card__footer--dual">
                <button onClick={copyEmail} className="btn btn--secondary contact-hub-btn">
                  {copied ? (
                    <>
                      <Check size={16} className="text-emerald" />
                      <span>{t('Copiado!', 'Copied!')}</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span>{t('Copiar E-mail', 'Copy Email')}</span>
                    </>
                  )}
                </button>
                <a
                  href="mailto:brunoheyden@gmail.com"
                  className="btn btn--ghost contact-hub-btn"
                  title="Abrir no cliente de e-mail"
                >
                  <Send size={16} />
                  <span>{t('Enviar', 'Send')}</span>
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="contact-hub-card contact-hub-card--linkedin glass-card animate-fade-in-up delay-3">
              <div className="contact-hub-card__top">
                <div className="contact-hub-card__icon contact-hub-card__icon--linkedin">
                  <Linkedin size={24} />
                </div>
                <span className="contact-hub-badge contact-hub-badge--linkedin">
                  {t('Rede Profissional', 'Professional Network')}
                </span>
              </div>
              <div className="contact-hub-card__body">
                <h3 className="contact-hub-card__title">LinkedIn</h3>
                <p className="contact-hub-card__desc">
                  {t(
                    'Conecte-se comigo, confira recomendações e acompanhe minha trajetória profissional.',
                    'Connect with me, view endorsements, and follow my career trajectory.'
                  )}
                </p>
                <div className="contact-hub-card__value">in/bruno-heyden-13311a25a</div>
              </div>
              <div className="contact-hub-card__footer">
                <a
                  href="https://www.linkedin.com/in/bruno-heyden-13311a25a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--secondary contact-hub-btn"
                >
                  <span>{t('Conectar no LinkedIn', 'Connect on LinkedIn')}</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="contact-hub-card contact-hub-card--github glass-card animate-fade-in-up delay-4">
              <div className="contact-hub-card__top">
                <div className="contact-hub-card__icon contact-hub-card__icon--github">
                  <Github size={24} />
                </div>
                <span className="contact-hub-badge contact-hub-badge--github">
                  {t('Código Aberto', 'Open Source')}
                </span>
              </div>
              <div className="contact-hub-card__body">
                <h3 className="contact-hub-card__title">GitHub</h3>
                <p className="contact-hub-card__desc">
                  {t(
                    'Veja meus repositórios, commits recentes, arquitetura de projetos e contribuições.',
                    'Explore my repositories, recent commits, code architecture, and contributions.'
                  )}
                </p>
                <div className="contact-hub-card__value">github.com/Bruninnhoo</div>
              </div>
              <div className="contact-hub-card__footer">
                <a
                  href="https://github.com/Bruninnhoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--secondary contact-hub-btn"
                >
                  <span>{t('Ver Repositórios', 'View Repositories')}</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

          </div>

          {/* Quick Info / Availability Status Bar */}
          <div className="contact-status-strip glass-panel animate-fade-in-up delay-5">
            <div className="contact-status-item">
              <div className="contact-status-icon">
                <MapPin size={20} />
              </div>
              <div className="contact-status-text">
                <span className="contact-status-label">{t('Localização', 'Location')}</span>
                <span className="contact-status-val">{t('São Paulo, Brasil • Remoto / Híbrido', 'São Paulo, Brazil • Remote / Hybrid')}</span>
              </div>
            </div>

            <div className="contact-status-divider" />

            <div className="contact-status-item">
              <div className="contact-status-icon text-emerald">
                <Clock size={20} />
              </div>
              <div className="contact-status-text">
                <span className="contact-status-label">{t('Tempo de Resposta', 'Response Time')}</span>
                <span className="contact-status-val">{t('Geralmente em poucas horas (máx 24h)', 'Usually within hours (max 24h)')}</span>
              </div>
            </div>

            <div className="contact-status-divider" />

            <div className="contact-status-item">
              <div className="contact-status-icon text-cyan">
                <Briefcase size={20} />
              </div>
              <div className="contact-status-text">
                <span className="contact-status-label">{t('Disponibilidade', 'Availability')}</span>
                <span className="contact-status-val">{t('Projetos PJ, Freelance & Full-Time', 'PJ Contracts, Freelance & Full-Time')}</span>
              </div>
            </div>

            <div className="contact-status-divider" />

            <div className="contact-status-item">
              <div className="contact-status-icon text-amber">
                <Zap size={20} />
              </div>
              <div className="contact-status-text">
                <span className="contact-status-label">{t('Especialidade', 'Core Focus')}</span>
                <span className="contact-status-val">{t('Full-Stack Web & Interfaces Modernas', 'Full-Stack Web & Modern Interfaces')}</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
