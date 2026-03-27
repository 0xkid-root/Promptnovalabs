'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import {
  ArrowLeft, ExternalLink, Check, X,
  ChevronDown, ChevronUp, Star, Users,
  DollarSign, Zap, Target, ThumbsUp,
  ThumbsDown, Settings
} from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { FAQ } from '@/components/faq'
import { aiTools } from '@/data/tools'

type ToolType = {
  id: number
  name: string
  description: string
  category: string
  tags: string[]
  rating: number
  users: string
  icon: string
  color: string
  website: string
  pricing: string
  features: string[]
  specifications: Record<string, string | undefined>
  useCases: string[]
  pros: string[]
  cons: string[]
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.07, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }
  }),
}

export default function ToolDetailPage() {
  const params = useParams() as { slug: string }
  const slug = params.slug
  const [tool, setTool] = useState<ToolType | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [descExpanded, setDescExpanded] = useState(false)

  useEffect(() => {
    if (slug) {
      const foundTool = aiTools.find((t) => t.slug === slug) || null
      setTool(foundTool)
      setIsLoading(false)
    }
  }, [slug])

  if (isLoading) {
    return (
      <div style={{ minHeight: '100vh', background: '#0a0a0a' }}>
        <Header />
        <main style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 0' }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>Loading...</p>
        </main>
        <Footer />
      </div>
    )
  }

  if (!tool) {
    return (
      <div style={{ minHeight: '100vh', background: '#0a0a0a' }}>
        <Header />
        <main style={{ maxWidth: 960, margin: '0 auto', padding: '80px 16px' }}>
          <Link href="/tools">
            <button style={ghostBtn}>
              <ArrowLeft style={{ width: 14, height: 14 }} /> Back to Tools
            </button>
          </Link>
          <p style={{ color: 'rgba(255,255,255,0.4)', marginTop: 24 }}>Tool not found</p>
        </main>
        <Footer />
      </div>
    )
  }

  const sentences = tool.description.split('. ')
  const shortDesc = sentences.slice(0, 2).join('. ') + '.'
  const isLong = sentences.length > 2

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <main style={{ flex: 1, maxWidth: 960, margin: '0 auto', width: '100%', padding: '40px 16px' }}>

        {/* Back */}
        <motion.div initial="hidden" animate="show" variants={fadeUp} custom={0}>
          <Link href="/tools">
            <button style={{ ...ghostBtn, marginBottom: 28 }}>
              <ArrowLeft style={{ width: 14, height: 14 }} />
              Back to Tools
            </button>
          </Link>
        </motion.div>

        {/* ── Hero Card ── */}
        <motion.div
          initial="hidden" animate="show" variants={fadeUp} custom={1}
          style={{
            position: 'relative', borderRadius: 20,
            border: '1px solid rgba(255,255,255,0.07)',
            background: '#111111', overflow: 'hidden', marginBottom: 12, padding: 32
          }}
        >
          <div style={{
            position: 'absolute', top: -60, right: -60, width: 240, height: 240,
            background: 'radial-gradient(circle, rgba(147,51,234,0.12) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative' }}>
            <div style={{
              flexShrink: 0, width: 64, height: 64, borderRadius: 16,
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30
            }}>
              {tool.icon}
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                <h1 style={{ fontSize: 26, fontWeight: 700, color: '#fff', margin: 0, letterSpacing: '-0.4px' }}>
                  {tool.name}
                </h1>
                <span style={{
                  padding: '3px 10px', borderRadius: 999, fontSize: 11,
                  fontWeight: 600, background: '#9333ea', color: '#fff', letterSpacing: '0.3px'
                }}>
                  {tool.category}
                </span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
                {tool.tags.map(tag => (
                  <span key={tag} style={{
                    padding: '3px 10px', borderRadius: 999, fontSize: 11,
                    background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.55)'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              <p style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(255,255,255,0.55)', margin: 0 }}>
                {descExpanded ? tool.description : shortDesc}
              </p>
              {isLong && (
                <button
                  onClick={() => setDescExpanded(!descExpanded)}
                  style={{
                    marginTop: 8, display: 'inline-flex', alignItems: 'center', gap: 4,
                    fontSize: 12, color: '#a855f7', background: 'none', border: 'none',
                    cursor: 'pointer', padding: 0
                  }}
                >
                  {descExpanded
                    ? <><ChevronUp style={{ width: 12, height: 12 }} /> Show less</>
                    : <><ChevronDown style={{ width: 12, height: 12 }} /> Read more</>}
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* ── Stats 3-col grid ── */}
        <motion.div
          initial="hidden" animate="show" variants={fadeUp} custom={2}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 12,
            marginBottom: 12
          }}
        >
          {[
            { icon: <Star style={{ width: 15, height: 15, color: '#facc15' }} />, label: 'RATING', value: String(tool.rating) },
            { icon: <Users style={{ width: 15, height: 15, color: '#60a5fa' }} />, label: 'USERS', value: tool.users },
            { icon: <DollarSign style={{ width: 15, height: 15, color: '#4ade80' }} />, label: 'PRICING', value: tool.pricing },
          ].map(({ icon, label, value }) => (
            <div key={label} style={{
              borderRadius: 16, border: '1px solid rgba(255,255,255,0.07)',
              background: '#111111', padding: '20px 22px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 10 }}>
                {icon}
                <span style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.35)', letterSpacing: '1.2px' }}>
                  {label}
                </span>
              </div>
              <p style={{ fontSize: 22, fontWeight: 700, color: '#fff', margin: 0 }}>{value}</p>
            </div>
          ))}
        </motion.div>

        {/* ── CTA ── */}
        <motion.div initial="hidden" animate="show" variants={fadeUp} custom={3} style={{ marginBottom: 36 }}>
          <a href={tool.website} target="_blank" rel="noopener noreferrer">
            <button style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#9333ea', color: '#fff', border: 'none',
              borderRadius: 999, padding: '11px 24px', fontSize: 14,
              fontWeight: 600, cursor: 'pointer',
              boxShadow: '0 0 28px rgba(147,51,234,0.4)',
            }}>
              Visit Website <ExternalLink style={{ width: 14, height: 14 }} />
            </button>
          </a>
        </motion.div>

        {/* ── Features + Use Cases ── */}
        <motion.div
          initial="hidden" animate="show" variants={fadeUp} custom={4}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}
        >
          <InfoCard icon={<Zap style={{ width: 14, height: 14, color: '#a855f7' }} />} title="Features" items={tool.features} dot="#a855f7" />
          <InfoCard icon={<Target style={{ width: 14, height: 14, color: '#60a5fa' }} />} title="Use Cases" items={tool.useCases} dot="#60a5fa" />
        </motion.div>

        {/* ── Pros + Cons ── */}
        <motion.div
          initial="hidden" animate="show" variants={fadeUp} custom={5}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}
        >
          <ProsConsCard title="Pros" items={tool.pros} type="pro" />
          <ProsConsCard title="Cons" items={tool.cons} type="con" />
        </motion.div>

        {/* ── Specifications ── */}
        <motion.div
          initial="hidden" animate="show" variants={fadeUp} custom={6}
          style={{
            borderRadius: 20, border: '1px solid rgba(255,255,255,0.07)',
            background: '#111111', overflow: 'hidden', marginBottom: 40
          }}
        >
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)'
          }}>
            <Settings style={{ width: 14, height: 14, color: 'rgba(255,255,255,0.35)' }} />
            <span style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.35)', letterSpacing: '1.5px' }}>
              SPECIFICATIONS
            </span>
          </div>
          {Object.entries(tool.specifications).map(([key, value], i, arr) => (
            <div key={key} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '14px 24px',
              borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none'
            }}>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>{key}</span>
              <span style={{ fontSize: 13, fontWeight: 500, color: '#fff' }}>{value}</span>
            </div>
          ))}
        </motion.div>

        <FAQ />
      </main>

      <Footer />
    </div>
  )
}

// ── Shared styles ──
const ghostBtn: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 8,
  background: 'transparent', border: '1px solid rgba(255,255,255,0.08)',
  color: 'rgba(255,255,255,0.5)', borderRadius: 999, padding: '8px 16px',
  fontSize: 13, cursor: 'pointer'
}

// ── Sub-components ──
function InfoCard({ icon, title, items, dot }: {
  icon: React.ReactNode; title: string; items: string[]; dot: string
}) {
  return (
    <div style={{ borderRadius: 20, border: '1px solid rgba(255,255,255,0.07)', background: '#111111', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        {icon}
        <span style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.35)', letterSpacing: '1.5px' }}>
          {title.toUpperCase()}
        </span>
      </div>
      <ul style={{ padding: '16px 20px', margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((item, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.55 }}>
            <span style={{ marginTop: 5, width: 6, height: 6, borderRadius: '50%', background: dot, flexShrink: 0 }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function ProsConsCard({ title, items, type }: { title: string; items: string[]; type: 'pro' | 'con' }) {
  const isPro = type === 'pro'
  const color = isPro ? '#4ade80' : '#f87171'
  const borderColor = isPro ? 'rgba(74,222,128,0.12)' : 'rgba(248,113,113,0.12)'
  return (
    <div style={{ borderRadius: 20, border: '1px solid rgba(255,255,255,0.07)', background: '#111111', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '16px 24px', borderBottom: `1px solid ${borderColor}` }}>
        {isPro
          ? <ThumbsUp style={{ width: 14, height: 14, color }} />
          : <ThumbsDown style={{ width: 14, height: 14, color }} />}
        <span style={{ fontSize: 10, fontWeight: 700, color, letterSpacing: '1.5px' }}>
          {title.toUpperCase()}
        </span>
      </div>
      <ul style={{ padding: '16px 20px', margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((item, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.55 }}>
            {isPro
              ? <Check style={{ width: 14, height: 14, color, flexShrink: 0, marginTop: 1 }} />
              : <X style={{ width: 14, height: 14, color, flexShrink: 0, marginTop: 1 }} />}
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}