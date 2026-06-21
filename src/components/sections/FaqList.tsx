import { hubConfig } from '../../data/hubConfig'
import { AnimatedSection } from '../ui/AnimatedSection'

export function FaqList() {
  return (
    <div className="faq-list">
      {hubConfig.seo.faq.map((item, i) => (
        <AnimatedSection key={item.pergunta} delay={(i % 3) + 1}>
          <details className="faq-item">
            <summary className="faq-item__question">{item.pergunta}</summary>
            <p className="faq-item__answer">{item.resposta}</p>
          </details>
        </AnimatedSection>
      ))}
    </div>
  )
}
