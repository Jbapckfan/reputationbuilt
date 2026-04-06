import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Globe,
  PhoneCall,
  CalendarCheck,
  Search,
  Hammer,
  Eye,
  Rocket,
} from 'lucide-react'
import Hero from '../components/Hero.tsx'
import ServiceCard from '../components/ServiceCard.tsx'
import CTASection from '../components/CTASection.tsx'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Your best work deserves to be found."
        subtitle="Custom websites and AI-powered tools for local businesses. We'll build you a free demo site -- no commitment, no pitch, just proof."
      >
        <Link to="/contact" className="btn btn-amber btn-lg">
          See What Your Site Could Look Like
          <ArrowRight size={18} />
        </Link>
        <Link to="/how-it-works" className="btn btn-outline">
          How It Works
        </Link>
      </Hero>

      {/* Problem / Solution */}
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
                When someone searches "plumber near me" or "best roofer in Kansas City,"
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

      {/* Services Overview */}
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
              icon={<Globe size={24} />}
              title="Custom Websites"
              description="Mobile-first, fast-loading sites built for your business. Not a template -- a real site that makes customers trust you."
              linkTo="/services"
            />
            <ServiceCard
              icon={<PhoneCall size={24} />}
              title="AI Phone Answering"
              description="Never miss a lead, even at 2 AM. A custom AI agent answers calls and captures leads while you work."
              linkTo="/services"
            />
            <ServiceCard
              icon={<CalendarCheck size={24} />}
              title="Online Scheduling"
              description="Let customers book appointments without the back-and-forth. Syncs with your calendar automatically."
              linkTo="/services"
            />
            <ServiceCard
              icon={<Search size={24} />}
              title="SEO & Reviews"
              description="Show up in local search results and turn happy customers into five-star reviews."
              linkTo="/services"
            />
          </div>
        </div>
      </section>

      {/* How It Works (Condensed) */}
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

      {/* Social Proof */}
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

      {/* Calculator Callout */}
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

      {/* CTA */}
      <CTASection
        headline="See what your site could look like -- free, no strings."
        buttonText="Get Your Free Demo Site"
        buttonTo="/contact"
      />

      <style>{`
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
          .problem-grid {
            grid-template-columns: 1fr;
            gap: 16px;
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
