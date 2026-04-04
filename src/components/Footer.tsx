import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-mark">RB</span>
              <span className="footer-logo-text">Reputation Built</span>
            </Link>
            <p className="footer-tagline">Built on your reputation.</p>
            <p className="footer-location">
              <MapPin size={14} />
              Serving Kansas City and beyond
            </p>
          </div>

          <div className="footer-links-group">
            <h4>Pages</h4>
            <nav>
              <Link to="/services">Services</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/how-it-works">How It Works</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/about">About</Link>
            </nav>
          </div>

          <div className="footer-links-group">
            <h4>Services</h4>
            <nav>
              <Link to="/services">Website Design</Link>
              <Link to="/services">AI Phone Answering</Link>
              <Link to="/services">Online Scheduling</Link>
              <Link to="/services">SEO &amp; Reviews</Link>
            </nav>
          </div>

          <div className="footer-links-group">
            <h4>Contact</h4>
            <nav>
              <a href="tel:8165550100" className="footer-contact-link">
                <Phone size={14} />
                (816) 555-0100
              </a>
              <a href="mailto:hello@reputationbuilt.com" className="footer-contact-link">
                <Mail size={14} />
                hello@reputationbuilt.com
              </a>
              <Link to="/contact" className="footer-contact-cta">
                Get Your Free Demo
              </Link>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Reputation Built. All rights reserved.</p>
        </div>
      </div>

      <style>{`
        .site-footer {
          background-color: var(--color-primary);
          color: rgba(255, 255, 255, 0.8);
          padding: 64px 0 0;
          margin-top: auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          gap: 48px;
        }

        .footer-logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          margin-bottom: 16px;
        }

        .footer-logo-mark {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: rgba(255, 255, 255, 0.15);
          color: var(--color-white);
          border-radius: 8px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 15px;
        }

        .footer-logo-text {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--color-white);
        }

        .footer-tagline {
          font-style: italic;
          margin-bottom: 12px;
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .footer-location {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .footer-links-group h4 {
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 16px;
        }

        .footer-links-group nav {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-links-group nav a {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.75);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-links-group nav a:hover {
          color: var(--color-white);
        }

        .footer-contact-link {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .footer-contact-cta {
          display: inline-block;
          margin-top: 8px;
          padding: 8px 16px;
          background: var(--color-amber);
          color: var(--color-white) !important;
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 0.9rem;
          transition: background 0.2s;
          text-align: center;
        }

        .footer-contact-cta:hover {
          background: var(--color-copper);
        }

        .footer-bottom {
          margin-top: 48px;
          padding: 24px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.4);
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }
        }

        @media (max-width: 640px) {
          .site-footer {
            padding: 48px 0 0;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .footer-brand {
            text-align: center;
          }

          .footer-logo {
            justify-content: center;
          }

          .footer-location {
            justify-content: center;
          }

          .footer-tagline {
            text-align: center;
            margin-left: auto;
            margin-right: auto;
          }

          .footer-links-group {
            text-align: center;
          }

          .footer-links-group nav {
            align-items: center;
          }

          .footer-contact-link {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  )
}
