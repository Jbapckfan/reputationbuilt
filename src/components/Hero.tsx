import type { ReactNode } from 'react'

interface HeroProps {
  title: string
  subtitle?: string
  children?: ReactNode
  centered?: boolean
}

export default function Hero({ title, subtitle, children, centered = true }: HeroProps) {
  return (
    <section className="hero-section">
      <div className="container">
        <div className={`hero-content${centered ? ' hero-content--centered' : ''}`}>
          <h1 className="hero-title">{title}</h1>
          {subtitle && <p className="hero-subtitle">{subtitle}</p>}
          {children && <div className="hero-actions">{children}</div>}
        </div>
      </div>

      <style>{`
        .hero-section {
          padding: 140px 24px 80px;
          background: linear-gradient(
            168deg,
            var(--color-linen) 0%,
            var(--color-bg) 60%,
            rgba(27, 67, 50, 0.04) 100%
          );
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: -120px;
          right: -120px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(27, 67, 50, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-content {
          max-width: 720px;
          position: relative;
          z-index: 1;
        }

        .hero-content--centered {
          margin: 0 auto;
          text-align: center;
        }

        .hero-title {
          margin-bottom: 20px;
          color: var(--color-primary);
        }

        .hero-subtitle {
          font-size: clamp(1.05rem, 2vw, 1.2rem);
          color: var(--color-secondary);
          line-height: 1.7;
          margin: 0 auto 32px;
          max-width: 600px;
        }

        .hero-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .hero-content--centered .hero-actions {
          justify-content: center;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 110px 16px 56px;
          }

          .hero-subtitle {
            font-size: 1.05rem;
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .hero-actions .btn {
            width: 100%;
            max-width: 320px;
          }
        }
      `}</style>
    </section>
  )
}
