import { useLocale } from '../../i18n/LocaleContext'
import { uiCopy } from '../../data/uiCopy'
import { AnimatedSection } from '../ui/AnimatedSection'
import { WhatsAppButton } from '../ui/WhatsAppButton'

export function AppDevHighlight() {
  const { t } = useLocale()
  const bullets = t(uiCopy.home.appHighlight.bullets)

  return (
    <section className="app-highlight" id="apps-mobile" aria-labelledby="app-highlight-title">
      <div className="container app-highlight__grid">
        <AnimatedSection className="app-highlight__content">
          <span className="app-highlight__badge">{t(uiCopy.home.appHighlight.badge)}</span>
          <h2 id="app-highlight-title" className="app-highlight__title">
            {t(uiCopy.home.appHighlight.title)}
          </h2>
          <p className="app-highlight__lead">{t(uiCopy.home.appHighlight.lead)}</p>
          <ul className="app-highlight__list">
            {bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <WhatsAppButton waKey="site" className="btn btn--primary">
            {t(uiCopy.home.appHighlight.cta)}
            <span className="btn__arrow" aria-hidden="true">→</span>
          </WhatsAppButton>
        </AnimatedSection>

        <AnimatedSection delay={1} direction="right" className="app-highlight__visual" aria-hidden="true">
          <div className="app-highlight__phones">
            <div className="app-highlight__phone app-highlight__phone--back">
              <div className="app-highlight__phone-notch" />
              <div className="app-highlight__phone-screen">
                <div className="app-highlight__phone-bar" />
                <div className="app-highlight__phone-line app-highlight__phone-line--mid" />
                <div className="app-highlight__phone-line" />
              </div>
            </div>
            <div className="app-highlight__phone app-highlight__phone--front">
              <div className="app-highlight__phone-notch" />
              <div className="app-highlight__phone-screen">
                <div className="app-highlight__phone-bar" />
                <div className="app-highlight__phone-line app-highlight__phone-line--short" />
                <div className="app-highlight__phone-line app-highlight__phone-line--mid" />
                <div className="app-highlight__phone-card">
                  <span className="app-highlight__phone-card-icon" />
                  <span className="app-highlight__phone-card-label">{t(uiCopy.hero.phoneAppLabel)}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="app-highlight__platforms">
            <span className="app-highlight__platform">iOS</span>
            <span className="app-highlight__platform">Android</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
