import { Link } from 'react-router-dom'
import { useHubConfig } from '../../i18n/useHubConfig'
import { useLocale } from '../../i18n/LocaleContext'
import { uiCopy } from '../../data/uiCopy'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import { AnimatedSection } from '../ui/AnimatedSection'

export function MiniServices() {
  const config = useHubConfig()
  const { t, pathFor } = useLocale()

  return (
    <div className="mini-services">
      {config.servicos.map((svc, i) => {
        let link: React.ReactNode = null
        const linkLabel = t(uiCopy.common.learnMore)
        if (svc.externo && svc.href) {
          link = (
            <a href={svc.href} className="mini-service__link" target="_blank" rel="noopener noreferrer">
              {linkLabel}
            </a>
          )
        } else if (svc.wa) {
          link = (
            <a
              href={buildWhatsAppUrl(svc.wa)}
              className="mini-service__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkLabel}
            </a>
          )
        } else if (svc.href) {
          const href = svc.externo ? svc.href : pathFor(svc.href)
          link = svc.externo ? (
            <a href={href} className="mini-service__link" target="_blank" rel="noopener noreferrer">
              {linkLabel}
            </a>
          ) : (
            <Link to={href} className="mini-service__link">
              {linkLabel}
            </Link>
          )
        }

        return (
          <AnimatedSection key={svc.id} delay={(i % 3) + 1} className="mini-service">
            <h3>{svc.titulo}</h3>
            <p>{svc.descricao}</p>
            {svc.preco && <span className="mini-service__price">{svc.preco}</span>}
            {link}
          </AnimatedSection>
        )
      })}
    </div>
  )
}
