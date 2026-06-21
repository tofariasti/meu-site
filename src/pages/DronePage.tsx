import { PageMeta } from '../components/ui/PageMeta'
import { HeroHome } from '../components/sections/HeroHome'
import { SectionHeader } from '../components/sections/CtaBand'
import { useHubConfig } from '../i18n/useHubConfig'
import { useLocale } from '../i18n/LocaleContext'
import { uiCopy } from '../data/uiCopy'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { WhatsAppButton } from '../components/ui/WhatsAppButton'

export function DronePage() {
  const config = useHubConfig()
  const { t } = useLocale()
  const pkg = config.pacoteDrone
  const services = uiCopy.drone.services.map((s) => ({ title: t(s.title), text: t(s.text) }))
  const trustItems = uiCopy.drone.trust.map((item) => t(item))

  return (
    <>
      <PageMeta page="drone" />
      <HeroHome
        compact
        label={t(uiCopy.drone.label)}
        titleLines={[t(uiCopy.drone.title1), t(uiCopy.drone.title2)]}
        subtitle={t(uiCopy.drone.subtitle)}
        showPreview={false}
        actions={
          <div className="hero__actions">
            <a
              href={config.links.techdrone360}
              className="btn btn--primary btn--lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t(uiCopy.cta.viewFullPortfolio)}
            </a>
            <WhatsAppButton waKey="drone" className="btn btn--whatsapp btn--lg">
              {t(uiCopy.cta.requestQuote)}
            </WhatsAppButton>
          </div>
        }
      />

      <section className="section section--alt">
        <div className="container">
          <AnimatedSection className="drone-hero-card">
            <h2 className="drone-hero-card__title">{t(uiCopy.drone.operationTitle)}</h2>
            <p>
              {t(uiCopy.drone.operationText)}{' '}
              <strong>techdrone360.com.br</strong> {t(uiCopy.drone.operationSuffix)}
            </p>
            <div className="hero__actions" style={{ marginBottom: 0 }}>
              <a
                href={config.links.techdrone360}
                className="btn btn--outline btn--lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t(uiCopy.cta.openTechDrone)}
              </a>
              <a
                href={config.links.youtubeDrone}
                className="btn btn--outline btn--lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t(uiCopy.cta.youtubeChannel)}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow={t(uiCopy.drone.servicesEyebrow)} title={t(uiCopy.drone.servicesTitle)} />
          <div className="service-grid">
            {services.map((item, i) => (
              <AnimatedSection key={item.title} delay={i + 1} className="service-card">
                <h3 className="service-card__title">{item.title}</h3>
                <p className="service-card__text">{item.text}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="pacote-drone">
        <div className="container">
          <SectionHeader
            center
            eyebrow={t(uiCopy.drone.packageEyebrow)}
            title={t(uiCopy.drone.packageTitle)}
            lead={t(uiCopy.drone.packageLead)}
          />
          <AnimatedSection
            delay={1}
            className="package-card package-card--featured"
            style={{ maxWidth: 480, marginInline: 'auto' }}
          >
            <h3 className="package-card__name">{pkg.nome}</h3>
            <p className="package-card__price">{pkg.preco}</p>
            <p className="package-card__audience">{pkg.publico}</p>
            <ul className="package-card__list">
              {pkg.inclui.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="package-card__note">{t(uiCopy.drone.packageNote)}</p>
            <WhatsAppButton waKey="pacoteDrone" className="btn btn--whatsapp btn--block">
              {t(uiCopy.cta.requestQuote)}
            </WhatsAppButton>
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow={t(uiCopy.drone.trustEyebrow)} title={t(uiCopy.drone.trustTitle)} />
          <AnimatedSection delay={1}>
            <ul
              className="trust-bar"
              style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.85rem' }}
            >
              {trustItems.map((item) => (
                <li key={item}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <AnimatedSection>
            <h2 className="cta-band__title">{t(uiCopy.drone.ctaTitle)}</h2>
          </AnimatedSection>
          <AnimatedSection delay={1}>
            <p className="cta-band__text">{t(uiCopy.drone.ctaText)}</p>
          </AnimatedSection>
          <AnimatedSection delay={2} className="hero__actions" style={{ justifyContent: 'center', marginBottom: 0 }}>
            <a
              href={config.links.techdrone360}
              className="btn btn--outline btn--lg"
              style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              techdrone360.com.br
            </a>
            <WhatsAppButton waKey="drone" className="btn btn--whatsapp btn--lg">
              {t(uiCopy.common.whatsapp)}
            </WhatsAppButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
