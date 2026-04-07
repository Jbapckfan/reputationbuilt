interface FounderProofBandProps {
  theme?: 'forest' | 'navy'
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 10h12" />
      <path d="m11 4 6 6-6 6" />
    </svg>
  )
}

export default function FounderProofBand({ theme = 'forest' }: FounderProofBandProps) {
  return (
    <section className={`founder-proof founder-proof--${theme}`}>
      <div className="container founder-proof__inner">
        <p className="founder-proof__eyebrow">
          Built by James Alford — Emergency Physician &amp; AI Builder in Kansas City
        </p>
        <p className="founder-proof__copy">
          ER-trained instincts for reading people, building trust fast, and making every detail count.
          That same precision goes into every site and system I build.
        </p>
        <a
          className="founder-proof__link"
          href="https://jamesalford.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit jamesalford.vercel.app
          <ArrowIcon />
        </a>
      </div>

      <style>{`
        .founder-proof {
          padding: 28px 24px;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          position: relative;
          overflow: hidden;
        }

        .founder-proof::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='360' height='160' viewBox='0 0 360 160'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='.08' stroke-width='1'%3E%3Cpath d='M12 118h114v-42h96v26h126'/%3E%3Cpath d='M34 138V86h44V50h82'/%3E%3Ccircle cx='92' cy='50' r='6'/%3E%3Ccircle cx='222' cy='76' r='6'/%3E%3Ccircle cx='304' cy='102' r='6'/%3E%3C/g%3E%3C/svg%3E");
          background-size: 420px auto;
          opacity: 0.4;
          pointer-events: none;
        }

        .founder-proof--forest {
          background:
            linear-gradient(90deg, rgba(27, 67, 50, 0.95), rgba(45, 106, 79, 0.95)),
            var(--color-primary);
        }

        .founder-proof--navy {
          background:
            linear-gradient(90deg, rgba(30, 58, 95, 0.98), rgba(13, 148, 136, 0.88)),
            #1e3a5f;
        }

        .founder-proof__inner {
          display: grid;
          grid-template-columns: 1.4fr 1fr auto;
          gap: 24px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .founder-proof__eyebrow {
          color: var(--color-white, #f8fafb);
          font-size: 0.92rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          max-width: none;
        }

        .founder-proof__copy {
          color: rgba(255, 255, 255, 0.82);
          font-size: 0.95rem;
          line-height: 1.7;
          max-width: none;
        }

        .founder-proof__link {
          justify-self: end;
          color: var(--color-white, #f8fafb);
          font-weight: 600;
          padding: 10px 14px;
          border: 1px solid rgba(255, 255, 255, 0.22);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.04);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: opacity 0.2s ease, background 0.2s ease, transform 0.2s ease;
        }

        .founder-proof__link:hover {
          opacity: 1;
          background: rgba(255, 255, 255, 0.09);
          transform: translateY(-1px);
        }

        @media (max-width: 900px) {
          .founder-proof__inner {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .founder-proof__link {
            justify-self: start;
          }
        }
      `}</style>
    </section>
  )
}
