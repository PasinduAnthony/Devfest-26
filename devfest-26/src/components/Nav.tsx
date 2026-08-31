import { useState, useEffect, useCallback } from 'react'
import logoImg from '../assets/GDG Logo.png'

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
          background: 'linear-gradient(90deg, #4285F4, #EA4335, #fbbc04, #34A853)',
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
          background: 'rgba(30,30,30,0.72)',
          backdropFilter: 'blur(16px) saturate(160%)',
          WebkitBackdropFilter: 'blur(16px) saturate(160%)',
          borderBottom: scrolled ? '1px solid rgba(240,240,240,0.09)' : '1px solid transparent',
          transition: 'border-color 0.4s ease, background 0.4s ease',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}
          aria-label="DevFest Auckland 2026 — home"
        >
          <span style={{ display: 'inline-flex' }}>
            <img src={logoImg} alt="" aria-hidden="true" style={{ height: 28, display: 'block' }} />
          </span>
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
            href="https://docs.google.com/forms/d/e/1FAIpQLSeUoHvOIhzrXK7pN11uM5pSU-IqAhQUSQXhtqmmxoY_XVsoDA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-submit-btn"
            style={{
              fontSize: 13,
              fontWeight: 500,
              padding: '9px 18px',
              borderRadius: 100,
              background: '#57caff',
              color: '#000000',
              transition: 'transform 0.25s ease, opacity 0.25s ease',
              display: 'inline-block',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-1px)'
              e.currentTarget.style.opacity = '0.85'
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
                background: '#f0f0f0',
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
                background: '#f0f0f0',
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
                background: '#f0f0f0',
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
          background: 'rgba(30,30,30,0.97)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(240,240,240,0.09)',
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
              fontFamily: '"Google Sans", "Nunito Sans", sans-serif',
              fontWeight: 500,
              color: 'var(--text-dim)',
              borderBottom: '1px solid rgba(240,240,240,0.06)',
              transition: 'color 0.25s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-dim)')}
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeUoHvOIhzrXK7pN11uM5pSU-IqAhQUSQXhtqmmxoY_XVsoDA/viewform"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          style={{
            display: 'inline-block',
            marginTop: 20,
            fontSize: 14,
            fontWeight: 500,
            padding: '11px 22px',
            borderRadius: 100,
            background: '#57caff',
            color: '#000000',
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
