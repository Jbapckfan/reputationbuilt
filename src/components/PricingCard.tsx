import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'

interface PricingCardProps {
  name: string
  price: string
  description: string
  features: string[]
  recommended?: boolean
  ctaText?: string
  ctaTo?: string
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  recommended = false,
  ctaText = 'Get Started',
  ctaTo = '/contact',
}: PricingCardProps) {
  return (
    <div className={`pricing-card${recommended ? ' pricing-card--recommended' : ''}`}>
      {recommended && <div className="pricing-badge">Most Popular</div>}
      <div className="pricing-card-header">
        <h3 className="pricing-card-name">{name}</h3>
        <div className="pricing-card-price">{price}</div>
        <p className="pricing-card-desc">{description}</p>
      </div>
      <ul className="pricing-card-features">
        {features.map((feature, i) => (
          <li key={i}>
            <Check size={18} className="pricing-check" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        to={ctaTo}
        className={`btn ${recommended ? 'btn-amber' : 'btn-primary'} pricing-card-cta`}
      >
        {ctaText}
      </Link>

      <style>{`
        .pricing-card {
          background: var(--color-white);
          border-radius: var(--radius-lg);
          padding: 36px 32px;
          box-shadow: var(--shadow-sm);
          border: 2px solid rgba(0, 0, 0, 0.06);
          display: flex;
          flex-direction: column;
          position: relative;
          transition: all 0.25s ease;
        }

        .pricing-card:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-4px);
        }

        .pricing-card--recommended {
          border-color: var(--color-amber);
          box-shadow: var(--shadow-md);
        }

        .pricing-card--recommended:hover {
          box-shadow: var(--shadow-xl);
        }

        .pricing-badge {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--color-amber);
          color: var(--color-white);
          font-size: 0.8rem;
          font-weight: 700;
          padding: 4px 16px;
          border-radius: 20px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          white-space: nowrap;
        }

        .pricing-card-header {
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          margin-bottom: 24px;
        }

        .pricing-card-name {
          font-size: 1.3rem;
          margin-bottom: 8px;
        }

        .pricing-card-price {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 8px;
        }

        .pricing-card-desc {
          font-size: 0.9rem;
          color: var(--color-stone);
          margin: 0 auto;
        }

        .pricing-card-features {
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
          margin-bottom: 28px;
        }

        .pricing-card-features li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.95rem;
          color: var(--color-text);
          line-height: 1.4;
        }

        .pricing-check {
          color: var(--color-success);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .pricing-card-cta {
          width: 100%;
          text-align: center;
          text-decoration: none;
        }
      `}</style>
    </div>
  )
}
