import { motion } from 'framer-motion'
import { hubConfig } from '../../data/hubConfig'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import { AnimatedSection } from '../ui/AnimatedSection'
import { WhatsAppButton } from '../ui/WhatsAppButton'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export function PackageGrid() {
  const reduced = useReducedMotion()

  return (
    <div className="package-grid">
      {hubConfig.pacotesWeb.map((pkg, i) => {
        const card = (
          <>
            {pkg.badge && (
              <span className={`package-card__badge${pkg.destaque ? ' package-card__badge--value' : ''}`}>
                {pkg.badge}
              </span>
            )}
            <h3 className="package-card__name">{pkg.nome}</h3>
            <p className="package-card__price">{pkg.preco}</p>
            {pkg.valorPercebido && (
              <p className="package-card__value">{pkg.valorPercebido}</p>
            )}
            <p className="package-card__audience">{pkg.publico}</p>
            <ul className="package-card__list">
              {pkg.inclui.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {pkg.naoInclui && (
              <p className="package-card__note">Não inclui: {pkg.naoInclui}</p>
            )}
            <WhatsAppButton
              waKey={pkg.mensagemWhatsApp}
              href={buildWhatsAppUrl(pkg.mensagemWhatsApp)}
              className="btn btn--whatsapp btn--block"
            >
              Pedir orçamento
            </WhatsAppButton>
          </>
        )

        const className = `package-card${pkg.destaque ? ' package-card--featured' : ''}`

        if (reduced) {
          return (
            <AnimatedSection key={pkg.id} delay={i + 1} className={className}>
              {card}
            </AnimatedSection>
          )
        }

        return (
          <AnimatedSection key={pkg.id} delay={i + 1}>
            <motion.article
              className={className}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {card}
            </motion.article>
          </AnimatedSection>
        )
      })}
    </div>
  )
}

export function ProcessSteps() {
  return (
    <div className="steps">
      {hubConfig.processoWeb.map((step, i) => (
        <AnimatedSection key={step.passo} delay={i + 1} className="step">
          <span className="step__num">{String(step.passo).padStart(2, '0')}</span>
          <h3 className="step__title">{step.titulo}</h3>
          <p className="step__text">{step.texto}</p>
        </AnimatedSection>
      ))}
    </div>
  )
}
