import { useEffect, useRef } from 'react'

const MOMENTS = [
  {
    label: 'Keynote Hall',
    sublabel: 'Opening ceremony & main stage',
    gradient: 'linear-gradient(135deg, #4285F4 0%, #1a3a6b 100%)',
    accent: '#4285F4',
  },
  {
    label: 'Speaker Sessions',
    sublabel: 'Technical deep dives & demos',
    gradient: 'linear-gradient(135deg, #EA4335 0%, #6b1a1a 100%)',
    accent: '#EA4335',
  },
  {
    label: 'Workshops',
    sublabel: 'Hands-on learning labs',
    gradient: 'linear-gradient(135deg, #34A853 0%, #1a4a2e 100%)',
    accent: '#34A853',
  },
  {
    label: 'Networking',
    sublabel: 'Community connect & ice cream',
    gradient: 'linear-gradient(135deg, #FBBC05 0%, #6b4e00 100%)',
    accent: '#FBBC05',
  },
  {
    label: 'Breakout Tracks',
    sublabel: 'AI, Cloud, Mobile & Web',
    gradient: 'linear-gradient(135deg, #4285F4 0%, #34A853 100%)',
    accent: '#4285F4',
  },
  {
    label: 'Lightning Talks',
    sublabel: '5-minute rapid-fire ideas',
    gradient: 'linear-gradient(135deg, #EA4335 0%, #FBBC05 100%)',
    accent: '#EA4335',
  },
  {
    label: 'Community Lunch',
    sublabel: 'Meet the speakers',
    gradient: 'linear-gradient(135deg, #34A853 0%, #4285F4 100%)',
    accent: '#34A853',
  },
  {
    label: 'After Party',
    sublabel: 'Networking & refreshments',
    gradient: 'linear-gradient(135deg, #FBBC05 0%, #EA4335 100%)',
    accent: '#FBBC05',
  },
]

// Duplicate array for seamless infinite loop
const TRACK = [...MOMENTS, ...MOMENTS]

interface MomentCardProps {
  item: (typeof MOMENTS)[number]
}

function MomentCard({ item }: MomentCardProps) {
  return (
    <div
      style={{
        flexShrink: 0,
        width: 280,
        height: 200,
        borderRadius: 14,
        overflow: 'hidden',
        position: 'relative',
        border: '1px solid rgba(245,245,247,0.07)',
        cursor: 'default',
        marginRight: 16,
      }}
    >
      {/* Gradient placeholder */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: item.gradient,
          opacity: 0.25,
        }}
      />

      {/* Grid pattern overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(245,245,247,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,245,247,0.03) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Accent dot */}
      <div
        style={{
          position: 'absolute',
          top: 16,
          left: 16,
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: item.accent,
          boxShadow: `0 0 12px ${item.accent}`,
        }}
      />

      {/* Photo placeholder indicator */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          opacity: 0.35,
        }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" fill="none" width={28} height={28}>
          <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="8.5" cy="8.5" r="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 15l5-5 4 4 3-3 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 9, letterSpacing: '1px', textTransform: 'uppercase', color: '#f5f5f7' }}>
          Photos coming soon
        </span>
      </div>

      {/* Label */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '20px 16px 16px',
          background:
            'linear-gradient(0deg, rgba(8,9,11,0.95) 0%, transparent 100%)',
        }}
      >
        <div
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: 15,
            fontWeight: 600,
            color: '#f5f5f7',
          }}
        >
          {item.label}
        </div>
        <div
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 10,
            letterSpacing: '1px',
            color: item.accent,
            textTransform: 'uppercase',
            marginTop: 4,
          }}
        >
          {item.sublabel}
        </div>
      </div>
    </div>
  )
}

export default function Highlights() {
  const headingRef = useRef<HTMLDivElement>(null)

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

    if (headingRef.current) observer.observe(headingRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="highlights"
      style={{
        padding: '100px 0',
        overflow: 'hidden',
        borderTop: '1px solid rgba(245,245,247,0.06)',
      }}
    >
      {/* Header */}
      <div
        className="reveal"
        ref={headingRef}
        style={{ padding: '0 24px', maxWidth: 1180, margin: '0 auto 56px' }}
      >
        <div className="kicker" style={{ marginBottom: 14 }}>
          Recent Moments
        </div>
        <h2 className="section-heading" style={{ maxWidth: 480 }}>
          Experience the Energy of{' '}
          <span className="gradient-text">DevFest</span>
        </h2>
      </div>

      {/* Marquee */}
      <div
        style={{ overflow: 'hidden', position: 'relative' }}
        aria-label="Photo highlights carousel"
      >
        {/* Left fade */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 80,
            background:
              'linear-gradient(90deg, #08090b 0%, transparent 100%)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />
        {/* Right fade */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: 80,
            background:
              'linear-gradient(270deg, #08090b 0%, transparent 100%)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />

        <div
          className="marquee-track"
          style={{ padding: '8px 0', willChange: 'transform' }}
        >
          {TRACK.map((item, i) => (
            <MomentCard key={`${item.label}-${i}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
