import { useState } from 'react'
import {
  Globe,
  PhoneCall,
  CalendarCheck,
  MapPin,
  Star,
  Camera,
  ChevronDown,
  Smartphone,
  Zap,
  Clock,
  Users,
  TrendingUp,
  Image,
} from 'lucide-react'
import CTASection from '../components/CTASection.tsx'

interface ServiceBlockProps {
  icon: React.ReactNode
  title: string
  tagline: string
  description: string
  features: string[]
  reverse?: boolean
  featureIcon?: React.ReactNode
}

function ServiceBlock({ icon, title, tagline, description, features, reverse, featureIcon }: ServiceBlockProps) {
  return (
    <div className={`service-block${reverse ? ' service-block--reverse' : ''}`}>
      <div className="service-block-visual">
        <div className="service-block-icon-large">{icon}</div>
      </div>
      <div className="service-block-content">
        <h2 className="service-block-title">{title}</h2>
        <p className="service-block-tagline">{tagline}</p>
        <p className="service-block-desc">{description}</p>
        <ul className="service-block-features">
          {features.map((feature, i) => (
            <li key={i}>
              {featureIcon || <Zap size={16} className="feature-bullet" />}
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: 'How much does a website cost?',
    answer: 'Our plans start at $149/month, which includes your website, hosting, and ongoing support. There are no large upfront costs. We build your demo for free before you commit to anything.',
  },
  {
    question: 'How long does it take to get my site live?',
    answer: 'Most sites go live within 5-7 business days after you approve your demo. Complex projects with extra pages or integrations may take a bit longer, but we will give you a clear timeline upfront.',
  },
  {
    question: 'Do I own my website?',
    answer: 'Yes. All content, images, and copy we create for your business are yours. If you ever decide to leave, we will export everything for you. No hostage situations here.',
  },
  {
    question: 'What is the AI phone answering?',
    answer: 'It is a custom AI voice agent trained on your business. When you cannot answer the phone, the AI picks up, answers questions about your services, and captures the caller\'s information so you can follow up. It sounds natural, not robotic.',
  },
  {
    question: 'Do I need to sign a long-term contract?',
    answer: 'No. Our plans are month-to-month. We believe if we are doing a great job, you will want to stay. If not, you can cancel anytime with 30 days notice.',
  },
  {
    question: 'Can you work with a business outside Kansas City?',
    answer: 'Absolutely. While we are based in Kansas City, everything we do works for local businesses anywhere. We have built sites for businesses across the country.',
  },
]

export default function Services() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <h1>Everything your business needs to get found online.</h1>
        <p>
          From your website to your phone line, we handle the tech so you can handle the work.
        </p>
      </div>

      {/* Service Blocks */}
      <section className="section">
        <div className="container">
          <div className="service-blocks">
            <ServiceBlock
              icon={<Globe size={48} />}
              title="Custom Website Design"
              tagline="Your business, front and center."
              description="No templates, no cookie-cutter layouts. We build a website that looks and feels like your business -- because it is. Every page is designed to turn visitors into customers."
              features={[
                'Up to 5 custom-designed pages',
                'Mobile-first responsive design',
                'Click-to-call and contact forms',
                'Lightning-fast page load speeds',
                'Professional copywriting included',
                'SSL security and hosting included',
              ]}
              featureIcon={<Smartphone size={16} className="feature-bullet" />}
            />
            <ServiceBlock
              icon={<PhoneCall size={48} />}
              title="AI Phone Answering & Text Auto-Reply"
              tagline="Never miss a lead -- even at 2 AM."
              description="Your phone rings at the worst times -- on a job, at dinner, in the middle of the night. Our AI voice agent answers like a real receptionist, trained specifically on your business."
              features={[
                'Custom AI voice agent for your business',
                'Answers calls 24/7, even holidays',
                'SMS auto-reply for missed texts',
                'Lead capture with instant notifications',
                'Sounds natural, not robotic',
                'Transfers urgent calls to your cell',
              ]}
              featureIcon={<Clock size={16} className="feature-bullet" />}
              reverse
            />
            <ServiceBlock
              icon={<CalendarCheck size={48} />}
              title="Online Scheduling"
              tagline="Let customers book without the back-and-forth."
              description="Customers can see your availability and book appointments right from your website. No more phone tag, no more missed opportunities."
              features={[
                'Real-time calendar sync',
                'Automatic appointment reminders',
                'Customizable availability windows',
                'Works on mobile and desktop',
                'Reduces no-shows significantly',
              ]}
              featureIcon={<CalendarCheck size={16} className="feature-bullet" />}
            />
            <ServiceBlock
              icon={<MapPin size={48} />}
              title="Google Business Profile Optimization"
              tagline='Show up when they search "near me."'
              description="When someone in your area searches for what you do, your Google Business Profile is often the first thing they see. We make sure it is complete, accurate, and working hard for you."
              features={[
                'Category and keyword optimization',
                'Professional photo uploads',
                'Regular Google Posts schedule',
                'Service area and hours management',
                'Competitor analysis and positioning',
              ]}
              featureIcon={<TrendingUp size={16} className="feature-bullet" />}
              reverse
            />
            <ServiceBlock
              icon={<Star size={48} />}
              title="Review Management"
              tagline="Turn happy customers into five-star reviews."
              description="You do great work. Your online reputation should reflect that. We set up automated follow-ups that make it easy for satisfied customers to leave a review."
              features={[
                'Automated review request follow-ups',
                'Review monitoring dashboard',
                'Response templates for all review types',
                'Multi-platform support (Google, Yelp, Facebook)',
                'Monthly reputation reports',
              ]}
              featureIcon={<Users size={16} className="feature-bullet" />}
            />
            <ServiceBlock
              icon={<Camera size={48} />}
              title="Professional Photography"
              tagline="Real photos of your real business."
              description="Stock photos look like stock photos. We send a photographer to capture your team, your work, and your business as it actually is. Customers trust what they can see."
              features={[
                'Owner and crew headshots',
                'Action shots on the job site',
                'Before-and-after project documentation',
                'Equipment and workspace photos',
                'Included in Growth and Full Send plans',
              ]}
              featureIcon={<Image size={16} className="feature-bullet" />}
              reverse
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-linen">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <h2>Frequently asked questions</h2>
            <div className="divider" />
          </div>
          <div className="faq-list">
            {faqData.map((item, i) => (
              <div
                className={`faq-item${openFAQ === i ? ' faq-item--open' : ''}`}
                key={i}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  aria-expanded={openFAQ === i}
                >
                  <span>{item.question}</span>
                  <ChevronDown size={20} className="faq-chevron" />
                </button>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Not sure what you need? Let's talk."
        subtext="We will learn about your business and recommend exactly what makes sense. No pressure, no pitch."
        buttonText="Get in Touch"
        buttonTo="/contact"
      />

      <style>{`
        .service-blocks {
          display: flex;
          flex-direction: column;
          gap: 64px;
        }

        .service-block {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 48px;
          align-items: center;
        }

        .service-block--reverse {
          direction: rtl;
        }

        .service-block--reverse > * {
          direction: ltr;
        }

        .service-block-visual {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .service-block-icon-large {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: var(--color-linen);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-primary);
        }

        .service-block-title {
          font-size: clamp(1.5rem, 3vw, 2rem);
          margin-bottom: 4px;
        }

        .service-block-tagline {
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--color-amber);
          margin-bottom: 12px;
          font-style: italic;
        }

        .service-block-desc {
          color: var(--color-secondary);
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .service-block-features {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .service-block-features li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.95rem;
        }

        .feature-bullet {
          color: var(--color-success);
          flex-shrink: 0;
        }

        .faq-list {
          max-width: 720px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .faq-item {
          background: var(--color-white);
          border-radius: var(--radius-md);
          border: 1px solid rgba(0, 0, 0, 0.06);
          overflow: hidden;
        }

        .faq-question {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 18px 24px;
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-text);
          text-align: left;
          cursor: pointer;
          background: none;
          border: none;
          font-family: inherit;
          gap: 16px;
        }

        .faq-chevron {
          transition: transform 0.25s ease;
          flex-shrink: 0;
          color: var(--color-stone);
        }

        .faq-item--open .faq-chevron {
          transform: rotate(180deg);
          color: var(--color-primary);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s ease;
          padding: 0 24px;
        }

        .faq-item--open .faq-answer {
          max-height: 300px;
          padding: 0 24px 20px;
        }

        .faq-answer p {
          font-size: 0.95rem;
          color: var(--color-secondary);
          line-height: 1.7;
        }

        @media (max-width: 768px) {
          .service-block,
          .service-block--reverse {
            grid-template-columns: 1fr;
            gap: 24px;
            direction: ltr;
          }

          .service-block-visual {
            order: -1;
          }

          .service-block-icon-large {
            width: 140px;
            height: 140px;
          }

          .faq-question {
            padding: 16px 18px;
            font-size: 0.95rem;
          }

          .faq-answer {
            padding: 0 18px;
          }

          .faq-item--open .faq-answer {
            padding: 0 18px 16px;
          }
        }
      `}</style>
    </>
  )
}
