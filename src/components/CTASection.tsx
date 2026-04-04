import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface CTASectionProps {
  headline: string
  subtext?: string
  buttonText?: string
  buttonTo?: string
  variant?: 'primary' | 'linen'
}

export default function CTASection({
  headline,
  subtext,
  buttonText = 'Get Your Free Demo Site',
  buttonTo = '/contact',
  variant = 'primary',
}: CTASectionProps) {
  const isPrimary = variant === 'primary'

  return (
    <section className={`cta-section ${isPrimary ? 'cta-section--primary' : 'cta-section--linen'}`}>
      <div className="container">
        <div className="cta-inner">
          <h2 className="cta-headline">{headline}</h2>
          {subtext && <p className="cta-subtext">{subtext}</p>}
          <Link
            to={buttonTo}
            className={`btn btn-lg ${isPrimary ? 'btn-white' : 'btn-amber'}`}
          >
            {buttonText}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <style>{`
        .cta-section {
          padding: 80px 24px;
        }

        .cta-section--primary {
          background: var(--color-primary);
        }

        .cta-section--linen {
          background: var(--color-linen);
        }

        .cta-inner {
          text-align: center;
          max-width: 640px;
          margin: 0 auto;
        }

        .cta-headline {
          margin-bottom: 12px;
          font-size: clamp(1.5rem, 3.5vw, 2rem);
        }

        .cta-section--primary .cta-headline,
        .cta-section--primary .cta-subtext {
          color: var(--color-white);
        }

        .cta-subtext {
          font-size: 1.05rem;
          color: var(--color-secondary);
          margin: 0 auto 28px;
          line-height: 1.6;
        }

        .cta-section--primary .cta-subtext {
          color: rgba(255, 255, 255, 0.75);
        }

        @media (max-width: 768px) {
          .cta-section {
            padding: 56px 16px;
          }
        }
      `}</style>
    </section>
  )
}
