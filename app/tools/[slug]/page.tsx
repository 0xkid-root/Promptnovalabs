'use client'

import { Metadata } from 'next'
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
import { aiTools, generateToolSchema } from '@/data/tools'
import { SchemaMarkup } from '@/components/schema-markup'

// Generate metadata for each tool page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const tool = aiTools.find((t) => t.slug === params.slug)
  
  if (!tool) {
    return {
      title: 'Tool Not Found | AINovaLab',
      description: 'The requested AI tool could not be found.',
    }
  }

  const title = `${tool.name} - Review, Features & Pricing | AINovaLab`
  const description = `${tool.description.split('. ').slice(0, 2).join('. ')}. Discover features, use cases, pros & cons of ${tool.name}.`
  const canonicalUrl = `https://ainovalab.vercel.app/tools/${tool.slug}`
  
  // Extract keywords from tags and content
  const keywords = [
    tool.name,
    tool.category,
    ...tool.tags,
    'AI tool',
    'review',
    'pricing',
    'features',
    tool.category.toLowerCase(),
    `${tool.name.toLowerCase()} review`,
    `${tool.name.toLowerCase()} pricing`,
  ]

  return {
    title,
    description,
    keywords,
    authors: [{ name: 'AINovaLab' }],
    openGraph: {
      title,
      description,
      type: 'article',
      locale: 'en_US',
      siteName: 'AINovaLab',
      url: canonicalUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  }
}

// Generate static params for all tools
export async function generateStaticParams() {
  return aiTools.map((tool) => ({
    slug: tool.slug,
  }))
}

type ToolType = {
  id: number
  name: string
  slug: string
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

// All responsive breakpoints injected as a <style> tag — no Tailwind needed
const CSS = `
  .td-main {
    flex: 1;
    max-width: 960px;
    margin: 0 auto;
    width: 100%;
    padding: 40px 20px;
    box-sizing: border-box;
  }
  .td-hero-row {
    display: flex;
    gap: 20px;
    align-items: flex-start;
  }
  .td-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-bottom: 12px;
  }
  .td-stat-val {
    font-size: 22px;
    font-weight: 700;
    color: #fff;
    margin: 0;
    word-break: break-word;
  }
  .td-two {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 12px;
  }
  .td-card {
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,0.07);
    background: #111111;
    overflow: hidden;
  }
  .td-card-head {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 16px 20px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .td-card-label {
    font-size: 10px;
    font-weight: 700;
    color: rgba(255,255,255,0.35);
    letter-spacing: 1.5px;
  }
  .td-list {
    padding: 14px 18px;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .td-list li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 13px;
    color: rgba(255,255,255,0.6);
    line-height: 1.55;
  }

  /* Tablet */
  @media (max-width: 768px) {
    .td-main { padding: 28px 14px; }
    .td-hero-row { flex-direction: column; gap: 16px; }
    .td-stats { grid-template-columns: repeat(3, 1fr); gap: 8px; }
    .td-stat-val { font-size: 16px; }
    .td-two { grid-template-columns: 1fr; }
  }

  /* Mobile */
  @media (max-width: 480px) {
    .td-main { padding: 20px 12px; }
    .td-stats { grid-template-columns: 1fr; gap: 8px; }
    .td-stat-val { font-size: 20px; }
    .td-two { grid-template-columns: 1fr; }
  }
`

export default function ToolDetailPage() {
  const params = useParams() as { slug: string }
  const slug = params.slug
  const [tool, setTool] = useState<ToolType | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    if (slug) {
      const found = aiTools.find((t) => t.slug === slug) || null
      setTool(found)
      setIsLoading(false)
    }
  }, [slug])

  if (isLoading) {
    return (
      <div style={{ minHeight: '100vh', background: '#0a0a0a' }}>
        <style>{CSS}</style>
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
        <style>{CSS}</style>
        <Header />
        <main className="td-main">
          <Link href="/tools"><GhostBtn><ArrowLeft style={{ width: 14, height: 14 }} /> Back to Tools</GhostBtn></Link>
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
      {/* JSON-LD Schema Markup */}
      {tool && <SchemaMarkup jsonLd={generateToolSchema(tool)} />}
      
      <style>{CSS}</style>
      <Header />

      <main className="td-main">

        {/* Back */}
        <motion.div initial="hidden" animate="show" variants={fadeUp} custom={0} style={{ marginBottom: 24 }}>
          <Link href="/tools">
            <GhostBtn><ArrowLeft style={{ width: 14, height: 14 }} /> Back to Tools</GhostBtn>
          </Link>
        </motion.div>

        {/* ── Hero Card ── */}
        <motion.div
          initial="hidden" animate="show" variants={fadeUp} custom={1}
          style={{
            position: 'relative', borderRadius: 20,
            border: '1px solid rgba(255,255,255,0.07)',
            background: '#111111', overflow: 'hidden',
            marginBottom: 12,
            padding: 'clamp(18px, 4vw, 32px)'
          }}
        >
          {/* glow */}
          <div style={{
            position: 'absolute', top: -60, right: -60, width: 260, height: 260,
            background: 'radial-gradient(circle, rgba(147,51,234,0.13) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <div className="td-hero-row" style={{ position: 'relative' }}>
            {/* Icon */}
            <div style={{
              flexShrink: 0, width: 60, height: 60, borderRadius: 16,
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28
            }}>
              {tool.icon}
            </div>

            <div style={{ flex: 1, minWidth: 0, width: '100%' }}>
              {/* Title row */}
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <h1 style={{
                  fontSize: 'clamp(20px, 5vw, 26px)', fontWeight: 700, color: '#fff',
                  margin: 0, letterSpacing: '-0.4px', lineHeight: 1.2
                }}>
                  {tool.name}
                </h1>
                <span style={{
                  padding: '4px 12px', borderRadius: 999, fontSize: 11,
                  fontWeight: 600, background: '#9333ea', color: '#fff',
                  letterSpacing: '0.3px', whiteSpace: 'nowrap'
                }}>
                  {tool.category}
                </span>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
                {tool.tags.map(tag => (
                  <span key={tag} style={{
                    padding: '3px 10px', borderRadius: 999, fontSize: 11,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.55)'
                  }}>{tag}</span>
                ))}
              </div>

              {/* Description */}
              <p style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(255,255,255,0.55)', margin: 0 }}>
                {expanded ? tool.description : shortDesc}
              </p>
              {isLong && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  style={{
                    marginTop: 8, display: 'inline-flex', alignItems: 'center', gap: 4,
                    fontSize: 12, color: '#a855f7', background: 'none', border: 'none',
                    cursor: 'pointer', padding: 0
                  }}
                >
                  {expanded
                    ? <><ChevronUp style={{ width: 12, height: 12 }} /> Show less</>
                    : <><ChevronDown style={{ width: 12, height: 12 }} /> Read more</>}
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* ── Stats ── */}
        <motion.div initial="hidden" animate="show" variants={fadeUp} custom={2} className="td-stats">
          {[
            { icon: <Star style={{ width: 14, height: 14, color: '#facc15' }} />, label: 'RATING', value: String(tool.rating) },
            { icon: <Users style={{ width: 14, height: 14, color: '#60a5fa' }} />, label: 'USERS', value: tool.users },
            { icon: <DollarSign style={{ width: 14, height: 14, color: '#4ade80' }} />, label: 'PRICING', value: tool.pricing },
          ].map(({ icon, label, value }) => (
            <div key={label} style={{
              borderRadius: 16, border: '1px solid rgba(255,255,255,0.07)',
              background: '#111111', padding: 'clamp(14px, 3vw, 20px) clamp(14px, 3vw, 22px)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 8 }}>
                {icon}
                <span style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.35)', letterSpacing: '1.2px' }}>
                  {label}
                </span>
              </div>
              <p className="td-stat-val">{value}</p>
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
        <motion.div initial="hidden" animate="show" variants={fadeUp} custom={4} className="td-two">
          <InfoCard icon={<Zap style={{ width: 14, height: 14, color: '#a855f7' }} />} title="Features" items={tool.features} dot="#a855f7" />
          <InfoCard icon={<Target style={{ width: 14, height: 14, color: '#60a5fa' }} />} title="Use Cases" items={tool.useCases} dot="#60a5fa" />
        </motion.div>

        {/* ── Pros + Cons ── */}
        <motion.div initial="hidden" animate="show" variants={fadeUp} custom={5} className="td-two">
          <ProsConsCard title="Pros" items={tool.pros} type="pro" />
          <ProsConsCard title="Cons" items={tool.cons} type="con" />
        </motion.div>

        {/* ── Specifications ── */}
        <motion.div
          initial="hidden" animate="show" variants={fadeUp} custom={6}
          className="td-card" style={{ marginBottom: 40 }}
        >
          <div className="td-card-head">
            <Settings style={{ width: 14, height: 14, color: 'rgba(255,255,255,0.35)' }} />
            <span className="td-card-label">SPECIFICATIONS</span>
          </div>
          {Object.entries(tool.specifications).map(([key, value], i, arr) => (
            <div key={key} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              gap: 12, padding: '13px 20px', flexWrap: 'wrap',
              borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none'
            }}>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>{key}</span>
              <span style={{ fontSize: 13, fontWeight: 500, color: '#fff', textAlign: 'right' }}>{value}</span>
            </div>
          ))}
        </motion.div>

        <FAQ />
      </main>

      <Footer />
    </div>
  )
}

// ── Shared ──
function GhostBtn({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      background: 'transparent', border: '1px solid rgba(255,255,255,0.08)',
      color: 'rgba(255,255,255,0.5)', borderRadius: 999, padding: '8px 16px',
      fontSize: 13, cursor: 'pointer'
    }}>
      {children}
    </span>
  )
}

function InfoCard({ icon, title, items, dot }: {
  icon: React.ReactNode; title: string; items: string[]; dot: string
}) {
  return (
    <div className="td-card">
      <div className="td-card-head">
        {icon}
        <span className="td-card-label">{title.toUpperCase()}</span>
      </div>
      <ul className="td-list">
        {items.map((item, i) => (
          <li key={i}>
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
  return (
    <div className="td-card">
      <div className="td-card-head" style={{ borderBottom: `1px solid ${isPro ? 'rgba(74,222,128,0.12)' : 'rgba(248,113,113,0.12)'}` }}>
        {isPro
          ? <ThumbsUp style={{ width: 14, height: 14, color }} />
          : <ThumbsDown style={{ width: 14, height: 14, color }} />}
        <span style={{ fontSize: 10, fontWeight: 700, color, letterSpacing: '1.5px' }}>
          {title.toUpperCase()}
        </span>
      </div>
      <ul className="td-list">
        {items.map((item, i) => (
          <li key={i}>
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