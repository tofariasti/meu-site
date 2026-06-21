import type { Locale } from '../i18n/types'
import { resolveLocalized } from '../i18n/resolveLocalized'
import type { HubConfigType } from './types'
import { hubConfigLocalized } from './hubConfigLocalized'

export { hubConfigLocalized }

export function getHubConfig(locale: Locale): HubConfigType {
  return resolveLocalized(hubConfigLocalized, locale) as unknown as HubConfigType
}

/** Resolved PT config for tests and legacy imports */
export const hubConfig: HubConfigType = getHubConfig('pt')
