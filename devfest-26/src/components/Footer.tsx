import logoImg from '../assets/GDG Logo.png'

const QUICK_LINKS = [
  { label: 'Code of Conduct', href: '#' },
  { label: 'Participation Terms', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Call for Speakers', href: '#cfp' },
  { label: 'GDG Chapter', href: 'https://gdg.community.dev/gdg-auckland/', target: '_blank' },
]

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(240,240,240,0.07)',
        padding: '48px 40px 56px',
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 32,
        }}
      >
        {/* Top row: branding */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 20,
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ display: 'inline-flex' }}>
              <img src={logoImg} alt="" aria-hidden="true" style={{ height: 24, display: 'block' }} />
            </span>
            <span
              style={{
                fontFamily: '"Google Sans", "Nunito Sans", sans-serif',
                fontWeight: 700,
                fontSize: 15,
                letterSpacing: '-0.3px',
                color: '#f0f0f0',
              }}
            >
              DevFest{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #4285F4, #34A853)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Auckland
              </span>
            </span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontFamily: '"Roboto Mono", monospace',
              fontSize: 10.5,
              letterSpacing: '1px',
              color: 'var(--text-dimmer)',
              textTransform: 'uppercase',
            }}
          >
            Powered by GDG Auckland &amp; GDG on Campus
          </div>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer navigation">
          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px 24px',
              listStyle: 'none',
              padding: 0,
              margin: 0,
            }}
          >
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.target}
                  rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                  style={{
                    fontSize: 12.5,
                    color: 'var(--text-dimmer)',
                    transition: 'color 0.25s ease',
                  }}
                  onMouseEnter={e =>
                    (e.currentTarget.style.color = 'var(--text-dim)')
                  }
                  onMouseLeave={e =>
                    (e.currentTarget.style.color = 'var(--text-dimmer)')
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: 'rgba(240,240,240,0.06)',
          }}
        />

        {/* Copyright */}
        <p
          style={{
            fontSize: 11.5,
            color: 'var(--text-dimmer)',
            fontFamily: '"Roboto Mono", monospace',
            letterSpacing: '0.3px',
          }}
        >
          &copy; 2026 Google Developer Group Auckland. Built for the Aotearoa
          developer community.
        </p>
      </div>
    </footer>
  )
}
