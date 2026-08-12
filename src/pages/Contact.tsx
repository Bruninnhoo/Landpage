import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Github, Linkedin, Clock, Copy, Check, Send, MessageSquare, CheckCircle2 } from '../components/Icons'
import './Contact.css'

const contactChannels = [
  {
    icon: Mail,
    label: 'E-mail Direto',
    value: 'bruno@email.com',
    action: 'copy',
  },
  {
    icon: MapPin,
    label: 'Localização',
    value: 'São Paulo, Brasil (Remoto / Presencial)',
    action: null,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/bruno',
    link: 'https://github.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/bruno',
    link: 'https://linkedin.com',
  },
]

const budgetRanges = [
  '< R$ 5k',
  'R$ 5k - 15k',
  'R$ 15k - 30k',
  'R$ 30k+',
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
    navigator.clipboard.writeText('bruno@email.com')
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
            <MessageSquare size={14} /> Contato & Orçamento
          </span>
          <h1 className="contact-header__title animate-fade-in-up delay-1">
            Vamos iniciar uma <br />
            <span className="gradient-amber-text">parceria de sucesso</span>.
          </h1>
          <p className="contact-header__text animate-fade-in-up delay-2">
            Tem um projeto, ideia de produto ou precisa de consultoria em desenvolvimento? 
            Envie uma mensagem e receba um retorno em até 24 horas.
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
                Fique à vontade para me contatar pelo formulário ao lado ou diretamente pelas redes abaixo.
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
                <p className="availability-box__sub">Atendimento rápido em menos de 24 horas úteis.</p>
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
                  <p>Obrigado pelo contato. Responderei seu e-mail o mais breve possível com os próximos passos.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
                  <div className="contact-form__header">
                    <h3 className="contact-form__title">Envie sua Mensagem</h3>
                    <p className="contact-form__subtitle">Preencha os dados abaixo para alinhar os detalhes do seu projeto.</p>
                  </div>

                  <div className="contact-form__grid">
                    <div className="contact-form__group">
                      <label htmlFor="name" className="contact-form__label">Nome Completo</label>
                      <input
                        type="text"
                        id="name"
                        className="contact-form__input"
                        placeholder="Ex: Ana Silva"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>

                    <div className="contact-form__group">
                      <label htmlFor="email" className="contact-form__label">Seu E-mail</label>
                      <input
                        type="email"
                        id="email"
                        className="contact-form__input"
                        placeholder="ana@empresa.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
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
                      placeholder="Ex: Desenvolvimento de Novo Produto SaaS"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      required
                    />
                  </div>

                  {/* Budget Chips */}
                  <div className="contact-form__group">
                    <label className="contact-form__label">Estimativa de Orçamento</label>
                    <div className="budget-chips">
                      {budgetRanges.map((range) => (
                        <button
                          key={range}
                          type="button"
                          className={`budget-chip ${formData.budget === range ? 'budget-chip--active' : ''}`}
                          onClick={() => setFormData({...formData, budget: range})}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="contact-form__group">
                    <label htmlFor="message" className="contact-form__label">Detalhes da Ideia ou Projeto</label>
                    <textarea
                      id="message"
                      className="contact-form__input contact-form__textarea"
                      placeholder="Descreva os objetivos principais, prazo estimado e requisitos do sistema..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
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
                      <span>Enviando...</span>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Enviar Proposta</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
