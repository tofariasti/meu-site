import { Link } from 'react-router-dom'
import { hubConfig } from '../../data/hubConfig'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import { AnimatedSection } from '../ui/AnimatedSection'

export function IntentGrid({ items = hubConfig.intentItems }) {
  return (
    <div className="intent-grid">
      {items.map((item, i) => {
        const linkText = item.externo ? 'Saiba mais →' : 'Ver opções →'
        const content = (
          <>
            <h3 className="intent-card__title">{item.titulo}</h3>
            <p className="intent-card__desc">{item.descricao}</p>
            <span className="intent-card__link">{linkText}</span>
          </>
        )

        if (item.externo && item.href) {
          return (
            <AnimatedSection key={item.titulo} delay={i + 1}>
              <a
                href={item.href}
                className="intent-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            </AnimatedSection>
          )
        }

        if (item.wa) {
          return (
            <AnimatedSection key={item.titulo} delay={i + 1}>
              <a
                href={buildWhatsAppUrl(item.wa)}
                className="intent-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            </AnimatedSection>
          )
        }

        const href = item.href ?? item.anchor ?? '#pacotes'
        const isExternal = href.startsWith('http')
        return (
          <AnimatedSection key={item.titulo} delay={i + 1}>
            {isExternal ? (
              <a href={href} className="intent-card" target="_blank" rel="noopener noreferrer">
                {content}
              </a>
            ) : (
              <Link to={href} className="intent-card">
                {content}
              </Link>
            )}
          </AnimatedSection>
        )
      })}
    </div>
  )
}
