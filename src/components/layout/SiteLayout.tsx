import type { ReactNode } from 'react'
import { AmbientBackground, ScrollProgress } from './AmbientBackground'
import { Header } from './Header'
import { Footer } from './Footer'
import { WhatsAppFloat } from '../ui/WhatsAppButton'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import { useHashScroll } from '../../hooks/useHashScroll'

interface SiteLayoutProps {
  children: ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  useScrollProgress()
  useHashScroll()

  return (
    <>
      <ScrollProgress />
      <AmbientBackground />
      <Header />
      <main>{children}</main>
      <Footer />
      <aside aria-label="Contato rápido">
        <WhatsAppFloat />
      </aside>
    </>
  )
}
