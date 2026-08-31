import { useCountdown } from '../hooks/useCountdown'

// CFP closes 30 September 2026 at midnight
const CFP_DEADLINE = '2026-09-30T23:59:59'

interface CountdownCardProps {
  value: string
  label: string
}

function CountdownCard({ value, label }: CountdownCardProps) {
  return (
    <div
      className="countdown-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        background: 'rgba(18,18,18,0.9)',
        border: '1px solid rgba(66,133,244,0.35)',
        borderRadius: 12,
        padding: '18px 22px',
        boxShadow: '0 0 24px rgba(66,133,244,0.12), inset 0 1px 0 rgba(240,240,240,0.04)',
        minWidth: 80,
      }}
    >
      <span
        style={{
          fontFamily: '"Roboto Mono", monospace',
          fontWeight: 500,
          fontSize: 'clamp(26px, 4vw, 40px)',
          color: '#f0f0f0',
          lineHeight: 1,
          letterSpacing: '-1px',
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontFamily: '"Roboto Mono", monospace',
          fontSize: 9,
          letterSpacing: '2px',
          color: 'var(--text-dimmer)',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </span>
    </div>
  )
}

// Auckland skyline SVG buildings
function AucklandSkyline() {
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 'min(30vh, 200px)',
        zIndex: 0,
        opacity: 0,
        transform: 'translateY(30px)',
        animation: 'skylineIn 1.3s cubic-bezier(.16,1,.3,1) 0.8s forwards',
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    >
      {/* Horizon gradient */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '150%',
          background:
            'linear-gradient(0deg, rgba(66,133,244,0.12), rgba(234,67,53,0.05) 42%, transparent 78%)',
          pointerEvents: 'none',
        }}
      />

      {/* SVG Skyline */}
      <svg
        viewBox="0 0 1400 200"
        preserveAspectRatio="xMidYMax meet"
        style={{
          position: 'absolute',
          bottom: 24,
          left: 0,
          right: 0,
          width: '100%',
          height: 'calc(100% - 24px)',
        }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="bldgGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#15171d" />
            <stop offset="100%" stopColor="#0b0c0f" />
          </linearGradient>
        </defs>

        {/* Sky Tower — the iconic Auckland landmark */}
        {/* Main tower shaft */}
        <rect x="688" y="10" width="6" height="140" fill="rgba(240,240,240,0.18)" rx="1" />
        {/* Tower pod */}
        <ellipse cx="691" cy="62" rx="14" ry="6" fill="#1c1e25" stroke="rgba(240,240,240,0.09)" strokeWidth="1" />
        {/* Top mast */}
        <rect x="690" y="2" width="2" height="12" fill="rgba(240,240,240,0.3)" rx="1" />
        {/* Beacon light */}
        <circle cx="691" cy="2" r="3" fill="#EA4335" style={{ animation: 'beaconPulse 2.4s ease-out infinite' }} />

        {/* Buildings — left side */}
        <rect x="0" y="140" width="60" height="60" fill="url(#bldgGrad)" stroke="rgba(240,240,240,0.06)" strokeWidth="1" rx="1" />
        <rect x="65" y="120" width="45" height="80" fill="url(#bldgGrad)" stroke="rgba(240,240,240,0.06)" strokeWidth="1" rx="1" />
        <rect x="115" y="105" width="35" height="95" fill="url(#bldgGrad)" stroke="rgba(240,240,240,0.06)" strokeWidth="1" rx="1" />
        <rect x="155" y="130" width="50" height="70" fill="url(#bldgGrad)" stroke="rgba(240,240,240,0.06)" strokeWidth="1" rx="1" />
        <rect x="210" y="115" width="40" height="85" fill="url(#bldgGrad)" stroke="rgba(240,240,240,0.06)" strokeWidth="1" rx="1" />
        <rect x="255" y="125" width="30" height="75" fill="url(#bldgGrad)" stroke="rgba(240,240,240,0.06)" strokeWidth="1" rx="1" />
        <rect x="290" y="100" width="55" height="100" fill="url(#bldgGrad)" stroke="rgba(240,240,240,0.06)" strokeWidth="1" rx="1" />
        <rect x="350" y="118" width="38" height="82" fill="url(#bldgGrad)" stroke="rgba(240,240,240,0.06)" strokeWidth="1" rx="1" />
        <rect x="393" y="108" width="42" height="92" fill="url(#bldgGrad)" stroke="rgba(240,240,240,0.06)" strokeWidth="1" rx="1" />
        <rect x="440" y="125" width="30" height="75" fill="url(#bldgGrad)" stroke="rgba(240,240,240,0.06)" strokeWidth="1" rx="1" />
        <rect x="475" y="112" width="50" height="88" fill="url(#bldgGrad)" stroke="rgba(240,240,240,0.06)" strokeWidth="1" rx="1" />
        <rect x="530" y="130" width="35" height="70" fill="url(#bldgGrad)" stroke="rgba(240,240,240,0.06)" strokeWidth="1" rx="1" />
        <rect x="570" y="118" width="45" height="82" fill="url(#bldgGrad)" stroke="rgba(240,240,240,0.06)" strokeWidth="1" rx="1" />
        <rect x="620" y="105" width="40" height="95" fill="url(#bldgGrad)" stroke="rgba(240,240,240,0.06)" strokeWidth="1" rx="1" />
        <rect x="665" y="90" width="20" height="110" fill="url(#bldgGrad)" stroke="rgba(240,240,240,0.06)" strokeWidth="1" rx="1" />

        {/* Buildings — right side of sky tower */}
        <rect x="702" y="90" width="20" height="110" fill="url(#bldgGrad)" stroke="rgba(240,240,240,0.06)" strokeWidth="1" rx="1" />
        <rect x="727" y="105" width="40" height="95" fill="url(#bldgGrad)" stroke="rgba(240,240,240,0.06)" strokeWidth="1" rx="1" />
        <rect x="772" y="118" width="45" height="82" fill="url(#bldgGrad)" stroke="rgba(240,240,240,0.06)" strokeWidth="1" rx="1" />
        <rect x="822" y="130" width="35" height="70" fill="url(#bldgGrad)" stroke="rgba(240,240,240,0.06)" strokeWidth="1" rx="1" />
        <rect x="862" y="112" width="50" height="88" fill="url(#bldgGrad)" stroke="rgba(240,240,240,0.06)" strokeWidth="1" rx="1" />
        <rect x="917" y="125" width="30" height="75" fill="url(#bldgGrad)" stroke="rgba(240,240,240,0.06)" strokeWidth="1" rx="1" />
        <rect x="952" y="108" width="42" height="92" fill="url(#bldgGrad)" stroke="rgba(240,240,240,0.06)" strokeWidth="1" rx="1" />
        <rect x="999" y="118" width="38" height="82" fill="url(#bldgGrad)" stroke="rgba(240,240,240,0.06)" strokeWidth="1" rx="1" />
        <rect x="1042" y="100" width="55" height="100" fill="url(#bldgGrad)" stroke="rgba(240,240,240,0.06)" strokeWidth="1" rx="1" />
        <rect x="1102" y="125" width="30" height="75" fill="url(#bldgGrad)" stroke="rgba(240,240,240,0.06)" strokeWidth="1" rx="1" />
        <rect x="1137" y="115" width="40" height="85" fill="url(#bldgGrad)" stroke="rgba(240,240,240,0.06)" strokeWidth="1" rx="1" />
        <rect x="1182" y="130" width="50" height="70" fill="url(#bldgGrad)" stroke="rgba(240,240,240,0.06)" strokeWidth="1" rx="1" />
        <rect x="1237" y="105" width="35" height="95" fill="url(#bldgGrad)" stroke="rgba(240,240,240,0.06)" strokeWidth="1" rx="1" />
        <rect x="1277" y="120" width="45" height="80" fill="url(#bldgGrad)" stroke="rgba(240,240,240,0.06)" strokeWidth="1" rx="1" />
        <rect x="1327" y="140" width="60" height="60" fill="url(#bldgGrad)" stroke="rgba(240,240,240,0.06)" strokeWidth="1" rx="1" />
        <rect x="1390" y="135" width="10" height="65" fill="url(#bldgGrad)" stroke="rgba(240,240,240,0.06)" strokeWidth="1" rx="1" />

        {/* Twinkling windows — scattered */}
        <circle cx="80" cy="155" r="1.2" fill="#fbbc04" style={{ animation: 'twinkle 4.5s ease-in-out 0.2s infinite' }} />
        <circle cx="95" cy="145" r="1.2" fill="#7fb1ff" style={{ animation: 'twinkle 4.5s ease-in-out 1.1s infinite' }} />
        <circle cx="130" cy="120" r="1.2" fill="#fbbc04" style={{ animation: 'twinkle 4.5s ease-in-out 0.8s infinite' }} />
        <circle cx="175" cy="148" r="1.2" fill="#f0f0f0" style={{ animation: 'twinkle 4.5s ease-in-out 2.1s infinite' }} />
        <circle cx="230" cy="130" r="1.2" fill="#fbbc04" style={{ animation: 'twinkle 4.5s ease-in-out 1.5s infinite' }} />
        <circle cx="310" cy="115" r="1.2" fill="#7fb1ff" style={{ animation: 'twinkle 4.5s ease-in-out 0.4s infinite' }} />
        <circle cx="330" cy="135" r="1.2" fill="#fbbc04" style={{ animation: 'twinkle 4.5s ease-in-out 3.0s infinite' }} />
        <circle cx="410" cy="125" r="1.2" fill="#f0f0f0" style={{ animation: 'twinkle 4.5s ease-in-out 1.8s infinite' }} />
        <circle cx="500" cy="138" r="1.2" fill="#fbbc04" style={{ animation: 'twinkle 4.5s ease-in-out 0.6s infinite' }} />
        <circle cx="550" cy="142" r="1.2" fill="#7fb1ff" style={{ animation: 'twinkle 4.5s ease-in-out 2.5s infinite' }} />
        <circle cx="600" cy="122" r="1.2" fill="#fbbc04" style={{ animation: 'twinkle 4.5s ease-in-out 1.2s infinite' }} />
        <circle cx="750" cy="118" r="1.2" fill="#f0f0f0" style={{ animation: 'twinkle 4.5s ease-in-out 0.9s infinite' }} />
        <circle cx="800" cy="130" r="1.2" fill="#fbbc04" style={{ animation: 'twinkle 4.5s ease-in-out 2.8s infinite' }} />
        <circle cx="880" cy="120" r="1.2" fill="#7fb1ff" style={{ animation: 'twinkle 4.5s ease-in-out 1.7s infinite' }} />
        <circle cx="960" cy="138" r="1.2" fill="#fbbc04" style={{ animation: 'twinkle 4.5s ease-in-out 0.3s infinite' }} />
        <circle cx="1060" cy="115" r="1.2" fill="#f0f0f0" style={{ animation: 'twinkle 4.5s ease-in-out 2.2s infinite' }} />
        <circle cx="1120" cy="140" r="1.2" fill="#fbbc04" style={{ animation: 'twinkle 4.5s ease-in-out 1.0s infinite' }} />
        <circle cx="1200" cy="145" r="1.2" fill="#7fb1ff" style={{ animation: 'twinkle 4.5s ease-in-out 3.3s infinite' }} />
        <circle cx="1290" cy="132" r="1.2" fill="#fbbc04" style={{ animation: 'twinkle 4.5s ease-in-out 0.7s infinite' }} />

        {/* Water reflection strip */}
        <rect x="0" y="196" width="1400" height="4" fill="url(#waterGrad)" opacity="0.25" />
        <defs>
          <linearGradient id="waterGrad" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="rgba(240,240,240,0.5)" />
            <stop offset="70%" stopColor="rgba(240,240,240,0.5)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      {/* Water shimmer bar */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 24,
          background: 'linear-gradient(180deg, rgba(240,240,240,0.04), transparent)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(100deg, transparent, rgba(240,240,240,0.09), transparent)',
            backgroundSize: '220% 100%',
            animation: 'shimmer 7s linear infinite',
          }}
        />
      </div>
    </div>
  )
}

export default function Hero() {
  const countdown = useCountdown(CFP_DEADLINE)

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '140px 24px 80px',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-20%',
          left: '50%',
          width: 1100,
          height: 1100,
          transform: 'translateX(-50%)',
          background:
            'radial-gradient(circle at center, rgba(66,133,244,0.16), rgba(234,67,53,0.07) 35%, transparent 65%)',
          filter: 'blur(10px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Auckland skyline */}
      <AucklandSkyline />

      {/* Hero content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: 720,
        }}
      >
        {/* Eyebrow */}
        <div
          className="hero-eyebrow"
          style={{
            fontFamily: '"Roboto Mono", monospace',
            fontSize: 12,
            letterSpacing: '2.5px',
            color: 'var(--text-dim)',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            opacity: 0,
            animation: 'riseIn 0.9s cubic-bezier(.16,1,.3,1) 0.1s forwards',
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#34A853',
              display: 'block',
              animation: 'pulseDot 2.4s ease-out infinite',
            }}
          />
          GDG Auckland Presents&nbsp;•&nbsp;Tāmaki Makaurau
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: '"Google Sans", "Nunito Sans", sans-serif',
            fontWeight: 600,
            fontSize: 'clamp(40px, 8vw, 90px)',
            lineHeight: 1.04,
            letterSpacing: '-2.5px',
            marginTop: 26,
            zIndex: 1,
            color: '#f0f0f0',
          }}
        >
          <span style={{ display: 'block', overflow: 'hidden' }}>
            <span
              style={{
                display: 'block',
                opacity: 0,
                transform: 'translateY(110%)',
                animation: 'riseIn 0.95s cubic-bezier(.16,1,.3,1) 0.25s forwards',
              }}
            >
              DevFest
            </span>
          </span>
          <span style={{ display: 'block', overflow: 'hidden' }}>
            <span
              style={{
                display: 'block',
                opacity: 0,
                transform: 'translateY(110%)',
                animation: 'riseIn 0.95s cubic-bezier(.16,1,.3,1) 0.38s forwards',
                background:
                  'linear-gradient(90deg, #4285F4, #34A853 55%, #fbbc04)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Auckland 2026
            </span>
          </span>
        </h1>

        {/* Sub-headline */}
        <p
          style={{
            fontSize: 'clamp(15px, 2vw, 18px)',
            color: 'var(--text-dim)',
            maxWidth: 560,
            lineHeight: 1.6,
            marginTop: 26,
            opacity: 0,
            animation: 'riseIn 0.9s cubic-bezier(.16,1,.3,1) 0.55s forwards',
            zIndex: 1,
          }}
        >
          Aotearoa&apos;s Premier Community Developer Conference. Uniting engineers,
          architects, designers, and innovators to explore the frontier of AI,
          Cloud, Mobile, and Web technologies.
        </p>

        {/* Metadata badges */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 10,
            marginTop: 28,
            opacity: 0,
            animation: 'riseIn 0.9s cubic-bezier(.16,1,.3,1) 0.62s forwards',
            zIndex: 1,
          }}
        >
          {[
            { icon: '📍', label: 'Auckland CBD (Venue TBA)' },
            { icon: '🗓️', label: 'Late 2026 / November 2026' },
            { icon: '👥', label: '400+ Engineers, Tech Leads & Students' },
          ].map((badge) => (
            <span
              key={badge.label}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '6px 14px',
                borderRadius: 100,
                background: 'rgba(240,240,240,0.05)',
                border: '1px solid rgba(240,240,240,0.09)',
                fontSize: 12.5,
                color: 'var(--text-dim)',
                fontFamily: '"Google Sans", "Nunito Sans", sans-serif',
                whiteSpace: 'nowrap',
              }}
            >
              <span>{badge.icon}</span>
              {badge.label}
            </span>
          ))}
        </div>

        {/* CFP Countdown */}
        <div
          style={{
            marginTop: 44,
            opacity: 0,
            animation: 'riseIn 0.9s cubic-bezier(.16,1,.3,1) 0.7s forwards',
            zIndex: 1,
            width: '100%',
          }}
        >
          {/* Status pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '5px 14px',
              borderRadius: 100,
              background: 'rgba(66,133,244,0.12)',
              border: '1px solid rgba(66,133,244,0.3)',
              fontSize: 11,
              fontFamily: '"Roboto Mono", monospace',
              letterSpacing: '1.5px',
              color: '#4285F4',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            <span style={{ fontSize: 12 }}>⚡</span>
            Call for Speakers Closes In
          </div>

          {/* Countdown cards */}
          <div
            className="countdown-grid"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 12,
              flexWrap: 'wrap',
            }}
          >
            <CountdownCard value={countdown.days} label="Days" />
            <span
              className="countdown-sep"
              style={{
                alignSelf: 'center',
                fontFamily: '"Roboto Mono", monospace',
                fontSize: 28,
                color: 'var(--text-dimmer)',
                lineHeight: 1,
                paddingBottom: 16,
              }}
            >
              :
            </span>
            <CountdownCard value={countdown.hours} label="Hours" />
            <span
              className="countdown-sep"
              style={{
                alignSelf: 'center',
                fontFamily: '"Roboto Mono", monospace',
                fontSize: 28,
                color: 'var(--text-dimmer)',
                lineHeight: 1,
                paddingBottom: 16,
              }}
            >
              :
            </span>
            <CountdownCard value={countdown.minutes} label="Minutes" />
            <span
              className="countdown-sep"
              style={{
                alignSelf: 'center',
                fontFamily: '"Roboto Mono", monospace',
                fontSize: 28,
                color: 'var(--text-dimmer)',
                lineHeight: 1,
                paddingBottom: 16,
              }}
            >
              :
            </span>
            <CountdownCard value={countdown.seconds} label="Seconds" />
          </div>
        </div>

        {/* CTA buttons */}
        <div
          style={{
            display: 'flex',
            gap: 14,
            marginTop: 38,
            opacity: 0,
            animation: 'riseIn 0.9s cubic-bezier(.16,1,.3,1) 0.85s forwards',
            zIndex: 1,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <a
            href="#cfp"
            style={{
              padding: '13px 28px',
              borderRadius: 100,
              fontSize: 14.5,
              fontWeight: 500,
              fontFamily: '"Google Sans", "Nunito Sans", sans-serif',
              background: '#57caff',
              color: '#000000',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              transition: 'transform 0.25s ease, background 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.background = '#7fd6ff'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.background = '#57caff'
            }}
          >
            Submit Your Talk
            <svg viewBox="0 0 16 16" fill="none" width={13} height={13}>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#sponsor"
            style={{
              padding: '13px 28px',
              borderRadius: 100,
              fontSize: 14.5,
              fontWeight: 500,
              fontFamily: '"Google Sans", "Nunito Sans", sans-serif',
              border: '1px solid rgba(240,240,240,0.12)',
              color: '#f0f0f0',
              background: 'transparent',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              transition: 'transform 0.25s ease, border-color 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.borderColor = 'rgba(240,240,240,0.35)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.borderColor = 'rgba(240,240,240,0.12)'
            }}
          >
            View Sponsor Prospectus
          </a>
        </div>
      </div>
    </section>
  )
}
