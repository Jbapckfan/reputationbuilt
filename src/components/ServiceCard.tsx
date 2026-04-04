import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  linkTo?: string
}

export default function ServiceCard({ icon, title, description, linkTo }: ServiceCardProps) {
  const content = (
    <div className="service-card card">
      <div className="icon-wrap">{icon}</div>
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-desc">{description}</p>
      {linkTo && (
        <span className="service-card-link">
          Learn more <ArrowRight size={16} />
        </span>
      )}

      <style>{`
        .service-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
          height: 100%;
        }

        .service-card-title {
          font-size: 1.2rem;
          margin-bottom: 4px;
        }

        .service-card-desc {
          font-size: 0.95rem;
          color: var(--color-secondary);
          line-height: 1.6;
          flex: 1;
        }

        .service-card-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-amber);
          margin-top: 12px;
          transition: gap 0.2s;
        }

        .service-card:hover .service-card-link {
          gap: 8px;
        }
      `}</style>
    </div>
  )

  if (linkTo) {
    return <Link to={linkTo} style={{ textDecoration: 'none', color: 'inherit' }}>{content}</Link>
  }

  return content
}
