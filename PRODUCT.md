# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary: recruiters and hiring managers** evaluating Bruno Heyden for a full-time front-end / full-stack role. They arrive from LinkedIn, a job application, or GitHub, skim in under two minutes, and need to decide whether to request an interview. Success = an interview request via LinkedIn or email.
- **Secondary: freelance clients** (small/medium Brazilian businesses, e.g. real-estate and equipment-rental companies) deciding whether to hire Bruno for a project. Success = a WhatsApp or email contact.

Both audiences are Portuguese-first; the site ships full PT-BR/EN copy (`LanguageContext`, default `pt`, persisted in `localStorage`).

## Product Purpose

Personal portfolio and CV site for Bruno Heyden, full-stack developer (São José dos Campos area, Brazil — phone country/area code +55 12). It exists to turn a cold visit into a hiring conversation: show who Bruno is, what he has actually shipped, what stack he works in, and how to reach him.

Routes: `/` (home: hero, skills ecosystem, featured projects), `/sobre` (about: values, personal interests), `/curriculum` (experience timeline, skill categories), `/contato` (contact channels).

## Positioning

Confirmed by the user, in priority order:

1. **Engineering + UI craft, end to end.** One person who ships polished, fast interfaces *and* the backend/cloud behind them.
2. **Real shipped products for real businesses.** Not toy projects — live platforms that affect a client's revenue.
3. **Java/Spring + React/TypeScript specialist** (with AWS), rather than a generalist.

## Operating Context

- Visitors compare this site against other candidates' portfolios and LinkedIn profiles; it is read on phone and desktop.
- Contact channels are direct: email `brunoheyden@gmail.com` (copy-to-clipboard on home), WhatsApp `+55 12 99667-1945`, LinkedIn `linkedin.com/in/bruno-heyden-13311a25a`, GitHub `github.com/Bruninnhoo`. There is no contact form or backend.
- Deployed as a static Vite build behind Cloudflare (cache is purged on deploy per git history).

## Capabilities and Constraints

- Stack: React 19 + TypeScript + Vite 8, `react-router-dom` 7, plain CSS per component/page, `lucide-react` + `react-icons`. No backend, no CMS — all copy is inline in the TSX as PT/EN string pairs.
- Static hosting only: no server-side features, no form handling.
- Experience (from `Curriculum.tsx`): Full-stack Developer at Residere Imóveis (freelance, 2026–present; CI/CD, project kanban, Java/Spring Boot, AWS, React); Full-stack Developer at CadenaLocações (freelance, 2025–2026); FiveM script developer (React/JS NUI + Lua, freelance, 2024–2025).
- Skill categories used in copy: Front-end, Back-end, Banco de Dados / Database, DevOps & Ferramentas / Tools.
- Undecided: whether to add more projects later; no formal education/certification section exists and none was claimed.

## Brand Commitments

- Name: **Bruno Heyden**. Title used in copy: "Desenvolvedor Full-Stack & UI Specialist" / "Full-stack Developer & UI Specialist".
- Voice: first-person, warm and direct; personal interests (soulslike games, rock/lofi/electronic music, PC/workstation tinkering, guitar) are deliberately part of the About page and are real.
- Assets: portrait `public/bruno-avatar.jpg`, favicon `public/favicon.svg`, project screenshot `public/Cadena.png`, `src/assets/hero.png`.
- Site is bilingual PT-BR/EN; every visible string must have both.

## Evidence on Hand

- **Cadena Locações** — real, public, live at `https://cadenalocacoes.com.br/`. Screenshot `public/Cadena.png`. Stack: Java, Spring Boot, AWS, React, TypeScript. Full-stack modernization: new business features, UI/UX, quote-request optimization.
- **Residere Imóveis** — real client work (full-stack development of a real-estate web system: CI/CD, project kanban, Java/Spring Boot, AWS, React), but it is a **private system and must not be shown publicly**: no screenshots, no URL, no interface details. It may be named as experience only.
- `public/project-api.png`, `project-dashboard.png`, `project-ecommerce.png`, `project-social.png` are **template placeholders, not real work** — never present them as projects.
- No testimonials, client quotes, or metrics exist. Do not fabricate any.
- Cadena and Residere are the only confirmed real projects; more may be added by the user later.

## Product Principles

1. **Proof over claims.** Lead with the one thing that can be shown (Cadena) and named experience; never pad with placeholders or invented numbers.
2. **Two-minute recruiter test.** Every page must answer "who, what stack, what shipped, how to contact" without scrolling hunts.
3. **End-to-end is the story.** Front-end polish and backend/cloud depth are presented together, not as separate halves.
4. **Respect client confidentiality.** Residere stays private; new projects follow the same rule unless the user clears them.
5. **Bilingual by default.** PT-BR is primary; EN is a first-class equal, not a fallback.
