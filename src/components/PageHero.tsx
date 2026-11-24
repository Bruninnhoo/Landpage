import type { ReactNode } from 'react'
import BackgroundLines from './BackgroundLines'

// Four-point sparkle used across the pages (styles in Home.css)
export const Sparkle = ({ className }: { className: string }) => (
  <svg className={`hm-star ${className}`} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0C12 8 16 12 24 12 16 12 12 16 12 24 12 16 8 12 0 12 8 12 12 8 12 0Z" />
  </svg>
)

type Props = { lead: string; title: string; text: string; children?: ReactNode }

// Opening of the inner pages: the home hero's wind lines, sparkles and type, at a smaller scale.
export default function PageHero({ lead, title, text, children }: Props) {
  return (
    <header className="hm-hero pg-hero">
      <BackgroundLines />
      <Sparkle className="hm-star--a" />
      <Sparkle className="hm-star--b" />
      <h1 className="pg-title">
        <span>{lead}</span> <em>{title}</em>
      </h1>
      <p className="pg-text">{text}</p>
      {children}
    </header>
  )
}
