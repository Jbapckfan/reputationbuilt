import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import {
  ArrowRight,
  Globe,
  Hammer,
  Eye,
  Rocket,
} from 'lucide-react'
import ServiceCard from '../components/ServiceCard.tsx'
import CTASection from '../components/CTASection.tsx'
import FounderProofBand from '../components/FounderProofBand.tsx'

function MonoIcon({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 48 48" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  )
}

const customWebsiteIcon = (
  <MonoIcon>
    <path d="M10 18h11l5 5h12" />
    <path d="M14 18v-6h12v6" />
    <path d="M28 23v-5h10v5" />
    <circle cx="14" cy="24" r="4" />
    <circle cx="34" cy="24" r="4" />
    <path d="M6 34h36" />
  </MonoIcon>
)

const aiPhoneIcon = (
  <MonoIcon>
    <path d="M16 13c1 8 11 18 19 19" />
    <path d="M29 12c4 1 7 4 8 8" />
    <path d="M31 17c2 1 3 2 4 4" />
    <path d="M12 18l4-4c1-1 3-1 4 0l3 3c1 1 1 2 0 3l-2 2c3 5 5 7 10 10l2-2c1-1 2-1 3 0l3 3c1 1 1 3 0 4l-4 4c-2 2-5 2-7 0-9-6-15-12-21-21-2-2-2-5 0-7Z" />
  </MonoIcon>
)

const schedulingIcon = (
  <MonoIcon>
    <path d="M13 10v6" />
    <path d="M35 10v6" />
    <rect x="9" y="13" width="30" height="26" rx="4" />
    <path d="M9 21h30" />
    <path d="M17 28h8" />
    <path d="M17 33h14" />
    <path d="M30 29l3 3 5-6" />
  </MonoIcon>
)

const seoReviewsIcon = (
  <MonoIcon>
    <path d="M24 39s-9-9-9-15a9 9 0 1 1 18 0c0 6-9 15-9 15Z" />
    <path d="m36 11 1 3 3 .2-2.4 1.8.9 3-2.5-1.6-2.5 1.6.9-3L32 14.2l3-.2 1-3Z" />
    <path d="m11 15 .8 2.3 2.4.2-1.9 1.5.8 2.4-2.1-1.4-2.1 1.4.8-2.4-1.9-1.5 2.4-.2.8-2.3Z" />
    <circle cx="24" cy="24" r="3" />
  </MonoIcon>
)

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__grain" aria-hidden="true" />
        <div className="container home-hero__grid">
          <div className="home-hero__copy">
            <span className="home-hero__eyebrow">Kansas City websites and AI for local businesses</span>
            <h1>Your best work deserves to be found.</h1>
            <p className="home-hero__subtitle">
              Custom websites and AI-powered tools for local businesses. We&apos;ll build
              you a free demo site before you commit, so you see proof instead of hearing a pitch.
            </p>
            <div className="home-hero__actions">
              <Link to="/contact" className="btn btn-amber btn-lg">
                See What Your Site Could Look Like
                <ArrowRight size={18} />
              </Link>
              <Link to="/how-it-works" className="btn btn-outline">
                How It Works
              </Link>
            </div>
            <div className="home-hero__highlights">
              <span>Free spec demo before you pay</span>
              <span>Built for plumbers, roofers, landscapers, and skilled trades</span>
            </div>
          </div>

          <div className="home-hero__preview">
            <div className="browser-mockup-wrap">
              <div className="browser-mockup__emergency">24/7 EMERGENCY SERVICE</div>
              <div className="browser-mockup__reviews">★★★★★ 127 REVIEWS</div>
              <div className="browser-mockup">
              <div className="browser-mockup__chrome">
                <div className="browser-mockup__dots">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="browser-mockup__address">rb-demo-midwest-pro-plumbing.vercel.app</div>
              </div>
              <div className="browser-mockup__viewport">
                <div className="browser-mockup__hero-card">
                  <span className="browser-mockup__badge">Sample Build</span>
                  <h3>Midwest Pro Plumbing</h3>
                  <p>
                    Emergency service, clean trust signals, and a page structure built
                    to convert local search into booked jobs.
                  </p>
                  <div className="browser-mockup__cta-row">
                    <span>Request Estimate</span>
                    <span>24/7 Response</span>
                  </div>
                </div>
                <div className="browser-mockup__stats">
                  <div>
                    <strong>5 pages</strong>
                    <span>Trade-specific structure</span>
                  </div>
                  <div>
                    <strong>3 CTAs</strong>
                    <span>Call, quote, emergency lead</span>
                  </div>
                  <div>
                    <strong>1 goal</strong>
                    <span>Turn trust into booked work</span>
                  </div>
                </div>
                <div className="browser-mockup__cards">
                  <div className="browser-mockup__mini-card">
                    <span className="browser-mockup__mini-label">Trust</span>
                    <strong>Licensed. Local. Fast.</strong>
                  </div>
                  <div className="browser-mockup__mini-card browser-mockup__mini-card--amber">
                    <span className="browser-mockup__mini-label">Offer</span>
                    <strong>Free estimates and same-day response</strong>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="problem-grid">
            <div className="problem-card">
              <div className="icon-wrap">
                <Hammer size={24} />
              </div>
              <h3>Your work speaks for itself.</h3>
              <p>
                You show up on time, do the job right, and leave customers impressed.
                Word of mouth keeps you busy. You have earned every bit of your reputation.
              </p>
            </div>
            <div className="problem-card problem-card--highlight">
              <div className="icon-wrap icon-wrap-amber">
                <Eye size={24} />
              </div>
              <h3>But can customers find you?</h3>
              <p>
                When someone searches &quot;plumber near me&quot; or &quot;best roofer in Kansas City,&quot;
                do they find you? Or your competitor with a flashier website and more reviews?
              </p>
            </div>
            <div className="problem-card">
              <div className="icon-wrap">
                <Rocket size={24} />
              </div>
              <h3>We fix that.</h3>
              <p>
                A professional website, AI tools that never miss a call, and a strategy that
                puts your business where customers are looking. Built specifically for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-linen">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <h2>Everything you need to get found online</h2>
            <div className="divider" />
            <p style={{ color: 'var(--color-secondary)', margin: '0 auto' }}>
              From your website to your phone line, we handle it all so you can focus on doing great work.
            </p>
          </div>
          <div className="grid-4">
            <ServiceCard
              icon={customWebsiteIcon}
              title="Custom Websites"
              description="Mobile-first, fast-loading sites built for your business. Not a template -- a real site that makes customers trust you."
              linkTo="/services"
            />
            <ServiceCard
              icon={aiPhoneIcon}
              title="AI Phone Answering"
              description="Never miss a lead, even at 2 AM. A custom AI agent answers calls and captures leads while you work."
              linkTo="/services"
            />
            <ServiceCard
              icon={schedulingIcon}
              title="Online Scheduling"
              description="Let customers book appointments without the back-and-forth. Syncs with your calendar automatically."
              linkTo="/services"
            />
            <ServiceCard
              icon={seoReviewsIcon}
              title="SEO & Reviews"
              description="Show up in local search results and turn happy customers into five-star reviews."
              linkTo="/services"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <h2>How it works</h2>
            <div className="divider" />
          </div>
          <div className="steps-row">
            <div className="step-compact">
              <div className="step-compact-number">1</div>
              <h3>We build your demo</h3>
              <p>We create a preview site for your business before you spend a dime.</p>
            </div>
            <div className="step-compact-arrow">
              <ArrowRight size={24} />
            </div>
            <div className="step-compact">
              <div className="step-compact-number">2</div>
              <h3>You review it</h3>
              <p>Tell us what you love and what to change. It is your site, your call.</p>
            </div>
            <div className="step-compact-arrow">
              <ArrowRight size={24} />
            </div>
            <div className="step-compact">
              <div className="step-compact-number">3</div>
              <h3>Go live in days</h3>
              <p>We launch your site, connect your domain, and set up your AI tools.</p>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: 36 }}>
            <Link to="/how-it-works" className="btn btn-outline btn-sm">
              See the full process
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-linen">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <h2>Built for businesses like yours</h2>
            <div className="divider" />
            <p style={{ color: 'var(--color-secondary)', margin: '0 auto' }}>
              Real sites for real businesses. Here is a preview of what we are building.
            </p>
          </div>
          <div className="grid-3">
            {['Plumbing Co.', 'Landscaping Co.', 'HVAC Company'].map(name => (
              <div className="card proof-card" key={name}>
                <div className="proof-placeholder">
                  <Globe size={32} style={{ color: 'var(--color-stone)' }} />
                </div>
                <h3>{name}</h3>
                <p className="text-stone" style={{ fontSize: '0.9rem' }}>
                  Demo site coming soon
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="calc-callout">
            <div className="calc-callout-text">
              <h3>How much revenue is your business leaving on the table?</h3>
              <p>
                Use our free calculator to see the estimated revenue impact of having a
                professional website and online presence for your trade.
              </p>
            </div>
            <Link to="/calculator" className="btn btn-outline">
              Try the Revenue Calculator
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <FounderProofBand />

      <CTASection
        headline="See what your site could look like -- free, no strings."
        buttonText="Get Your Free Demo Site"
        buttonTo="/contact"
      />

      <style>{`
        .home-hero {
          padding: 136px 24px 88px;
          background: linear-gradient(
            160deg,
            var(--color-linen) 0%,
            rgba(250, 248, 245, 0.92) 48%,
            rgba(27, 67, 50, 0.09) 100%
          );
          position: relative;
          overflow: hidden;
        }

        .home-hero::before {
          content: '';
          position: absolute;
          inset: auto -180px -180px auto;
          width: 480px;
          height: 480px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(217, 119, 6, 0.15) 0%, transparent 72%);
          pointer-events: none;
        }

        .home-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320' viewBox='0 0 320 320'%3E%3Cpath d='M20 188c28-36 56-26 84-54s28-58 74-68 74 16 122-16' fill='none' stroke='%231B4332' stroke-opacity='.1' stroke-width='1'/%3E%3Cpath d='M4 214c46-24 74-8 108-26 44-22 50-80 110-92 50-10 74 4 98-16' fill='none' stroke='%232D6A4F' stroke-opacity='.08' stroke-width='1'/%3E%3Cpath d='M16 256c34-18 58-14 88-34 34-22 54-58 102-60 44-2 74 10 114-6' fill='none' stroke='%231B4332' stroke-opacity='.08' stroke-width='1'/%3E%3C/svg%3E");
          opacity: 0.35;
          pointer-events: none;
        }

        .home-hero__grain {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='.9'/%3E%3C/svg%3E");
          opacity: 0.04;
          mix-blend-mode: multiply;
          pointer-events: none;
          z-index: 0;
        }

        .home-hero__grid {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
          gap: 48px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .home-hero__copy h1 {
          margin-bottom: 20px;
          color: var(--color-primary);
        }

        .home-hero__eyebrow {
          display: inline-flex;
          margin-bottom: 18px;
          padding: 7px 12px;
          border-radius: 999px;
          background: rgba(27, 67, 50, 0.08);
          color: var(--color-primary);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .home-hero__subtitle {
          font-size: clamp(1.05rem, 2vw, 1.2rem);
          color: var(--color-secondary);
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 58ch;
        }

        .home-hero__actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 22px;
        }

        .home-hero__highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .home-hero__highlights span {
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid rgba(27, 67, 50, 0.08);
          font-size: 0.88rem;
          color: var(--color-secondary);
          font-weight: 600;
        }

        .home-hero__preview {
          display: flex;
          justify-content: center;
        }

        .browser-mockup-wrap {
          position: relative;
          padding: 26px 20px 10px;
        }

        .browser-mockup {
          width: min(100%, 520px);
          border-radius: 22px;
          overflow: hidden;
          border: 1px solid rgba(27, 67, 50, 0.12);
          box-shadow: var(--shadow-xl);
          background: #f9fafb;
          position: relative;
          z-index: 1;
        }

        .browser-mockup__emergency,
        .browser-mockup__reviews {
          position: absolute;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          box-shadow: 0 16px 34px rgba(28, 25, 23, 0.14);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .browser-mockup__emergency {
          top: 0;
          right: 8px;
          padding: 10px 16px;
          background: linear-gradient(135deg, #fbbf24, var(--color-amber));
          color: #fff;
          transform: rotate(4deg);
        }

        .browser-mockup__reviews {
          left: 0;
          bottom: 18px;
          padding: 10px 14px;
          background: rgba(255, 255, 255, 0.92);
          color: var(--color-primary);
          border: 1px solid rgba(27, 67, 50, 0.1);
          transform: rotate(-5deg);
        }

        .browser-mockup__chrome {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;
          background: rgba(28, 25, 23, 0.9);
        }

        .browser-mockup__dots {
          display: flex;
          gap: 6px;
          flex-shrink: 0;
        }

        .browser-mockup__dots span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
        }

        .browser-mockup__dots span:first-child {
          background: #fb7185;
        }

        .browser-mockup__dots span:nth-child(2) {
          background: #fbbf24;
        }

        .browser-mockup__dots span:nth-child(3) {
          background: #34d399;
        }

        .browser-mockup__address {
          flex: 1;
          min-width: 0;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.72);
          font-size: 0.82rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .browser-mockup__viewport {
          padding: 22px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.86) 0%, rgba(245, 240, 235, 0.92) 100%),
            linear-gradient(135deg, rgba(27, 67, 50, 0.08), rgba(217, 119, 6, 0.08));
        }

        .browser-mockup__hero-card {
          padding: 24px;
          border-radius: 18px;
          background:
            linear-gradient(135deg, rgba(27, 67, 50, 0.96), rgba(82, 121, 111, 0.92));
          color: var(--color-white);
          box-shadow: 0 18px 40px rgba(27, 67, 50, 0.24);
        }

        .browser-mockup__badge {
          display: inline-flex;
          margin-bottom: 12px;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .browser-mockup__hero-card h3 {
          color: var(--color-white);
          font-size: 1.65rem;
          margin-bottom: 10px;
        }

        .browser-mockup__hero-card p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.96rem;
          max-width: none;
        }

        .browser-mockup__cta-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 18px;
        }

        .browser-mockup__cta-row span {
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          font-size: 0.82rem;
          font-weight: 600;
        }

        .browser-mockup__stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin: 18px 0;
        }

        .browser-mockup__stats div {
          padding: 16px 14px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.86);
          border: 1px solid rgba(27, 67, 50, 0.06);
        }

        .browser-mockup__stats strong {
          display: block;
          margin-bottom: 4px;
          color: var(--color-primary);
          font-size: 1rem;
        }

        .browser-mockup__stats span {
          color: var(--color-secondary);
          font-size: 0.82rem;
          line-height: 1.45;
        }

        .browser-mockup__cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .browser-mockup__mini-card {
          padding: 18px 16px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(27, 67, 50, 0.06);
        }

        .browser-mockup__mini-card--amber {
          background: rgba(217, 119, 6, 0.09);
        }

        .browser-mockup__mini-label {
          display: block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-amber);
          margin-bottom: 8px;
        }

        .browser-mockup__mini-card strong {
          color: var(--color-text);
          line-height: 1.45;
        }

        .problem-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .problem-card {
          text-align: center;
          padding: 32px 24px;
        }

        .problem-card h3 {
          margin-bottom: 12px;
          font-size: 1.3rem;
        }

        .problem-card p {
          color: var(--color-secondary);
          font-size: 0.95rem;
          margin: 0 auto;
        }

        .problem-card--highlight {
          background: var(--color-white);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          border: 1px solid rgba(217, 119, 6, 0.15);
        }

        .steps-row {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 16px;
        }

        .step-compact {
          flex: 1;
          max-width: 280px;
          text-align: center;
          padding: 24px 16px;
        }

        .step-compact-number {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--color-primary);
          color: var(--color-white);
          font-weight: 700;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
        }

        .step-compact h3 {
          margin-bottom: 8px;
          font-size: 1.15rem;
        }

        .step-compact p {
          color: var(--color-secondary);
          font-size: 0.9rem;
          margin: 0 auto;
        }

        .step-compact-arrow {
          color: var(--color-stone);
          padding-top: 32px;
          flex-shrink: 0;
        }

        .proof-card {
          text-align: center;
        }

        .proof-placeholder {
          width: 100%;
          height: 180px;
          background: var(--color-linen);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .proof-card h3 {
          margin-bottom: 4px;
        }

        .calc-callout {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          padding: 36px 40px;
          background: var(--color-linen);
          border-radius: var(--radius-lg);
          border: 1px solid rgba(27, 67, 50, 0.08);
        }

        .calc-callout-text h3 {
          font-size: 1.3rem;
          margin-bottom: 8px;
        }

        .calc-callout-text p {
          color: var(--color-secondary);
          font-size: 0.95rem;
          margin: 0;
        }

        .calc-callout .btn {
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .home-hero {
            padding: 116px 16px 60px;
          }

          .home-hero__grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .home-hero__actions {
            flex-direction: column;
          }

          .home-hero__actions .btn {
            width: 100%;
          }

          .browser-mockup__stats,
          .browser-mockup__cards,
          .problem-grid {
            grid-template-columns: 1fr;
          }

          .browser-mockup-wrap {
            padding-inline: 10px;
          }

          .browser-mockup__emergency,
          .browser-mockup__reviews {
            position: static;
            transform: none;
            margin-bottom: 10px;
          }

          .steps-row {
            flex-direction: column;
            align-items: center;
          }

          .step-compact {
            max-width: 100%;
          }

          .step-compact-arrow {
            transform: rotate(90deg);
            padding-top: 0;
            margin: -8px 0;
          }

          .calc-callout {
            flex-direction: column;
            text-align: center;
            padding: 28px 24px;
          }

          .calc-callout .btn {
            width: 100%;
            max-width: 320px;
          }
        }
      `}</style>
    </>
  )
}
