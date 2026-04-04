import { useState } from 'react'
import type { FormEvent } from 'react'
import { Phone, Mail, Clock, MapPin, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <h1>Let's get your business found.</h1>
        <p>
          Tell us a little about your business and we will build you a free demo site. No commitment required.
        </p>
      </div>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <div className="contact-form-wrapper">
              {submitted ? (
                <div className="contact-success">
                  <CheckCircle size={48} style={{ color: 'var(--color-success)' }} />
                  <h3>Message received.</h3>
                  <p>
                    We will reply within 24 hours. In the meantime, we will start looking
                    into your business so we can hit the ground running.
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input
                        id="name"
                        type="text"
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="business">Business Name</label>
                      <input
                        id="business"
                        type="text"
                        placeholder="Smith's Plumbing"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="(816) 555-0100"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="john@smithplumbing.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Tell us about your business</label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="What kind of work do you do? What area do you serve? What is your biggest challenge with getting customers online?"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-amber btn-lg contact-submit">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <div className="contact-info-card card">
                <h3>Get in touch directly</h3>
                <p className="contact-info-subtitle">
                  Prefer to call or email? We are here.
                </p>

                <div className="contact-info-items">
                  <a href="tel:8165550100" className="contact-info-item">
                    <div className="icon-wrap icon-wrap-amber">
                      <Phone size={20} />
                    </div>
                    <div>
                      <strong>(816) 555-0100</strong>
                      <span>Call or text anytime</span>
                    </div>
                  </a>

                  <a href="mailto:hello@reputationbuilt.com" className="contact-info-item">
                    <div className="icon-wrap">
                      <Mail size={20} />
                    </div>
                    <div>
                      <strong>hello@reputationbuilt.com</strong>
                      <span>We reply within 24 hours</span>
                    </div>
                  </a>

                  <div className="contact-info-item">
                    <div className="icon-wrap">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <strong>Kansas City, MO</strong>
                      <span>Serving businesses everywhere</span>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="icon-wrap">
                      <Clock size={20} />
                    </div>
                    <div>
                      <strong>Mon - Fri, 8 AM - 6 PM CT</strong>
                      <span>Evenings and weekends by appointment</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-next-card card">
                <h4>What happens after I reach out?</h4>
                <ol className="contact-steps">
                  <li>We reply within 24 hours to learn more about your business.</li>
                  <li>We research your market and competitors.</li>
                  <li>We build you a free demo site within a few days.</li>
                  <li>You review it and decide if you want to move forward. No pressure.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 48px;
          align-items: start;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-text);
        }

        .form-group input,
        .form-group textarea {
          padding: 12px 16px;
          border: 1.5px solid rgba(0, 0, 0, 0.1);
          border-radius: var(--radius-sm);
          font-size: 1rem;
          color: var(--color-text);
          background: var(--color-white);
          transition: border-color 0.2s, box-shadow 0.2s;
          width: 100%;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(27, 67, 50, 0.1);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: var(--color-stone);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .contact-submit {
          align-self: flex-start;
        }

        .contact-success {
          text-align: center;
          padding: 48px 24px;
          background: var(--color-linen);
          border-radius: var(--radius-lg);
        }

        .contact-success h3 {
          margin: 16px 0 8px;
          font-size: 1.5rem;
          color: var(--color-primary);
        }

        .contact-success p {
          color: var(--color-secondary);
          font-size: 1rem;
          margin: 0 auto;
          max-width: 400px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .contact-info-card h3 {
          font-size: 1.3rem;
          margin-bottom: 4px;
        }

        .contact-info-subtitle {
          font-size: 0.9rem;
          color: var(--color-stone);
          margin-bottom: 24px;
        }

        .contact-info-items {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-info-item {
          display: flex;
          align-items: center;
          gap: 16px;
          text-decoration: none;
          color: inherit;
          transition: opacity 0.2s;
        }

        a.contact-info-item:hover {
          opacity: 0.8;
        }

        .contact-info-item .icon-wrap {
          margin-bottom: 0;
          width: 48px;
          height: 48px;
          flex-shrink: 0;
        }

        .contact-info-item div {
          display: flex;
          flex-direction: column;
        }

        .contact-info-item strong {
          font-size: 0.95rem;
          color: var(--color-text);
        }

        .contact-info-item span {
          font-size: 0.85rem;
          color: var(--color-stone);
        }

        .contact-next-card {
          background: var(--color-linen);
          border: none;
        }

        .contact-next-card h4 {
          font-size: 1.1rem;
          margin-bottom: 12px;
          font-family: var(--font-heading);
        }

        .contact-steps {
          display: flex;
          flex-direction: column;
          gap: 8px;
          counter-reset: step;
        }

        .contact-steps li {
          counter-increment: step;
          font-size: 0.9rem;
          color: var(--color-secondary);
          padding-left: 28px;
          position: relative;
          line-height: 1.5;
        }

        .contact-steps li::before {
          content: counter(step) '.';
          position: absolute;
          left: 0;
          font-weight: 700;
          color: var(--color-primary);
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .contact-submit {
            align-self: stretch;
          }
        }
      `}</style>
    </>
  )
}
