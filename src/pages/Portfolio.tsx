import { Link } from 'react-router-dom'
import { Globe } from 'lucide-react'
import CTASection from '../components/CTASection.tsx'

const portfolioItems = [
  {
    name: 'Midwest Pro Plumbing',
    category: 'Plumbing',
    label: 'Spec Demo',
    href: 'https://rb-demo-midwest-pro-plumbing-7j2xl8fua-jbapckfans-projects.vercel.app',
  },
  {
    name: 'Green Summit Landscaping',
    category: 'Landscaping',
    label: 'Spec Demo',
    href: 'https://rb-demo-green-summit-landscaping-a32ka21bg-jbapckfans-projects.vercel.app',
  },
  {
    name: 'KC Elite Roofing',
    category: 'Roofing',
    label: 'Spec Demo',
    href: 'https://rb-demo-kc-elite-roofing-nxhrtnro6-jbapckfans-projects.vercel.app',
  },
  {
    name: 'Volt Masters Electric',
    category: 'Electrical',
    label: 'Sample Build',
    href: 'https://rb-demo-volt-masters-electric-4cyzeembh-jbapckfans-projects.vercel.app',
  },
  {
    name: 'Brush & Roll Painting Co',
    category: 'Painting',
    label: 'Sample Build',
    href: 'https://rb-demo-brush-roll-painting-6myjsmhmp-jbapckfans-projects.vercel.app',
  },
]

export default function Portfolio() {
  return (
    <>
      <div className="page-header">
        <h1>Sites we have designed for businesses like yours.</h1>
        <p>
          These are spec demos and sample builds, not completed client engagements.
          Every one is custom-built to show what your business could look like before you pay us.
        </p>
      </div>

      <section className="section">
        <div className="container">
          <div className="portfolio-note">
            <p>We build these before you pay us. Want one for your business?</p>
            <Link to="/contact" className="portfolio-note__link">
              Start your free demo
            </Link>
          </div>

          <div className="portfolio-grid">
            {portfolioItems.map(item => (
              <div className="portfolio-card card" key={item.name}>
                <div className="portfolio-image">
                  <Globe size={36} style={{ color: 'var(--color-stone)' }} />
                </div>
                <div className="portfolio-info">
                  <div className="portfolio-meta">
                    <span className="portfolio-category">{item.category}</span>
                    <span className="portfolio-label">{item.label}</span>
                  </div>
                  <h3 className="portfolio-name">{item.name}</h3>
                  <a
                    href={item.href}
                    className="btn btn-outline btn-sm portfolio-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Want to see one made for your business? It's free."
        subtext="We will build a custom demo site for your business at no cost. See what it looks like before you decide anything."
        buttonText="Get Your Free Demo"
        buttonTo="/contact"
      />

      <style>{`
        .portfolio-note {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 20px 24px;
          margin-bottom: 32px;
          border-radius: var(--radius-lg);
          background: rgba(217, 119, 6, 0.08);
          border: 1px solid rgba(217, 119, 6, 0.16);
        }

        .portfolio-note p {
          max-width: none;
          color: var(--color-text);
          font-weight: 600;
        }

        .portfolio-note__link {
          color: var(--color-copper);
          font-weight: 700;
          white-space: nowrap;
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 32px;
        }

        .portfolio-card {
          overflow: hidden;
          padding: 0;
        }

        .portfolio-image {
          width: 100%;
          height: 220px;
          background: linear-gradient(135deg, var(--color-linen) 0%, rgba(82, 121, 111, 0.08) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .portfolio-info {
          padding: 24px;
        }

        .portfolio-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .portfolio-category {
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--color-amber);
        }

        .portfolio-label {
          font-size: 0.76rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-primary);
          background: rgba(27, 67, 50, 0.08);
          padding: 6px 10px;
          border-radius: 999px;
        }

        .portfolio-name {
          font-size: 1.2rem;
          margin: 12px 0 16px;
        }

        .portfolio-btn {
          text-decoration: none;
        }

        @media (max-width: 1024px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .portfolio-note {
            flex-direction: column;
            align-items: flex-start;
          }

          .portfolio-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}
