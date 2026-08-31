import { useEffect, useRef } from 'react'

interface TeamMember {
  name: string
  role: string
  initials: string
  accentColor: string
  accentRgba: string
}

const COMMUNITY_LEADS: TeamMember[] = [
  {
    name: 'Dilum De Silva',
    role: 'President / GDG Organizer',
    initials: 'DD',
    accentColor: '#4285F4',
    accentRgba: 'rgba(66,133,244,0.15)',
  },
  {
    name: 'Nic Tolentino',
    role: 'Vice President / GDG Organizer',
    initials: 'NT',
    accentColor: '#EA4335',
    accentRgba: 'rgba(234,67,53,0.15)',
  },
  {
    name: 'Jess Lowe',
    role: 'Community Organizer',
    initials: 'JL',
    accentColor: '#FBBC05',
    accentRgba: 'rgba(251,188,5,0.12)',
  },
  {
    name: 'Ramod K',
    role: 'Technical Organizer',
    initials: 'RK',
    accentColor: '#34A853',
    accentRgba: 'rgba(52,168,83,0.15)',
  },
  {
    name: 'Pasindu W',
    role: 'Community Organizer',
    initials: 'PW',
    accentColor: '#4285F4',
    accentRgba: 'rgba(66,133,244,0.15)',
  },
  {
    name: 'Sandaru V',
    role: 'Operations Organizer',
    initials: 'SV',
    accentColor: '#4285F4',
    accentRgba: 'rgba(66,133,244,0.15)',
  },
]

interface MemberCardProps {
  member: TeamMember
  delay?: number
}

function MemberCard({ member, delay = 0 }: MemberCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

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

    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className="reveal glass-card"
      ref={cardRef}
      style={{
        padding: '28px 22px',
        borderRadius: 14,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 14,
        transitionDelay: `${delay}ms`,
        cursor: 'default',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = member.accentColor + '44'
        el.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = 'rgba(245,245,247,0.07)'
        el.style.transform = 'translateY(0)'
      }}
    >
      {/* Avatar */}
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: '50%',
          background: member.accentRgba,
          border: `1.5px solid ${member.accentColor}40`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: '"Space Grotesk", sans-serif',
          fontWeight: 600,
          fontSize: 16,
          color: member.accentColor,
          letterSpacing: '0.5px',
          flexShrink: 0,
        }}
        aria-hidden="true"
      >
        {member.initials}
      </div>

      {/* Info */}
      <div>
        <div
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 600,
            fontSize: 15,
            color: '#f5f5f7',
            marginBottom: 4,
          }}
        >
          {member.name}
        </div>
        <div
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 10.5,
            letterSpacing: '0.5px',
            color: 'var(--text-dim)',
            lineHeight: 1.4,
          }}
        >
          {member.role}
        </div>
      </div>

      {/* Accent dot */}
      <div
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: member.accentColor,
          boxShadow: `0 0 8px ${member.accentColor}80`,
          position: 'absolute',
          top: 18,
          right: 18,
        }}
        aria-hidden="true"
      />
    </div>
  )
}

export default function Team() {
  const headRef = useRef<HTMLDivElement>(null)
  const campusRef = useRef<HTMLDivElement>(null)

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

    if (headRef.current) observer.observe(headRef.current)
    if (campusRef.current) observer.observe(campusRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="team"
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
          Organizers
        </div>
        <h2 className="section-heading">
          Meet the <span className="gradient-text">DevFest Auckland Crew</span>
        </h2>
      </div>

      {/* Subsection A: Community Leads */}
      <div style={{ marginBottom: 60 }}>
        <div
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 10.5,
            letterSpacing: '2px',
            color: 'var(--text-dimmer)',
            textTransform: 'uppercase',
            marginBottom: 24,
            paddingBottom: 12,
            borderBottom: '1px solid rgba(245,245,247,0.06)',
          }}
        >
          GDG Auckland Community Leads
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: 16,
            position: 'relative',
          }}
        >
          {COMMUNITY_LEADS.map((member, i) => (
            <MemberCard key={member.name} member={member} delay={i * 70} />
          ))}
        </div>
      </div>

      {/* Subsection B: GDG on Campus */}
      <div
        className="reveal glass-card"
        ref={campusRef}
        style={{
          padding: '36px 32px',
          borderRadius: 16,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 24,
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: 4,
            flexShrink: 0,
          }}
          aria-hidden="true"
        >
          {['#4285F4', '#EA4335', '#FBBC05', '#34A853'].map((c) => (
            <span
              key={c}
              style={{
                display: 'block',
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: c,
              }}
            />
          ))}
        </div>

        <div style={{ flex: 1, minWidth: 240 }}>
          <div
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 10,
              letterSpacing: '2px',
              color: 'var(--text-dimmer)',
              textTransform: 'uppercase',
              marginBottom: 10,
            }}
          >
            GDG on Campus Team
          </div>
          <div
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: 17,
              fontWeight: 600,
              color: '#f5f5f7',
              marginBottom: 10,
            }}
          >
            Student Leads &amp; Campus Ambassadors
          </div>
          <p
            style={{
              fontSize: 14,
              color: 'var(--text-dim)',
              lineHeight: 1.65,
              maxWidth: 560,
            }}
          >
            Dedicated student leads coordinating logistics, volunteer
            operations, and student engagement across universities in Tāmaki
            Makaurau. Our campus ambassadors bridge the gap between industry
            practitioners and the next generation of Auckland developers.
          </p>
        </div>
      </div>
    </section>
  )
}
