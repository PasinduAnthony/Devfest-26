import { useEffect, useRef } from 'react'
import keynoteHall from '../assets/moments/keynote_hall.jpg'
import speakerSessions from '../assets/moments/speaker_sessions.jpg'
import workshops from '../assets/moments/workshops.jpg'
import networking from '../assets/moments/networking.jpg'
import lightningTalks from '../assets/moments/lightning_talks.jpg'
import communityLunch from '../assets/moments/Community_lunch.jpg'

const MOMENTS = [
  {
    label: 'Keynote Hall',
    sublabel: 'Opening ceremony & main stage',
    accent: '#4285F4',
    photo: keynoteHall,
  },
  {
    label: 'Speaker Sessions',
    sublabel: 'Technical deep dives & demos',
    accent: '#EA4335',
    photo: speakerSessions,
  },
  {
    label: 'Workshops',
    sublabel: 'Hands-on learning labs',
    accent: '#34A853',
    photo: workshops,
  },
  {
    label: 'Networking',
    sublabel: 'Community connect & ice cream',
    accent: '#fbbc04',
    photo: networking,
  },
  {
    label: 'Lightning Talks',
    sublabel: '5-minute rapid-fire ideas',
    accent: '#EA4335',
    photo: lightningTalks,
  },
  {
    label: 'Community Lunch',
    sublabel: 'Meet the speakers',
    accent: '#34A853',
    photo: communityLunch,
  },
]

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
        border: '1px solid rgba(240,240,240,0.07)',
        cursor: 'default',
        marginRight: 16,
      }}
    >
      {/* Actual photo */}
      <img
        src={item.photo}
        alt={item.label}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
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
          zIndex: 1,
        }}
      />

      {/* Label */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '32px 16px 16px',
          background: 'linear-gradient(0deg, rgba(0,0,0,0.85) 0%, transparent 100%)',
          zIndex: 1,
        }}
      >
        <div
          style={{
            fontFamily: '"Google Sans", "Nunito Sans", sans-serif',
            fontSize: 15,
            fontWeight: 600,
            color: '#f0f0f0',
          }}
        >
          {item.label}
        </div>
        <div
          style={{
            fontFamily: '"Roboto Mono", monospace',
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
        borderTop: '1px solid rgba(240,240,240,0.06)',
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
            background: 'linear-gradient(90deg, #000000 0%, transparent 100%)',
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
            background: 'linear-gradient(270deg, #000000 0%, transparent 100%)',
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
