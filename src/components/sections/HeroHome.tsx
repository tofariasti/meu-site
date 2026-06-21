import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { hubConfig } from '../../data/hubConfig'
import { AnimatedSection } from '../ui/AnimatedSection'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const ROTATE_WORDS = ['converte.', 'aparece no Google.', 'gera clientes.', 'vende no WhatsApp.']

interface HeroHomeProps {
  compact?: boolean
  label?: string
  titleLines?: [string, string]
  subtitle?: string
  showPreview?: boolean
  showPricingTags?: boolean
  actions?: React.ReactNode
}

export function HeroHome({
  compact = false,
  label = 'Farias Digital · MEI · Nota Fiscal',
  titleLines = ['Presença digital que', 'converte.'],
  subtitle = 'Hub digital para PMEs — explore pacotes, exemplos e respostas antes de pedir orçamento. Atendimento direto com quem desenvolve.',
  showPreview = true,
  showPricingTags = false,
  actions,
}: HeroHomeProps) {
  const reduced = useReducedMotion()
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    if (reduced || compact) return
    const id = window.setInterval(() => {
      setWordIndex((i) => (i + 1) % ROTATE_WORDS.length)
    }, 3200)
    return () => window.clearInterval(id)
  }, [compact, reduced])

  const accentWord = compact ? titleLines[1] : ROTATE_WORDS[wordIndex]

  return (
    <section className={`hero${compact ? ' hero--compact' : ' hero--home'}`}>
      <div className={`container${showPreview && !compact ? ' hero__grid' : ''}`}>
        <div className="hero__content">
          <AnimatedSection>
            <span className="hero__label">
              <span className="hero__label-dot" aria-hidden="true" />
              {label}
            </span>
          </AnimatedSection>
          <AnimatedSection delay={1}>
            <h1 className="hero__title">
              <span className="hero__title-line">{titleLines[0]}</span>
              <span className="hero__title-line hero__title-line--accent">
                {compact ? (
                  accentWord
                ) : (
                  <>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={accentWord}
                        initial={reduced ? false : { opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reduced ? undefined : { opacity: 0, y: -12 }}
                        transition={{ duration: 0.35 }}
                        className="text-rotate"
                      >
                        {accentWord}
                      </motion.span>
                    </AnimatePresence>
                    {!reduced && <span className="text-rotate__cursor" aria-hidden="true" />}
                  </>
                )}
              </span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={2}>
            <p className="hero__subtitle">{subtitle}</p>
          </AnimatedSection>
          {showPricingTags && (
            <AnimatedSection delay={2}>
              <div className="hero-pricing-tags">
                <span className="hero-pricing-tag">
                  <span className="hero-pricing-tag__label">Landing page</span>
                  <span className="hero-pricing-tag__price">a partir de R$ 300</span>
                </span>
                <span className="hero-pricing-tag">
                  <span className="hero-pricing-tag__label">Site institucional</span>
                  <span className="hero-pricing-tag__price">a partir de R$ 1.490</span>
                </span>
              </div>
            </AnimatedSection>
          )}
          <AnimatedSection delay={3}>
            {actions ?? (
              <div className="hero__actions">
                <Link to="/sites/" className="btn btn--primary btn--lg">
                  Ver pacotes e preços
                </Link>
                <Link to="/portfolio/" className="btn btn--outline btn--lg">
                  Ver exemplos
                </Link>
              </div>
            )}
          </AnimatedSection>
          {!compact && (
            <AnimatedSection delay={4}>
              <ul className="hero__trust">
                <li>40+ modelos por segmento</li>
                <li>Retorno em até 24h</li>
                <li>Atendimento em todo o Brasil</li>
              </ul>
            </AnimatedSection>
          )}
        </div>

        {showPreview && !compact && (
          <AnimatedSection delay={2} direction="right" className="hero-visual">
            <div className="hero-orbit" aria-hidden="true">
              <span className="hero-orbit__ring hero-orbit__ring--1">
                <span className="hero-orbit__dot" />
              </span>
              <span className="hero-orbit__ring hero-orbit__ring--2" />
            </div>
            <div className="hero-visual__glow" />
            <div className="browser-preview browser-preview--glow">
              <div className="browser-preview__bar">
                <span className="hero-mockup__dot hero-mockup__dot--r" />
                <span className="hero-mockup__dot hero-mockup__dot--y" />
                <span className="hero-mockup__dot hero-mockup__dot--g" />
                <span className="browser-preview__url">
                  amo-patas.demo · {hubConfig.dominioHost}
                </span>
              </div>
              <div className="browser-preview__screen">
                <iframe
                  src="https://tofariasti.github.io/amo-patas/"
                  title="Demo Amo Patas"
                  loading="lazy"
                  tabIndex={-1}
                />
              </div>
            </div>
            <div className="hero-visual__chips">
              <span className="preview-chip preview-chip--success">Referência visual</span>
              <span className="preview-chip preview-chip--accent">Leads via WhatsApp</span>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  )
}
