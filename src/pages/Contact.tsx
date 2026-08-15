import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Github, Linkedin, Clock, Copy, Check, Send, MessageSquare, CheckCircle2, WhatsApp } from '../components/Icons'
import { useLanguage } from '../context/LanguageContext'
import './Contact.css'

const contactChannels = [
  {
    icon: Mail,
    labelPt: 'E-mail Direto',
    labelEn: 'Direct Email',
    value: 'brunoheyden@gmail.com',
    action: 'copy',
  },
  {
    icon: MapPin,
    labelPt: 'Localização',
    labelEn: 'Location',
    valuePt: 'São Paulo, Brasil (Remoto / Híbrido)',
    valueEn: 'São Paulo, Brazil (Remote / Hybrid)',
    action: null,
  },
  {
    icon: Github,
    labelPt: 'GitHub Pessoal',
    labelEn: 'Personal GitHub',
    value: 'github.com/Bruninnhoo',
    link: 'https://github.com/Bruninnhoo',
  },
  {
    icon: Linkedin,
    labelPt: 'LinkedIn',
    labelEn: 'LinkedIn',
    value: 'linkedin.com/in/bruno-heyden-13311a25a',
    link: 'https://www.linkedin.com/in/bruno-heyden-13311a25a/',
  },
  {
    icon: WhatsApp,
    labelPt: 'WhatsApp',
    labelEn: 'WhatsApp',
    value: '+55 (12)99667-1945',
    link: 'https://wa.me/5512996671945',
  },
]

const budgetRanges = [
  '< R$ 5k',
  'R$ 5k - 15k',
  'R$ 15k - 30k',
  'R$ 30k+',
]

const faqs = [
  {
    qPt: 'Qual o seu modelo de contratação preferido?',
    qEn: 'What is your preferred hiring model?',
    aPt: 'Atuo como desenvolvedor Freelance (PJ) para projetos sob medida, ou posições Full-time remotas.',
    aEn: 'I work as a Freelance developer for custom contracts, or full-time remote positions.',
  },
  {
    qPt: 'Em quanto tempo você costuma entregar uma landing page ou SaaS inicial?',
    qEn: 'How long does it take to deliver a landing page or initial SaaS?',
    aPt: 'Landing pages de alta conversão costumam levar de 3 a 7 dias. Protótipos SaaS funcionais de 2 a 4 semanas, a depender do escopo.',
    aEn: 'High-converting landing pages usually take 3 to 7 days. Functional SaaS prototypes take 2 to 4 weeks depending on scope.',
  },
  {
    qPt: 'Você realiza manutenção e suporte pós-entrega?',
    qEn: 'Do you provide maintenance and post-delivery support?',
    aPt: 'Sim! Todos os meus projetos contam com garantia de suporte pós-lançamento para ajustes finos e treinamento da equipe.',
    aEn: 'Yes! All my projects include post-launch support guarantee for fine-tuning and team onboarding.',
  }
]

export default function Contact() {
  const { lang, t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    budget: 'R$ 5k - 15k',
    message: '',
  })
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('brunoheyden@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', budget: 'R$ 5k - 15k', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    }, 1000)
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
            <MessageSquare size={14} /> {t('Fale comigo', 'Get in Touch')}
          </span>
          <h1 className="contact-header__title animate-fade-in-up delay-1">
            {t('Vamos iniciar uma', 'Let\'s start a')}<br />
            <span className="gradient-amber-text">{t('conversa sobre o seu projeto', 'conversation about your project')}</span>.
          </h1>
          <p className="contact-header__text animate-fade-in-up delay-2">
            {t('Tem uma ideia de produto, precisa desenvolver um software web ou deseja contratar para sua equipe? Mande uma mensagem direta e receba meu retorno rápido.', 'Have a product idea, need custom web software development, or want to hire for your team? Send a direct message and get a prompt response.')}
          </p>
        </div>
      </section>

      {/* Main Form & Info Section */}
      <section className="contact-content" id="contact-content">
        <div className="contact-content__container">

          {/* Left Column: Direct Info & Social Cards */}
          <div className="contact-info animate-fade-in-up delay-1">
            <div className="contact-info__header">
              <h2 className="contact-info__title">{t('Canais Diretos', 'Direct Channels')}</h2>
              <p className="contact-info__subtitle">
                {t('Escolha o canal de sua preferência para me contatar. Responderei o mais rápido possível.', 'Choose your preferred channel to contact me. I will respond as soon as possible.')}
              </p>
            </div>

            <div className="contact-info__cards">
              {contactChannels.map((channel) => {
                const Icon = channel.icon
                const label = lang === 'en' ? channel.labelEn : channel.labelPt
                const displayVal = channel.valuePt ? (lang === 'en' ? channel.valueEn : channel.valuePt) : channel.value
                return (
                  <div key={channel.labelPt} className="contact-card glass-card">
                    <div className="contact-card__icon-wrapper">
                      <Icon size={20} />
                    </div>
                    <div className="contact-card__details">
                      <span className="contact-card__label">{label}</span>
                      {channel.action === 'copy' ? (
                        <button onClick={copyEmail} className="contact-card__copy-btn">
                          <span>{displayVal}</span>
                          {copied ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
                        </button>
                      ) : channel.link ? (
                        <a href={channel.link} target="_blank" rel="noopener noreferrer" className="contact-card__link">
                          {displayVal}
                        </a>
                      ) : (
                        <span className="contact-card__value">{displayVal}</span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Availability Box */}
            <div className="availability-box glass-panel">
              <div className="availability-box__icon">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="availability-box__title">{t('Tempo Médio de Resposta', 'Average Response Time')}</h4>
                <p className="availability-box__sub">{t('Respondo geralmente em poucas horas (máximo 24h úteis).', 'Usually reply within a few hours (max 24 business hours).')}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-wrapper animate-fade-in-up delay-2">
            <div className="contact-form-card glass-panel">

              {submitted ? (
                <div className="form-success-banner">
                  <div className="form-success-icon">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3>{t('Mensagem Enviada com Sucesso!', 'Message Sent Successfully!')}</h3>
                  <p>{t('Obrigado pelo contato, Bruno recebeu sua mensagem e responderá em breve pelo seu e-mail!', 'Thank you for reaching out! Bruno received your message and will respond to your email shortly.')}</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
                  <div className="contact-form__header">
                    <h3 className="contact-form__title">{t('Enviar Mensagem Direta', 'Send Direct Message')}</h3>
                    <p className="contact-form__subtitle">{t('Preencha os detalhes abaixo para conversarmos.', 'Fill in the details below to start a conversation.')}</p>
                  </div>

                  <div className="contact-form__grid">
                    <div className="contact-form__group">
                      <label htmlFor="name" className="contact-form__label">{t('Seu Nome', 'Your Name')}</label>
                      <input
                        type="text"
                        id="name"
                        className="contact-form__input"
                        placeholder={t('Ex: Carlos Andrade', 'e.g., John Doe')}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="contact-form__group">
                      <label htmlFor="email" className="contact-form__label">{t('Seu E-mail', 'Your Email')}</label>
                      <input
                        type="email"
                        id="email"
                        className="contact-form__input"
                        placeholder="carlos@empresa.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-form__group">
                    <label htmlFor="subject" className="contact-form__label">{t('Assunto', 'Subject')}</label>
                    <input
                      type="text"
                      id="subject"
                      className="contact-form__input"
                      placeholder={t('Ex: Projeto SaaS / Oportunidade Dev', 'e.g., Custom Web App / Dev Opportunity')}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                    />
                  </div>

                  {/* Budget Chips */}
                  <div className="contact-form__group">
                    <label className="contact-form__label">{t('Faixa de Orçamento Estimada', 'Estimated Budget Range')}</label>
                    <div className="budget-chips">
                      {budgetRanges.map((range) => (
                        <button
                          key={range}
                          type="button"
                          className={`budget-chip ${formData.budget === range ? 'budget-chip--active' : ''}`}
                          onClick={() => setFormData({ ...formData, budget: range })}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="contact-form__group">
                    <label htmlFor="message" className="contact-form__label">{t('Mensagem / Detalhes do Projeto', 'Message / Project Details')}</label>
                    <textarea
                      id="message"
                      className="contact-form__input contact-form__textarea"
                      placeholder={t('Descreva brevemente o que você precisa ou a oportunidade...', 'Briefly describe what you need or the opportunity...')}
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn--primary contact-form__submit-btn"
                    disabled={isSubmitting}
                    id="contact-submit"
                  >
                    {isSubmitting ? (
                      <span>{t('Enviando mensagem...', 'Sending message...')}</span>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>{t('Enviar para o Bruno', 'Send to Bruno')}</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq" id="contact-faq">
        <div className="contact-faq__container">
          <div className="section-header text-center">
            <span className="section-tag">{t('Dúvidas Frequentes', 'Frequently Asked Questions')}</span>
            <h2 className="section-title">{t('Perguntas Comuns', 'Common Questions')}</h2>
          </div>
          <div className="contact-faq__grid">
            {faqs.map(faq => {
              const q = lang === 'en' ? faq.qEn : faq.qPt
              const a = lang === 'en' ? faq.aEn : faq.aPt
              return (
                <div key={faq.qPt} className="faq-card glass-card">
                  <h4>{q}</h4>
                  <p>{a}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

    </div>
  )
}
