import { useEffect, useRef, useState } from 'react'

const FAQS = [
  {
    q: 'What is DevFest Auckland?',
    a: 'DevFest Auckland is an annual, full-day community-run developer conference hosted by GDG Auckland and GDG on Campus. It covers Google technologies and modern software engineering through keynote sessions, technical tracks, lightning talks, and hands-on networking.',
  },
  {
    q: 'Where and when will DevFest Auckland 2026 take place?',
    a: 'DevFest Auckland 2026 will take place in late 2026 in Auckland CBD. The exact venue location is currently being finalized and will be officially announced alongside the full schedule.',
  },
  {
    q: 'How can I apply to speak at DevFest Auckland?',
    a: 'Our Call for Speakers (CFP) is currently open on Sessionize! We welcome talk proposals from first-time speakers, seasoned leads, and industry veterans across AI, Cloud, Web, Mobile, and Modern Engineering Practices. Keep an eye on the countdown timer above to submit before the deadline.',
  },
  {
    q: 'Who attends DevFest?',
    a: 'DevFest is open to software developers, engineering leads, product designers, DevOps professionals, university students, and technology enthusiasts across New Zealand.',
  },
  {
    q: 'Are tickets refundable or transferable?',
    a: 'Once ticket sales open, tickets can be transferred to another attendee by updating your registration details prior to the cutoff date.',
  },
  {
    q: 'Will food and refreshments be provided?',
    a: 'Yes! All tickets include morning tea, lunch, afternoon snacks/ice cream, and post-event networking refreshments.',
  },
  {
    q: 'Is there a Code of Conduct?',
    a: 'Yes. DevFest is dedicated to providing a harassment-free and inclusive conference experience for everyone regardless of gender, sexual orientation, disability, physical appearance, race, or religion. All attendees must adhere to the Google Developer Group Code of Conduct.',
  },
]

interface AccordionItemProps {
  question: string
  answer: string
  index: number
  isOpen: boolean
  onToggle: () => void
}

function AccordionItem({
  question,
  answer,
  index,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <div
      style={{
        borderBottom: '1px solid rgba(245,245,247,0.07)',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '22px 0',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: 16,
        }}
      >
        {/* Question number + text */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
          <span
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 11,
              color: isOpen ? '#4285F4' : 'var(--text-dimmer)',
              letterSpacing: '0.5px',
              flexShrink: 0,
              paddingTop: 2,
              transition: 'color 0.25s ease',
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <span
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(14px, 2vw, 17px)',
              color: isOpen ? '#f5f5f7' : 'var(--text-dim)',
              lineHeight: 1.45,
              transition: 'color 0.25s ease',
            }}
          >
            {question}
          </span>
        </div>

        {/* Chevron icon */}
        <span
          aria-hidden="true"
          style={{
            flexShrink: 0,
            width: 28,
            height: 28,
            borderRadius: '50%',
            border: '1px solid rgba(245,245,247,0.10)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.3s ease, background 0.25s ease, border-color 0.25s ease',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            background: isOpen ? 'rgba(66,133,244,0.15)' : 'transparent',
            borderColor: isOpen ? 'rgba(66,133,244,0.35)' : 'rgba(245,245,247,0.10)',
          }}
        >
          <svg viewBox="0 0 16 16" fill="none" width={12} height={12}>
            <path
              d="M4 6l4 4 4-4"
              stroke={isOpen ? '#4285F4' : 'var(--text-dim)'}
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {/* Answer — animated expand/collapse */}
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? (contentRef.current?.scrollHeight ?? 500) + 'px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.4s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <p
          style={{
            fontSize: 14.5,
            color: 'var(--text-dim)',
            lineHeight: 1.7,
            paddingBottom: 22,
            paddingLeft: 34,
          }}
        >
          {answer}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const headRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )

    if (headRef.current) observer.observe(headRef.current)
    if (listRef.current) observer.observe(listRef.current)
    return () => observer.disconnect()
  }, [])

  function handleToggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section
      id="faq"
      className="page-section"
      style={{
        maxWidth: 1180,
        margin: '0 auto',
        padding: '120px 24px',
      }}
    >
      {/* Header */}
      <div
        className="reveal"
        ref={headRef}
        style={{ marginBottom: 56 }}
      >
        <div className="kicker" style={{ marginBottom: 16 }}>
          FAQ
        </div>
        <h2 className="section-heading" style={{ maxWidth: 400 }}>
          Everything You Need to Know
        </h2>
      </div>

      {/* Accordion */}
      <div
        className="reveal"
        ref={listRef}
        style={{
          maxWidth: 760,
        }}
      >
        {FAQS.map((faq, i) => (
          <AccordionItem
            key={faq.q}
            question={faq.q}
            answer={faq.a}
            index={i}
            isOpen={openIndex === i}
            onToggle={() => handleToggle(i)}
          />
        ))}
      </div>
    </section>
  )
}
