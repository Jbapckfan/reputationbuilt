import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection.tsx'

const portfolioItems = [
  {
    name: 'Midwest Pro Plumbing',
    category: 'Plumbing',
    label: 'Spec Demo',
    headline: 'Fast plumbing help for leaks, clogs, and emergencies.',
    cta: 'Request Estimate',
    accent: '#1B4332',
    reviews: '★★★★★ 127 reviews',
    href: 'https://rb-demo-midwest-pro-plumbing-7j2xl8fua-jbapckfans-projects.vercel.app',
  },
  {
    name: 'Green Summit Landscaping',
    category: 'Landscaping',
    label: 'Spec Demo',
    headline: 'Clean landscapes and dependable crews for every season.',
    cta: 'Book a Walkthrough',
    accent: '#2D6A4F',
    reviews: '★★★★★ 96 reviews',
    href: 'https://rb-demo-green-summit-landscaping-a32ka21bg-jbapckfans-projects.vercel.app',
  },
  {
    name: 'KC Elite Roofing',
    category: 'Roofing',
    label: 'Spec Demo',
    headline: 'Storm-ready roofing with fast inspections and repairs.',
    cta: 'Schedule Inspection',
    accent: '#B45309',
    reviews: '★★★★★ 84 reviews',
    href: 'https://rb-demo-kc-elite-roofing-nxhrtnro6-jbapckfans-projects.vercel.app',
  },
  {
    name: 'Volt Masters Electric',
    category: 'Electrical',
    label: 'Sample Build',
    headline: 'Licensed electricians for homes, panels, and upgrades.',
    cta: 'Call an Electrician',
    accent: '#1F4B99',
    reviews: '★★★★★ 112 reviews',
    href: 'https://rb-demo-volt-masters-electric-4cyzeembh-jbapckfans-projects.vercel.app',
  },
  {
    name: 'Brush & Roll Painting',
    category: 'Painting',
    label: 'Sample Build',
    headline: 'Interior and exterior painting that makes the job look finished.',
    cta: 'Get Color Quote',
    accent: '#8C4A28',
    reviews: '★★★★★ 73 reviews',
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
                  <div className="portfolio-browser">
                    <div className="portfolio-browser__chrome">
                      <div className="portfolio-browser__dots">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="portfolio-browser__address">{item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}</div>
                    </div>
                    <div className="portfolio-browser__viewport">
                      <div className="portfolio-browser__hero" style={{ background: `linear-gradient(145deg, ${item.accent}, rgba(27, 67, 50, 0.74))` }}>
                        <div className="portfolio-browser__nav">
                          <span>{item.category}</span>
                          <span>Reviews</span>
                          <span>Contact</span>
                        </div>
                        <div className="portfolio-browser__content">
                          <span className="portfolio-browser__eyebrow">Kansas City service business</span>
                          <strong>{item.name}</strong>
                          <p>{item.headline}</p>
                          <div className="portfolio-browser__actions">
                            <span className="portfolio-browser__cta">{item.cta}</span>
                            <span className="portfolio-browser__rating">{item.reviews}</span>
                          </div>
                        </div>
                      </div>
                      <div className="portfolio-browser__footer">
                        <div>
                          <span>Emergency calls</span>
                          <strong>24/7 response</strong>
                        </div>
                        <div>
                          <span>CTA layout</span>
                          <strong>Call, quote, reviews</strong>
                        </div>
                      </div>
                    </div>
                  </div>
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
          min-height: 260px;
          background: linear-gradient(135deg, rgba(245, 240, 235, 0.78) 0%, rgba(82, 121, 111, 0.08) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .portfolio-browser {
          width: 100%;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(27, 67, 50, 0.12);
          box-shadow: 0 16px 34px rgba(28, 25, 23, 0.12);
          background: #fff;
        }

        .portfolio-browser__chrome {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          background: rgba(28, 25, 23, 0.92);
        }

        .portfolio-browser__dots {
          display: flex;
          gap: 5px;
        }

        .portfolio-browser__dots span {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
        }

        .portfolio-browser__dots span:nth-child(1) { background: #fb7185; }
        .portfolio-browser__dots span:nth-child(2) { background: #fbbf24; }
        .portfolio-browser__dots span:nth-child(3) { background: #34d399; }

        .portfolio-browser__address {
          flex: 1;
          min-width: 0;
          padding: 7px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.64);
          font-size: 0.72rem;
          text-transform: lowercase;
          letter-spacing: 0.04em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .portfolio-browser__viewport {
          background: linear-gradient(180deg, rgba(250, 248, 245, 0.9) 0%, rgba(245, 240, 235, 0.98) 100%);
        }

        .portfolio-browser__hero {
          min-height: 170px;
          padding: 18px;
          color: #fff;
        }

        .portfolio-browser__nav {
          display: flex;
          gap: 12px;
          justify-content: flex-end;
          margin-bottom: 24px;
          font-size: 0.72rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.76);
        }

        .portfolio-browser__content strong {
          display: block;
          font-family: var(--font-heading);
          font-size: 1.45rem;
          line-height: 1.1;
          margin-bottom: 8px;
        }

        .portfolio-browser__content p {
          max-width: 28ch;
          font-size: 0.9rem;
          line-height: 1.45;
          color: rgba(255, 255, 255, 0.82);
        }

        .portfolio-browser__eyebrow {
          display: inline-flex;
          margin-bottom: 10px;
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.66);
        }

        .portfolio-browser__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 16px;
        }

        .portfolio-browser__cta,
        .portfolio-browser__rating {
          display: inline-flex;
          align-items: center;
          padding: 8px 12px;
          border-radius: 999px;
          font-size: 0.76rem;
          font-weight: 700;
        }

        .portfolio-browser__cta {
          background: rgba(255, 255, 255, 0.94);
          color: var(--color-text);
        }

        .portfolio-browser__rating {
          background: rgba(255, 255, 255, 0.12);
          color: #fff1b8;
        }

        .portfolio-browser__footer {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          padding: 14px 16px 16px;
        }

        .portfolio-browser__footer div {
          padding: 12px 12px 10px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.88);
          border: 1px solid rgba(27, 67, 50, 0.06);
        }

        .portfolio-browser__footer span {
          display: block;
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-amber);
          margin-bottom: 6px;
        }

        .portfolio-browser__footer strong {
          font-size: 0.88rem;
          line-height: 1.45;
          color: var(--color-text);
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

          .portfolio-browser__footer {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}
