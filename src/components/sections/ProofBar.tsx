import { useHubConfig } from '../../i18n/useHubConfig'

export function ProofBar() {
  const config = useHubConfig()

  return (
    <div className="proof-bar">
      {config.proofBar.map((item) => (
        <div key={item.label} className="proof-bar__item">
          <span className="proof-bar__icon" aria-hidden="true">{item.icon}</span>
          <span className="proof-bar__value">
            {item.valor}
            {item.sufixo}
          </span>
          <span className="proof-bar__label">{item.label}</span>
        </div>
      ))}
    </div>
  )
}
