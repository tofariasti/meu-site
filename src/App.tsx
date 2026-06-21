import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/layout/SiteLayout'
import { HomePage } from './pages/HomePage'
import { SitesPage } from './pages/SitesPage'
import { PortfolioPage } from './pages/PortfolioPage'
import { FaqPage } from './pages/FaqPage'
import { PorQueSitePage } from './pages/PorQueSitePage'
import { DronePage } from './pages/DronePage'
import { SobrePage } from './pages/SobrePage'
import { useAnalytics } from './hooks/useAnalytics'
import { LocaleProvider } from './i18n/LocaleContext'

function routePath(prefix: string, path: string): string {
  if (path === '/') return prefix ? `${prefix}/` : '/'
  const segment = path.startsWith('/') ? path.slice(1) : path
  return `${prefix}/${segment}`
}

function LocaleRouteTree({ prefix }: { prefix: string }) {
  useAnalytics()

  return (
    <>
      <Route path={routePath(prefix, '/')} element={<HomePage />} />
      <Route path={routePath(prefix, '/sites')} element={<Navigate to={routePath(prefix, '/sites/')} replace />} />
      <Route path={routePath(prefix, '/sites/')} element={<SitesPage />} />
      <Route path={routePath(prefix, '/portfolio')} element={<Navigate to={routePath(prefix, '/portfolio/')} replace />} />
      <Route path={routePath(prefix, '/portfolio/')} element={<PortfolioPage />} />
      <Route path={routePath(prefix, '/faq')} element={<Navigate to={routePath(prefix, '/faq/')} replace />} />
      <Route path={routePath(prefix, '/faq/')} element={<FaqPage />} />
      <Route path={routePath(prefix, '/por-que-site')} element={<Navigate to={routePath(prefix, '/por-que-site/')} replace />} />
      <Route path={routePath(prefix, '/por-que-site/')} element={<PorQueSitePage />} />
      <Route path={routePath(prefix, '/drone')} element={<Navigate to={routePath(prefix, '/drone/')} replace />} />
      <Route path={routePath(prefix, '/drone/')} element={<DronePage />} />
      <Route path={routePath(prefix, '/sobre')} element={<Navigate to={routePath(prefix, '/sobre/')} replace />} />
      <Route path={routePath(prefix, '/sobre/')} element={<SobrePage />} />
    </>
  )
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/pt/*" element={<Navigate to="/" replace />} />
      <LocaleRouteTree prefix="" />
      <LocaleRouteTree prefix="/en" />
      <LocaleRouteTree prefix="/es" />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <LocaleProvider>
        <SiteLayout>
          <AppRoutes />
        </SiteLayout>
      </LocaleProvider>
    </BrowserRouter>
  )
}
