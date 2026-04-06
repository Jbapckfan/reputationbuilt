import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import MobileActionBar from './MobileActionBar.tsx'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main className="site-main" style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
      <MobileActionBar />

      <style>{`
        @media (max-width: 768px) {
          .site-main {
            padding-bottom: calc(104px + env(safe-area-inset-bottom, 0px));
          }
        }
      `}</style>
    </div>
  )
}
