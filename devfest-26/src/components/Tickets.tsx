import { useEffect, useRef } from 'react'

export default function Tickets() {
  const sectionRef = useRef<HTMLDivElement>(null)

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
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="tickets"
      className="page-section"
      style={{
        maxWidth: 1180,
        margin: '0 auto',
        padding: '120px 24px',
      }}
    >
      <div className="reveal" ref={sectionRef}>
        {/* Kicker */}
        <div className="kicker" style={{ marginBottom: 16 }}>
          Registration
        </div>

        {/* Heading */}
        <h2 className="section-heading" style={{ marginBottom: 48 }}>
          Passes &amp; Admissions
        </h2>

        {/* Status card */}
        <div
          className="tickets-card"
          style={{
            maxWidth: 660,
            margin: '0 auto',
            background: 'rgba(18,18,18,0.9)',
            border: '1px solid rgba(240,240,240,0.08)',
            borderRadius: 20,
            padding: '48px 44px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background glow */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '-40%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 400,
              height: 400,
              background:
                'radial-gradient(circle, rgba(251,188,5,0.08) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {/* Status pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '5px 16px',
              borderRadius: 100,
              background: 'rgba(251,188,5,0.10)',
              border: '1px solid rgba(251,188,5,0.30)',
              fontSize: 11,
              fontFamily: '"Roboto Mono", monospace',
              letterSpacing: '1.5px',
              color: '#fbbc04',
              textTransform: 'uppercase',
              marginBottom: 28,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: '#fbbc04',
                display: 'inline-block',
                boxShadow: '0 0 8px #fbbc04',
              }}
            />
            Tickets to be Announced
          </div>

          {/* Title */}
          <h3
            style={{
              fontFamily: '"Google Sans", "Nunito Sans", sans-serif',
              fontSize: 'clamp(20px, 3vw, 28px)',
              fontWeight: 600,
              letterSpacing: '-0.5px',
              color: '#f0f0f0',
              marginBottom: 16,
            }}
          >
            Early Bird &amp; General Tickets Opening Soon
          </h3>

          {/* Body */}
          <p
            style={{
              fontSize: 14.5,
              color: 'var(--text-dim)',
              lineHeight: 1.7,
              marginBottom: 36,
              maxWidth: 480,
              margin: '0 auto 36px',
            }}
          >
            Ticket sales will go live following the conclusion of the Call for
            Speakers selection. We will offer subsidized Student passes,
            standard General Admission, and Corporate/Executive tickets.
          </p>

          <a
            href="https://www.facebook.com/GDGAuckland/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '13px 28px',
              borderRadius: 100,
              fontSize: 14,
              fontWeight: 500,
              fontFamily: '"Google Sans", "Nunito Sans", sans-serif',
              background: '#57caff',
              color: '#000000',
              transition: 'transform 0.25s ease, opacity 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.opacity = '0.85'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.opacity = '1'
            }}
          >
            Get Notified
          </a>
        </div>
      </div>
    </section>
  )
}
