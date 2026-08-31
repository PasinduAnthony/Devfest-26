import { useEffect, useRef } from 'react'
import dilumPhoto from '../assets/team/dilum.jpeg'
import juliusPhoto from '../assets/team/julius.jpeg'
import nickPhoto from '../assets/team/nick.jpeg'
import ramodPhoto from '../assets/team/ramod.jpeg'
import vishwajithPhoto from '../assets/team/vishwajith.jpeg'
import pasinduPhoto from '../assets/team/pasindu.jpeg'

interface TeamMember {
  name: string
  role: string
  photo: string
  linkedin: string
  accentColor: string
}

const COMMUNITY_LEADS: TeamMember[] = [
  {
    name: 'Dilum De Silva',
    role: 'Lead Organizer',
    photo: dilumPhoto,
    linkedin: 'https://www.linkedin.com/in/dilumdesilva/',
    accentColor: '#4285F4',
  },
  {
    name: 'Julius Spencer',
    role: 'Organizer',
    photo: juliusPhoto,
    linkedin: 'https://www.linkedin.com/in/juliusspencer/',
    accentColor: '#EA4335',
  },
  {
    name: 'Nic Tolentino',
    role: 'Organizer',
    photo: nickPhoto,
    linkedin: 'https://www.linkedin.com/in/nic-tolentino/',
    accentColor: '#FBBC05',
  },
  {
    name: 'Ramod Kaushan',
    role: 'Organizer',
    photo: ramodPhoto,
    linkedin: 'https://www.linkedin.com/in/ramod-kaushan/',
    accentColor: '#34A853',
  },
  {
    name: 'Vishwajith Kasthoori',
    role: 'Volunteer',
    photo: vishwajithPhoto,
    linkedin: 'https://www.linkedin.com/in/vishwajithsandaru/',
    accentColor: '#4285F4',
  },
  {
    name: 'Pasindu Fernando',
    role: 'Volunteer',
    photo: pasinduPhoto,
    linkedin: 'https://www.linkedin.com/in/pasindu-anthony-80b489180/',
    accentColor: '#4285F4',
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
        padding: '24px 20px',
        borderRadius: 14,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 14,
        transitionDelay: `${delay}ms`,
        position: 'relative',
        transition: 'border-color 0.3s ease, transform 0.3s ease',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = member.accentColor + '55'
        el.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = 'rgba(245,245,247,0.07)'
        el.style.transform = 'translateY(0)'
      }}
    >
      {/* Photo avatar */}
      <img
        src={member.photo}
        alt={member.name}
        style={{
          width: 60,
          height: 60,
          borderRadius: '50%',
          objectFit: 'cover',
          border: `2px solid ${member.accentColor}40`,
          flexShrink: 0,
        }}
      />

      {/* Info */}
      <div style={{ flex: 1 }}>
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

      {/* LinkedIn link */}
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${member.name} on LinkedIn`}
        style={{
          position: 'absolute',
          top: 18,
          right: 18,
          width: 28,
          height: 28,
          borderRadius: '50%',
          background: 'rgba(245,245,247,0.06)',
          border: '1px solid rgba(245,245,247,0.10)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.25s ease, border-color 0.25s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'rgba(66,133,244,0.15)'
          e.currentTarget.style.borderColor = 'rgba(66,133,244,0.4)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'rgba(245,245,247,0.06)'
          e.currentTarget.style.borderColor = 'rgba(245,245,247,0.10)'
        }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width={13} height={13} style={{ color: '#8d8f96' }}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>
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
      <div className="reveal" ref={headRef} style={{ marginBottom: 56 }}>
        <div className="kicker" style={{ marginBottom: 16 }}>
          Organizers
        </div>
        <h2 className="section-heading">
          Meet the <span className="gradient-text">DevFest Auckland Crew</span>
        </h2>
      </div>

      {/* Team grid */}
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
          }}
        >
          {COMMUNITY_LEADS.map((member, i) => (
            <MemberCard key={member.name} member={member} delay={i * 70} />
          ))}
        </div>
      </div>

      {/* GDG on Campus block */}
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
        <div style={{ display: 'flex', gap: 4, flexShrink: 0 }} aria-hidden="true">
          {['#4285F4', '#EA4335', '#FBBC05', '#34A853'].map((c) => (
            <span
              key={c}
              style={{ display: 'block', width: 10, height: 10, borderRadius: '50%', background: c }}
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
          <p style={{ fontSize: 14, color: 'var(--text-dim)', lineHeight: 1.65, maxWidth: 560 }}>
            Dedicated student leads coordinating logistics, volunteer operations,
            and student engagement across universities in Tāmaki Makaurau. Our
            campus ambassadors bridge the gap between industry practitioners and
            the next generation of Auckland developers.
          </p>
        </div>
      </div>
    </section>
  )
}
