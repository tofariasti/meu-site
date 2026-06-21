import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { hubConfig } from '../../data/hubConfig'
import { WhatsAppButton } from '../ui/WhatsAppButton'

const navItems = [
  { to: '/', label: 'Início', end: true },
  { to: '/sites/', label: 'Pacotes' },
  { to: '/portfolio/', label: 'Portfólio' },
  { to: '/faq/', label: 'FAQ' },
  { to: 'https://techdrone360.com.br/', label: 'Drone', external: true },
  { to: '/sobre/', label: 'Sobre' },
] as const

function Logo() {
  const marca = hubConfig.marca
  const parts = marca.trim().split(/\s+/)

  return (
    <Link to="/" className="logo" aria-label={hubConfig.marcaLogoAlt}>
      <img
        src={hubConfig.marcaLogoIcon}
        alt=""
        className="logo__icon"
        width={32}
        height={32}
        aria-hidden="true"
      />
      <span className="logo__text">
        {parts.length > 1 ? (
          <>
            <span className="logo__text-brand">{parts[0]}</span>{' '}
            <span className="logo__text-accent">{parts.slice(1).join(' ')}</span>
          </>
        ) : (
          marca
        )}
      </span>
    </Link>
  )
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Logo />
        <nav aria-label="Principal">
          <ul className="site-nav">
            {navItems.map((item) => (
              <li key={item.label}>
                {'external' in item && item.external ? (
                  <a href={item.to} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                ) : (
                  <NavLink to={item.to} end={'end' in item ? item.end : false} className={({ isActive }) => (isActive ? 'is-active' : undefined)}>
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
            <li>
              <WhatsAppButton waKey="geral">Vamos conversar</WhatsAppButton>
            </li>
          </ul>
        </nav>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
      <div className={`container mobile-nav${mobileOpen ? ' is-open' : ''}`} id="mobile-nav">
        {navItems.map((item) =>
          'external' in item && item.external ? (
            <a
              key={item.label}
              href={item.to}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ) : (
            <NavLink
              key={item.label}
              to={item.to}
              end={'end' in item ? item.end : false}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </NavLink>
          ),
        )}
        <WhatsAppButton waKey="geral" className="btn btn--whatsapp btn--block">
          Vamos conversar
        </WhatsAppButton>
      </div>
    </header>
  )
}
