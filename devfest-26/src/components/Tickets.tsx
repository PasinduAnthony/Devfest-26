import { useEffect, useRef, useState } from 'react'

export default function Tickets() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.trim() || !emailRegex.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubmitted(true)
  }

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
            background: 'rgba(16,18,22,0.9)',
            border: '1px solid rgba(245,245,247,0.08)',
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
              fontFamily: '"JetBrains Mono", monospace',
              letterSpacing: '1.5px',
              color: '#FBBC05',
              textTransform: 'uppercase',
              marginBottom: 28,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: '#FBBC05',
                display: 'inline-block',
                boxShadow: '0 0 8px #FBBC05',
              }}
            />
            Tickets to be Announced
          </div>

          {/* Title */}
          <h3
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: 'clamp(20px, 3vw, 28px)',
              fontWeight: 600,
              letterSpacing: '-0.5px',
              color: '#f5f5f7',
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

          {/* Notification form */}
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                gap: 10,
                maxWidth: 420,
                margin: '0 auto',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
              noValidate
            >
              <input
                type="email"
                value={email}
                onChange={e => {
                  setEmail(e.target.value)
                  if (error) setError('')
                }}
                placeholder="Enter your email"
                aria-label="Email address for ticket notifications"
                style={{
                  flex: 1,
                  minWidth: 200,
                  padding: '12px 18px',
                  borderRadius: 100,
                  background: 'rgba(245,245,247,0.05)',
                  border: error
                    ? '1px solid rgba(234,67,53,0.6)'
                    : '1px solid rgba(245,245,247,0.10)',
                  color: '#f5f5f7',
                  fontSize: 14,
                  fontFamily: '"Inter", sans-serif',
                  outline: 'none',
                  transition: 'border-color 0.25s ease',
                }}
                onFocus={e => {
                  if (!error) e.currentTarget.style.borderColor = 'rgba(66,133,244,0.5)'
                }}
                onBlur={e => {
                  if (!error) e.currentTarget.style.borderColor = 'rgba(245,245,247,0.10)'
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '12px 24px',
                  borderRadius: 100,
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: '"Inter", sans-serif',
                  background: '#f5f5f7',
                  color: '#08090b',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'transform 0.25s ease, opacity 0.25s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-1px)'
                  e.currentTarget.style.opacity = '0.9'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.opacity = '1'
                }}
              >
                Notify Me
              </button>
              {error && (
                <p
                  role="alert"
                  style={{
                    width: '100%',
                    textAlign: 'center',
                    fontSize: 12,
                    color: '#EA4335',
                    fontFamily: '"Inter", sans-serif',
                    marginTop: 4,
                  }}
                >
                  {error}
                </p>
              )}
            </form>
          ) : (
            <div
              role="status"
              aria-live="polite"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '12px 24px',
                borderRadius: 100,
                background: 'rgba(52,168,83,0.12)',
                border: '1px solid rgba(52,168,83,0.35)',
                fontSize: 13.5,
                fontFamily: '"Inter", sans-serif',
                color: '#34A853',
                fontWeight: 500,
              }}
            >
              <svg viewBox="0 0 16 16" fill="none" width={14} height={14}>
                <path d="M3 8l3.5 3.5L13 5" stroke="#34A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              You&apos;re on the list! We&apos;ll notify you when tickets go live.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
