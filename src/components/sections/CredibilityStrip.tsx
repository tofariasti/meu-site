import { motion } from 'framer-motion'
import { hubConfig } from '../../data/hubConfig'
import { AnimatedSection } from '../ui/AnimatedSection'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export function CredibilityStrip() {
  const reduced = useReducedMotion()
  const stats = hubConfig.comparativoInstagram.stats.slice(0, 3)

  return (
    <section className="credibility-strip" aria-label="Dados sobre presença digital">
      <div className="container">
        <div className="credibility-strip__grid">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.texto} delay={i + 1} className="credibility-strip__item">
              {reduced ? (
                <div className="credibility-strip__card">
                  <strong>
                    {stat.valor}
                    {stat.sufixo}
                  </strong>
                  <span>{stat.texto}</span>
                </div>
              ) : (
                <motion.div
                  className="credibility-strip__card"
                  whileHover={{ y: -4, borderColor: 'rgba(34, 211, 238, 0.38)' }}
                  transition={{ duration: 0.25 }}
                >
                  <strong>
                    {stat.valor}
                    {stat.sufixo}
                  </strong>
                  <span>{stat.texto}</span>
                </motion.div>
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
