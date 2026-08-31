import { useEffect, useRef } from 'react'

const PILLARS = [
  {
    icon: '🤖',
    title: 'AI & Machine Learning',
    description: 'Generative AI, Gemini, ADK, and local model inference.',
    color: '#4285F4',
    colorRgba: 'rgba(66,133,244,0.12)',
  },
  {
    icon: '📱',
    title: 'Mobile & Multiplatform',
    description: 'Flutter, Android Jetpack, Kotlin Multiplatform (KMP).',
    color: '#EA4335',
    colorRgba: 'rgba(234,67,53,0.12)',
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    description:
      'Google Cloud Platform, Kubernetes, Serverless, and Scalable Architecture.',
    color: '#fbbc04',
    colorRgba: 'rgba(251,188,5,0.10)',
  },
  {
    icon: '🤝',
    title: 'Community & Leadership',
    description:
      'Career growth, engineering culture, tech debt management, and open-source ethics.',
    color: '#34A853',
    colorRgba: 'rgba(52,168,83,0.12)',
  },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const revealRefs = useRef<(HTMLElement | null)[]>([])

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
      { threshold: 0.12 }
    )

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const setRevealRef = (index: number) => (el: HTMLElement | null) => {
    revealRefs.current[index] = el
  }

  return (
    <section
      id="about"
      ref={sectionRef}
      className="page-section"
      style={{
        maxWidth: 1180,
        margin: '0 auto',
        padding: '120px 24px',
      }}
    >
      <div
        className="reveal"
        ref={setRevealRef(0)}
        style={{ marginBottom: 56 }}
      >
        {/* Kicker */}
        <div className="kicker" style={{ marginBottom: 16 }}>
          About DevFest
        </div>

        {/* Heading */}
        <h2
          className="section-heading"
          style={{ maxWidth: 560, marginBottom: 28 }}
        >
          Crafted by Developers,{' '}
          <span className="gradient-text">Driven by Community</span>
        </h2>

        {/* Body paragraphs */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
            maxWidth: 900,
          }}
        >
          <p
            style={{
              fontSize: 15,
              color: 'var(--text-dim)',
              lineHeight: 1.7,
            }}
          >
            DevFest is an annual decentralized tech conference hosted by Google
            Developer Groups across the globe. GDG Auckland brings this
            world-class experience to Tāmaki Makaurau, creating an inclusive
            space for technologists of all skill levels to share practical
            knowledge, deep-dive into cutting-edge Google tooling, and solve
            real-world engineering challenges.
          </p>
          <p
            style={{
              fontSize: 15,
              color: 'var(--text-dim)',
              lineHeight: 1.7,
            }}
          >
            Whether you&apos;re exploring Multi-Agent AI systems, scaling
            multiplatform apps with Kotlin and Flutter, optimizing modern Cloud
            infrastructure, or architecting secure web ecosystems, DevFest
            delivers battle-tested insights directly from industry practitioners
            and Google Developer Experts.
          </p>
        </div>
      </div>

      {/* Core Pillars */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 18,
        }}
      >
        {PILLARS.map((pillar, i) => (
          <div
            key={pillar.title}
            className="reveal glass-card"
            ref={setRevealRef(i + 1)}
            style={{
              padding: '28px 24px',
              borderRadius: 14,
              transition:
                'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
              transitionDelay: `${i * 80}ms`,
              cursor: 'default',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = 'translateY(-4px)'
              el.style.borderColor = pillar.color + '55'
              el.style.boxShadow = `0 0 30px ${pillar.color}18`
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = 'translateY(0)'
              el.style.borderColor = 'rgba(240,240,240,0.07)'
              el.style.boxShadow = 'none'
            }}
          >
            {/* Color accent dot */}
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: pillar.color,
                marginBottom: 20,
                boxShadow: `0 0 10px ${pillar.color}66`,
              }}
            />

            <h3
              style={{
                fontFamily: '"Google Sans", "Nunito Sans", sans-serif',
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: '-0.2px',
                marginBottom: 10,
                color: '#f0f0f0',
              }}
            >
              {pillar.title}
            </h3>
            <p
              style={{
                fontSize: 13.5,
                color: 'var(--text-dim)',
                lineHeight: 1.65,
              }}
            >
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
