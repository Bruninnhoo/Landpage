import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Github, Linkedin, Clock, Copy, Check, Send, MessageSquare, CheckCircle2, WhatsApp } from '../components/Icons'
import './Contact.css'

const contactChannels = [
  {
    icon: Mail,
    label: 'E-mail Direto',
    value: 'brunoheyden@gmail.com',
    action: 'copy',
  },
  {
    icon: MapPin,
    label: 'Localização',
    value: 'São Paulo, Brasil (Remoto / Híbrido)',
    action: null,
  },
  {
    icon: Github,
    label: 'GitHub Pessoal',
    value: 'github.com/Bruninnhoo',
    link: 'https://github.com/Bruninnhoo',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/bruno-heyden-13311a25a',
    link: 'https://www.linkedin.com/in/bruno-heyden-13311a25a/',
  },
  {
    icon: WhatsApp,
    label: 'WhatsApp',
    value: '+55 (12)99667-1945',
    link: 'https://wa.me/5511999999999',
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
    q: 'Qual o seu modelo de contratação preferido?',
    a: 'Atuo como desenvolvedor Freelance (PJ) para projetos sob medida, ou posições Full-time remotas.'
  },
  {
    q: 'Em quanto tempo você costuma entregar uma landing page ou SaaS inicial?',
    a: 'Landing pages de alta conversão costumam levar de 3 a 7 dias. Protótipos SaaS funcionais de 2 a 4 semanas, a depender do escopo.'
  },
  {
    q: 'Você realiza manutenção e suporte pós-entrega?',
    a: 'Sim! Todos os meus projetos contam com garantia de suporte pós-lançamento para ajustes finos e treinamento da equipe.'
  }
]

export default function Contact() {
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
            <MessageSquare size={14} /> Fale comigo
          </span>
          <h1 className="contact-header__title animate-fade-in-up delay-1">
            Vamos iniciar uma <br />
            <span className="gradient-amber-text">conversa sobre o seu projeto</span>.
          </h1>
          <p className="contact-header__text animate-fade-in-up delay-2">
            Tem uma ideia de produto, precisa desenvolver um software web ou deseja contratar para sua equipe?
            Mande uma mensagem direta e receba meu retorno rápido.
          </p>
        </div>
      </section>

      {/* Main Form & Info Section */}
      <section className="contact-content" id="contact-content">
        <div className="contact-content__container">

          {/* Left Column: Direct Info & Social Cards */}
          <div className="contact-info animate-fade-in-up delay-1">
            <div className="contact-info__header">
              <h2 className="contact-info__title">Canais Diretos</h2>
              <p className="contact-info__subtitle">
                Escolha o canal de sua preferência para me contatar. Responderei o mais rápido possível.
              </p>
            </div>

            <div className="contact-info__cards">
              {contactChannels.map((channel) => {
                const Icon = channel.icon
                return (
                  <div key={channel.label} className="contact-card glass-card">
                    <div className="contact-card__icon-wrapper">
                      <Icon size={20} />
                    </div>
                    <div className="contact-card__details">
                      <span className="contact-card__label">{channel.label}</span>
                      {channel.action === 'copy' ? (
                        <button onClick={copyEmail} className="contact-card__copy-btn">
                          <span>{channel.value}</span>
                          {copied ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
                        </button>
                      ) : channel.link ? (
                        <a href={channel.link} target="_blank" rel="noopener noreferrer" className="contact-card__link">
                          {channel.value}
                        </a>
                      ) : (
                        <span className="contact-card__value">{channel.value}</span>
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
                <h4 className="availability-box__title">Tempo Médio de Resposta</h4>
                <p className="availability-box__sub">Respondo geralmente em poucas horas (máximo 24h úteis).</p>
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
                  <h3>Mensagem Enviada com Sucesso!</h3>
                  <p>Obrigado pelo contato, Bruno recebeu sua mensagem e responderá em breve pelo seu e-mail!</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
                  <div className="contact-form__header">
                    <h3 className="contact-form__title">Enviar Mensagem Direta</h3>
                    <p className="contact-form__subtitle">Preencha os detalhes abaixo para conversarmos.</p>
                  </div>

                  <div className="contact-form__grid">
                    <div className="contact-form__group">
                      <label htmlFor="name" className="contact-form__label">Seu Nome</label>
                      <input
                        type="text"
                        id="name"
                        className="contact-form__input"
                        placeholder="Ex: Carlos Andrade"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="contact-form__group">
                      <label htmlFor="email" className="contact-form__label">Seu E-mail</label>
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
                    <label htmlFor="subject" className="contact-form__label">Assunto</label>
                    <input
                      type="text"
                      id="subject"
                      className="contact-form__input"
                      placeholder="Ex: Projeto SaaS / Oportunidade Dev"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                    />
                  </div>

                  {/* Budget Chips */}
                  <div className="contact-form__group">
                    <label className="contact-form__label">Faixa de Orçamento Estimada</label>
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
                    <label htmlFor="message" className="contact-form__label">Mensagem / Detalhes do Projeto</label>
                    <textarea
                      id="message"
                      className="contact-form__input contact-form__textarea"
                      placeholder="Descreva brevemente o que você precisa ou a oportunidade..."
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
                      <span>Enviando mensagem...</span>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Enviar para o Bruno</span>
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
            <span className="section-tag">Dúvidas Frequentes</span>
            <h2 className="section-title">Perguntas Comuns</h2>
          </div>
          <div className="contact-faq__grid">
            {faqs.map(faq => (
              <div key={faq.q} className="faq-card glass-card">
                <h4>{faq.q}</h4>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
