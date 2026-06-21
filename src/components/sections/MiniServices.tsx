import { Link } from 'react-router-dom'
import { hubConfig } from '../../data/hubConfig'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import { AnimatedSection } from '../ui/AnimatedSection'

export function MiniServices() {
  return (
    <div className="mini-services">
      {hubConfig.servicos.map((svc, i) => {
        let link: React.ReactNode = null
        if (svc.externo && svc.href) {
          link = (
            <a href={svc.href} className="mini-service__link" target="_blank" rel="noopener noreferrer">
              Saiba mais →
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
              Saiba mais →
            </a>
          )
        } else if (svc.href) {
          link = svc.externo ? (
            <a href={svc.href} className="mini-service__link" target="_blank" rel="noopener noreferrer">
              Saiba mais →
            </a>
          ) : (
            <Link to={svc.href} className="mini-service__link">
              Saiba mais →
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
