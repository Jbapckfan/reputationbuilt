interface TimelineStep {
  number: number
  title: string
  description: string
}

interface TimelineProps {
  steps: TimelineStep[]
}

export default function Timeline({ steps }: TimelineProps) {
  return (
    <div className="timeline">
      {steps.map((step, i) => (
        <div className="timeline-step" key={step.number}>
          <div className="timeline-marker">
            <div className="timeline-number">{step.number}</div>
            {i < steps.length - 1 && <div className="timeline-line" />}
          </div>
          <div className="timeline-content">
            <h3 className="timeline-title">{step.title}</h3>
            <p className="timeline-desc">{step.description}</p>
          </div>
        </div>
      ))}

      <style>{`
        .timeline {
          display: flex;
          flex-direction: column;
          gap: 0;
          max-width: 640px;
          margin: 0 auto;
        }

        .timeline-step {
          display: flex;
          gap: 24px;
          position: relative;
        }

        .timeline-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
        }

        .timeline-number {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--color-primary);
          color: var(--color-white);
          font-weight: 700;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
        }

        .timeline-line {
          width: 2px;
          flex: 1;
          background: linear-gradient(to bottom, var(--color-primary), rgba(27, 67, 50, 0.15));
          min-height: 32px;
        }

        .timeline-content {
          padding-bottom: 40px;
          padding-top: 8px;
        }

        .timeline-step:last-child .timeline-content {
          padding-bottom: 0;
        }

        .timeline-title {
          font-size: 1.3rem;
          margin-bottom: 8px;
          color: var(--color-primary);
        }

        .timeline-desc {
          font-size: 1rem;
          color: var(--color-secondary);
          line-height: 1.7;
        }

        @media (max-width: 640px) {
          .timeline-step {
            gap: 16px;
          }

          .timeline-number {
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }

          .timeline-content {
            padding-bottom: 32px;
          }
        }
      `}</style>
    </div>
  )
}
