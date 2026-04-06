import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  TrendingUp,
  Phone,
  DollarSign,
  BarChart3,
  Calculator as CalcIcon,
  Mail,
  LoaderCircle,
  CircleCheck,
  AlertCircle,
} from 'lucide-react'
import Hero from '../components/Hero.tsx'
import CTASection from '../components/CTASection.tsx'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xyzplaceholder'

const trades = [
  'Plumber',
  'Electrician',
  'HVAC',
  'Roofer',
  'Landscaper',
  'Painter',
  'Handyman',
  'Concrete',
  'General Contractor',
  'Restaurant',
  'Auto Shop',
  'Salon/Barber',
  'Cleaning Service',
  'Other',
]

const revenueRanges = [
  { label: 'Under $10K', midpoint: 7500 },
  { label: '$10K - $25K', midpoint: 17500 },
  { label: '$25K - $50K', midpoint: 37500 },
  { label: '$50K - $100K', midpoint: 75000 },
  { label: '$100K+', midpoint: 125000 },
]

function getMultiplier(trade: string): [number, number] {
  switch (trade) {
    case 'Plumber':
    case 'HVAC':
    case 'Electrician':
      return [0.15, 0.25]
    case 'Roofer':
      return [0.2, 0.35]
    case 'Landscaper':
      return [0.1, 0.2]
    case 'Restaurant':
      return [0.08, 0.15]
    case 'Painter':
    case 'Handyman':
    case 'Concrete':
    case 'General Contractor':
    case 'Auto Shop':
    case 'Salon/Barber':
    case 'Cleaning Service':
    case 'Other':
    default:
      return [0.12, 0.22]
  }
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

interface Results {
  trade: string
  city: string
  currentRevenue: number
  lowEstimate: number
  highEstimate: number
  withWebsite: number
}

export default function Calculator() {
  const [trade, setTrade] = useState('')
  const [city, setCity] = useState('')
  const [revenueIndex, setRevenueIndex] = useState('')
  const [results, setResults] = useState<Results | null>(null)
  const [showResults, setShowResults] = useState(false)
  const [captureEmail, setCaptureEmail] = useState('')
  const [captureStatus, setCaptureStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [captureMessage, setCaptureMessage] = useState('')

  const handleCalculate = () => {
    if (!trade || !city.trim() || revenueIndex === '') return

    const range = revenueRanges[Number(revenueIndex)]
    const [lowMult, highMult] = getMultiplier(trade)
    const midpoint = range.midpoint
    const lowEstimate = Math.round(midpoint * lowMult)
    const highEstimate = Math.round(midpoint * highMult)

    setResults({
      trade,
      city: city.trim(),
      currentRevenue: midpoint,
      lowEstimate,
      highEstimate,
      withWebsite: midpoint + highEstimate,
    })
    setShowResults(true)
    setCaptureStatus('idle')
    setCaptureMessage('')
    setCaptureEmail('')
  }

  const handleEmailCapture = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!results) return

    const form = e.currentTarget
    const formData = new FormData(form)

    formData.set(
      'message',
      `Revenue report request for ${results.trade} in ${results.city}. Current monthly revenue: ${formatCurrency(results.currentRevenue)}. Estimated upside: ${formatCurrency(results.lowEstimate)} to ${formatCurrency(results.highEstimate)}.`
    )

    setCaptureStatus('submitting')
    setCaptureMessage('')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (!response.ok) {
        setCaptureStatus('error')
        setCaptureMessage(
          response.status === 404
            ? 'This Formspree endpoint is still a placeholder. Replace /f/xyzplaceholder with the live form ID to collect report requests.'
            : 'We could not save your report request right now. Please try again.'
        )
        return
      }

      form.reset()
      setCaptureStatus('success')
      setCaptureMessage('Report request received. We will send the full breakdown and recommendations shortly.')
      setCaptureEmail('')
    } catch {
      setCaptureStatus('error')
      setCaptureMessage('We could not reach the form service. Please try again.')
    }
  }

  const barMaxRevenue = results ? results.withWebsite : 1
  const currentBarWidth = results ? (results.currentRevenue / barMaxRevenue) * 100 : 0
  const withWebsiteBarWidth = 100

  return (
    <>
      <Hero
        title="What's your business leaving on the table?"
        subtitle="See how much revenue you could be missing without a professional online presence."
      >
        <a href="#calculator-form" className="btn btn-amber btn-lg">
          Calculate Your Revenue
          <CalcIcon size={18} />
        </a>
      </Hero>

      <section className="section" id="calculator-form">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <h2>Revenue Impact Calculator</h2>
            <div className="divider" />
            <p style={{ color: 'var(--color-secondary)', margin: '0 auto', maxWidth: 540 }}>
              Enter your business details below to see an estimate of how much additional
              revenue a professional online presence could generate.
            </p>
          </div>

          <div className="calc-form-card card">
            <div className="calc-form">
              <div className="calc-form-row">
                <div className="form-group">
                  <label htmlFor="calc-trade">Your Trade</label>
                  <select id="calc-trade" value={trade} onChange={e => setTrade(e.target.value)}>
                    <option value="">Select your trade...</option>
                    {trades.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="calc-city">City / State</label>
                  <input
                    id="calc-city"
                    type="text"
                    placeholder="Kansas City, MO"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                  />
                </div>
              </div>
              <div className="calc-form-row">
                <div className="form-group">
                  <label htmlFor="calc-revenue">Monthly Revenue Range</label>
                  <select id="calc-revenue" value={revenueIndex} onChange={e => setRevenueIndex(e.target.value)}>
                    <option value="">Select your revenue range...</option>
                    {revenueRanges.map((r, i) => (
                      <option key={r.label} value={i}>{r.label}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group calc-btn-group">
                  <button
                    className="btn btn-amber btn-lg calc-submit"
                    onClick={handleCalculate}
                    disabled={!trade || !city.trim() || revenueIndex === ''}
                  >
                    Calculate
                    <TrendingUp size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {results && (
        <section className={`section section-linen calc-results-section${showResults ? ' calc-results-visible' : ''}`}>
          <div className="container">
            <div className="calc-results-card card">
              <div className="calc-results-header">
                <h3>Your Revenue Estimate</h3>
                <p className="calc-results-context">
                  Based on industry data for <strong>{results.trade}</strong> businesses
                  in <strong>{results.city}</strong>
                </p>
              </div>

              <p className="calc-results-intro">
                Businesses like yours with a professional website and online presence typically see:
              </p>

              <div className="calc-stats-grid">
                <div className="calc-stat">
                  <div className="calc-stat-icon">
                    <Phone size={22} />
                  </div>
                  <div className="calc-stat-value">3-5x</div>
                  <div className="calc-stat-label">more inbound calls from local search</div>
                </div>
                <div className="calc-stat calc-stat--highlight">
                  <div className="calc-stat-icon calc-stat-icon--amber">
                    <DollarSign size={22} />
                  </div>
                  <div className="calc-stat-value">
                    {formatCurrency(results.lowEstimate)} - {formatCurrency(results.highEstimate)}
                  </div>
                  <div className="calc-stat-label">estimated additional monthly revenue</div>
                </div>
                <div className="calc-stat">
                  <div className="calc-stat-icon">
                    <BarChart3 size={22} />
                  </div>
                  <div className="calc-stat-value">127%</div>
                  <div className="calc-stat-label">average ROI on website investment in year one</div>
                </div>
              </div>

              <div className="calc-chart">
                <h4 className="calc-chart-title">Monthly Revenue Comparison</h4>
                <div className="calc-chart-bars">
                  <div className="calc-bar-row">
                    <div className="calc-bar-label">Without Website</div>
                    <div className="calc-bar-track">
                      <div className="calc-bar calc-bar--without" style={{ width: `${currentBarWidth}%` }}>
                        <span className="calc-bar-amount">{formatCurrency(results.currentRevenue)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="calc-bar-row">
                    <div className="calc-bar-label">With Professional Website</div>
                    <div className="calc-bar-track">
                      <div className="calc-bar calc-bar--with" style={{ width: `${withWebsiteBarWidth}%` }}>
                        <span className="calc-bar-amount">{formatCurrency(results.withWebsite)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="calc-chart-diff">
                  + {formatCurrency(results.highEstimate)} / month potential increase
                </div>
              </div>

              <div className="calc-capture">
                <div className="calc-capture__header">
                  <div className="calc-capture__icon">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4>Get your full revenue report + 3 personalized recommendations</h4>
                    <p>
                      We will send the estimate, plus a few concrete ways to turn more search traffic into booked jobs.
                    </p>
                  </div>
                </div>

                <form className="calc-capture__form" action={FORMSPREE_ENDPOINT} method="POST" onSubmit={handleEmailCapture}>
                  <input type="hidden" name="source" value="Reputation Built revenue calculator" />
                  <input type="hidden" name="trade" value={results.trade} />
                  <input type="hidden" name="city" value={results.city} />
                  <input type="hidden" name="businessName" value={`${results.trade} business`} />
                  <input type="hidden" name="phone" value="" />
                  <input type="hidden" name="name" value="Revenue calculator lead" />
                  <label className="calc-capture__field" htmlFor="report-email">
                    <span>Email address</span>
                    <input
                      id="report-email"
                      name="email"
                      type="email"
                      placeholder="you@business.com"
                      value={captureEmail}
                      onChange={e => setCaptureEmail(e.target.value)}
                      required
                    />
                  </label>
                  <button
                    type="submit"
                    className="btn btn-amber calc-capture__button"
                    disabled={captureStatus === 'submitting'}
                  >
                    {captureStatus === 'submitting' ? (
                      <>
                        Sending
                        <LoaderCircle size={18} className="calc-capture__spinner" />
                      </>
                    ) : (
                      'Email My Report'
                    )}
                  </button>
                </form>

                {captureStatus !== 'idle' && captureMessage && (
                  <div
                    className={`calc-capture__status calc-capture__status--${captureStatus}`}
                    role={captureStatus === 'error' ? 'alert' : 'status'}
                    aria-live="polite"
                  >
                    {captureStatus === 'success' ? <CircleCheck size={18} /> : <AlertCircle size={18} />}
                    <span>{captureMessage}</span>
                  </div>
                )}
              </div>

              <div className="calc-results-cta">
                <h3>Ready to capture this revenue?</h3>
                <p>We will build you a free demo site to prove it.</p>
                <Link to="/contact" className="btn btn-amber btn-lg">
                  Get Your Free Demo Site
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <p className="calc-fine-print">
              Estimates based on industry averages from ServiceTitan, Housecall Pro, and BrightLocal
              research. Individual results vary based on market, competition, and service quality.
            </p>
          </div>
        </section>
      )}

      {!results && (
        <CTASection
          headline="See what your site could look like -- free, no strings."
          buttonText="Get Your Free Demo Site"
          buttonTo="/contact"
        />
      )}

      <style>{`
        .calc-form-card {
          max-width: 720px;
          margin: 0 auto;
          padding: 36px 40px;
        }

        .calc-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .calc-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          align-items: end;
        }

        .calc-form .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .calc-form .form-group label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-text);
        }

        .calc-form .form-group input,
        .calc-form .form-group select {
          padding: 12px 16px;
          border: 1.5px solid rgba(0, 0, 0, 0.1);
          border-radius: var(--radius-sm);
          font-size: 1rem;
          color: var(--color-text);
          background: var(--color-white);
          transition: border-color 0.2s, box-shadow 0.2s;
          width: 100%;
          appearance: none;
          -webkit-appearance: none;
        }

        .calc-form .form-group select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23A8A29E' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 36px;
        }

        .calc-form .form-group input:focus,
        .calc-form .form-group select:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(27, 67, 50, 0.1);
        }

        .calc-form .form-group input::placeholder {
          color: var(--color-stone);
        }

        .calc-btn-group {
          justify-content: flex-end;
        }

        .calc-submit {
          width: 100%;
          margin-top: auto;
        }

        .calc-submit:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }

        .calc-submit:disabled:hover {
          transform: none;
          box-shadow: none;
        }

        .calc-results-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .calc-results-section.calc-results-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .calc-results-card {
          max-width: 800px;
          margin: 0 auto;
          padding: 44px 48px;
        }

        .calc-results-card:hover {
          transform: none;
        }

        .calc-results-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .calc-results-header h3 {
          font-size: 1.6rem;
          color: var(--color-primary);
          margin-bottom: 8px;
        }

        .calc-results-context {
          font-size: 0.95rem;
          color: var(--color-secondary);
          max-width: none;
        }

        .calc-results-intro {
          font-size: 1.05rem;
          color: var(--color-text);
          text-align: center;
          margin: 0 auto 32px;
          font-weight: 500;
          max-width: none;
        }

        .calc-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 40px;
        }

        .calc-stat {
          text-align: center;
          padding: 24px 16px;
          border-radius: var(--radius-md);
          background: var(--color-linen);
        }

        .calc-stat--highlight {
          background: rgba(217, 119, 6, 0.08);
          border: 1px solid rgba(217, 119, 6, 0.15);
        }

        .calc-stat-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(27, 67, 50, 0.08);
          color: var(--color-primary);
          margin-bottom: 12px;
        }

        .calc-stat-icon--amber {
          background: rgba(217, 119, 6, 0.12);
          color: var(--color-amber);
        }

        .calc-stat-value {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 4px;
          line-height: 1.3;
        }

        .calc-stat--highlight .calc-stat-value {
          color: var(--color-copper);
        }

        .calc-stat-label {
          font-size: 0.85rem;
          color: var(--color-secondary);
          line-height: 1.4;
        }

        .calc-chart {
          margin-bottom: 32px;
          padding: 28px;
          background: var(--color-linen);
          border-radius: var(--radius-md);
        }

        .calc-chart-title {
          font-size: 1rem;
          font-family: var(--font-body);
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 20px;
        }

        .calc-chart-bars {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .calc-bar-row {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .calc-bar-label {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--color-secondary);
        }

        .calc-bar-track {
          width: 100%;
          height: 44px;
          background: rgba(0, 0, 0, 0.04);
          border-radius: var(--radius-sm);
          overflow: hidden;
        }

        .calc-bar {
          height: 100%;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 0 14px;
          transition: width 0.8s cubic-bezier(0.22, 1, 0.36, 1);
          min-width: fit-content;
        }

        .calc-bar--without {
          background: var(--color-stone);
        }

        .calc-bar--with {
          background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
        }

        .calc-bar-amount {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-white);
          white-space: nowrap;
        }

        .calc-chart-diff {
          text-align: center;
          margin-top: 16px;
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-primary);
        }

        .calc-capture {
          margin-bottom: 36px;
          padding: 28px;
          border-radius: var(--radius-md);
          background: rgba(27, 67, 50, 0.04);
          border: 1px solid rgba(27, 67, 50, 0.08);
        }

        .calc-capture__header {
          display: flex;
          gap: 16px;
          margin-bottom: 18px;
        }

        .calc-capture__icon {
          width: 44px;
          height: 44px;
          flex-shrink: 0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(217, 119, 6, 0.12);
          color: var(--color-amber);
        }

        .calc-capture__header h4 {
          font-size: 1.1rem;
          margin-bottom: 6px;
        }

        .calc-capture__header p {
          color: var(--color-secondary);
          max-width: none;
        }

        .calc-capture__form {
          display: flex;
          gap: 14px;
          align-items: end;
        }

        .calc-capture__field {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-text);
        }

        .calc-capture__field input {
          width: 100%;
          padding: 12px 16px;
          border: 1.5px solid rgba(0, 0, 0, 0.1);
          border-radius: var(--radius-sm);
          font-size: 1rem;
          color: var(--color-text);
          background: var(--color-white);
        }

        .calc-capture__field input:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(27, 67, 50, 0.1);
        }

        .calc-capture__button {
          min-height: 50px;
        }

        .calc-capture__spinner {
          animation: calc-spin 0.9s linear infinite;
        }

        .calc-capture__status {
          display: inline-flex;
          align-items: flex-start;
          gap: 10px;
          margin-top: 14px;
          padding: 12px 14px;
          border-radius: 12px;
          font-size: 0.92rem;
          line-height: 1.5;
        }

        .calc-capture__status--success {
          background: rgba(22, 163, 74, 0.08);
          color: #166534;
        }

        .calc-capture__status--error {
          background: rgba(185, 28, 28, 0.08);
          color: #991b1b;
        }

        @keyframes calc-spin {
          to {
            transform: rotate(360deg);
          }
        }

        .calc-results-cta {
          text-align: center;
          padding: 32px 24px;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
          border-radius: var(--radius-md);
          margin-top: 8px;
        }

        .calc-results-cta h3 {
          color: var(--color-white);
          font-size: 1.4rem;
          margin-bottom: 8px;
        }

        .calc-results-cta p {
          color: rgba(255, 255, 255, 0.8);
          margin: 0 auto 20px;
          max-width: none;
        }

        .calc-fine-print {
          text-align: center;
          font-size: 0.8rem;
          color: var(--color-stone);
          margin-top: 32px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .calc-form-card {
            padding: 24px 20px;
          }

          .calc-form-row,
          .calc-stats-grid,
          .calc-capture__header,
          .calc-capture__form {
            grid-template-columns: 1fr;
            flex-direction: column;
            align-items: stretch;
          }

          .calc-results-card {
            padding: 28px 20px;
          }

          .calc-stats-grid {
            gap: 16px;
          }

          .calc-stat {
            padding: 20px 16px;
          }

          .calc-stat-value {
            font-size: 1.3rem;
          }

          .calc-chart,
          .calc-capture,
          .calc-results-cta {
            padding: 20px 16px;
          }

          .calc-results-cta h3 {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  )
}
