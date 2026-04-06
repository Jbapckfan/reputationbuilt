interface FounderProofBandProps {
  theme?: 'forest' | 'navy'
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
        </a>
      </div>

      <style>{`
        .founder-proof {
          padding: 28px 24px;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
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
          padding-bottom: 4px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.35);
          transition: opacity 0.2s ease;
        }

        .founder-proof__link:hover {
          opacity: 0.78;
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
