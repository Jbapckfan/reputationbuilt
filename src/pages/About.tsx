import { Link } from 'react-router-dom'
import { ArrowRight, DollarSign, Target, Wrench } from 'lucide-react'
import CTASection from '../components/CTASection.tsx'

export default function About() {
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <h1>Built by someone who actually builds things.</h1>
        <p>
          Reputation Built is not an agency. It is one person who cares about doing great work for people who do great work.
        </p>
      </div>

      {/* James's Story */}
      <section className="section">
        <div className="container">
          <div className="about-story">
            <div className="about-portrait">
              <div className="about-portrait-placeholder">
                <span>JA</span>
              </div>
              <p className="about-portrait-caption">James Alford, Founder</p>
              <p className="about-portrait-location">Kansas City, MO</p>
            </div>
            <div className="about-text">
              <h2>The short version</h2>
              <div className="divider" style={{ margin: '16px 0' }} />
              <p>
                I am an emergency physician in Kansas City. I spend my days solving problems
                under pressure, and I bring that same precision and care to everything I do
                outside the hospital.
              </p>
              <p>
                A few years ago, I started building AI systems for my own use -- tools that
                could handle routine tasks, capture information, and keep things running while
                I was focused on patients. I got good at it. Really good.
              </p>
              <p>
                Then I started noticing something. The plumber who fixed my kitchen did
                incredible work, but his "website" was a Facebook page from 2018. The
                landscaper who transformed my yard had zero Google reviews. The electrician
                my neighbor swears by? Invisible online.
              </p>
              <p>
                These people were doing exceptional work. They had earned reputations that
                could carry a business for decades. But if you searched for them online, you
                would find their competitors instead -- companies with flashier websites and
                more reviews, but not necessarily better work.
              </p>
              <p>
                So I started building sites for them. Custom websites, AI phone systems,
                review automation. And it worked. Calls went up. Bookings went up. For the
                first time, their online presence matched the quality of their work.
              </p>
              <p>
                That is Reputation Built. I take businesses that are already great and make
                sure the world can find them. I bring the same precision to your website that
                I bring to everything else -- because your reputation deserves it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-linen">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <h2>What we stand for</h2>
            <div className="divider" />
          </div>
          <div className="values-grid">
            <div className="card value-card">
              <div className="icon-wrap">
                <DollarSign size={24} />
              </div>
              <h3>Honest Pricing</h3>
              <p>
                No hidden fees, no surprise charges, no bait-and-switch. What we quote is
                what you pay. If something changes, we tell you first.
              </p>
            </div>
            <div className="card value-card">
              <div className="icon-wrap">
                <Target size={24} />
              </div>
              <h3>Real Results</h3>
              <p>
                A pretty website means nothing if it does not bring in customers. Every
                decision we make is aimed at getting your phone to ring.
              </p>
            </div>
            <div className="card value-card">
              <div className="icon-wrap">
                <Wrench size={24} />
              </div>
              <h3>Built to Last</h3>
              <p>
                We do not cut corners. Your site is built on solid technology, maintained
                regularly, and designed to grow with your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Want to work together?"
        subtext="Let us build something for your business. Start with a free demo site -- no commitment, no pressure."
        buttonText="Get Your Free Demo Site"
        buttonTo="/contact"
      />

      <div className="text-center section" style={{ paddingTop: 0, paddingBottom: 48 }}>
        <Link to="/services" className="btn btn-outline btn-sm">
          See Our Services
          <ArrowRight size={16} />
        </Link>
      </div>

      <style>{`
        .about-story {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 64px;
          align-items: start;
        }

        .about-portrait {
          text-align: center;
          position: sticky;
          top: 100px;
        }

        .about-portrait-placeholder {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: var(--color-linen);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          font-family: var(--font-heading);
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--color-primary);
          border: 3px solid rgba(27, 67, 50, 0.1);
        }

        .about-portrait-caption {
          font-weight: 600;
          font-size: 1rem;
          color: var(--color-text);
          margin-bottom: 4px;
        }

        .about-portrait-location {
          font-size: 0.9rem;
          color: var(--color-stone);
        }

        .about-text h2 {
          margin-bottom: 4px;
        }

        .about-text p {
          font-size: 1.05rem;
          color: var(--color-secondary);
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .about-text p:last-child {
          margin-bottom: 0;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .value-card {
          text-align: center;
        }

        .value-card .icon-wrap {
          margin: 0 auto 16px;
        }

        .value-card h3 {
          margin-bottom: 8px;
          font-size: 1.2rem;
        }

        .value-card p {
          color: var(--color-secondary);
          font-size: 0.95rem;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .about-story {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .about-portrait {
            position: static;
          }

          .about-portrait-placeholder {
            width: 160px;
            height: 160px;
            font-size: 2rem;
          }

          .values-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}
