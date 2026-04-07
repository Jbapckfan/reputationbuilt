import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/calculator', label: 'Free Calculator' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
      <div className="header-inner container">
        <Link to="/" className="header-logo" aria-label="Reputation Built home">
          <span className="logo-mark">RB</span>
          <span className="logo-text">Reputation Built</span>
        </Link>

        <nav className={`header-nav${menuOpen ? ' header-nav--open' : ''}`}>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link${location.pathname === link.to ? ' nav-link--active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="nav-cta-mobile">
            <a href="tel:8165550100" className="btn btn-amber btn-sm">
              <Phone size={16} />
              (816) 555-0100
            </a>
          </div>
        </nav>

        <div className="header-actions">
          <a href="tel:8165550100" className="header-phone">
            <Phone size={16} />
            <span>(816) 555-0100</span>
          </a>
          <Link to="/contact" className="btn btn-amber btn-sm">
            Get Started
          </Link>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && <div className="header-overlay" onClick={() => setMenuOpen(false)} />}

      <style>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          height: var(--header-height);
          background: rgba(250, 248, 245, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: box-shadow 0.3s ease, background 0.3s ease;
        }

        .site-header--scrolled {
          background: rgba(250, 248, 245, 0.95);
          box-shadow: 0 1px 8px rgba(0, 0, 0, 0.06);
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          gap: 24px;
        }

        .header-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .logo-mark {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          background: var(--color-primary);
          color: var(--color-white);
          border-radius: 8px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 16px;
          letter-spacing: -0.02em;
        }

        .logo-text {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.2rem;
          color: var(--color-primary);
          letter-spacing: -0.02em;
        }

        .header-nav {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .nav-link {
          padding: 8px 12px;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--color-text);
          border-radius: 999px;
          transition: color 0.2s, background 0.2s, box-shadow 0.2s;
          text-decoration: none;
        }

        .nav-link:hover {
          color: var(--color-primary);
          background: rgba(217, 119, 6, 0.08);
        }

        .nav-link--active {
          color: var(--color-white);
          font-weight: 600;
          background: linear-gradient(135deg, var(--color-amber), var(--color-copper));
          box-shadow: 0 10px 22px rgba(217, 119, 6, 0.18);
        }

        .nav-cta-mobile {
          display: none;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .header-phone {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-primary);
          text-decoration: none;
        }

        .header-phone:hover {
          color: var(--color-amber);
        }

        .menu-toggle {
          display: none;
          color: var(--color-text);
          padding: 4px;
        }

        .header-overlay {
          display: none;
        }

        @media (max-width: 1024px) {
          .header-nav {
            display: none;
          }

          .header-phone span {
            display: none;
          }

          .header-actions .btn {
            display: none;
          }

          .menu-toggle {
            display: flex;
          }

          .header-nav--open {
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background:
              linear-gradient(160deg, rgba(27, 67, 50, 0.98), rgba(45, 106, 79, 0.96)),
              var(--color-primary);
            padding: calc(var(--header-height) + 36px) 24px 32px;
            gap: 8px;
            z-index: 999;
            overflow-y: auto;
          }

          .header-nav--open .nav-link {
            font-size: clamp(1.5rem, 5vw, 2.4rem);
            line-height: 1;
            padding: 14px 0;
            border-radius: 0;
            color: rgba(255, 255, 255, 0.92);
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }

          .header-nav--open .nav-link:hover,
          .header-nav--open .nav-link--active {
            background: transparent;
            color: var(--color-white);
            box-shadow: none;
          }

          .header-nav--open .nav-cta-mobile {
            display: block;
            margin-top: 20px;
            padding-top: 18px;
            border-top: 1px solid rgba(255, 255, 255, 0.14);
          }

          .header-nav--open .nav-cta-mobile .btn {
            width: 100%;
            justify-content: center;
          }

          .header-overlay {
            display: block;
            position: fixed;
            inset: 0;
            z-index: 998;
            background: rgba(0, 0, 0, 0.3);
          }
        }

        @media (max-width: 640px) {
          .logo-text {
            font-size: 1rem;
          }
        }
      `}</style>
    </header>
  )
}
