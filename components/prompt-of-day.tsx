'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Eye, MessageSquare, CheckCheck, ImageIcon, Wand2, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const PROMPT_VARIANTS = [
  {
    label: 'Cinematic Portrait',
    category: 'Portrait',
    prompt: `A cinematic close-up portrait of a young woman with freckles, 
golden hour sunlight, shallow depth of field, shot on 85mm f/1.4 lens, 
film grain, analog photography, warm tones, soft bokeh background, 
editorial fashion style, Vogue magazine aesthetic`,
    tags: ['portrait', 'cinematic', 'golden hour'],
    uses: '3,841',
    comments: '219',
    output: {
      gradient: 'from-amber-900/60 via-orange-800/40 to-yellow-700/20',
      accent: '#f59e0b',
      label: 'Cinematic Portrait',
      shapes: [
        { cx: '50%', cy: '42%', r: '28%', color: 'rgba(251,191,36,0.18)' },
        { cx: '50%', cy: '42%', r: '18%', color: 'rgba(251,191,36,0.28)' },
      ],
    },
  },
  {
    label: 'Neon Cityscape',
    category: 'Environment',
    prompt: `A breathtaking neon-lit cyberpunk cityscape at night, 
rain-slicked streets reflecting glowing signs in pink and cyan, 
towering skyscrapers with holographic billboards, fog and mist, 
ultra-detailed, 8K, cinematic lighting, blade runner aesthetic, 
volumetric light rays, aerial view`,
    tags: ['cityscape', 'cyberpunk', 'neon'],
    uses: '5,120',
    comments: '341',
    output: {
      gradient: 'from-cyan-900/60 via-fuchsia-900/40 to-violet-900/20',
      accent: '#22d3ee',
      label: 'Neon Cityscape',
      shapes: [
        { cx: '30%', cy: '60%', r: '20%', color: 'rgba(34,211,238,0.2)' },
        { cx: '70%', cy: '55%', r: '18%', color: 'rgba(217,70,239,0.2)' },
      ],
    },
  },
  {
    label: 'Fantasy Landscape',
    category: 'Landscape',
    prompt: `An epic fantasy landscape with floating islands covered in lush 
emerald forests, cascading waterfalls into clouds below, ancient stone 
temples, bioluminescent plants glowing purple and blue at dusk, 
dramatic volumetric lighting, matte painting style, hyper-detailed, 
concept art, artstation trending`,
    tags: ['fantasy', 'landscape', 'epic'],
    uses: '2,987',
    comments: '178',
    output: {
      gradient: 'from-emerald-900/60 via-teal-800/40 to-violet-900/20',
      accent: '#10b981',
      label: 'Fantasy Landscape',
      shapes: [
        { cx: '50%', cy: '50%', r: '25%', color: 'rgba(16,185,129,0.18)' },
        { cx: '60%', cy: '35%', r: '14%', color: 'rgba(139,92,246,0.2)' },
      ],
    },
  },
]

export function PromptOfTheDay() {
  const [copied, setCopied] = useState(false)
  const [active, setActive] = useState(0)

  const current = PROMPT_VARIANTS[active]

  const handleCopy = () => {
    navigator.clipboard.writeText(current.prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">

        {/* Section header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary/60 mb-2 block">
              Daily Pick
            </span>
            <h2 className="text-3xl font-bold text-foreground">Prompt of the Day</h2>
          </div>
          <div className="flex gap-2">
            {PROMPT_VARIANTS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? 'w-8 bg-primary' : 'w-2 bg-primary/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-primary/20 bg-card overflow-hidden glow-effect-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">

            {/* LEFT — Prompt */}
            <div className="flex flex-col p-8 border-b lg:border-b-0 lg:border-r border-primary/10">

              <div className="mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 border border-primary/20 px-3 py-1 text-xs font-medium text-primary mb-4">
                  <ImageIcon className="h-3 w-3" />
                  Image Generator · {current.category}
                </span>
                <AnimatePresence mode="wait">
                  <motion.h3
                    key={current.label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl font-bold text-foreground mb-2"
                  >
                    {current.label}
                  </motion.h3>
                </AnimatePresence>
                <div className="flex gap-2 flex-wrap">
                  {current.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary/70">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Prompt text box */}
              <div className="relative flex-1 rounded-xl bg-background/60 border border-primary/10 p-5 mb-6 overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-primary/5 border-r border-primary/10 flex flex-col items-center pt-5 gap-[1.35rem]">
                  {current.prompt.split('\n').map((_, i) => (
                    <span key={i} className="text-[10px] text-primary/20 font-mono leading-none">{i + 1}</span>
                  ))}
                </div>
                <AnimatePresence mode="wait">
                  <motion.pre
                    key={current.label}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="pl-8 text-sm text-foreground/75 font-mono whitespace-pre-wrap leading-relaxed"
                  >
                    {current.prompt}
                  </motion.pre>
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-sm text-foreground/50">
                  <span className="flex items-center gap-1.5">
                    <Eye className="h-3.5 w-3.5" /> {current.uses}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageSquare className="h-3.5 w-3.5" /> {current.comments}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleCopy}
                  className="group flex items-center gap-2 rounded-full bg-primary text-foreground px-5 py-2 text-sm font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                >
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.span
                        key="check"
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCheck className="h-4 w-4" /> Copied!
                      </motion.span>
                    ) : (
                      <motion.span
                        key="copy"
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <Copy className="h-4 w-4" /> Copy Prompt
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>

            {/* RIGHT — Output Preview */}
            <div className="relative flex flex-col items-center justify-center p-8 overflow-hidden bg-background/30">

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.label + '-bg'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 bg-gradient-to-br ${current.output.gradient} blur-2xl`}
                />
              </AnimatePresence>

              <div className="absolute top-4 left-4 flex items-center gap-1.5 text-xs text-foreground/40 bg-background/40 backdrop-blur-sm rounded-full px-3 py-1 border border-primary/10 z-10">
                <Wand2 className="h-3 w-3" />
                AI Output Preview
              </div>

              {/* Simulated image card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.label + '-card'}
                  initial={{ opacity: 0, scale: 0.92, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: -16 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10 w-full max-w-xs aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                >
                  <svg viewBox="0 0 320 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <defs>
                      <radialGradient id={`rg-${active}-1`} cx="50%" cy="40%" r="60%">
                        <stop offset="0%" stopColor={current.output.accent} stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#000" stopOpacity="0.9" />
                      </radialGradient>
                      <radialGradient id={`rg-${active}-2`} cx="50%" cy="50%" r="40%">
                        <stop offset="0%" stopColor={current.output.accent} stopOpacity="0.25" />
                        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                      </radialGradient>
                      <filter id={`blur-${active}`}>
                        <feGaussianBlur stdDeviation="18" />
                      </filter>
                    </defs>
                    <rect width="320" height="400" fill="#0a0a0a" />
                    <rect width="320" height="400" fill={`url(#rg-${active}-1)`} />
                    {current.output.shapes.map((s, i) => (
                      <ellipse key={i} cx={s.cx} cy={s.cy} rx={s.r} ry={s.r} fill={s.color} filter={`url(#blur-${active})`} />
                    ))}
                    <rect width="320" height="400" fill={`url(#rg-${active}-2)`} />
                    {[...Array(12)].map((_, i) => (
                      <line key={i} x1="0" y1={30 + i * 32} x2="320" y2={30 + i * 32} stroke="white" strokeOpacity="0.015" strokeWidth="1" />
                    ))}
                    <rect x="16" y="358" width="160" height="26" rx="13" fill="rgba(0,0,0,0.5)" />
                    <text x="96" y="376" textAnchor="middle" fill="white" fillOpacity="0.6" fontSize="11" fontFamily="monospace">
                      {current.output.label}
                    </text>
                    <circle cx="12" cy="12" r="3" fill={current.output.accent} fillOpacity="0.6" />
                    <circle cx="308" cy="388" r="3" fill={current.output.accent} fillOpacity="0.4" />
                  </svg>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Variant switcher pills */}
              <div className="relative z-10 mt-6 flex gap-2 flex-wrap justify-center">
                {PROMPT_VARIANTS.map((v, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={() => setActive(i)}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium border transition-all duration-200 ${
                      i === active
                        ? 'bg-primary text-foreground border-primary shadow-md shadow-primary/20'
                        : 'bg-background/40 text-foreground/50 border-primary/10 hover:border-primary/30 backdrop-blur-sm'
                    }`}
                  >
                    {v.label}
                    {i === active && <ChevronRight className="h-3 w-3" />}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}