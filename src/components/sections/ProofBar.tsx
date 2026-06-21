import { hubConfig } from '../../data/hubConfig'
import { AnimatedSection } from '../ui/AnimatedSection'

export function ProofBar() {
  return (
    <div className="proof-bar" aria-label="Números e diferenciais">
      {hubConfig.proofBar.map((item, i) => (
        <AnimatedSection key={item.label} delay={i + 1} className="proof-bar__item">
          {item.icon && (
            <span className="proof-bar__icon" aria-hidden="true">
              {item.icon}
            </span>
          )}
          <strong className="proof-bar__value">
            {item.valor}
            {item.sufixo}
          </strong>
          <span className="proof-bar__label">{item.label}</span>
        </AnimatedSection>
      ))}
    </div>
  )
}
