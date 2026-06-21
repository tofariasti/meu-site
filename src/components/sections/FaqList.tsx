import { useHubConfig } from '../../i18n/useHubConfig'

export function FaqList() {
  const config = useHubConfig()

  return (
    <div className="faq-list">
      {config.seo.faq.map((item, i) => (
        <details key={item.pergunta} className="faq-item" open={i === 0}>
          <summary>{item.pergunta}</summary>
          <p>{item.resposta}</p>
        </details>
      ))}
    </div>
  )
}
