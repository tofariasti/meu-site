import { Link } from 'react-router-dom'
import { PageMeta } from '../components/ui/PageMeta'
import { HeroHome } from '../components/sections/HeroHome'
import { ProofBar } from '../components/sections/ProofBar'
import { CredibilityStrip } from '../components/sections/CredibilityStrip'
import {
  ComparisonTable,
  ComparativoQuote,
} from '../components/sections/ComparisonSection'
import { MiniServices } from '../components/sections/MiniServices'
import { IntentGrid } from '../components/sections/IntentGrid'
import { Marquee, DiffGrid, CtaBand, SectionHeader } from '../components/sections/CtaBand'
import { hubConfig } from '../data/hubConfig'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { WhatsAppButton } from '../components/ui/WhatsAppButton'

export function HomePage() {
  const cmp = hubConfig.comparativoInstagram
  const limit = cmp.resumoLimite

  return (
    <>
      <PageMeta page="home" />
      <HeroHome />
      <div className="container">
        <ProofBar />
      </div>
      <CredibilityStrip />

      <section className="section section--dark site-vs-insta" id="site-vs-instagram">
        <div className="container">
          <SectionHeader
            center
            eyebrow={cmp.eyebrow}
            title={
              <>
                Por que sua empresa <span className="highlight">não pode depender só do Instagram</span>
              </>
            }
            lead={cmp.lead}
          />
          <AnimatedSection delay={1}>
            <ComparisonTable
              instagramItems={cmp.instagram.slice(0, limit)}
              siteItems={cmp.site.slice(0, limit)}
            />
          </AnimatedSection>
          <AnimatedSection>
            <ComparativoQuote titulo={cmp.quote.titulo} texto={cmp.quote.texto} />
          </AnimatedSection>
          <AnimatedSection className="comparativo-more">
            <Link to="/por-que-site/" className="btn btn--outline">
              Ver comparativo completo com dados →
            </Link>
          </AnimatedSection>
          <AnimatedSection className="inline-cta inline-cta--emphasis">
            <p>
              Pare de perder clientes para quem tem site.{' '}
              <strong>Invista na ferramenta que realmente vende.</strong>
            </p>
            <Link to="/sites/" className="btn btn--primary btn--lg">
              Ver pacotes e preços
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="section section--glow" id="servicos">
        <div className="container">
          <SectionHeader
            center
            eyebrow="Serviços"
            title={
              <>
                Muito além de <span className="highlight">criar sites</span>
              </>
            }
            lead="Landing pages, e-commerce, automação de WhatsApp, integrações com APIs e imagens aéreas com drone — soluções digitais completas para PMEs, com escopo claro no orçamento."
          />
          <MiniServices />
          <AnimatedSection className="servicos-home-cta">
            <Link to="/sites/" className="btn btn--outline btn--lg">
              Ver pacotes e preços
            </Link>
            <WhatsAppButton waKey="geral" className="btn btn--whatsapp btn--lg">
              Pedir orçamento
            </WhatsAppButton>
          </AnimatedSection>
        </div>
      </section>

      <Marquee />

      <section className="section section--alt section--glow" id="objetivos">
        <div className="container">
          <SectionHeader
            center
            eyebrow="O que você busca hoje?"
            title={
              <>
                Escolha o caminho <span className="highlight">certo para seu negócio</span>
              </>
            }
            lead="Cada solução tem escopo e investimento definidos — sem surpresas no orçamento."
          />
          <IntentGrid />
        </div>
      </section>

      <section className="section" id="explore">
        <div className="container">
          <SectionHeader
            center
            eyebrow="Explore"
            title={
              <>
                Próximos passos <span className="highlight">para contratar</span>
              </>
            }
            lead="Pacotes, exemplos reais e respostas diretas — tudo a um clique."
          />
          <div className="intent-grid">
            <AnimatedSection delay={1}>
              <Link to="/sites/" className="intent-card">
                <h3 className="intent-card__title">Pacotes e preços</h3>
                <p className="intent-card__desc">
                  Serviços, investimentos e processo de entrega — do orçamento à publicação.
                </p>
                <span className="intent-card__link">Ver pacotes →</span>
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={2}>
              <Link to="/portfolio/" className="intent-card">
                <h3 className="intent-card__title">Portfólio e exemplos</h3>
                <p className="intent-card__desc">
                  40+ modelos por segmento e projetos em produção para avaliar antes de contratar.
                </p>
                <span className="intent-card__link">Ver modelos →</span>
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={3}>
              <Link to="/faq/" className="intent-card">
                <h3 className="intent-card__title">Perguntas frequentes</h3>
                <p className="intent-card__desc">
                  Preços, prazos, SEO, domínio, hospedagem e Nota Fiscal — respostas diretas.
                </p>
                <span className="intent-card__link">Ver FAQ →</span>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section section--alt section--glow" id="como-trabalho">
        <div className="container">
          <SectionHeader
            center
            eyebrow="Como trabalho"
            title={
              <>
                Entrega direta, <span className="highlight">sem intermediários</span>
              </>
            }
            lead="Você fala com quem desenvolve — escopo fechado, prazo claro e suporte humano após a publicação."
          />
          <DiffGrid />
          <AnimatedSection className="inline-cta">
            <p>
              Ainda tem dúvida? <Link to="/faq/">Veja o FAQ</Link> ou{' '}
              <Link to="/por-que-site/">leia o comparativo completo</Link>.
            </p>
            <WhatsAppButton waKey="geral">Falar agora pelo WhatsApp</WhatsAppButton>
          </AnimatedSection>
        </div>
      </section>

      <CtaBand
        title="Vamos tirar seu projeto do papel?"
        text={
          <>
            Retorno em até 24h · Proposta sem compromisso ·{' '}
            <Link to="/sites/" style={{ color: 'inherit', textDecoration: 'underline' }}>
              Ver pacotes e preços
            </Link>
          </>
        }
      />
    </>
  )
}
