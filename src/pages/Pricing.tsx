import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PricingCard from '../components/PricingCard.tsx'
import CTASection from '../components/CTASection.tsx'

const tiers = [
  {
    name: 'Foundation',
    price: 'Starting at $149/mo',
    description: 'Everything you need to look professional online.',
    features: [
      'Custom-designed website (up to 5 pages)',
      'Mobile-responsive design',
      'Hosting and SSL included',
      'Basic on-page SEO',
      'Contact form and click-to-call',
      'Monthly content updates',
      'Ongoing technical support',
    ],
  },
  {
    name: 'Growth',
    price: 'Starting at $299/mo',
    description: 'For businesses ready to capture every lead.',
    features: [
      'Everything in Foundation',
      'AI phone answering (24/7)',
      'SMS text auto-reply',
      'Online appointment scheduling',
      'Google Business Profile optimization',
      'Professional photography session',
      'Monthly performance reports',
    ],
    recommended: true,
  },
  {
    name: 'Full Send',
    price: 'Starting at $499/mo',
    description: 'The complete package for maximum visibility.',
    features: [
      'Everything in Growth',
      'Expanded website (up to 10 pages)',
      'Advanced local SEO strategy',
      'Review management and automation',
      'Social media posting assistance',
      'Priority support (same-day response)',
      'Quarterly strategy calls',
    ],
  },
]

export default function Pricing() {
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <h1>Transparent pricing. No surprises.</h1>
        <p>
          Straightforward plans that grow with your business. No hidden fees, no long-term contracts.
        </p>
      </div>

      {/* Pricing Cards */}
      <section className="section">
        <div className="container">
          <div className="pricing-grid">
            {tiers.map(tier => (
              <PricingCard key={tier.name} {...tier} />
            ))}
          </div>

          <div className="pricing-note">
            <p>
              Every business is different. These are starting points -- we will tailor a plan that fits
              your specific needs and budget. Let us talk about yours. No pressure, no pitch.
            </p>
            <Link to="/contact" className="btn btn-outline btn-sm" style={{ marginTop: 16 }}>
              Let's Talk About Your Business
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Every plan starts with a free demo site."
        subtext="See what we can build for you before you spend anything."
        buttonText="Get Your Free Demo Site"
        buttonTo="/contact"
      />

      <style>{`
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          align-items: start;
          margin-bottom: 48px;
        }

        .pricing-note {
          text-align: center;
          max-width: 640px;
          margin: 0 auto;
          padding: 36px;
          background: var(--color-linen);
          border-radius: var(--radius-lg);
        }

        .pricing-note p {
          color: var(--color-secondary);
          font-size: 1rem;
          line-height: 1.7;
          margin: 0 auto;
        }

        @media (max-width: 1024px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            max-width: 440px;
            margin: 0 auto 48px;
          }
        }
      `}</style>
    </>
  )
}
