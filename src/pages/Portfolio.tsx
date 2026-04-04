import { Globe } from 'lucide-react'
import CTASection from '../components/CTASection.tsx'

const portfolioItems = [
  { name: 'Plumbing Co.', category: 'Plumbing' },
  { name: 'Landscaping Co.', category: 'Landscaping' },
  { name: 'HVAC Company', category: 'HVAC' },
  { name: 'Electrical Services', category: 'Electrical' },
  { name: 'Roofing Contractor', category: 'Roofing' },
  { name: 'Restaurant', category: 'Restaurant' },
]

export default function Portfolio() {
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <h1>Sites we have designed for businesses like yours.</h1>
        <p>
          Every site is custom-built. No templates, no shortcuts. Here is a look at what we create.
        </p>
      </div>

      {/* Portfolio Grid */}
      <section className="section">
        <div className="container">
          <div className="portfolio-grid">
            {portfolioItems.map(item => (
              <div className="portfolio-card card" key={item.name}>
                <div className="portfolio-image">
                  <Globe size={36} style={{ color: 'var(--color-stone)' }} />
                </div>
                <div className="portfolio-info">
                  <span className="portfolio-category">{item.category}</span>
                  <h3 className="portfolio-name">{item.name}</h3>
                  <a href="#" className="btn btn-outline btn-sm portfolio-btn">
                    View Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Want to see one made for your business? It's free."
        subtext="We will build a custom demo site for your business at no cost. See what it looks like before you decide anything."
        buttonText="Get Your Free Demo"
        buttonTo="/contact"
      />

      <style>{`
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
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

        .portfolio-category {
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--color-amber);
        }

        .portfolio-name {
          font-size: 1.2rem;
          margin: 4px 0 16px;
        }

        .portfolio-btn {
          text-decoration: none;
        }

        @media (max-width: 1024px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .portfolio-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}
