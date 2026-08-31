import { useState, useEffect, useCallback } from 'react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Tickets', href: '#tickets' },
  { label: 'Sponsor', href: '#sponsor' },
  { label: 'Team', href: '#team' },
  { label: 'FAQ', href: '#faq' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    setScrolled(scrollTop > 10)
    setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 760) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      {/* Scroll progress bar */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '2px',
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #4285F4, #EA4335, #FBBC05, #34A853)',
          zIndex: 102,
          willChange: 'width',
          transition: 'width 0.1s linear',
        }}
      />

      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '18px 40px',
          background: 'rgba(8,9,11,0.72)',
          backdropFilter: 'blur(16px) saturate(160%)',
          WebkitBackdropFilter: 'blur(16px) saturate(160%)',
          borderBottom: scrolled ? '1px solid rgba(245,245,247,0.09)' : '1px solid transparent',
          transition: 'border-color 0.4s ease, background 0.4s ease',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 600,
            fontSize: 15,
            letterSpacing: '0.2px',
            color: '#f5f5f7',
            textDecoration: 'none',
          }}
        >
          {/* 4-color Google dot mark */}
          <span style={{ display: 'flex', gap: 4 }} aria-hidden="true">
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4285F4', display: 'block' }} />
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#EA4335', display: 'block' }} />
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#FBBC05', display: 'block' }} />
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#34A853', display: 'block' }} />
          </span>
          <span>DevFest Auckland 2026</span>
        </a>

        {/* Desktop nav links */}
        <div
          style={{
            display: 'flex',
            gap: 32,
            fontSize: 13,
            color: 'var(--text-dim)',
          }}
          className="nav-links-desktop"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                transition: 'color 0.25s ease',
                color: 'var(--text-dim)',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-dim)')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Header actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* CTA button */}
          <a
            href="#cfp"
            className="nav-submit-btn"
            style={{
              fontSize: 13,
              fontWeight: 500,
              padding: '9px 18px',
              borderRadius: 100,
              background: '#f5f5f7',
              color: '#08090b',
              transition: 'transform 0.25s ease, opacity 0.25s ease',
              display: 'inline-block',
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
            Submit Session
          </a>

          {/* Hamburger (mobile) */}
          <button
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(o => !o)}
            className="hamburger-btn"
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: 5,
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: 4,
            }}
          >
            <span
              style={{
                display: 'block',
                width: 22,
                height: 2,
                background: '#f5f5f7',
                borderRadius: 2,
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: 22,
                height: 2,
                background: '#f5f5f7',
                borderRadius: 2,
                transition: 'opacity 0.3s ease',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                width: 22,
                height: 2,
                background: '#f5f5f7',
                borderRadius: 2,
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      <div
        className="mobile-menu"
        style={{
          position: 'fixed',
          top: '64px',
          left: 0,
          right: 0,
          zIndex: 99,
          background: 'rgba(8,9,11,0.97)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(245,245,247,0.09)',
          padding: menuOpen ? '20px 24px 28px' : '0 24px',
          maxHeight: menuOpen ? '400px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.35s ease, padding 0.35s ease',
          display: 'none',
        }}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'block',
              padding: '12px 0',
              fontSize: 16,
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: 500,
              color: 'var(--text-dim)',
              borderBottom: '1px solid rgba(245,245,247,0.06)',
              transition: 'color 0.25s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-dim)')}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#cfp"
          onClick={() => setMenuOpen(false)}
          style={{
            display: 'inline-block',
            marginTop: 20,
            fontSize: 14,
            fontWeight: 500,
            padding: '11px 22px',
            borderRadius: 100,
            background: '#f5f5f7',
            color: '#08090b',
          }}
        >
          Submit Session
        </a>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .nav-links-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .mobile-menu { display: block !important; }
          nav { padding: 16px 20px !important; }
        }
        @media (max-width: 400px) {
          .nav-submit-btn { display: none !important; }
        }
      `}</style>
    </>
  )
}
