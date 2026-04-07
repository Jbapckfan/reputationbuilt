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

function buildResults(trade: string, city: string, revenueIndex: string): Results | null {
  if (!trade || !city.trim() || revenueIndex === '') return null

  const range = revenueRanges[Number(revenueIndex)]
  const [lowMult, highMult] = getMultiplier(trade)
  const midpoint = range.midpoint
  const lowEstimate = Math.round(midpoint * lowMult)
  const highEstimate = Math.round(midpoint * highMult)

  return {
    trade,
    city: city.trim(),
    currentRevenue: midpoint,
    lowEstimate,
    highEstimate,
    withWebsite: midpoint + highEstimate,
  }
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

  const liveResults = buildResults(trade, city, revenueIndex)
  const panelResults = liveResults ?? results

  const handleCalculate = () => {
    if (!liveResults) return

    setResults(liveResults)
    setShowResults(true)
    setCaptureStatus('idle')
    setCaptureMessage('')
    setCaptureEmail('')
  }

  const handleEmailCapture = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const activeResults = results ?? liveResults
    if (!activeResults) return

    const form = e.currentTarget
    const formData = new FormData(form)

    formData.set(
      'message',
      `Revenue report request for ${activeResults.trade} in ${activeResults.city}. Current monthly revenue: ${formatCurrency(activeResults.currentRevenue)}. Estimated upside: ${formatCurrency(activeResults.lowEstimate)} to ${formatCurrency(activeResults.highEstimate)}.`
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

  const barMaxRevenue = panelResults ? panelResults.withWebsite : 1
  const currentBarWidth = panelResults ? (panelResults.currentRevenue / barMaxRevenue) * 100 : 44

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

      <section className="section calc-dashboard-section" id="calculator-form">
        <div className="container calc-dashboard">
          <aside className="calc-inputs card">
            <div className="calc-inputs__header">
              <span className="calc-inputs__eyebrow">Revenue impact calculator</span>
              <h2>Build your estimate</h2>
              <p>Three inputs, then a live range based on your trade and revenue band.</p>
            </div>

            <div className="calc-form">
              <label className="calc-field" htmlFor="calc-trade">
                <span>Your trade</span>
                <select id="calc-trade" value={trade} onChange={e => setTrade(e.target.value)}>
                  <option value="">Select your trade...</option>
                  {trades.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </label>

              <label className="calc-field" htmlFor="calc-city">
                <span>City / State</span>
                <input
                  id="calc-city"
                  type="text"
                  placeholder="Kansas City, MO"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                />
              </label>

              <label className="calc-field" htmlFor="calc-revenue">
                <span>Monthly revenue range</span>
                <select id="calc-revenue" value={revenueIndex} onChange={e => setRevenueIndex(e.target.value)}>
                  <option value="">Select your revenue range...</option>
                  {revenueRanges.map((range, i) => (
                    <option key={range.label} value={i}>{range.label}</option>
                  ))}
                </select>
              </label>
            </div>

            <button
              className="btn btn-amber btn-lg calc-submit"
              onClick={handleCalculate}
              disabled={!liveResults}
            >
              Generate Full Breakdown
              <TrendingUp size={18} />
            </button>

            <div className="calc-inputs__notes">
              <div>
                <strong>Feels like a product review</strong>
                <span>We frame the estimate around jobs, calls, and missed demand.</span>
              </div>
              <div>
                <strong>Built for local operators</strong>
                <span>Plumbers, roofers, landscapers, electricians, and related trades.</span>
              </div>
            </div>
          </aside>

          <div className="calc-results card">
            <div className="calc-results__top">
              <div>
                <span className="calc-results__eyebrow">Live forecast</span>
                <h3>{panelResults ? `${panelResults.trade} in ${panelResults.city}` : 'Your monthly upside will appear here'}</h3>
              </div>
              <div className={`calc-delta-chip${panelResults ? ' calc-delta-chip--active' : ''}`}>
                {panelResults
                  ? `+${formatCurrency(panelResults.lowEstimate)} to +${formatCurrency(panelResults.highEstimate)}/mo`
                  : '+$X to +$Y/mo'}
              </div>
            </div>

            <div className="calc-results__grid">
              <div className="calc-kpi">
                <div className="calc-kpi__icon"><Phone size={18} /></div>
                <strong>{panelResults ? '3-5x more calls' : 'Inbound call lift'}</strong>
                <span>{panelResults ? 'Typical lift after a clear website + local search presence.' : 'Clearer local trust signals usually drive more call volume.'}</span>
              </div>
              <div className="calc-kpi calc-kpi--amber">
                <div className="calc-kpi__icon calc-kpi__icon--amber"><DollarSign size={18} /></div>
                <strong>{panelResults ? `${formatCurrency(panelResults.lowEstimate)} - ${formatCurrency(panelResults.highEstimate)}` : 'Revenue delta'}</strong>
                <span>{panelResults ? 'Estimated additional monthly revenue range.' : 'Your upside range populates once all three inputs are filled.'}</span>
              </div>
              <div className="calc-kpi">
                <div className="calc-kpi__icon"><BarChart3 size={18} /></div>
                <strong>{panelResults ? formatCurrency(panelResults.withWebsite) : 'Projected total'}</strong>
                <span>{panelResults ? 'Projected monthly revenue with a strong online presence.' : 'We compare your current baseline against the modeled upside.'}</span>
              </div>
            </div>

            <div className="calc-chart">
              <div className="calc-chart__header">
                <h4>Monthly revenue comparison</h4>
                <span>{panelResults ? revenueRanges[Number(revenueIndex)].label : 'Awaiting inputs'}</span>
              </div>
              <div className="calc-bar-row">
                <div className="calc-bar-row__label">
                  <span>Current baseline</span>
                  <strong>{panelResults ? formatCurrency(panelResults.currentRevenue) : '$0'}</strong>
                </div>
                <div className="calc-bar-track">
                  <div className="calc-bar calc-bar--without" style={{ width: `${currentBarWidth}%` }} />
                </div>
              </div>
              <div className="calc-bar-row">
                <div className="calc-bar-row__label">
                  <span>With a professional site</span>
                  <strong>{panelResults ? formatCurrency(panelResults.withWebsite) : '$0'}</strong>
                </div>
                <div className="calc-bar-track">
                  <div className="calc-bar calc-bar--with" style={{ width: panelResults ? '100%' : '68%' }} />
                </div>
              </div>
            </div>

            <div className="calc-results__footer">
              <div className="calc-results__summary">
                <h4>What this estimate assumes</h4>
                <p>
                  Better conversion from local search, stronger first-impression trust, and clearer call-to-action paths for the services you already sell well.
                </p>
              </div>

              {showResults && results ? (
                <div className="calc-capture">
                  <div className="calc-capture__header">
                    <div className="calc-capture__icon">
                      <Mail size={18} />
                    </div>
                    <div>
                      <h4>Email the full report</h4>
                      <p>We will send the estimate plus 3 concrete recommendations for your business.</p>
                    </div>
                  </div>

                  <form className="calc-capture__form" action={FORMSPREE_ENDPOINT} method="POST" onSubmit={handleEmailCapture}>
                    <input type="hidden" name="source" value="Reputation Built revenue calculator" />
                    <input type="hidden" name="trade" value={results.trade} />
                    <input type="hidden" name="city" value={results.city} />
                    <input type="hidden" name="businessName" value={`${results.trade} business`} />
                    <input type="hidden" name="phone" value="" />
                    <input type="hidden" name="name" value="Revenue calculator lead" />
                    <label className="calc-field" htmlFor="report-email">
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
                    <button type="submit" className="btn btn-amber calc-capture__button" disabled={captureStatus === 'submitting'}>
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
              ) : (
                <div className="calc-results__cta">
                  <h4>Want the full breakdown?</h4>
                  <p>Generate the report, then we can build a free demo site to validate it.</p>
                  <Link to="/contact" className="btn btn-outline">
                    Get Your Free Demo Site
                    <ArrowRight size={16} />
                  </Link>
                </div>
              )}
            </div>

            <p className="calc-fine-print">
              Estimates based on industry averages from ServiceTitan, Housecall Pro, and BrightLocal research. Individual results vary based on market, competition, and service quality.
            </p>
          </div>
        </div>
      </section>

      {!showResults && (
        <CTASection
          headline="See what your site could look like -- free, no strings."
          buttonText="Get Your Free Demo Site"
          buttonTo="/contact"
        />
      )}

      <style>{`
        .calc-dashboard-section {
          background:
            linear-gradient(180deg, rgba(245, 240, 235, 0.75) 0%, rgba(250, 248, 245, 1) 100%);
        }

        .calc-dashboard {
          display: grid;
          grid-template-columns: minmax(320px, 380px) minmax(0, 1fr);
          gap: 28px;
          align-items: start;
        }

        .calc-inputs,
        .calc-results {
          padding: 32px;
        }

        .calc-inputs {
          position: sticky;
          top: calc(var(--header-height) + 24px);
          display: grid;
          gap: 24px;
        }

        .calc-inputs__header h2 {
          font-size: 2rem;
          color: var(--color-primary);
          margin: 10px 0 8px;
        }

        .calc-inputs__header p {
          color: var(--color-secondary);
          max-width: none;
        }

        .calc-inputs__eyebrow,
        .calc-results__eyebrow {
          display: inline-flex;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--color-amber);
        }

        .calc-form {
          display: grid;
          gap: 16px;
        }

        .calc-field {
          display: grid;
          gap: 6px;
        }

        .calc-field span {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-text);
        }

        .calc-field input,
        .calc-field select {
          padding: 13px 16px;
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

        .calc-field select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23A8A29E' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 36px;
        }

        .calc-field input:focus,
        .calc-field select:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(27, 67, 50, 0.08);
        }

        .calc-submit {
          width: 100%;
        }

        .calc-submit:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .calc-inputs__notes {
          display: grid;
          gap: 12px;
          padding-top: 4px;
        }

        .calc-inputs__notes div {
          padding: 16px;
          border-radius: 14px;
          background: var(--color-linen);
          border: 1px solid rgba(27, 67, 50, 0.06);
        }

        .calc-inputs__notes strong {
          display: block;
          margin-bottom: 4px;
          color: var(--color-primary);
          font-size: 0.95rem;
        }

        .calc-inputs__notes span {
          color: var(--color-secondary);
          font-size: 0.88rem;
          line-height: 1.55;
        }

        .calc-results {
          display: grid;
          gap: 28px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(245, 240, 235, 0.86) 100%);
        }

        .calc-results__top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
        }

        .calc-results__top h3 {
          margin-top: 10px;
          font-size: clamp(1.6rem, 3vw, 2.35rem);
          color: var(--color-primary);
        }

        .calc-delta-chip {
          flex-shrink: 0;
          padding: 16px 18px;
          min-width: 230px;
          border-radius: 20px;
          background: rgba(217, 119, 6, 0.1);
          color: var(--color-copper);
          font-size: clamp(1.2rem, 2.5vw, 1.8rem);
          font-weight: 700;
          line-height: 1.1;
          text-align: center;
          letter-spacing: -0.03em;
          border: 1px solid rgba(217, 119, 6, 0.18);
        }

        .calc-delta-chip--active {
          background: linear-gradient(135deg, rgba(251, 191, 36, 0.24), rgba(217, 119, 6, 0.18));
          box-shadow: 0 18px 40px rgba(217, 119, 6, 0.12);
        }

        .calc-results__grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .calc-kpi {
          padding: 18px;
          border-radius: 16px;
          background: rgba(245, 240, 235, 0.72);
          border: 1px solid rgba(27, 67, 50, 0.08);
        }

        .calc-kpi--amber {
          background: rgba(217, 119, 6, 0.08);
          border-color: rgba(217, 119, 6, 0.16);
        }

        .calc-kpi__icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(27, 67, 50, 0.08);
          color: var(--color-primary);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }

        .calc-kpi__icon--amber {
          background: rgba(217, 119, 6, 0.14);
          color: var(--color-copper);
        }

        .calc-kpi strong {
          display: block;
          margin-bottom: 6px;
          color: var(--color-primary);
          font-size: 1rem;
        }

        .calc-kpi span {
          display: block;
          color: var(--color-secondary);
          font-size: 0.9rem;
          line-height: 1.55;
        }

        .calc-chart {
          padding: 24px;
          border-radius: 20px;
          background: var(--color-linen);
          border: 1px solid rgba(27, 67, 50, 0.08);
        }

        .calc-chart__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 18px;
        }

        .calc-chart__header h4 {
          font-family: var(--font-body);
          font-size: 1rem;
          font-weight: 700;
        }

        .calc-chart__header span {
          color: var(--color-secondary);
          font-size: 0.9rem;
          font-weight: 600;
        }

        .calc-bar-row {
          display: grid;
          gap: 8px;
        }

        .calc-bar-row + .calc-bar-row {
          margin-top: 16px;
        }

        .calc-bar-row__label {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 16px;
        }

        .calc-bar-row__label span {
          color: var(--color-secondary);
          font-size: 0.9rem;
        }

        .calc-bar-row__label strong {
          color: var(--color-primary);
          font-size: 0.95rem;
        }

        .calc-bar-track {
          width: 100%;
          height: 46px;
          padding: 5px;
          background: rgba(255, 255, 255, 0.62);
          border-radius: 999px;
        }

        .calc-bar {
          height: 100%;
          border-radius: 999px;
          transition: width 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .calc-bar--without {
          background: rgba(168, 162, 158, 0.92);
        }

        .calc-bar--with {
          background: linear-gradient(90deg, var(--color-primary), var(--color-primary-light));
        }

        .calc-results__footer {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(280px, 1.05fr);
          gap: 20px;
        }

        .calc-results__summary,
        .calc-results__cta,
        .calc-capture {
          padding: 22px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid rgba(27, 67, 50, 0.08);
        }

        .calc-results__summary h4,
        .calc-results__cta h4,
        .calc-capture h4 {
          font-size: 1.05rem;
          margin-bottom: 8px;
          color: var(--color-primary);
        }

        .calc-results__summary p,
        .calc-results__cta p,
        .calc-capture p {
          color: var(--color-secondary);
          max-width: none;
          line-height: 1.6;
        }

        .calc-results__cta .btn {
          margin-top: 16px;
        }

        .calc-capture {
          display: grid;
          gap: 18px;
        }

        .calc-capture__header {
          display: flex;
          gap: 14px;
        }

        .calc-capture__icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(217, 119, 6, 0.12);
          color: var(--color-copper);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .calc-capture__form {
          display: grid;
          gap: 14px;
        }

        .calc-capture__button {
          width: 100%;
        }

        .calc-capture__spinner {
          animation: calc-spin 1s linear infinite;
        }

        .calc-capture__status {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 12px;
          font-size: 0.92rem;
          line-height: 1.5;
        }

        .calc-capture__status--success {
          background: rgba(22, 163, 74, 0.08);
          color: var(--color-success);
        }

        .calc-capture__status--error {
          background: rgba(217, 119, 6, 0.08);
          color: var(--color-copper);
        }

        .calc-fine-print {
          font-size: 0.82rem;
          color: var(--color-secondary);
          max-width: none;
        }

        @keyframes calc-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 1024px) {
          .calc-dashboard {
            grid-template-columns: 1fr;
          }

          .calc-inputs {
            position: static;
          }

          .calc-results__grid,
          .calc-results__footer {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .calc-inputs,
          .calc-results {
            padding: 24px;
          }

          .calc-results__top,
          .calc-chart__header,
          .calc-bar-row__label {
            flex-direction: column;
            align-items: flex-start;
          }

          .calc-delta-chip {
            width: 100%;
            min-width: 0;
          }
        }
      `}</style>
    </>
  )
}
