import { useHubConfig } from '../../i18n/useHubConfig'

export function CredibilityStrip() {
  const config = useHubConfig()
  const stats = config.comparativoInstagram.stats.slice(0, 3)

  return (
    <section className="credibility-strip">
      <div className="container">
        <div className="credibility-strip__grid">
          {stats.map((stat) => (
            <div key={stat.texto} className="credibility-strip__item">
              <span className="credibility-strip__value">
                {stat.valor}
                {stat.sufixo}
              </span>
              <p className="credibility-strip__text">{stat.texto}</p>
              <span className="credibility-strip__source">{stat.fonte}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
