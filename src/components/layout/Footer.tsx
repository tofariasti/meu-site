import { Link } from 'react-router-dom'
import { hubConfig } from '../../data/hubConfig'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import { AnimatedSection } from '../ui/AnimatedSection'

export function Footer() {
  const year = new Date().getFullYear()
  const legal = [
    hubConfig.empresaCnpj ? `CNPJ ${hubConfig.empresaCnpj}` : '',
    hubConfig.empresaEndereco,
  ]
    .filter(Boolean)
    .join(' · ')

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <AnimatedSection>
            <p className="footer__brand">
              {hubConfig.marca} · {hubConfig.dominioHost}
            </p>
            <p>
              Sites, e-commerce, automação WhatsApp e imagens aéreas para empresas de todo o Brasil.
            </p>
            <p style={{ marginTop: '0.75rem' }}>MEI · Emissão de Nota Fiscal</p>
          </AnimatedSection>
          <AnimatedSection delay={1}>
            <p className="footer__title">Navegação</p>
            <ul className="footer__links">
              <li><Link to="/sites/">Pacotes e preços</Link></li>
              <li><Link to="/portfolio/">Portfólio</Link></li>
              <li><Link to="/por-que-site/">Por que ter site</Link></li>
              <li><Link to="/faq/">Perguntas frequentes</Link></li>
              <li><Link to="/sobre/">Sobre</Link></li>
            </ul>
          </AnimatedSection>
          <AnimatedSection delay={2}>
            <p className="footer__title">Contato</p>
            <ul className="footer__links">
              <li>
                <a href={hubConfig.dominio}>{hubConfig.dominioHost}</a>
              </li>
              <li>
                <a href={buildWhatsAppUrl('geral')} target="_blank" rel="noopener noreferrer">
                  WhatsApp {hubConfig.whatsappExibicao}
                </a>
              </li>
              <li>
                <a href={`mailto:${hubConfig.email}`}>{hubConfig.email}</a>
              </li>
              <li>
                <a href={hubConfig.links.techdrone360} target="_blank" rel="noopener noreferrer">
                  TechDrone360
                </a>
              </li>
            </ul>
          </AnimatedSection>
        </div>
        <div className="footer__bottom">
          <span>© {year} {hubConfig.nome}. Todos os direitos reservados.</span>
          <span>{legal}</span>
        </div>
      </div>
    </footer>
  )
}
