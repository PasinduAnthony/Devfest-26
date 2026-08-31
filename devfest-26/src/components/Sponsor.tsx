import { useEffect, useRef } from 'react'

export default function Sponsor() {
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
      id="sponsor"
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className="reveal"
        ref={sectionRef}
        style={{
          background: 'rgba(10,11,14,0.95)',
          borderTop: '1px solid rgba(245,245,247,0.07)',
          borderBottom: '1px solid rgba(245,245,247,0.07)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Multi-color border glow */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            background:
              'linear-gradient(90deg, transparent 0%, #4285F4 20%, #EA4335 40%, #FBBC05 60%, #34A853 80%, transparent 100%)',
            opacity: 0.6,
          }}
        />

        {/* Background blob */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-60%',
            right: '-10%',
            width: 600,
            height: 600,
            background:
              'radial-gradient(circle, rgba(66,133,244,0.06) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: '-60%',
            left: '-5%',
            width: 500,
            height: 500,
            background:
              'radial-gradient(circle, rgba(52,168,83,0.05) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth: 1180,
            margin: '0 auto',
            padding: '80px 24px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 40,
          }}
        >
          {/* Left content */}
          <div style={{ maxWidth: 520 }}>
            <div className="kicker" style={{ marginBottom: 16 }}>
              Partnership
            </div>
            <h2
              className="section-heading"
              style={{ marginBottom: 18, lineHeight: 1.15 }}
            >
              Fuel the Future of{' '}
              <span className="gradient-text">Auckland Tech</span>
            </h2>
            <p
              style={{
                fontSize: 15,
                color: 'var(--text-dim)',
                lineHeight: 1.7,
                maxWidth: 440,
              }}
            >
              Connect your brand with 400+ seasoned developers, cloud
              architects, and future tech leaders in Aotearoa. DevFest Auckland
              2026 is your opportunity to reach a highly engaged, technical
              audience and demonstrate your commitment to the developer
              community.
            </p>
          </div>

          {/* Right CTAs */}
          <div
            className="sponsor-ctas"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              minWidth: 240,
            }}
          >
            <a
              href="#"
              aria-label="Download 2026 Sponsorship Deck PDF"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                padding: '14px 28px',
                borderRadius: 100,
                fontSize: 14,
                fontWeight: 500,
                fontFamily: '"Inter", sans-serif',
                background: '#f5f5f7',
                color: '#08090b',
                transition: 'transform 0.25s ease, opacity 0.25s ease',
                textAlign: 'center',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.opacity = '0.9'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.opacity = '1'
              }}
            >
              <svg viewBox="0 0 16 16" fill="none" width={14} height={14}>
                <path d="M8 2v8M4 7l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              Download 2026 Sponsorship Deck
            </a>
            <a
              href="mailto:sponsor@gdgauckland.nz"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                padding: '14px 28px',
                borderRadius: 100,
                fontSize: 14,
                fontWeight: 500,
                fontFamily: '"Inter", sans-serif',
                background: 'transparent',
                color: '#f5f5f7',
                border: '1px solid rgba(245,245,247,0.14)',
                transition: 'transform 0.25s ease, border-color 0.25s ease',
                textAlign: 'center',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.borderColor = 'rgba(245,245,247,0.35)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(245,245,247,0.14)'
              }}
            >
              <svg viewBox="0 0 16 16" fill="none" width={14} height={14}>
                <rect x="2" y="4" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M2 6l6 4 6-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Contact Partnerships Team
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
