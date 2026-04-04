import { Link } from 'react-router-dom'
import { ArrowRight, Shield, CreditCard, Heart } from 'lucide-react'
import Timeline from '../components/Timeline.tsx'
import CTASection from '../components/CTASection.tsx'

const steps = [
  {
    number: 1,
    title: 'Free Demo',
    description:
      'We build a preview site for your business before you spend a dime. You will see exactly what your website will look like, with real copy and a design tailored to your trade. No generic mockups, no vague promises. Just proof.',
  },
  {
    number: 2,
    title: 'Review & Refine',
    description:
      'You tell us what you love and what to change. Want a different color? Different photos? A new section? We will revise until it feels right. This is your site, and it should look exactly the way you want.',
  },
  {
    number: 3,
    title: 'Go Live',
    description:
      'We launch your site, connect your domain, and set up your AI automations. Everything is optimized for speed, mobile, and search engines. Your customers will find a professional website that makes you look as good as your work is.',
  },
  {
    number: 4,
    title: 'Ongoing Support',
    description:
      'We keep things running. Updates, SEO tweaks, content changes, AI tuning. If something needs fixing, we handle it. You will never have to worry about your website again.',
  },
]

export default function HowItWorks() {
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <h1>From first call to live site -- here is how it goes.</h1>
        <p>
          A simple, straightforward process. No runaround, no surprises.
        </p>
      </div>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <Timeline steps={steps} />
        </div>
      </section>

      {/* Trust Builders */}
      <section className="section section-linen">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <h2>Built on trust, not contracts</h2>
            <div className="divider" />
          </div>
          <div className="trust-grid">
            <div className="trust-card card">
              <div className="icon-wrap">
                <CreditCard size={24} />
              </div>
              <h3>No upfront cost</h3>
              <p>
                Your demo site is completely free. You do not pay anything until you have seen
                exactly what you are getting and decided to move forward.
              </p>
            </div>
            <div className="trust-card card">
              <div className="icon-wrap">
                <Shield size={24} />
              </div>
              <h3>No contracts</h3>
              <p>
                Month-to-month plans. If we are not earning your business every month, you
                should be free to walk. Simple as that.
              </p>
            </div>
            <div className="trust-card card">
              <div className="icon-wrap">
                <Heart size={24} />
              </div>
              <h3>Cancel anytime</h3>
              <p>
                30 days notice, no penalties, no hard feelings. We will even help you
                transition your site if you decide to go a different direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Ready? Takes 2 minutes."
        subtext="Tell us about your business and we will get started on your free demo site."
        buttonText="Get Your Free Demo Site"
        buttonTo="/contact"
      />

      <div className="text-center section" style={{ paddingTop: 0, paddingBottom: 48 }}>
        <Link
          to="/pricing"
          className="btn btn-outline btn-sm"
        >
          See Pricing
          <ArrowRight size={16} />
        </Link>
      </div>

      <style>{`
        .trust-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .trust-card {
          text-align: center;
        }

        .trust-card .icon-wrap {
          margin: 0 auto 16px;
        }

        .trust-card h3 {
          margin-bottom: 8px;
          font-size: 1.2rem;
        }

        .trust-card p {
          color: var(--color-secondary);
          font-size: 0.95rem;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .trust-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}
