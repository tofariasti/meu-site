import type { ReactNode } from 'react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { WhatsAppButton } from '../ui/WhatsAppButton'
import type { WhatsAppKey } from '../../data/types'

interface CtaBandProps {
  title: string
  text: ReactNode
  waKey?: WhatsAppKey
  buttonLabel?: string
}

export function CtaBand({
  title,
  text,
  waKey = 'geral',
  buttonLabel = 'Falar no WhatsApp',
}: CtaBandProps) {
  return (
    <section className="cta-band">
      <div className="container">
        <AnimatedSection>
          <h2 className="cta-band__title">{title}</h2>
        </AnimatedSection>
        <AnimatedSection delay={1}>
          <p className="cta-band__text">{text}</p>
        </AnimatedSection>
        <AnimatedSection delay={2}>
          <WhatsAppButton waKey={waKey} className="btn btn--whatsapp btn--lg cta-band__btn">
            {buttonLabel}
          </WhatsAppButton>
        </AnimatedSection>
      </div>
    </section>
  )
}

const MARQUEE_ITEMS = [
  'E-commerce',
  'Automação WhatsApp',
  'Landing pages',
  'Integrações API',
  'SEO & performance',
  'Responsivo mobile-first',
  'Drone 4K',
  'Laravel & PHP',
  'Pagamento online',
]

export function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]
  return (
    <div className="marquee-wrap" aria-label="Tecnologias e serviços">
      <div className="marquee">
        <div className="marquee__track">
          {items.map((item, i) => (
            <span key={`${item}-${i}`} className="marquee__item">
              <span>◆</span> {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

const DIFF_ITEMS = [
  {
    title: 'Entrega ágil sem perder qualidade',
    text: 'Processo eficiente e escopo fechado — você sabe o que vai receber e quando.',
  },
  {
    title: 'Preço transparente, sem surpresas',
    text: 'Orçamento claro desde o primeiro contato. Pacotes com investimento definido.',
  },
  {
    title: '100% responsivo no celular',
    text: 'Mais de 70% dos acessos vêm do smartphone. Seu site funciona em qualquer tela.',
  },
  {
    title: 'Suporte humano e contínuo',
    text: 'Não é robô — é atendimento direto com quem construiu seu projeto.',
  },
]

export function DiffGrid() {
  return (
    <div className="diff-grid">
      {DIFF_ITEMS.map((item, i) => (
        <AnimatedSection key={item.title} delay={i + 1} className="diff-card">
          <span className="diff-card__tag">Diferencial</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </AnimatedSection>
      ))}
    </div>
  )
}

interface SectionHeaderProps {
  eyebrow?: string
  title: ReactNode
  lead?: string
  center?: boolean
  compact?: boolean
  titleAs?: 'h1' | 'h2'
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  center = false,
  compact = false,
  titleAs = 'h2',
}: SectionHeaderProps) {
  const classes = [
    'section__header',
    center ? 'section__header--center' : '',
    compact ? 'section__header--compact' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const TitleTag = titleAs

  return (
    <AnimatedSection className={classes}>
      {eyebrow && <p className="section__eyebrow">{eyebrow}</p>}
      <TitleTag className="section__title">{title}</TitleTag>
      {lead && <p className="section__lead">{lead}</p>}
    </AnimatedSection>
  )
}
