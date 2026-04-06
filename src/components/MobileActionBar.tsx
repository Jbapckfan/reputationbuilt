import { Link } from 'react-router-dom'
import { MessageSquareText, PhoneCall, Sparkles } from 'lucide-react'

export default function MobileActionBar() {
  return (
    <>
      <div className="mobile-cta-bar">
        <a className="mobile-cta-bar__action" href="tel:8165550100">
          <PhoneCall size={16} />
          Call
        </a>
        <a className="mobile-cta-bar__action" href="sms:8165550100">
          <MessageSquareText size={16} />
          Text
        </a>
        <Link className="mobile-cta-bar__action mobile-cta-bar__action--primary" to="/contact">
          <Sparkles size={16} />
          Get Demo
        </Link>
      </div>

      <style>{`
        .mobile-cta-bar {
          position: fixed;
          left: 12px;
          right: 12px;
          bottom: 12px;
          z-index: 60;
          display: none;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          padding: 12px;
          border-radius: 18px;
          background: rgba(28, 25, 23, 0.94);
          border: 1px solid rgba(217, 119, 6, 0.22);
          box-shadow: 0 18px 36px rgba(28, 25, 23, 0.28);
          backdrop-filter: blur(14px);
        }

        .mobile-cta-bar__action {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 46px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.04);
          color: var(--color-white);
          font-size: 0.92rem;
          font-weight: 700;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .mobile-cta-bar__action--primary {
          background: linear-gradient(135deg, var(--color-amber), var(--color-copper));
          border-color: rgba(255, 255, 255, 0.16);
        }

        @media (max-width: 768px) {
          .mobile-cta-bar {
            display: grid;
          }
        }
      `}</style>
    </>
  )
}
