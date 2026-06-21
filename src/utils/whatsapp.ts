import { getHubConfig } from '../data/hubConfig'
import type { WhatsAppKey } from '../data/types'
import type { Locale } from '../i18n/types'

export function buildWhatsAppUrl(key: WhatsAppKey = 'geral', locale: Locale = 'pt'): string {
  const config = getHubConfig(locale)
  const msg = config.mensagensWhatsApp[key] ?? config.mensagensWhatsApp.geral
  return `https://wa.me/${config.whatsappNumero}?text=${encodeURIComponent(msg)}`
}

export function buildDemoWhatsAppUrl(titulo: string, locale: Locale = 'pt'): string {
  const config = getHubConfig(locale)
  const templates = {
    pt: `Olá! Vi o site para ${titulo} em ${config.dominioHost} e quero algo assim para minha empresa.`,
    en: `Hi! I saw the ${titulo} demo on ${config.dominioHost} and want something similar for my business.`,
    es: `¡Hola! Vi el sitio de ${titulo} en ${config.dominioHost} y quiero algo similar para mi empresa.`,
  }
  const msg = templates[locale]
  return `https://wa.me/${config.whatsappNumero}?text=${encodeURIComponent(msg)}`
}

export function getDominioHost(): string {
  return getHubConfig('pt').dominioHost
}

export function getDominioUrl(): string {
  return getHubConfig('pt').dominio
}
